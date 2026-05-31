import { authApi } from "./authApi";

const ACCESS_TOKEN_KEY = "dt_backend_access_token";

const getCreds = () => ({
  username: (import.meta.env.VITE_API_USERNAME as string | undefined) || "operator",
  email: (import.meta.env.VITE_API_EMAIL as string | undefined) || "operator@example.com",
  password: (import.meta.env.VITE_API_PASSWORD as string | undefined) || "Operator@12345"
});

export const getBackendToken = () => localStorage.getItem(ACCESS_TOKEN_KEY) || "";

export const setBackendToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

const isTokenFresh = (token: string) => {
  try {
    const parts = token.split(".");
    if (parts.length < 2) return false;
    const payloadRaw = parts[1];
    if (!payloadRaw) return false;
    const normalized = payloadRaw.replace(/-/g, "+").replace(/_/g, "/");
    const decoded = JSON.parse(atob(normalized)) as { exp?: number };
    if (!decoded.exp) return false;
    const now = Math.floor(Date.now() / 1000);
    return decoded.exp - now > 30;
  } catch {
    return false;
  }
};

export const ensureBackendSession = async () => {
  const existing = getBackendToken();
  if (existing && isTokenFresh(existing)) return existing;

  try {
    const refreshed = await authApi.refresh();
    setBackendToken(refreshed.accessToken);
    return refreshed.accessToken;
  } catch {
    // Fall through to explicit login/register bootstrap.
  }

  const creds = getCreds();
  try {
    const login = await authApi.login({ email: creds.email, password: creds.password });
    setBackendToken(login.accessToken);
    return login.accessToken;
  } catch {
    const register = await authApi.register({
      username: creds.username,
      email: creds.email,
      password: creds.password,
      role: "ADMIN"
    });
    setBackendToken(register.accessToken);
    return register.accessToken;
  }
};
