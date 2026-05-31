import { prisma } from "../config/prisma.js";

export const opexRepository = {
  listCategories: () => prisma.category.findMany(),

  createCategory: (name: string) =>
    prisma.category.create({
      data: { name }
    }),

  createCategoryWithSort: (input: { name: string; sortOrder: number }) =>
    prisma.category.create({
      data: {
        name: input.name,
        sortOrder: input.sortOrder
      }
    }),

  updateCategorySortOrder: (id: string, sortOrder: number) =>
    prisma.category.update({
      where: { id },
      data: { sortOrder }
    }),

  findCategoryById: (id: string) =>
    prisma.category.findUnique({
      where: { id }
    }),

  listExpenseHeads: () => prisma.expenseHead.findMany(),

  createExpenseHead: (input: { categoryId: string; name: string }) =>
    prisma.expenseHead.create({
      data: input
    }),

  createExpenseHeadWithSort: (input: { categoryId: string; name: string; sortOrder: number }) =>
    prisma.expenseHead.create({
      data: {
        categoryId: input.categoryId,
        name: input.name,
        sortOrder: input.sortOrder
      }
    }),

  updateExpenseHeadSortOrder: (id: string, sortOrder: number) =>
    prisma.expenseHead.update({
      where: { id },
      data: { sortOrder }
    }),

  findExpenseHeadById: (id: string) =>
    prisma.expenseHead.findUnique({
      where: { id }
    }),

  listOpexEntries: () =>
    prisma.opexEntry.findMany({
      orderBy: { date: "desc" }
    }),

  createOpexEntry: (input: {
    siteId: string;
    categoryId: string;
    expenseHeadId: string;
    amount: number;
    date: Date;
    remarks?: string;
    createdById: string;
  }) =>
    prisma.opexEntry.create({
      data: {
        siteId: input.siteId,
        categoryId: input.categoryId,
        expenseHeadId: input.expenseHeadId,
        amount: input.amount,
        date: input.date,
        remarks: input.remarks ?? "",
        createdById: input.createdById
      }
    }),

  updateOpexEntry: (input: {
    id: string;
    categoryId: string;
    expenseHeadId: string;
    amount: number;
    date: Date;
    remarks?: string;
  }) =>
    prisma.opexEntry.update({
      where: { id: input.id },
      data: {
        categoryId: input.categoryId,
        expenseHeadId: input.expenseHeadId,
        amount: input.amount,
        date: input.date,
        remarks: input.remarks ?? ""
      }
    }),

  removeOpexEntry: (id: string) =>
    prisma.opexEntry.delete({
      where: { id }
    }),

  removeCategory: (id: string) =>
    prisma.category.delete({
      where: { id }
    }),

  removeExpenseHead: (id: string) =>
    prisma.expenseHead.delete({
      where: { id }
    })
};
