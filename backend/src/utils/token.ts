import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export interface JwtPayload {
  sub: string;
  role: "ADMIN" | "VIEWER";
  username: string;
  email: string;
  sessionId: string;
  type: "access" | "refresh";
}

const accessExpiresIn = env.JWT_ACCESS_EXPIRES_IN as unknown as NonNullable<jwt.SignOptions["expiresIn"]>;
const refreshExpiresIn = env.JWT_REFRESH_EXPIRES_IN as unknown as NonNullable<jwt.SignOptions["expiresIn"]>;

export const signAccessToken = (payload: Omit<JwtPayload, "type">): string =>
  jwt.sign({ ...payload, type: "access" }, env.JWT_ACCESS_SECRET, {
    expiresIn: accessExpiresIn
  });

export const signRefreshToken = (payload: Omit<JwtPayload, "type">): string =>
  jwt.sign({ ...payload, type: "refresh" }, env.JWT_REFRESH_SECRET, {
    expiresIn: refreshExpiresIn
  });

export const verifyAccessToken = (token: string): JwtPayload =>
  jwt.verify(token, env.JWT_ACCESS_SECRET) as JwtPayload;

export const verifyRefreshToken = (token: string): JwtPayload =>
  jwt.verify(token, env.JWT_REFRESH_SECRET) as JwtPayload;
