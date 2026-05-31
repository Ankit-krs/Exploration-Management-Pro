import { prisma } from "../config/prisma.js";

export const siteRepository = {
  list: () =>
    prisma.site.findMany({
      orderBy: { createdAt: "desc" }
    }),

  create: (input: { name: string; createdById: string }) =>
    prisma.site.create({
      data: input
    }),

  update: (input: { id: string; name: string }) =>
    prisma.site.update({
      where: { id: input.id },
      data: { name: input.name }
    }),

  remove: (id: string) =>
    prisma.site.delete({
      where: { id }
    })
};
