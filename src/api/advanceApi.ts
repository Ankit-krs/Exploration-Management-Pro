import { apiFetch } from "./http";
import type { ApiEnvelope } from "./types";

export interface ApiAdvanceEntry {
  id: string;
  siteId: string;
  date: string;
  amount: string | number;
  remarks: string;
  createdById: string;
  createdAt: string;
  updatedAt: string;
}

export const advanceApi = {
  list(token: string) {
    return apiFetch<ApiEnvelope<ApiAdvanceEntry[]>>("/advance-entries", { token });
  },
  create(
    token: string,
    input: { siteId: string; date: string; amount: number; remarks?: string }
  ) {
    return apiFetch<ApiEnvelope<ApiAdvanceEntry>>("/advance-entries", {
      method: "POST",
      token,
      body: input
    });
  },
  update(
    token: string,
    id: string,
    input: { date: string; amount: number; remarks?: string }
  ) {
    return apiFetch<ApiEnvelope<ApiAdvanceEntry>>(`/advance-entries/${id}`, {
      method: "PATCH",
      token,
      body: input
    });
  },
  remove(token: string, id: string) {
    return apiFetch<void>(`/advance-entries/${id}`, {
      method: "DELETE",
      token
    });
  }
};
