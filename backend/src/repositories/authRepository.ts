import { prisma } from "../config/prisma.js";

export const authRepository = {
  findUserByEmail: (email: string) =>
    prisma.user.findUnique({
      where: { email }
    }),

  createUser: (input: { username: string; email: string; passwordHash: string; role: "ADMIN" | "VIEWER" }) =>
    prisma.user.create({
      data: input
    })
};
