import { Router } from "express";
import { authController } from "../controllers/authController.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { validateBody } from "../middlewares/validateRequest.js";
import { loginSchema, registerSchema } from "../validators/authValidators.js";

export const authRouter = Router();

authRouter.post("/auth/register", validateBody(registerSchema), asyncHandler(authController.register));
authRouter.post("/auth/login", validateBody(loginSchema), asyncHandler(authController.login));
authRouter.post("/auth/refresh", asyncHandler(authController.refresh));
authRouter.post("/auth/logout", asyncHandler(authController.logout));
