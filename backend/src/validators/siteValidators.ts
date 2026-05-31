import { z } from "zod";

export const createSiteSchema = z.object({
  name: z.string().trim().min(1).max(150)
});

export const updateSiteSchema = z.object({
  id: z.string().uuid(),
  name: z.string().trim().min(1).max(150)
});
