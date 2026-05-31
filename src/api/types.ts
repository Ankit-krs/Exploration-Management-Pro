export interface ApiEnvelope<T> {
  data: T;
}

export interface ApiUser {
  id: string;
  username: string;
  email: string;
  role: "ADMIN" | "VIEWER";
}

export interface AuthResponse {
  accessToken: string;
  user: ApiUser;
}

export interface ApiSite {
  id: string;
  name: string;
  createdById: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiDrillingEntry {
  id: string;
  siteId: string;
  date: string;
  meters: string | number;
  boreholeNumber: string | null;
  createdById: string;
  createdAt: string;
  updatedAt: string;
}
