import type { NextFunction, Request, Response } from "express";
import { HttpError } from "../utils/httpError.js";
import { verifyAccessToken } from "../utils/token.js";

export const requireAuth = (req: Request, _res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    throw new HttpError(401, "Missing or invalid authorization header");
  }

  const token = authHeader.slice("Bearer ".length);
  const payload = verifyAccessToken(token);

  if (payload.type !== "access") {
    throw new HttpError(401, "Invalid access token type");
  }

  req.auth = payload;
  next();
};

export const requireRole =
  (roles: Array<"ADMIN" | "VIEWER">) =>
  (req: Request, _res: Response, next: NextFunction) => {
    if (!req.auth) {
      throw new HttpError(401, "Unauthorized");
    }

    if (!roles.includes(req.auth.role)) {
      throw new HttpError(403, "Forbidden");
    }

    next();
  };
