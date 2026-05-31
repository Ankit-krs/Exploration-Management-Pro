import type { NextFunction, Request, Response } from "express";
import { prisma } from "../config/prisma.js";

const writeMethods = new Set(["POST", "PATCH", "PUT", "DELETE"]);

export const auditMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!writeMethods.has(req.method)) {
    return next();
  }

  res.on("finish", () => {
    const payload = {
      method: req.method,
      route: req.originalUrl.slice(0, 255),
      statusCode: res.statusCode,
      success: res.statusCode >= 200 && res.statusCode < 400,
      metadata: JSON.stringify({
        ip: req.ip,
        hasBody: Boolean(req.body && Object.keys(req.body).length > 0)
      }).slice(0, 5000),
      userId: req.auth?.sub ?? null
    };

    prisma.auditLog.create({ data: payload }).catch(() => {
      // Audit failures should never block business operations.
    });
  });

  next();
};
