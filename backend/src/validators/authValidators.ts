import { z } from "zod";

const passwordRules = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(100, "Password is too long");

export const registerSchema = z.object({
  username: z.string().min(3).max(80),
  email: z.string().email().max(255),
  password: passwordRules,
  role: z.enum(["ADMIN", "VIEWER"]).optional()
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});
