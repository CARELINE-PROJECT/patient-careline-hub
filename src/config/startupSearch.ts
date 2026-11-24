import { z } from "zod";

export const startupSearchSchema = z.object({
  domaine: z.string().max(80).optional(),
  continent: z.string().max(80).optional(),
  pays: z.string().max(2).optional(),
  q: z.string().max(120).optional(),
});