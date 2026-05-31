import { Router } from "express";
import { opexController } from "../controllers/opexController.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { requireAuth, requireRole } from "../middlewares/authMiddleware.js";
import { validateBody } from "../middlewares/validateRequest.js";
import {
  createCategorySchema,
  createExpenseHeadSchema,
  createOpexEntrySchema,
  updateOpexEntrySchema
} from "../validators/opexValidators.js";

export const opexRouter = Router();

opexRouter.get("/categories", requireAuth, asyncHandler(opexController.listCategories));
opexRouter.post(
  "/categories",
  requireAuth,
  requireRole(["ADMIN"]),
  validateBody(createCategorySchema),
  asyncHandler(opexController.createCategory)
);
opexRouter.delete("/categories/:id", requireAuth, requireRole(["ADMIN"]), asyncHandler(opexController.deleteCategory));

opexRouter.get("/expense-heads", requireAuth, asyncHandler(opexController.listExpenseHeads));
opexRouter.post(
  "/expense-heads",
  requireAuth,
  requireRole(["ADMIN"]),
  validateBody(createExpenseHeadSchema),
  asyncHandler(opexController.createExpenseHead)
);
opexRouter.delete("/expense-heads/:id", requireAuth, requireRole(["ADMIN"]), asyncHandler(opexController.deleteExpenseHead));

opexRouter.get("/opex-entries", requireAuth, asyncHandler(opexController.listOpexEntries));
opexRouter.post(
  "/opex-entries",
  requireAuth,
  requireRole(["ADMIN"]),
  validateBody(createOpexEntrySchema),
  asyncHandler(opexController.createOpexEntry)
);
opexRouter.patch(
  "/opex-entries/:id",
  requireAuth,
  requireRole(["ADMIN"]),
  validateBody(updateOpexEntrySchema),
  asyncHandler(opexController.updateOpexEntry)
);
opexRouter.delete("/opex-entries/:id", requireAuth, requireRole(["ADMIN"]), asyncHandler(opexController.deleteOpexEntry));
