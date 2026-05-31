import type { Request, Response } from "express";
import { env } from "../config/env.js";
import { authService } from "../services/authService.js";

const refreshCookieName = "refresh_token";
const refreshCookieOptions = {
  httpOnly: true as const,
  sameSite: "lax" as const,
  secure: env.NODE_ENV === "production",
  path: "/"
};

export const authController = {
  async register(req: Request, res: Response) {
    const result = await authService.register(req.body);
    res
      .cookie(refreshCookieName, result.refreshToken, refreshCookieOptions)
      .status(201)
      .json({
        accessToken: result.accessToken,
        user: result.user
      });
  },

  async login(req: Request, res: Response) {
    const result = await authService.login(req.body);
    res
      .cookie(refreshCookieName, result.refreshToken, refreshCookieOptions)
      .status(200)
      .json({
        accessToken: result.accessToken,
        user: result.user
      });
  },

  async refresh(req: Request, res: Response) {
    const refreshToken = req.cookies?.[refreshCookieName] as string | undefined;
    if (!refreshToken) {
      return res.status(401).json({ error: "Unauthorized", message: "Missing refresh token cookie" });
    }

    const result = await authService.refreshFromToken(refreshToken);
    return res
      .cookie(refreshCookieName, result.refreshToken, refreshCookieOptions)
      .status(200)
      .json({
        accessToken: result.accessToken,
        user: result.user
      });
  },

  async logout(req: Request, res: Response) {
    const refreshToken = req.cookies?.[refreshCookieName] as string | undefined;
    if (refreshToken) {
      await authService.logoutFromRefreshToken(refreshToken);
    }
    return res
      .clearCookie(refreshCookieName, refreshCookieOptions)
      .status(200)
      .json({ ok: true });
  }
};
