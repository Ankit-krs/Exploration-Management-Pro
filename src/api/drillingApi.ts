import { apiFetch } from "./http";
import type { ApiDrillingEntry, ApiEnvelope } from "./types";

export const drillingApi = {
  list(token: string) {
    return apiFetch<ApiEnvelope<ApiDrillingEntry[]>>("/drilling-entries", { token });
  },

  create(
    token: string,
    input: { siteId: string; date: string; meters: number; boreholeNumber?: string }
  ) {
    return apiFetch<ApiEnvelope<ApiDrillingEntry>>("/drilling-entries", {
      method: "POST",
      token,
      body: input
    });
  },

  update(
    token: string,
    id: string,
    input: { date: string; meters: number; boreholeNumber?: string }
  ) {
    return apiFetch<ApiEnvelope<ApiDrillingEntry>>(`/drilling-entries/${id}`, {
      method: "PATCH",
      token,
      body: input
    });
  },

  remove(token: string, id: string) {
    return apiFetch<void>(`/drilling-entries/${id}`, {
      method: "DELETE",
      token
    });
  }
};
