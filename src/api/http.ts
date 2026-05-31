import { API_BASE_URL } from "./config";

export class ApiError extends Error {
  status: number;
  payload: unknown;

  constructor(message: string, status: number, payload: unknown) {
    super(message);
    this.status = status;
    this.payload = payload;
  }
}

type Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export async function apiFetch<TResponse>(
  path: string,
  options?: {
    method?: Method;
    token?: string;
    body?: unknown;
    signal?: AbortSignal;
  }
): Promise<TResponse> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: options?.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options?.token ? { Authorization: `Bearer ${options.token}` } : {})
    },
    credentials: "include",
    body: options?.body ? JSON.stringify(options.body) : undefined,
    signal: options?.signal
  });

  const payload = await res.json().catch(() => null);
  if (!res.ok) {
    throw new ApiError((payload as { message?: string } | null)?.message || "API request failed", res.status, payload);
  }

  return payload as TResponse;
}
