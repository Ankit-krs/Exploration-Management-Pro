import { authRepository } from "../repositories/authRepository.js";
import { refreshSessionRepository } from "../repositories/refreshSessionRepository.js";
import { sha256 } from "../utils/crypto.js";
import { HttpError } from "../utils/httpError.js";
import { hashPassword, verifyPassword } from "../utils/password.js";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "../utils/token.js";

type RegisterInput = {
  username: string;
  email: string;
  password: string;
  role?: "ADMIN" | "VIEWER";
};

type LoginInput = {
  email: string;
  password: string;
};

export const authService = {
  async register(input: RegisterInput) {
    const existing = await authRepository.findUserByEmail(input.email.toLowerCase());
    if (existing) {
      throw new HttpError(409, "User with this email already exists");
    }

    const passwordHash = await hashPassword(input.password);
    const user = await authRepository.createUser({
      username: input.username.trim(),
      email: input.email.toLowerCase(),
      passwordHash,
      role: input.role ?? "VIEWER"
    });

    return this.issueTokensForUser(user);
  },

  async login(input: LoginInput) {
    const user = await authRepository.findUserByEmail(input.email.toLowerCase());
    if (!user || !user.isActive) {
      throw new HttpError(401, "Invalid credentials");
    }

    const ok = await verifyPassword(user.passwordHash, input.password);
    if (!ok) {
      throw new HttpError(401, "Invalid credentials");
    }

    return this.issueTokensForUser(user);
  },

  async refreshFromToken(refreshToken: string) {
    let payload;
    try {
      payload = verifyRefreshToken(refreshToken);
    } catch {
      throw new HttpError(401, "Invalid refresh token");
    }

    if (payload.type !== "refresh") {
      throw new HttpError(401, "Invalid refresh token type");
    }

    const session = await refreshSessionRepository.findById(payload.sessionId);
    if (!session || session.userId !== payload.sub) {
      throw new HttpError(401, "Refresh session not found");
    }

    if (session.revokedAt || session.expiresAt <= new Date()) {
      throw new HttpError(401, "Refresh session expired or revoked");
    }

    if (session.tokenHash !== sha256(refreshToken)) {
      await refreshSessionRepository.revokeAllByUserId(session.userId);
      throw new HttpError(401, "Refresh token mismatch");
    }

    return this.issueTokensForUser({
      id: session.user.id,
      role: session.user.role,
      username: session.user.username,
      email: session.user.email
    }, session.id);
  },

  async issueTokensForUser(
    user: {
    id: string;
    role: "ADMIN" | "VIEWER";
    username: string;
    email: string;
  },
    rotateFromSessionId?: string
  ) {
    const nextSessionId = crypto.randomUUID();
    const basePayload = {
      sub: user.id,
      role: user.role,
      username: user.username,
      email: user.email,
      sessionId: nextSessionId
    };

    const refreshToken = signRefreshToken(basePayload);
    const refreshTokenHash = sha256(refreshToken);
    const decoded = verifyRefreshToken(refreshToken) as { exp?: number };
    const expiresAt = decoded.exp ? new Date(decoded.exp * 1000) : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    if (rotateFromSessionId) {
      await refreshSessionRepository.rotate({
        currentId: rotateFromSessionId,
        nextId: nextSessionId,
        userId: user.id,
        tokenHash: refreshTokenHash,
        expiresAt
      });
    } else {
      await refreshSessionRepository.create({
        id: nextSessionId,
        userId: user.id,
        tokenHash: refreshTokenHash,
        expiresAt
      });
    }

    return {
      accessToken: signAccessToken(basePayload),
      refreshToken,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    };
  },

  async logoutFromRefreshToken(refreshToken: string) {
    let payload;
    try {
      payload = verifyRefreshToken(refreshToken);
    } catch {
      return;
    }
    if (!payload?.sessionId) return;
    await refreshSessionRepository.revokeById(payload.sessionId).catch(() => {});
  }
};
