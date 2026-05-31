import { prisma } from "../config/prisma.js";

export const dceRepository = {
  list: () =>
    prisma.dceEntry.findMany({
      orderBy: { startDate: "desc" }
    }),

  create: (input: {
    siteId: string;
    costHead: string;
    perDayCost: number;
    startDate: Date;
    status: "ACTIVE" | "PAUSED" | "STOPPED";
    remarks?: string;
    pausedAt?: Date | null;
    stoppedAt?: Date | null;
    totalPausedDays: number;
    createdById: string;
  }) =>
    prisma.dceEntry.create({
      data: {
        siteId: input.siteId,
        costHead: input.costHead,
        perDayCost: input.perDayCost,
        startDate: input.startDate,
        status: input.status,
        remarks: input.remarks ?? "",
        pausedAt: input.pausedAt ?? null,
        stoppedAt: input.stoppedAt ?? null,
        totalPausedDays: input.totalPausedDays,
        createdById: input.createdById
      }
    }),

  update: (input: {
    id: string;
    costHead: string;
    perDayCost: number;
    startDate: Date;
    remarks?: string;
  }) =>
    prisma.dceEntry.update({
      where: { id: input.id },
      data: {
        costHead: input.costHead,
        perDayCost: input.perDayCost,
        startDate: input.startDate,
        remarks: input.remarks ?? ""
      }
    }),

  findById: (id: string) =>
    prisma.dceEntry.findUnique({
      where: { id }
    }),

  updateStatus: (input: {
    id: string;
    status: "ACTIVE" | "PAUSED" | "STOPPED";
    pausedAt?: Date | null;
    stoppedAt?: Date | null;
    totalPausedDays?: number;
  }) =>
    prisma.dceEntry.update({
      where: { id: input.id },
      data: {
        status: input.status,
        ...(input.pausedAt !== undefined ? { pausedAt: input.pausedAt } : {}),
        ...(input.stoppedAt !== undefined ? { stoppedAt: input.stoppedAt } : {}),
        ...(input.totalPausedDays !== undefined ? { totalPausedDays: input.totalPausedDays } : {})
      }
    }),

  remove: (id: string) =>
    prisma.dceEntry.delete({
      where: { id }
    })
};
