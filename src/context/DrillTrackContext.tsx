import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { advanceApi, dceApi, drillingApi, ensureBackendSession, opexApi, siteApi } from '../api';
import { ApiError } from '../api/http';
import { 
  User, 
  UserRole,
  Site, 
  DrillingEntry, 
  OpexEntry, 
  DceEntry, 
  AdvanceEntry, 
  Category, 
  ExpenseHead, 
  Toast, 
  ToastType,
  Drafts
} from '../types';

interface DrillTrackContextType {
  sites: Site[];
  activeSiteId: string;
  activeSite: Site | undefined;
  drillingEntries: DrillingEntry[];
  categories: Category[];
  expenseHeads: ExpenseHead[];
  opexEntries: OpexEntry[];
  dceEntries: DceEntry[];
  advanceEntries: AdvanceEntry[];
  theme: 'light' | 'dark';
  toasts: Toast[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  toggleTheme: () => void;
  addToast: (text: string, type?: ToastType) => void;
  removeToast: (id: string) => void;
  setActiveSiteId: (id: string) => void;
  addSite: (name: string) => Promise<boolean>;
  editSite: (id: string, newName: string) => Promise<boolean>;
  deleteSite: (id: string) => Promise<void>;
  addDrillingEntry: (entry: DrillingEntry) => void;
  editDrillingEntry: (originalDate: string, entry: DrillingEntry) => void;
  deleteDrillingEntry: (date: string) => void;
  addCategory: (name: string) => Promise<Category | null>;
  editCategory: (id: string, name: string) => Promise<boolean>;
  deleteCategory: (id: string) => Promise<boolean>;
  addExpenseHead: (categoryId: string, name: string) => Promise<ExpenseHead | null>;
  editExpenseHead: (id: string, name: string, categoryId?: string) => Promise<boolean>;
  deleteExpenseHead: (id: string) => Promise<boolean>;
  addOpexEntry: (entry: OpexEntry) => void;
  editOpexEntry: (entry: OpexEntry) => void;
  deleteOpexEntry: (id: string) => void;
  addDceEntry: (entry: Partial<DceEntry>) => void;
  editDceEntry: (entry: DceEntry) => void;
  deleteDceEntry: (id: string) => void;
  toggleDceStatus: (id: string, action: 'pause' | 'resume' | 'stop') => void;
  getDceActiveDays: (entry: DceEntry, dateOverride?: string) => number;
  getDceTotal: (entry: DceEntry, dateOverride?: string) => number;
  addAdvanceEntry: (date: string, amount: number, remarks: string) => void;
  editAdvanceEntry: (entry: AdvanceEntry) => void;
  deleteAdvanceEntry: (id: string) => void;
  syncStatus: 'idle' | 'syncing' | 'saved' | 'restoring' | 'offline_local';
  drafts: Drafts;
  updateDraft: (section: keyof Drafts, field: string, value: any) => void;
  syncImmediately: () => Promise<void>;
  isOffline: boolean;
  user: User | null;
}

const DrillTrackContext = createContext<DrillTrackContextType | undefined>(undefined);

export const getTodayStr = () => {
  const n = new Date();
  const e = n.getFullYear();
  const t = String(n.getMonth() + 1).padStart(2, '0');
  const r = String(n.getDate()).padStart(2, '0');
  return `${e}-${t}-${r}`;
};

export const getDaysDiff = (startDateStr: string, endDateStr: string): number => {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  const diffTime = end.getTime() - start.getTime();
  if (diffTime < 0) return 0;
  return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
};

export const DrillTrackPropsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(() => localStorage.getItem('drilltrack_tab') || 'dashboard');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => (localStorage.getItem('theme') as 'light' | 'dark') || 'light');
  
  // Advance and Rig operations data states
  const [sites, setSites] = useState<Site[]>(() => {
    const cached = localStorage.getItem('dt_sites_global');
    return cached ? JSON.parse(cached) : [];
  });
  const [activeSiteId, setActiveSiteId] = useState<string>(() => localStorage.getItem('dt_active_site_id_global') || '');
  const [drillingEntries, setDrillingEntries] = useState<DrillingEntry[]>(() => {
    const cached = localStorage.getItem('dt_drilling_global');
    return cached ? JSON.parse(cached) : [];
  });
  const [opexEntries, setOpexEntries] = useState<OpexEntry[]>(() => {
    const cached = localStorage.getItem('dt_opex_global');
    return cached ? JSON.parse(cached) : [];
  });
  const [dceEntries, setDceEntries] = useState<DceEntry[]>(() => {
    const cached = localStorage.getItem('dt_dce_global');
    return cached ? JSON.parse(cached) : [];
  });
  const [advanceEntries, setAdvanceEntries] = useState<AdvanceEntry[]>(() => {
    const cached = localStorage.getItem('dt_advances_global');
    return cached ? JSON.parse(cached) : [];
  });
  
  // Taxonomy states
  const [categories, setCategories] = useState<Category[]>([]);
  const [expenseHeads, setExpenseHeads] = useState<ExpenseHead[]>([]);
  
  // UI Toasts and state controllers
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'saved' | 'restoring' | 'offline_local'>('idle');
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [user, setUser] = useState<User | null>({
    id: 'operator-default',
    username: 'Operator',
    email: 'operator@drillingapp.com',
    role: 'admin'
  });

  // Draft configurations (offline session sync helpers)
  const defaultDrafts: Drafts = {
    newSiteName: '',
    drilling: { date: getTodayStr(), meters: '', boreholeNumber: '' },
    opex: { date: getTodayStr(), categoryId: '', headId: '', amount: '', remarks: '' },
    dce: { startDate: getTodayStr(), costHead: 'Rig Depreciation', customCostHead: '', perDayCost: '', status: 'Active', remarks: '' },
    advance: { date: getTodayStr(), amount: '', remarks: '' }
  };
  const [drafts, setDrafts] = useState<Drafts>(() => {
    const cached = localStorage.getItem('dt_drafts_global');
    return cached ? JSON.parse(cached) : defaultDrafts;
  });

  const isSyncInbound = useRef(false);
  const initialLoadCompleted = useRef(false);

  // Dynamic toast announcer
  const addToast = (text: string, type: ToastType = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, type, text }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const updateDraft = (section: keyof Drafts, field: string, value: any) => {
    setDrafts(prev => {
      const updated = { ...prev };
      if (typeof updated[section] === 'object' && updated[section] !== null) {
        (updated[section] as any)[field] = value;
      } else {
        (updated as any)[section] = value;
      }
      return updated;
    });
  };

  const hasAccessPermission = () => {
    if (!user) {
      addToast('Please log in first', 'error');
      return false;
    }
    if (user.role !== 'admin') {
      addToast('Permission Denied: Viewer role is Read-Only', 'error');
      return false;
    }
    return true;
  };

  // Permissions helper always returns true (fully administrative write-access mode)

  // Initial backend sync
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setSyncStatus('restoring');
        const token = await ensureBackendSession();
        if (!token || cancelled) return;
        const [siteResult, drillingResult, catResult, headResult, opexResult, dceResult, advanceResult] = await Promise.all([
          siteApi.list(token),
          drillingApi.list(token),
          opexApi.listCategories(token),
          opexApi.listExpenseHeads(token),
          opexApi.listOpexEntries(token),
          dceApi.list(token),
          advanceApi.list(token)
        ]);
        if (cancelled) return;
          const mappedSites: Site[] = siteResult.data.map((s) => ({
            id: s.id,
            name: s.name,
            createdBy: 'backend',
            updatedBy: 'backend',
            updatedAt: s.updatedAt
          }));
          const mappedDrilling: DrillingEntry[] = drillingResult.data.map((d) => ({
            id: d.id,
            siteId: d.siteId,
            date: String(d.date).slice(0, 10),
            meters: typeof d.meters === 'number' ? d.meters : parseFloat(d.meters),
            boreholeNumber: d.boreholeNumber || '',
            createdBy: 'backend',
            updatedBy: 'backend',
            updatedAt: d.updatedAt
          }));
          const mappedCategories: Category[] = catResult.data.map((c) => ({
            id: c.id,
            name: c.name,
            sortOrder: c.sortOrder ?? null
          }));
          const mappedHeads: ExpenseHead[] = headResult.data.map((h) => ({
            id: h.id,
            categoryId: h.categoryId,
            name: h.name,
            sortOrder: h.sortOrder ?? null
          }));
          const mappedOpex: OpexEntry[] = opexResult.data.map((o) => ({
            id: o.id,
            siteId: o.siteId,
            categoryId: o.categoryId,
            expenseHeadId: o.expenseHeadId,
            amount: typeof o.amount === 'number' ? o.amount : parseFloat(o.amount),
            date: String(o.date).slice(0, 10),
            remarks: o.remarks || '',
            createdBy: 'backend',
            updatedBy: 'backend',
            updatedAt: o.updatedAt
          }));
          const mappedDce: DceEntry[] = dceResult.data.map((d) => ({
            id: d.id,
            site_id: d.siteId,
            cost_head: d.costHead,
            per_day_cost: typeof d.perDayCost === 'number' ? d.perDayCost : parseFloat(d.perDayCost),
            start_date: String(d.startDate).slice(0, 10),
            status: d.status === 'ACTIVE' ? 'Active' : d.status === 'PAUSED' ? 'Paused' : 'Stopped',
            remarks: d.remarks || '',
            created_at: String(d.createdAt).slice(0, 10),
            paused_at: d.pausedAt ? String(d.pausedAt).slice(0, 10) : null,
            stopped_at: d.stoppedAt ? String(d.stoppedAt).slice(0, 10) : null,
            total_paused_days: d.totalPausedDays,
            createdBy: 'backend',
            updatedBy: 'backend',
            updatedAt: d.updatedAt
          }));
          const mappedAdvances: AdvanceEntry[] = advanceResult.data.map((a) => ({
            id: a.id,
            siteId: a.siteId,
            date: String(a.date).slice(0, 10),
            amount: typeof a.amount === 'number' ? a.amount : parseFloat(a.amount),
            remarks: a.remarks || '',
            createdBy: 'backend',
            updatedBy: 'backend',
            updatedAt: a.updatedAt
          }));
          setSites(mappedSites);
          setDrillingEntries(mappedDrilling);
          setCategories(mappedCategories);
          setExpenseHeads(mappedHeads);
          setOpexEntries(mappedOpex);
          setDceEntries(mappedDce);
          setAdvanceEntries(mappedAdvances);
        setSyncStatus('saved');
        initialLoadCompleted.current = true;
      } catch (e) {
        console.error('Backend site sync failed:', e);
        setSyncStatus('offline_local');
        initialLoadCompleted.current = true;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [user]);

  // Back-save database states to local caching in offline/online shifts
  useEffect(() => {
    if (!user) return;
    localStorage.setItem('dt_sites_global', JSON.stringify(sites));
    localStorage.setItem('dt_active_site_id_global', activeSiteId);
    localStorage.setItem('dt_drilling_global', JSON.stringify(drillingEntries));
    localStorage.setItem('dt_opex_global', JSON.stringify(opexEntries));
    localStorage.setItem('dt_dce_global', JSON.stringify(dceEntries));
    localStorage.setItem('dt_advances_global', JSON.stringify(advanceEntries));
    localStorage.setItem('dt_drafts_global', JSON.stringify(drafts));
  }, [sites, activeSiteId, drillingEntries, opexEntries, dceEntries, advanceEntries, drafts, user]);

  // Immediate backend re-sync
  const syncImmediately = async () => {
    if (!user) return;
    setSyncStatus('syncing');
    try {
      const token = await ensureBackendSession();
      await Promise.all([
        siteApi.list(token),
        drillingApi.list(token),
        opexApi.listCategories(token),
        opexApi.listExpenseHeads(token),
        opexApi.listOpexEntries(token),
        dceApi.list(token),
        advanceApi.list(token)
      ]);
      setSyncStatus('saved');
    } catch {
      setSyncStatus('offline_local');
    }
  };

  // Monitoring active network connection
  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      addToast('Operational connection restored. Syncing active session...', 'success');
      syncImmediately();
    };

    const handleOffline = () => {
      setIsOffline(true);
      addToast('Rig terminal switched to Offline local buffer mode.', 'error');
      setSyncStatus('offline_local');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [sites, drillingEntries, opexEntries, dceEntries, advanceEntries, drafts]);

  useEffect(() => {
    localStorage.setItem('drilltrack_tab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (sites.length > 0) {
      if (!activeSiteId || !sites.some(s => s.id === activeSiteId)) {
        setActiveSiteId(sites[0].id);
      }
    } else if (activeSiteId !== '') {
      setActiveSiteId('');
    }
  }, [sites, activeSiteId]);

  const activeSite = sites.find(s => s.id === activeSiteId) || sites[0];

  // Advance Management Site Operations
  const addSite = async (name: string): Promise<boolean> => {
    if (!hasAccessPermission()) return false;
    const cleanName = name.trim();
    if (!cleanName) {
      addToast('Site name cannot be empty', 'error');
      return false;
    }
    if (sites.some(s => s.name.toLowerCase() === cleanName.toLowerCase())) {
      addToast('A site with this name already exists', 'error');
      return false;
    }
    try {
      const token = await ensureBackendSession();
      const created = await siteApi.create(token, { name: cleanName });
      const newSite: Site = {
        id: created.data.id,
        name: created.data.name,
        createdBy: user?.username || 'operator',
        updatedBy: user?.username || 'operator',
        updatedAt: created.data.updatedAt
      };
      setSites(prev => [...prev, newSite]);
      setActiveSiteId(newSite.id);
      addToast(`Drilling Site "${cleanName}" created successfully`, 'success');
      return true;
    } catch (e) {
      if (e instanceof ApiError && (e.status === 401 || e.status === 403)) {
        try {
          localStorage.removeItem('dt_backend_access_token');
          const retryToken = await ensureBackendSession();
          const retryCreated = await siteApi.create(retryToken, { name: cleanName });
          const retrySite: Site = {
            id: retryCreated.data.id,
            name: retryCreated.data.name,
            createdBy: user?.username || 'operator',
            updatedBy: user?.username || 'operator',
            updatedAt: retryCreated.data.updatedAt
          };
          setSites(prev => [...prev, retrySite]);
          setActiveSiteId(retrySite.id);
          addToast(`Drilling Site "${cleanName}" created successfully`, 'success');
          return true;
        } catch (retryError) {
          if (retryError instanceof ApiError) {
            addToast(`Backend site creation failed: ${retryError.message}`, 'error');
            return false;
          }
          addToast('Backend site creation failed. Check API session.', 'error');
          return false;
        }
      }
      if (e instanceof ApiError) {
        addToast(`Backend site creation failed: ${e.message}`, 'error');
        return false;
      }
      addToast('Backend site creation failed. Check API session.', 'error');
      return false;
    }
  };

  const editSite = async (id: string, newName: string): Promise<boolean> => {
    if (!hasAccessPermission()) return false;
    const cleanName = newName.trim();
    if (!cleanName) {
      addToast('Site name cannot be empty', 'error');
      return false;
    }
    if (sites.some(s => s.id !== id && s.name.toLowerCase() === cleanName.toLowerCase())) {
      addToast('Another site with this name already exists', 'error');
      return false;
    }
    try {
      const token = await ensureBackendSession();
      const updated = await siteApi.update(token, id, { name: cleanName });
      setSites(prev => prev.map(s => s.id === id ? {
        ...s,
        name: updated.data.name,
        updatedBy: user?.username || 'operator',
        updatedAt: updated.data.updatedAt
      } : s));
      addToast(`Site renamed to "${cleanName}"`, 'success');
      return true;
    } catch {
      addToast('Backend site update failed. Check API session.', 'error');
      return false;
    }
  };

  const deleteSite = async (id: string): Promise<void> => {
    if (!hasAccessPermission()) return;
    const siteToDelete = sites.find(s => s.id === id);
    if (!siteToDelete) return;
    
    const filteredSites = sites.filter(s => s.id !== id);
    if (filteredSites.length === 0) {
      addToast('You must have at least one active drilling site', 'error');
      return;
    }
    
    try {
      const token = await ensureBackendSession();
      await siteApi.remove(token, id);
    } catch {
      addToast('Backend site deletion failed. Check API session.', 'error');
      return;
    }

    setSites(filteredSites);
    setDrillingEntries(prev => prev.filter(e => e.siteId !== id));
    setOpexEntries(prev => prev.filter(e => e.siteId !== id));
    setDceEntries(prev => prev.filter(e => e.site_id !== id));
    setAdvanceEntries(prev => prev.filter(e => e.siteId !== id));
    
    if (activeSiteId === id) {
      setActiveSiteId(filteredSites[0].id);
    }
    addToast(`Site "${siteToDelete.name}" deleted along with its operational records`, 'info');
  };

  // Advance Management Daily Drilling Operations
  const addDrillingEntry = (entry: DrillingEntry) => {
    if (!hasAccessPermission()) return;
    if (entry.meters < 0) {
      addToast('Drilling meters must be a positive number', 'error');
      return;
    }
    (async () => {
      try {
        const token = await ensureBackendSession();
        const created = await drillingApi.create(token, {
          siteId: entry.siteId,
          date: entry.date,
          meters: entry.meters,
          boreholeNumber: entry.boreholeNumber
        });
        const record: DrillingEntry = {
          id: created.data.id,
          siteId: created.data.siteId,
          date: String(created.data.date).slice(0, 10),
          meters: typeof created.data.meters === 'number' ? created.data.meters : parseFloat(created.data.meters),
          boreholeNumber: created.data.boreholeNumber || '',
          createdBy: user?.username || 'operator',
          updatedBy: user?.username || 'operator',
          updatedAt: created.data.updatedAt
        };

        setDrillingEntries(prev => {
          const idx = prev.findIndex(item => item.siteId === record.siteId && item.date === record.date);
          if (idx !== -1) {
            const copy = [...prev];
            copy[idx] = record;
            return copy;
          }
          return [...prev, record];
        });
        addToast(`Saved drilling on ${record.date.split('-').reverse().join('/')}: ${record.meters}m`, 'success');
      } catch {
        addToast('Backend drilling entry failed. Check API session.', 'error');
      }
    })();
  };

  const editDrillingEntry = (originalDate: string, entry: DrillingEntry) => {
    if (!hasAccessPermission()) return;
    if (entry.meters < 0) {
      addToast('Drilling meters must be a positive number', 'error');
      return;
    }
    (async () => {
      try {
        const existing = drillingEntries.find(item => item.siteId === entry.siteId && item.date === originalDate);
        if (!existing?.id) {
          addToast('Cannot update drilling: missing backend id', 'error');
          return;
        }
        const token = await ensureBackendSession();
        const updated = await drillingApi.update(token, existing.id, {
          date: entry.date,
          meters: entry.meters,
          boreholeNumber: entry.boreholeNumber
        });
        const record: DrillingEntry = {
          id: updated.data.id,
          siteId: updated.data.siteId,
          date: String(updated.data.date).slice(0, 10),
          meters: typeof updated.data.meters === 'number' ? updated.data.meters : parseFloat(updated.data.meters),
          boreholeNumber: updated.data.boreholeNumber || '',
          createdBy: existing.createdBy || user?.username || 'operator',
          updatedBy: user?.username || 'operator',
          updatedAt: updated.data.updatedAt
        };
        setDrillingEntries(prev => {
          const filtered = prev.filter(item => !(item.siteId === record.siteId && item.date === originalDate));
          const doubleCheckIndex = filtered.findIndex(item => item.siteId === record.siteId && item.date === record.date);
          if (doubleCheckIndex !== -1) {
            filtered[doubleCheckIndex] = record;
          } else {
            filtered.push(record);
          }
          return filtered;
        });
        addToast('Drilling log updated', 'success');
      } catch {
        addToast('Backend drilling update failed. Check API session.', 'error');
      }
    })();
  };

  const deleteDrillingEntry = (date: string) => {
    if (!hasAccessPermission()) return;
    (async () => {
      try {
        const existing = drillingEntries.find(item => item.siteId === activeSiteId && item.date === date);
        if (!existing?.id) {
          addToast('Cannot delete drilling: missing backend id', 'error');
          return;
        }
        const token = await ensureBackendSession();
        await drillingApi.remove(token, existing.id);
        setDrillingEntries(prev => prev.filter(item => !(item.siteId === activeSiteId && item.date === date)));
        addToast('Drilling log deleted', 'info');
      } catch {
        addToast('Backend drilling deletion failed. Check API session.', 'error');
      }
    })();
  };

  // Advance Management Taxonomy (Categories & Heads)
  const addCategory = async (name: string): Promise<Category | null> => {
    if (!hasAccessPermission()) return null;
    const cleanName = name.trim();
    if (!cleanName) {
      addToast('Category name cannot be empty', 'error');
      return null;
    }
    if (categories.some(c => c.name.toLowerCase() === cleanName.toLowerCase())) {
      addToast('This expense category already exists', 'error');
      return null;
    }
    try {
      const token = await ensureBackendSession();
      const created = await opexApi.createCategory(token, { name: cleanName });
      const newCat: Category = { id: created.data.id, name: created.data.name, sortOrder: created.data.sortOrder ?? null };
      setCategories(prev => [...prev, newCat]);
      addToast(`Category "${cleanName}" added`, 'success');
      return newCat;
    } catch {
      addToast('Backend category creation failed. Check API session.', 'error');
      return null;
    }
  };

  const editCategory = async (id: string, name: string): Promise<boolean> => {
    if (!hasAccessPermission()) return false;
    const cleanName = name.trim();
    if (!cleanName) {
      addToast('Category name cannot be empty', 'error');
      return false;
    }
    if (categories.some(c => c.id !== id && c.name.toLowerCase() === cleanName.toLowerCase())) {
      addToast('Another category with this name already exists', 'error');
      return false;
    }
    addToast('Category rename is not yet supported by backend API.', 'error');
    return false;
  };

  const deleteCategory = async (id: string): Promise<boolean> => {
    if (!hasAccessPermission()) return false;
    try {
      const token = await ensureBackendSession();
      await opexApi.deleteCategory(token, id);
      setCategories(prev => prev.filter(c => c.id !== id));
      addToast('Category deleted', 'info');
      return true;
    } catch {
      addToast('Backend category deletion failed. Check API session.', 'error');
      return false;
    }
  };

  const addExpenseHead = async (categoryId: string, name: string): Promise<ExpenseHead | null> => {
    if (!hasAccessPermission()) return null;
    const cleanName = name.trim();
    if (!cleanName) {
      addToast('Expense head name cannot be empty', 'error');
      return null;
    }
    if (expenseHeads.some(eh => eh.categoryId === categoryId && eh.name.toLowerCase() === cleanName.toLowerCase())) {
      addToast('This head item already exists in this category', 'error');
      return null;
    }
    try {
      const token = await ensureBackendSession();
      const created = await opexApi.createExpenseHead(token, { categoryId, name: cleanName });
      const newHead: ExpenseHead = {
        id: created.data.id,
        categoryId: created.data.categoryId,
        name: created.data.name,
        sortOrder: created.data.sortOrder ?? null
      };
      setExpenseHeads(prev => [...prev, newHead]);
      addToast(`Expense Head "${cleanName}" added`, 'success');
      return newHead;
    } catch {
      addToast('Backend expense head creation failed. Check API session.', 'error');
      return null;
    }
  };

  const editExpenseHead = async (id: string, name: string, categoryId?: string): Promise<boolean> => {
    if (!hasAccessPermission()) return false;
    const cleanName = name.trim();
    if (!cleanName) {
      addToast('Expense head name cannot be empty', 'error');
      return false;
    }
    const currentHead = expenseHeads.find(eh => eh.id === id);
    const targetCatId = categoryId || currentHead?.categoryId;
    if (!targetCatId) return false;

    if (expenseHeads.some(eh => eh.id !== id && eh.categoryId === targetCatId && eh.name.toLowerCase() === cleanName.toLowerCase())) {
      addToast('Another expense head with this name already exists in this category', 'error');
      return false;
    }
    addToast('Expense head rename is not yet supported by backend API.', 'error');
    return false;
  };

  const deleteExpenseHead = async (id: string): Promise<boolean> => {
    if (!hasAccessPermission()) return false;
    try {
      const token = await ensureBackendSession();
      await opexApi.deleteExpenseHead(token, id);
      setExpenseHeads(prev => prev.filter(eh => eh.id !== id));
      addToast('Expense Head deleted', 'info');
      return true;
    } catch {
      addToast('Backend expense head deletion failed. Check API session.', 'error');
      return false;
    }
  };

  // Advance Management OPEX Entries
  const addOpexEntry = (entry: OpexEntry) => {
    if (!hasAccessPermission()) return;
    if (entry.amount <= 0) {
      addToast('OPEX amount must be positive', 'error');
      return;
    }
    (async () => {
      try {
        const token = await ensureBackendSession();
        const created = await opexApi.createOpexEntry(token, {
          siteId: entry.siteId,
          categoryId: entry.categoryId,
          expenseHeadId: entry.expenseHeadId,
          amount: entry.amount,
          date: entry.date,
          remarks: entry.remarks
        });
        const opex: OpexEntry = {
          id: created.data.id,
          siteId: created.data.siteId,
          categoryId: created.data.categoryId,
          expenseHeadId: created.data.expenseHeadId,
          amount: typeof created.data.amount === 'number' ? created.data.amount : parseFloat(created.data.amount),
          date: String(created.data.date).slice(0, 10),
          remarks: created.data.remarks || '',
          createdBy: user?.username || 'operator',
          updatedBy: user?.username || 'operator',
          updatedAt: created.data.updatedAt
        };
        setOpexEntries(prev => [...prev, opex]);
        addToast(`OPEX Entry saved! ${entry.amount.toLocaleString('en-IN')}`, 'success');
      } catch {
        addToast('Backend OPEX create failed. Check API session.', 'error');
      }
    })();
  };

  const editOpexEntry = (entry: OpexEntry) => {
    if (!hasAccessPermission()) return;
    if (entry.amount <= 0) {
      addToast('OPEX amount must be positive', 'error');
      return;
    }
    (async () => {
      try {
        const token = await ensureBackendSession();
        const updated = await opexApi.updateOpexEntry(token, entry.id, {
          categoryId: entry.categoryId,
          expenseHeadId: entry.expenseHeadId,
          amount: entry.amount,
          date: entry.date,
          remarks: entry.remarks
        });
        const opex: OpexEntry = {
          id: updated.data.id,
          siteId: updated.data.siteId,
          categoryId: updated.data.categoryId,
          expenseHeadId: updated.data.expenseHeadId,
          amount: typeof updated.data.amount === 'number' ? updated.data.amount : parseFloat(updated.data.amount),
          date: String(updated.data.date).slice(0, 10),
          remarks: updated.data.remarks || '',
          createdBy: entry.createdBy || user?.username || 'operator',
          updatedBy: user?.username || 'operator',
          updatedAt: updated.data.updatedAt
        };
        setOpexEntries(prev => prev.map(o => o.id === entry.id ? opex : o));
        addToast('OPEX Entry updated successfully', 'success');
      } catch {
        addToast('Backend OPEX update failed. Check API session.', 'error');
      }
    })();
  };

  const deleteOpexEntry = (id: string) => {
    if (!hasAccessPermission()) return;
    (async () => {
      try {
        const token = await ensureBackendSession();
        await opexApi.deleteOpexEntry(token, id);
        setOpexEntries(prev => prev.filter(o => o.id !== id));
        addToast('OPEX Entry deleted', 'info');
      } catch {
        addToast('Backend OPEX deletion failed. Check API session.', 'error');
      }
    })();
  };

  // Standing Cost Intelligence (DCE) Calculations
  const getDceActiveDays = (entry: DceEntry, dateOverride: string = getTodayStr()) => {
    const end = entry.status === 'Stopped' && entry.stopped_at ? entry.stopped_at : dateOverride;
    const totalPausedDays = entry.total_paused_days;
    const diff = getDaysDiff(entry.start_date, end);
    return Math.max(0, diff - totalPausedDays);
  };

  const getDceTotal = (entry: DceEntry, dateOverride: string = getTodayStr()) => {
    return entry.per_day_cost * getDceActiveDays(entry, dateOverride);
  };

  const addDceEntry = (entry: Partial<DceEntry>) => {
    if (!hasAccessPermission()) return;
    const perDayCost = entry.per_day_cost || 0;
    if (perDayCost <= 0) {
      addToast('Per day cost must be positive', 'error');
      return;
    }
    (async () => {
      try {
        const token = await ensureBackendSession();
        const created = await dceApi.create(token, {
          siteId: activeSiteId,
          costHead: entry.cost_head || '',
          perDayCost,
          startDate: entry.start_date || getTodayStr(),
          status: entry.status === 'Paused' ? 'PAUSED' : entry.status === 'Stopped' ? 'STOPPED' : 'ACTIVE',
          remarks: entry.remarks || ''
        });
        const dce: DceEntry = {
          id: created.data.id,
          site_id: created.data.siteId,
          cost_head: created.data.costHead,
          per_day_cost: typeof created.data.perDayCost === 'number' ? created.data.perDayCost : parseFloat(created.data.perDayCost),
          start_date: String(created.data.startDate).slice(0, 10),
          status: created.data.status === 'ACTIVE' ? 'Active' : created.data.status === 'PAUSED' ? 'Paused' : 'Stopped',
          remarks: created.data.remarks || '',
          created_at: String(created.data.createdAt).slice(0, 10),
          paused_at: created.data.pausedAt ? String(created.data.pausedAt).slice(0, 10) : null,
          stopped_at: created.data.stoppedAt ? String(created.data.stoppedAt).slice(0, 10) : null,
          total_paused_days: created.data.totalPausedDays,
          createdBy: user?.username || 'operator',
          updatedBy: user?.username || 'operator',
          updatedAt: created.data.updatedAt
        };
        setDceEntries(prev => [...prev, dce]);
        addToast(`Daily Standing Cost "${entry.cost_head}" started at ${perDayCost.toLocaleString('en-IN')}/day`, 'success');
      } catch {
        addToast('Backend DCA create failed. Check API session.', 'error');
      }
    })();
  };

  const editDceEntry = (entry: DceEntry) => {
    if (!hasAccessPermission()) return;
    if (entry.per_day_cost <= 0) {
      addToast('Per day cost must be positive', 'error');
      return;
    }
    (async () => {
      try {
        const token = await ensureBackendSession();
        const updated = await dceApi.update(token, entry.id, {
          costHead: entry.cost_head,
          perDayCost: entry.per_day_cost,
          startDate: entry.start_date,
          remarks: entry.remarks
        });
        const dce: DceEntry = {
          id: updated.data.id,
          site_id: updated.data.siteId,
          cost_head: updated.data.costHead,
          per_day_cost: typeof updated.data.perDayCost === 'number' ? updated.data.perDayCost : parseFloat(updated.data.perDayCost),
          start_date: String(updated.data.startDate).slice(0, 10),
          status: updated.data.status === 'ACTIVE' ? 'Active' : updated.data.status === 'PAUSED' ? 'Paused' : 'Stopped',
          remarks: updated.data.remarks || '',
          created_at: entry.created_at,
          paused_at: updated.data.pausedAt ? String(updated.data.pausedAt).slice(0, 10) : null,
          stopped_at: updated.data.stoppedAt ? String(updated.data.stoppedAt).slice(0, 10) : null,
          total_paused_days: updated.data.totalPausedDays,
          createdBy: entry.createdBy,
          updatedBy: user?.username || 'operator',
          updatedAt: updated.data.updatedAt
        };
        setDceEntries(prev => prev.map(d => d.id === entry.id ? dce : d));
        addToast(`Standing Cost "${dce.cost_head}" updated`, 'success');
      } catch {
        addToast('Backend DCA update failed. Check API session.', 'error');
      }
    })();
  };

  const deleteDceEntry = (id: string) => {
    if (!hasAccessPermission()) return;
    (async () => {
      try {
        const token = await ensureBackendSession();
        await dceApi.remove(token, id);
        setDceEntries(prev => prev.filter(d => d.id !== id));
        addToast('Standing Cost deleted', 'info');
      } catch {
        addToast('Backend DCA deletion failed. Check API session.', 'error');
      }
    })();
  };

  const toggleDceStatus = (id: string, action: 'pause' | 'resume' | 'stop') => {
    if (!hasAccessPermission()) return;
    (async () => {
      try {
        const token = await ensureBackendSession();
        const updated = await dceApi.action(token, id, action);
        const dce: DceEntry = {
          id: updated.data.id,
          site_id: updated.data.siteId,
          cost_head: updated.data.costHead,
          per_day_cost: typeof updated.data.perDayCost === 'number' ? updated.data.perDayCost : parseFloat(updated.data.perDayCost),
          start_date: String(updated.data.startDate).slice(0, 10),
          status: updated.data.status === 'ACTIVE' ? 'Active' : updated.data.status === 'PAUSED' ? 'Paused' : 'Stopped',
          remarks: updated.data.remarks || '',
          created_at: String(updated.data.createdAt).slice(0, 10),
          paused_at: updated.data.pausedAt ? String(updated.data.pausedAt).slice(0, 10) : null,
          stopped_at: updated.data.stoppedAt ? String(updated.data.stoppedAt).slice(0, 10) : null,
          total_paused_days: updated.data.totalPausedDays,
          createdBy: 'backend',
          updatedBy: user?.username || 'operator',
          updatedAt: updated.data.updatedAt
        };
        setDceEntries(prev => prev.map(item => item.id === id ? dce : item));
        addToast(`Standing cost state updated to ${action.toUpperCase()}D`, 'success');
      } catch {
        addToast('Backend DCA status update failed. Check API session.', 'error');
      }
    })();
  };

  // Site Advance Payments Management
  const addAdvanceEntry = (date: string, amount: number, remarks: string) => {
    if (!hasAccessPermission()) return;
    if (amount <= 0) {
      addToast('Advance payment must be a positive amount', 'error');
      return;
    }
    (async () => {
      try {
        const token = await ensureBackendSession();
        const created = await advanceApi.create(token, {
          siteId: activeSiteId,
          date,
          amount,
          remarks: remarks.trim()
        });
        const advance: AdvanceEntry = {
          id: created.data.id,
          siteId: created.data.siteId,
          date: String(created.data.date).slice(0, 10),
          amount: typeof created.data.amount === 'number' ? created.data.amount : parseFloat(created.data.amount),
          remarks: created.data.remarks || '',
          createdBy: user?.username || 'operator',
          updatedBy: user?.username || 'operator',
          updatedAt: created.data.updatedAt
        };
        setAdvanceEntries(prev => [...prev, advance]);
        addToast(`Advance cash payment recorded: ${amount.toLocaleString('en-IN')}`, 'success');
      } catch {
        addToast('Backend advance create failed. Check API session.', 'error');
      }
    })();
  };

  const editAdvanceEntry = (entry: AdvanceEntry) => {
    if (!hasAccessPermission()) return;
    if (entry.amount <= 0) {
      addToast('Advance payment must be a positive amount', 'error');
      return;
    }
    (async () => {
      try {
        const token = await ensureBackendSession();
        const updated = await advanceApi.update(token, entry.id, {
          date: entry.date,
          amount: entry.amount,
          remarks: entry.remarks
        });
        const advance: AdvanceEntry = {
          id: updated.data.id,
          siteId: updated.data.siteId,
          date: String(updated.data.date).slice(0, 10),
          amount: typeof updated.data.amount === 'number' ? updated.data.amount : parseFloat(updated.data.amount),
          remarks: updated.data.remarks || '',
          createdBy: entry.createdBy || user?.username || 'operator',
          updatedBy: user?.username || 'operator',
          updatedAt: updated.data.updatedAt
        };
        setAdvanceEntries(prev => prev.map(a => a.id === entry.id ? advance : a));
        addToast('Advance payment updated', 'success');
      } catch {
        addToast('Backend advance update failed. Check API session.', 'error');
      }
    })();
  };

  const deleteAdvanceEntry = (id: string) => {
    if (!hasAccessPermission()) return;
    (async () => {
      try {
        const token = await ensureBackendSession();
        await advanceApi.remove(token, id);
        setAdvanceEntries(prev => prev.filter(a => a.id !== id));
        addToast('Advance payment record deleted', 'info');
      } catch {
        addToast('Backend advance deletion failed. Check API session.', 'error');
      }
    })();
  };

  // Auth Functions removed

  return (
    <DrillTrackContext.Provider value={{
      sites,
      activeSiteId,
      activeSite,
      drillingEntries,
      categories,
      expenseHeads,
      opexEntries,
      dceEntries,
      advanceEntries,
      theme,
      toasts,
      activeTab,
      setActiveTab,
      toggleTheme,
      addToast,
      removeToast,
      setActiveSiteId,
      addSite,
      editSite,
      deleteSite,
      addDrillingEntry,
      editDrillingEntry,
      deleteDrillingEntry,
      addCategory,
      editCategory,
      deleteCategory,
      addExpenseHead,
      editExpenseHead,
      deleteExpenseHead,
      addOpexEntry,
      editOpexEntry,
      deleteOpexEntry,
      addDceEntry,
      editDceEntry,
      deleteDceEntry,
      toggleDceStatus,
      getDceActiveDays,
      getDceTotal,
      addAdvanceEntry,
      editAdvanceEntry,
      deleteAdvanceEntry,
      syncStatus,
      drafts,
      updateDraft,
      syncImmediately,
      isOffline,
      user
    }}>
      {children}
    </DrillTrackContext.Provider>
  );
};

export const useDrillTrack = () => {
  const context = useContext(DrillTrackContext);
  if (context === undefined) {
    throw new Error('useDrillTrack must be used within a DrillTrackPropsProvider');
  }
  return context;
};


