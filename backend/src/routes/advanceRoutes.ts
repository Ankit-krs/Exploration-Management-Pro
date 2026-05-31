import { Router } from "express";
import { advanceController } from "../controllers/advanceController.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { requireAuth, requireRole } from "../middlewares/authMiddleware.js";
import { validateBody } from "../middlewares/validateRequest.js";
import { createAdvanceEntrySchema, updateAdvanceEntrySchema } from "../validators/advanceValidators.js";

export const advanceRouter = Router();

advanceRouter.get("/advance-entries", requireAuth, asyncHandler(advanceController.list));
advanceRouter.post(
  "/advance-entries",
  requireAuth,
  requireRole(["ADMIN"]),
  validateBody(createAdvanceEntrySchema),
  asyncHandler(advanceController.create)
);
advanceRouter.patch(
  "/advance-entries/:id",
  requireAuth,
  requireRole(["ADMIN"]),
  validateBody(updateAdvanceEntrySchema),
  asyncHandler(advanceController.update)
);
advanceRouter.delete("/advance-entries/:id", requireAuth, requireRole(["ADMIN"]), asyncHandler(advanceController.remove));
