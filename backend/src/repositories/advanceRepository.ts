import { prisma } from "../config/prisma.js";

export const advanceRepository = {
  list: () =>
    prisma.advanceEntry.findMany({
      orderBy: { date: "desc" }
    }),

  create: (input: {
    siteId: string;
    date: Date;
    amount: number;
    remarks?: string;
    createdById: string;
  }) =>
    prisma.advanceEntry.create({
      data: {
        siteId: input.siteId,
        date: input.date,
        amount: input.amount,
        remarks: input.remarks ?? "",
        createdById: input.createdById
      }
    }),

  update: (input: {
    id: string;
    date: Date;
    amount: number;
    remarks?: string;
  }) =>
    prisma.advanceEntry.update({
      where: { id: input.id },
      data: {
        date: input.date,
        amount: input.amount,
        remarks: input.remarks ?? ""
      }
    }),

  remove: (id: string) =>
    prisma.advanceEntry.delete({
      where: { id }
    })
};
