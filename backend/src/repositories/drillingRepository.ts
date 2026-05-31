import { prisma } from "../config/prisma.js";

export const drillingRepository = {
  list: () =>
    prisma.drillingEntry.findMany({
      orderBy: { date: "desc" }
    }),

  create: (input: {
    siteId: string;
    date: Date;
    meters: number;
    boreholeNumber?: string;
    createdById: string;
  }) =>
    prisma.drillingEntry.create({
      data: {
        siteId: input.siteId,
        date: input.date,
        meters: input.meters,
        boreholeNumber: input.boreholeNumber ?? null,
        createdById: input.createdById
      }
    }),

  update: (input: {
    id: string;
    date: Date;
    meters: number;
    boreholeNumber?: string;
  }) =>
    prisma.drillingEntry.update({
      where: { id: input.id },
      data: {
        date: input.date,
        meters: input.meters,
        boreholeNumber: input.boreholeNumber ?? null
      }
    }),

  remove: (id: string) =>
    prisma.drillingEntry.delete({
      where: { id }
    })
};
