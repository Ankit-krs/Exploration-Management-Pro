export type UserRole = 'admin' | 'viewer';

export interface User {
  id: string;
  username: string;
  email?: string;
  role: UserRole;
  displayName?: string;
  lastLoginAt?: string;
}

export interface Site {
  id: string;
  name: string;
  createdBy: string;
  updatedBy: string;
  updatedAt: string;
}

export interface DrillingEntry {
  siteId: string;
  date: string;
  meters: number;
  boreholeNumber?: string;
  createdBy?: string;
  updatedBy?: string;
  updatedAt?: string;
}

export interface OpexEntry {
  id: string;
  siteId: string;
  categoryId: string;
  expenseHeadId: string;
  amount: number;
  date: string;
  remarks: string;
  createdBy?: string;
  updatedBy?: string;
  updatedAt?: string;
}

export interface DceEntry {
  id: string;
  site_id: string; // matches firebase `site_id`
  cost_head: string;
  per_day_cost: number;
  start_date: string;
  status: 'Active' | 'Paused' | 'Stopped';
  remarks: string;
  created_at: string;
  paused_at: string | null;
  stopped_at: string | null;
  total_paused_days: number;
  createdBy: string;
  updatedBy: string;
  updatedAt: string;
}

export interface AdvanceEntry {
  id: string;
  siteId: string;
  date: string;
  amount: number;
  remarks: string;
  createdBy?: string;
  updatedBy?: string;
  updatedAt?: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface ExpenseHead {
  id: string;
  categoryId: string;
  name: string;
}

export type ToastType = 'success' | 'info' | 'error';

export interface Toast {
  id: string;
  type: ToastType;
  text: string;
}

export interface Drafts {
  newSiteName?: string;
  drilling?: {
    date: string;
    meters: string;
    boreholeNumber?: string;
  };
  opex?: {
    date: string;
    categoryId: string;
    headId: string;
    amount: string;
    remarks: string;
  };
  dce?: {
    startDate: string;
    costHead: string;
    customCostHead: string;
    perDayCost: string;
    status: 'Active' | 'Paused' | 'Stopped';
    remarks: string;
  };
  advance?: {
    date: string;
    amount: string;
    remarks: string;
  };
}
