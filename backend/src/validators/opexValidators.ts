import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string().trim().min(1).max(120)
});

export const createExpenseHeadSchema = z.object({
  categoryId: z.string().uuid(),
  name: z.string().trim().min(1).max(150)
});

export const createOpexEntrySchema = z.object({
  siteId: z.string().uuid(),
  categoryId: z.string().uuid(),
  expenseHeadId: z.string().uuid(),
  amount: z.coerce.number().positive(),
  date: z.string().date(),
  remarks: z.string().max(2000).optional()
});

export const updateOpexEntrySchema = z.object({
  categoryId: z.string().uuid(),
  expenseHeadId: z.string().uuid(),
  amount: z.coerce.number().positive(),
  date: z.string().date(),
  remarks: z.string().max(2000).optional()
});
