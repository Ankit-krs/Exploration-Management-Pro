import { z } from "zod";

export const createAdvanceEntrySchema = z.object({
  siteId: z.string().uuid(),
  date: z.string().date(),
  amount: z.coerce.number().positive(),
  remarks: z.string().max(2000).optional()
});

export const updateAdvanceEntrySchema = z.object({
  date: z.string().date(),
  amount: z.coerce.number().positive(),
  remarks: z.string().max(2000).optional()
});
