import type { Request, Response } from "express";

export const healthController = {
  get(_req: Request, res: Response) {
    res.status(200).json({
      status: "ok",
      service: "exploration-management-api",
      timestamp: new Date().toISOString()
    });
  }
};
