import { apiFetch } from "./http";
import type { ApiEnvelope, ApiSite } from "./types";

export const siteApi = {
  list(token: string) {
    return apiFetch<ApiEnvelope<ApiSite[]>>("/sites", { token });
  },

  create(token: string, input: { name: string }) {
    return apiFetch<ApiEnvelope<ApiSite>>("/sites", {
      method: "POST",
      token,
      body: input
    });
  },

  update(token: string, id: string, input: { name: string }) {
    return apiFetch<ApiEnvelope<ApiSite>>(`/sites/${id}`, {
      method: "PATCH",
      token,
      body: input
    });
  },

  remove(token: string, id: string) {
    return apiFetch<void>(`/sites/${id}`, {
      method: "DELETE",
      token
    });
  }
};
