import { Router } from "express";
import { dceController } from "../controllers/dceController.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { requireAuth, requireRole } from "../middlewares/authMiddleware.js";
import { validateBody } from "../middlewares/validateRequest.js";
import { createDceEntrySchema, dceActionSchema, updateDceEntrySchema } from "../validators/dceValidators.js";

export const dceRouter = Router();

dceRouter.get("/dce-entries", requireAuth, asyncHandler(dceController.list));
dceRouter.post("/dce-entries", requireAuth, requireRole(["ADMIN"]), validateBody(createDceEntrySchema), asyncHandler(dceController.create));
dceRouter.patch(
  "/dce-entries/:id",
  requireAuth,
  requireRole(["ADMIN"]),
  validateBody(updateDceEntrySchema),
  asyncHandler(dceController.update)
);
dceRouter.post(
  "/dce-entries/:id/actions",
  requireAuth,
  requireRole(["ADMIN"]),
  validateBody(dceActionSchema),
  asyncHandler(dceController.action)
);
dceRouter.delete("/dce-entries/:id", requireAuth, requireRole(["ADMIN"]), asyncHandler(dceController.remove));
