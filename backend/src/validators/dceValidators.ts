import { z } from "zod";

export const createDceEntrySchema = z.object({
  siteId: z.string().uuid(),
  costHead: z.string().trim().min(1).max(200),
  perDayCost: z.coerce.number().positive(),
  startDate: z.string().date(),
  status: z.enum(["ACTIVE", "PAUSED", "STOPPED"]).optional(),
  remarks: z.string().max(2000).optional()
});

export const updateDceEntrySchema = z.object({
  costHead: z.string().trim().min(1).max(200),
  perDayCost: z.coerce.number().positive(),
  startDate: z.string().date(),
  remarks: z.string().max(2000).optional()
});

export const dceActionSchema = z.object({
  action: z.enum(["pause", "resume", "stop"])
});
