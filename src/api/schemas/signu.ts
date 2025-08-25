import { z } from 'zod';

export const signupSchema = z.object({
    name: z.string().min(1, { message: 'O nome é obrigatório.' }),
    email: z.email({ message: 'Por favor, insira um email válido.' }),
    password: z.string().min(8, { message: 'A senha deve ter no mínimo 8 caracteres.' }),
    confirmPassword: z.string().min(1, { message: 'A confirmação de senha é obrigatória.' }),
    role: z.enum(['USER', 'ADMIN'], {
        message: 'Selecione um tipo de perfil válido.'
    })
}).refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem.',
    path: ['confirmPassword']
});