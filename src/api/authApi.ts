import { apiFetch } from "./http";
import type { AuthResponse } from "./types";

export const authApi = {
  register(input: { username: string; email: string; password: string; role?: "ADMIN" | "VIEWER" }) {
    return apiFetch<AuthResponse>("/auth/register", {
      method: "POST",
      body: input
    });
  },

  login(input: { email: string; password: string }) {
    return apiFetch<AuthResponse>("/auth/login", {
      method: "POST",
      body: input
    });
  },

  refresh() {
    return apiFetch<AuthResponse>("/auth/refresh", {
      method: "POST"
    });
  }
};
