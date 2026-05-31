import { Router } from "express";
import { drillingController } from "../controllers/drillingController.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { requireAuth, requireRole } from "../middlewares/authMiddleware.js";
import { validateBody } from "../middlewares/validateRequest.js";
import { createDrillingEntrySchema, updateDrillingEntrySchema } from "../validators/drillingValidators.js";

export const drillingRouter = Router();

drillingRouter.get("/drilling-entries", requireAuth, asyncHandler(drillingController.list));
drillingRouter.post(
  "/drilling-entries",
  requireAuth,
  requireRole(["ADMIN"]),
  validateBody(createDrillingEntrySchema),
  asyncHandler(drillingController.create)
);
drillingRouter.patch(
  "/drilling-entries/:id",
  requireAuth,
  requireRole(["ADMIN"]),
  validateBody(updateDrillingEntrySchema),
  asyncHandler(drillingController.update)
);
drillingRouter.delete("/drilling-entries/:id", requireAuth, requireRole(["ADMIN"]), asyncHandler(drillingController.remove));
