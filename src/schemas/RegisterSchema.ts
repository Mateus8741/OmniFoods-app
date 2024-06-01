import { z } from 'zod';

export const registerScheema = z.object({
  name: z.string().min(4, 'Nome precisa ser preenchido'),
  email: z.string().email('Endereço de e-mail inválido'),
  phone: z.string().min(11, 'Telefone precisa ser preenchido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export type RegisterScheema = z.infer<typeof registerScheema>;
