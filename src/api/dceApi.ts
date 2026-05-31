import { apiFetch } from "./http";
import type { ApiEnvelope } from "./types";

export interface ApiDceEntry {
  id: string;
  siteId: string;
  costHead: string;
  perDayCost: string | number;
  startDate: string;
  status: "ACTIVE" | "PAUSED" | "STOPPED";
  remarks: string;
  pausedAt: string | null;
  stoppedAt: string | null;
  totalPausedDays: number;
  createdAt: string;
  updatedAt: string;
}

export const dceApi = {
  list(token: string) {
    return apiFetch<ApiEnvelope<ApiDceEntry[]>>("/dce-entries", { token });
  },
  create(
    token: string,
    input: {
      siteId: string;
      costHead: string;
      perDayCost: number;
      startDate: string;
      status?: "ACTIVE" | "PAUSED" | "STOPPED";
      remarks?: string;
    }
  ) {
    return apiFetch<ApiEnvelope<ApiDceEntry>>("/dce-entries", {
      method: "POST",
      token,
      body: input
    });
  },
  update(
    token: string,
    id: string,
    input: { costHead: string; perDayCost: number; startDate: string; remarks?: string }
  ) {
    return apiFetch<ApiEnvelope<ApiDceEntry>>(`/dce-entries/${id}`, {
      method: "PATCH",
      token,
      body: input
    });
  },
  action(token: string, id: string, action: "pause" | "resume" | "stop") {
    return apiFetch<ApiEnvelope<ApiDceEntry>>(`/dce-entries/${id}/actions`, {
      method: "POST",
      token,
      body: { action }
    });
  },
  remove(token: string, id: string) {
    return apiFetch<void>(`/dce-entries/${id}`, {
      method: "DELETE",
      token
    });
  }
};
