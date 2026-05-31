import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { HttpError } from "../utils/httpError.js";

export const notFoundHandler = (_req: Request, _res: Response, next: NextFunction) => {
  next(new HttpError(404, "Route not found"));
};

export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: "ValidationError",
      message: "Request validation failed",
      issues: err.issues
    });
  }

  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      error: "HttpError",
      message: err.message
    });
  }

  return res.status(500).json({
    error: "InternalServerError",
    message: "Unexpected server error"
  });
};
