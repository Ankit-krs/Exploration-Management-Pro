import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env.js";
import { auditMiddleware } from "./middlewares/auditMiddleware.js";
import { errorHandler, notFoundHandler } from "./middlewares/errorMiddleware.js";
import { registerRoutes } from "./routes/index.js";

export const createApp = () => {
  const app = express();

  app.use(helmet());
  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      credentials: true
    })
  );
  app.use(morgan(env.NODE_ENV === "production" ? "combined" : "dev"));
  app.use(express.json({ limit: "1mb" }));
  app.use(cookieParser());
  app.use(auditMiddleware);

  registerRoutes(app);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};
