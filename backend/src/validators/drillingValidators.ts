import { z } from "zod";

export const createDrillingEntrySchema = z.object({
  siteId: z.string().uuid(),
  date: z.string().date(),
  meters: z.coerce.number().positive(),
  boreholeNumber: z.string().trim().max(80).optional()
});

export const updateDrillingEntrySchema = z.object({
  date: z.string().date(),
  meters: z.coerce.number().positive(),
  boreholeNumber: z.string().trim().max(80).optional()
});
