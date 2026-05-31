import type { Application } from "express";
import { Router } from "express";
import { env } from "../config/env.js";
import { authRouter } from "./authRoutes.js";
import { advanceRouter } from "./advanceRoutes.js";
import { dceRouter } from "./dceRoutes.js";
import { drillingRouter } from "./drillingRoutes.js";
import { healthRouter } from "./healthRoutes.js";
import { opexRouter } from "./opexRoutes.js";
import { siteRouter } from "./siteRoutes.js";

export const registerRoutes = (app: Application) => {
  const api = Router();

  api.use(healthRouter);
  api.use(authRouter);
  api.use(advanceRouter);
  api.use(siteRouter);
  api.use(drillingRouter);
  api.use(dceRouter);
  api.use(opexRouter);

  app.use(env.API_PREFIX, api);
};
