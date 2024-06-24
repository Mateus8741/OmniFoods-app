import { z } from 'zod';

export const userScheema = z.object({
  token: z.string(),
  email: z.string(),
});

export type UserScheema = z.infer<typeof userScheema>;
