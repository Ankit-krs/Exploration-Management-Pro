import { apiFetch } from "./http";
import type { ApiEnvelope } from "./types";

export interface ApiCategory {
  id: string;
  name: string;
  sortOrder?: number | null;
}

export interface ApiExpenseHead {
  id: string;
  categoryId: string;
  name: string;
  sortOrder?: number | null;
}

export interface ApiOpexEntry {
  id: string;
  siteId: string;
  categoryId: string;
  expenseHeadId: string;
  amount: string | number;
  date: string;
  remarks: string;
  createdById: string;
  createdAt: string;
  updatedAt: string;
}

export const opexApi = {
  listCategories(token: string) {
    return apiFetch<ApiEnvelope<ApiCategory[]>>("/categories", { token });
  },
  createCategory(token: string, input: { name: string }) {
    return apiFetch<ApiEnvelope<ApiCategory>>("/categories", { method: "POST", token, body: input });
  },
  deleteCategory(token: string, id: string) {
    return apiFetch<void>(`/categories/${id}`, { method: "DELETE", token });
  },

  listExpenseHeads(token: string) {
    return apiFetch<ApiEnvelope<ApiExpenseHead[]>>("/expense-heads", { token });
  },
  createExpenseHead(token: string, input: { categoryId: string; name: string }) {
    return apiFetch<ApiEnvelope<ApiExpenseHead>>("/expense-heads", { method: "POST", token, body: input });
  },
  deleteExpenseHead(token: string, id: string) {
    return apiFetch<void>(`/expense-heads/${id}`, { method: "DELETE", token });
  },

  listOpexEntries(token: string) {
    return apiFetch<ApiEnvelope<ApiOpexEntry[]>>("/opex-entries", { token });
  },
  createOpexEntry(
    token: string,
    input: { siteId: string; categoryId: string; expenseHeadId: string; amount: number; date: string; remarks?: string }
  ) {
    return apiFetch<ApiEnvelope<ApiOpexEntry>>("/opex-entries", { method: "POST", token, body: input });
  },
  updateOpexEntry(
    token: string,
    id: string,
    input: { categoryId: string; expenseHeadId: string; amount: number; date: string; remarks?: string }
  ) {
    return apiFetch<ApiEnvelope<ApiOpexEntry>>(`/opex-entries/${id}`, { method: "PATCH", token, body: input });
  },
  deleteOpexEntry(token: string, id: string) {
    return apiFetch<void>(`/opex-entries/${id}`, { method: "DELETE", token });
  }
};
