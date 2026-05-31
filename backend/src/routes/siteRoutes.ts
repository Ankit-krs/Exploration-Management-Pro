import { Router } from "express";
import { siteController } from "../controllers/siteController.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { requireAuth, requireRole } from "../middlewares/authMiddleware.js";
import { validateBody } from "../middlewares/validateRequest.js";
import { createSiteSchema } from "../validators/siteValidators.js";

export const siteRouter = Router();

siteRouter.get("/sites", requireAuth, asyncHandler(siteController.list));
siteRouter.post("/sites", requireAuth, requireRole(["ADMIN"]), validateBody(createSiteSchema), asyncHandler(siteController.create));
siteRouter.patch(
  "/sites/:id",
  requireAuth,
  requireRole(["ADMIN"]),
  validateBody(createSiteSchema),
  asyncHandler(siteController.update)
);
siteRouter.delete("/sites/:id", requireAuth, requireRole(["ADMIN"]), asyncHandler(siteController.remove));
