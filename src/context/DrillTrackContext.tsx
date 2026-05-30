import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { 
  onSnapshot, 
  doc, 
  setDoc, 
  getDoc,
  collection, 
  getDocs, 
  addDoc, 
  deleteDoc, 
  updateDoc 
} from 'firebase/firestore';
import { db, auth } from '../lib/firebase';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth?.currentUser?.uid || null,
      email: auth?.currentUser?.email || null,
      emailVerified: auth?.currentUser?.emailVerified || null,
      isAnonymous: auth?.currentUser?.isAnonymous || null,
      tenantId: auth?.currentUser?.tenantId || null,
      providerInfo: auth?.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}
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
  
  // Imprest and Rig operations data states
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
  
  // Taxonomy states (budget groups loaded from firestore)
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

  // Sync category taxonomy
  useEffect(() => {
    if (!user) return;
    const fetchTaxonomy = async () => {
      let catsSnap, headsSnap;
      try {
        catsSnap = await getDocs(collection(db, 'categories'));
      } catch (e) {
        handleFirestoreError(e, OperationType.GET, 'categories');
        return;
      }

      try {
        headsSnap = await getDocs(collection(db, 'expense_heads'));
      } catch (e) {
        handleFirestoreError(e, OperationType.GET, 'expense_heads');
        return;
      }
      
      try {
        const catList: Category[] = [];
        catsSnap.forEach(c => {
          catList.push({ id: c.id, name: c.data().name || '' });
        });
        
        const headList: ExpenseHead[] = [];
        headsSnap.forEach(h => {
          const dat = h.data();
          headList.push({
            id: h.id,
            categoryId: dat.categoryId || dat.category_id || '',
            name: dat.name || ''
          });
        });
        
        if (catList.length === 0) {
          const fallbackCats: Category[] = [
            { id: 'cat-fuel', name: 'Fuel & Lubricants' },
            { id: 'cat-spares', name: 'Spares & Tools' },
            { id: 'cat-labour', name: 'Site Labour & Wages' },
            { id: 'cat-mess', name: 'Mess & Rationing' },
            { id: 'cat-logistic', name: 'Logistic Hire & Transports' },
            { id: 'cat-misc', name: 'Miscellaneous & Emergency' }
          ];
          const fallbackHeads: ExpenseHead[] = [
            { id: 'head-hsd', categoryId: 'cat-fuel', name: 'High Speed Diesel (HSD)' },
            { id: 'head-mobil', categoryId: 'cat-fuel', name: 'Engine Mobil / Oil' },
            { id: 'head-hydraulic', categoryId: 'cat-fuel', name: 'Hydraulic Oil' },
            { id: 'head-grease', categoryId: 'cat-fuel', name: 'Grease' },
            { id: 'head-bits', categoryId: 'cat-spares', name: 'Drilling Bits' },
            { id: 'head-hammer', categoryId: 'cat-spares', name: 'Hammer & Button Bits' },
            { id: 'head-rods', categoryId: 'cat-spares', name: 'Drill Rods / Casing' },
            { id: 'head-wages', categoryId: 'cat-labour', name: 'Driller Wages' },
            { id: 'head-salary', categoryId: 'cat-labour', name: 'Assistant Salaries' },
            { id: 'head-rent', categoryId: 'cat-logistic', name: 'Water Tanker Rental' },
            { id: 'head-tractor', categoryId: 'cat-logistic', name: 'Hired Tractor / Vehicle' },
            { id: 'head-ration', categoryId: 'cat-mess', name: 'Groceries / Ration' },
            { id: 'head-water', categoryId: 'cat-mess', name: 'Drinking Water Supply' },
            { id: 'head-repair', categoryId: 'cat-misc', name: 'Emergency Field Repairs' },
            { id: 'head-medical', categoryId: 'cat-misc', name: 'First Aid & Medicals' }
          ];

          setCategories(fallbackCats);
          setExpenseHeads(fallbackHeads);

          // Attempt to seed Firestore collections asynchronously in the background so that it is persisted
          if (navigator.onLine) {
            (async () => {
              try {
                for (const fc of fallbackCats) {
                  const docRef = await addDoc(collection(db, 'categories'), { name: fc.name });
                  const matchingHeads = fallbackHeads.filter(h => h.categoryId === fc.id);
                  for (const mh of matchingHeads) {
                    await addDoc(collection(db, 'expense_heads'), {
                      categoryId: docRef.id,
                      category_id: docRef.id,
                      name: mh.name
                    });
                  }
                }
              } catch (se) {
                console.warn('Silent database seeding skipped/failed:', se);
              }
            })();
          }
        } else {
          setCategories(catList);
          setExpenseHeads(headList);
        }
      } catch (e) {
        console.error('Failed to load taxonomy:', e);
      }
    };
    fetchTaxonomy();
  }, [user]);

  // Sync database with Firestore Global Document ("shared_rig_logs")
  useEffect(() => {
    if (!user) {
      setSites([]);
      setDrillingEntries([]);
      setOpexEntries([]);
      setDceEntries([]);
      setAdvanceEntries([]);
      setSyncStatus('idle');
      initialLoadCompleted.current = false;
      return;
    }

    setSyncStatus('restoring');
    const unsub = onSnapshot(
      doc(db, 'global_data', 'shared_rig_logs'),
      (snap) => {
        try {
          if (snap.exists()) {
            const data = snap.data();
            isSyncInbound.current = true;
            
            if (JSON.stringify(data.sites) !== JSON.stringify(sites)) {
              setSites(data.sites || []);
            }
            if (JSON.stringify(data.drillingEntries) !== JSON.stringify(drillingEntries)) {
              setDrillingEntries(data.drillingEntries || []);
            }
            if (JSON.stringify(data.opexEntries) !== JSON.stringify(opexEntries)) {
              setOpexEntries(data.opexEntries || []);
            }
            if (JSON.stringify(data.dceEntries) !== JSON.stringify(dceEntries)) {
              setDceEntries(data.dceEntries || []);
            }
            if (JSON.stringify(data.advanceEntries) !== JSON.stringify(advanceEntries)) {
              setAdvanceEntries(data.advanceEntries || []);
            }
            if (data.drafts) {
              setDrafts(data.drafts);
            }
            
            setSyncStatus('saved');
          } else {
            isSyncInbound.current = true;
            setSites([]);
            setDrillingEntries([]);
            setOpexEntries([]);
            setDceEntries([]);
            setAdvanceEntries([]);
            setSyncStatus('idle');
          }
        } catch (err) {
          console.error('Failed to parse logs:', err);
        } finally {
          setTimeout(() => {
            isSyncInbound.current = false;
            initialLoadCompleted.current = true;
          }, 150);
        }
      },
      (err) => {
        handleFirestoreError(err, OperationType.GET, 'global_data/shared_rig_logs');
      }
    );

    return () => unsub();
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

  // Immediate global push
  const syncImmediately = async () => {
    if (!user) return;
    if (user.role !== 'admin') return;
    
    setSyncStatus('syncing');
    try {
      const payload = {
        userName: user.username,
        sites,
        drillingEntries,
        opexEntries,
        dceEntries,
        advanceEntries,
        drafts
      };
      await setDoc(doc(db, 'global_data', 'shared_rig_logs'), payload);
      setSyncStatus('saved');
    } catch (err: any) {
      handleFirestoreError(err, OperationType.WRITE, 'global_data/shared_rig_logs');
    }
  };

  // Debounced backup triggers
  useEffect(() => {
    if (!user || isSyncInbound.current || !initialLoadCompleted.current) return;
    if (user.role !== 'admin') return;

    const delay = setTimeout(() => {
      syncImmediately();
    }, 1500);

    return () => clearTimeout(delay);
  }, [sites, drillingEntries, opexEntries, dceEntries, advanceEntries, drafts, user]);

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

  // Imprest Management Site Operations
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
    const newId = `site-${Date.now()}`;
    const newSite: Site = {
      id: newId,
      name: cleanName,
      createdBy: user?.username || 'operator',
      updatedBy: user?.username || 'operator',
      updatedAt: new Date().toISOString()
    };
    setSites(prev => [...prev, newSite]);
    setActiveSiteId(newId);
    addToast(`Drilling Site "${cleanName}" created successfully`, 'success');
    return true;
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
    setSites(prev => prev.map(s => s.id === id ? {
      ...s,
      name: cleanName,
      updatedBy: user?.username || 'operator',
      updatedAt: new Date().toISOString()
    } : s));
    addToast(`Site renamed to "${cleanName}"`, 'success');
    return true;
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

  // Imprest Management Daily Drilling Operations
  const addDrillingEntry = (entry: DrillingEntry) => {
    if (!hasAccessPermission()) return;
    if (entry.meters < 0) {
      addToast('Drilling meters must be a positive number', 'error');
      return;
    }
    const record: DrillingEntry = {
      ...entry,
      createdBy: entry.createdBy || user?.username || 'operator',
      updatedBy: user?.username || 'operator',
      updatedAt: new Date().toISOString()
    };
    
    setDrillingEntries(prev => {
      const idx = prev.findIndex(item => item.siteId === record.siteId && item.date === record.date);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = record;
        addToast(`Updated drilling on ${record.date.split('-').reverse().join('/')}: ${record.meters}m`, 'success');
        return copy;
      } else {
        addToast(`Saved drilling on ${record.date.split('-').reverse().join('/')}: ${record.meters}m`, 'success');
        return [...prev, record];
      }
    });
  };

  const editDrillingEntry = (originalDate: string, entry: DrillingEntry) => {
    if (!hasAccessPermission()) return;
    if (entry.meters < 0) {
      addToast('Drilling meters must be a positive number', 'error');
      return;
    }
    const record: DrillingEntry = {
      ...entry,
      updatedBy: user?.username || 'operator',
      updatedAt: new Date().toISOString()
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
  };

  const deleteDrillingEntry = (date: string) => {
    if (!hasAccessPermission()) return;
    setDrillingEntries(prev => prev.filter(item => !(item.siteId === activeSiteId && item.date === date)));
    addToast('Drilling log deleted', 'info');
  };

  // Imprest Management Taxonomy (Categories & Heads)
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
      const docRef = await addDoc(collection(db, 'categories'), { name: cleanName });
      const newCat: Category = { id: docRef.id, name: cleanName };
      setCategories(prev => [...prev, newCat]);
      addToast(`Category "${cleanName}" added`, 'success');
      return newCat;
    } catch (err: any) {
      handleFirestoreError(err, OperationType.WRITE, 'categories');
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
    try {
      await updateDoc(doc(db, 'categories', id), { name: cleanName });
      setCategories(prev => prev.map(c => c.id === id ? { id, name: cleanName } : c));
      addToast(`Category renamed to "${cleanName}"`, 'success');
      return true;
    } catch (err: any) {
      handleFirestoreError(err, OperationType.WRITE, `categories/${id}`);
      return false;
    }
  };

  const deleteCategory = async (id: string): Promise<boolean> => {
    if (!hasAccessPermission()) return false;
    try {
      await deleteDoc(doc(db, 'categories', id));
      setCategories(prev => prev.filter(c => c.id !== id));
      addToast('Category deleted', 'info');
      return true;
    } catch (err: any) {
      handleFirestoreError(err, OperationType.DELETE, `categories/${id}`);
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
      const docRef = await addDoc(collection(db, 'expense_heads'), {
        categoryId,
        category_id: categoryId,
        name: cleanName
      });
      const newHead: ExpenseHead = { id: docRef.id, categoryId, name: cleanName };
      setExpenseHeads(prev => [...prev, newHead]);
      addToast(`Expense Head "${cleanName}" added`, 'success');
      return newHead;
    } catch (err: any) {
      handleFirestoreError(err, OperationType.WRITE, 'expense_heads');
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
    try {
      await updateDoc(doc(db, 'expense_heads', id), {
        name: cleanName,
        categoryId: targetCatId,
        category_id: targetCatId
      });
      const updated: ExpenseHead = { id, categoryId: targetCatId, name: cleanName };
      setExpenseHeads(prev => prev.map(eh => eh.id === id ? updated : eh));
      addToast(`Expense head renamed to "${cleanName}"`, 'success');
      return true;
    } catch (err: any) {
      handleFirestoreError(err, OperationType.WRITE, `expense_heads/${id}`);
      return false;
    }
  };

  const deleteExpenseHead = async (id: string): Promise<boolean> => {
    if (!hasAccessPermission()) return false;
    try {
      await deleteDoc(doc(db, 'expense_heads', id));
      setExpenseHeads(prev => prev.filter(eh => eh.id !== id));
      addToast('Expense Head deleted', 'info');
      return true;
    } catch (err: any) {
      handleFirestoreError(err, OperationType.DELETE, `expense_heads/${id}`);
      return false;
    }
  };

  // Imprest Management OPEX Entries
  const addOpexEntry = (entry: OpexEntry) => {
    if (!hasAccessPermission()) return;
    if (entry.amount <= 0) {
      addToast('OPEX amount must be positive', 'error');
      return;
    }
    const opex: OpexEntry = {
      ...entry,
      id: `op-${Date.now()}`,
      createdBy: user?.username || 'operator',
      updatedBy: user?.username || 'operator',
      updatedAt: new Date().toISOString()
    };
    setOpexEntries(prev => [...prev, opex]);
    addToast(`OPEX Entry saved! ₹${entry.amount.toLocaleString('en-IN')}`, 'success');
  };

  const editOpexEntry = (entry: OpexEntry) => {
    if (!hasAccessPermission()) return;
    if (entry.amount <= 0) {
      addToast('OPEX amount must be positive', 'error');
      return;
    }
    const opex: OpexEntry = {
      ...entry,
      updatedBy: user?.username || 'operator',
      updatedAt: new Date().toISOString()
    };
    setOpexEntries(prev => prev.map(o => o.id === entry.id ? opex : o));
    addToast('OPEX Entry updated successfully', 'success');
  };

  const deleteOpexEntry = (id: string) => {
    if (!hasAccessPermission()) return;
    setOpexEntries(prev => prev.filter(o => o.id !== id));
    addToast('OPEX Entry deleted', 'info');
  };

  // Standing Cost Intelligence (DCE) Calculations
  const getDceActiveDays = (entry: DceEntry, dateOverride: string = getTodayStr()) => {
    const end = entry.status === 'Stopped' && entry.stopped_at ? entry.stopped_at : dateOverride;
    const totalPausedDays = entry.total_paused_days;
    // Difference between start date and end/pause date minus paused duration
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
    const today = getTodayStr();
    const dce: DceEntry = {
      id: `dce-${Date.now()}`,
      site_id: activeSiteId,
      cost_head: entry.cost_head || '',
      per_day_cost: perDayCost,
      start_date: entry.start_date || today,
      status: entry.status || 'Active',
      remarks: entry.remarks || '',
      created_at: today,
      paused_at: entry.status === 'Paused' ? today : null,
      stopped_at: entry.status === 'Stopped' ? today : null,
      total_paused_days: 0,
      createdBy: user?.username || 'operator',
      updatedBy: user?.username || 'operator',
      updatedAt: new Date().toISOString()
    };
    setDceEntries(prev => [...prev, dce]);
    addToast(`Daily Standing Cost "${entry.cost_head}" started at ₹${perDayCost.toLocaleString('en-IN')}/day`, 'success');
  };

  const editDceEntry = (entry: DceEntry) => {
    if (!hasAccessPermission()) return;
    if (entry.per_day_cost <= 0) {
      addToast('Per day cost must be positive', 'error');
      return;
    }
    const dce: DceEntry = {
      ...entry,
      updatedBy: user?.username || 'operator',
      updatedAt: new Date().toISOString()
    };
    setDceEntries(prev => prev.map(d => d.id === entry.id ? dce : d));
    addToast(`Standing Cost "${dce.cost_head}" updated`, 'success');
  };

  const deleteDceEntry = (id: string) => {
    if (!hasAccessPermission()) return;
    setDceEntries(prev => prev.filter(d => d.id !== id));
    addToast('Standing Cost deleted', 'info');
  };

  const toggleDceStatus = (id: string, action: 'pause' | 'resume' | 'stop') => {
    if (!hasAccessPermission()) return;
    const today = getTodayStr();
    setDceEntries(prev => prev.map(item => {
      if (item.id !== id) return item;

      if (action === 'pause') {
        if (item.status !== 'Active') return item;
        return {
          ...item,
          status: 'Paused',
          paused_at: today,
          stopped_at: null,
          updatedBy: user?.username || 'operator',
          updatedAt: new Date().toISOString()
        };
      }
      
      if (action === 'resume') {
        if (item.status !== 'Paused') return item;
        let pausedDuration = 0;
        if (item.paused_at) {
          pausedDuration = getDaysDiff(item.paused_at, today);
        }
        return {
          ...item,
          status: 'Active',
          total_paused_days: item.total_paused_days + pausedDuration,
          paused_at: null,
          stopped_at: null,
          updatedBy: user?.username || 'operator',
          updatedAt: new Date().toISOString()
        };
      }
      
      if (action === 'stop') {
        if (item.status === 'Stopped') return item;
        let finalPausedDays = item.total_paused_days;
        if (item.status === 'Paused' && item.paused_at) {
          finalPausedDays += getDaysDiff(item.paused_at, today);
        }
        return {
          ...item,
          status: 'Stopped',
          stopped_at: today,
          paused_at: null,
          total_paused_days: finalPausedDays,
          updatedBy: user?.username || 'operator',
          updatedAt: new Date().toISOString()
        };
      }

      return item;
    }));
    addToast(`Standing cost state updated to ${action.toUpperCase()}D`, 'success');
  };

  // Site Advance Payments Management
  const addAdvanceEntry = (date: string, amount: number, remarks: string) => {
    if (!hasAccessPermission()) return;
    if (amount <= 0) {
      addToast('Advance payment must be a positive amount', 'error');
      return;
    }
    const advance: AdvanceEntry = {
      id: `adv-${Date.now()}`,
      siteId: activeSiteId,
      date,
      amount,
      remarks: remarks.trim(),
      createdBy: user?.username || 'operator',
      updatedBy: user?.username || 'operator',
      updatedAt: new Date().toISOString()
    };
    setAdvanceEntries(prev => [...prev, advance]);
    addToast(`Advance cash payment recorded: ₹${amount.toLocaleString('en-IN')}`, 'success');
  };

  const editAdvanceEntry = (entry: AdvanceEntry) => {
    if (!hasAccessPermission()) return;
    if (entry.amount <= 0) {
      addToast('Advance payment must be a positive amount', 'error');
      return;
    }
    const advance: AdvanceEntry = {
      ...entry,
      updatedBy: user?.username || 'operator',
      updatedAt: new Date().toISOString()
    };
    setAdvanceEntries(prev => prev.map(a => a.id === entry.id ? advance : a));
    addToast('Advance payment updated', 'success');
  };

  const deleteAdvanceEntry = (id: string) => {
    if (!hasAccessPermission()) return;
    setAdvanceEntries(prev => prev.filter(a => a.id !== id));
    addToast('Advance payment record deleted', 'info');
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
