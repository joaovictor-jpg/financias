import { z } from 'zod';

export const loginSchema = z.object({
    email: z.email({ message: 'Por favor, insira um E-Mail Válido.' }),
    password: z.string().min(1, { message: 'A senha não pode estar em branco.' })
});