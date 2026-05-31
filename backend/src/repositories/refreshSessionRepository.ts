import { prisma } from "../config/prisma.js";

export const refreshSessionRepository = {
  create(input: { id: string; userId: string; tokenHash: string; expiresAt: Date }) {
    return prisma.refreshSession.create({
      data: input
    });
  },

  findById(id: string) {
    return prisma.refreshSession.findUnique({
      where: { id },
      include: { user: true }
    });
  },

  rotate(input: { currentId: string; nextId: string; userId: string; tokenHash: string; expiresAt: Date }) {
    return prisma.$transaction(async (tx: any) => {
      await tx.refreshSession.update({
        where: { id: input.currentId },
        data: {
          revokedAt: new Date(),
          replacedById: input.nextId
        }
      });

      return tx.refreshSession.create({
        data: {
          id: input.nextId,
          userId: input.userId,
          tokenHash: input.tokenHash,
          expiresAt: input.expiresAt
        }
      });
    });
  },

  revokeById: (id: string) =>
    prisma.refreshSession.update({
      where: { id },
      data: { revokedAt: new Date() }
    }),

  revokeAllByUserId: (userId: string) =>
    prisma.refreshSession.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() }
    })
};
