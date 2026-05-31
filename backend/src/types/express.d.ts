import type { JwtPayload } from "../utils/token.js";

declare global {
  namespace Express {
    interface Request {
      auth?: JwtPayload;
    }
  }
}

export {};
