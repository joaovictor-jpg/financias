'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const loginSchema = z.object({
    email: z.string().email({ message: 'Por favor, insira um E-Mail Válido.' }),
    password: z.string().min(1, { message: 'A senha não pode estar em branco.' })
});

const signupSchema = z.object({
    name: z.string().min(1, { message: 'O nome é obrigatório.' }),
    email: z.string().email({ message: 'Por favor, insira um email válido.' }),
    password: z.string().min(8, { message: 'A senha deve ter no mínimo 8 caracteres.' }),
    confirmPassword: z.string().min(1, { message: 'A confirmação de senha é obrigatória.' }),
    role: z.enum(['USER', 'ADMIN'], {
        message: 'Selecione um tipo de perfil válido.'
    })
}).refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem.',
    path: ['confirmPassword']
});

export async function login(formData: FormData) {
    const validatedFields = loginSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Dados inválidos'
        };
    }

    const { email, password } = validatedFields.data;

    try {
        const response = await fetch(`${process.env.BACKEND_API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const errorText = await response.text();
            try {
                const errorData = JSON.parse(errorText);
                return { message: errorData.message || 'Credenciais inválidas.' };
            } catch {
                return { message: errorText || 'Credenciais inválidas.' };
            }
        }

        const token = await response.text();

        (await cookies()).set('session_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
            sameSite: 'strict'
        });
    } catch (error) {
        console.log('Error de rede ou na API;', error);
        return { message: 'Não foi possivel conectar ao servidor. Tente novamente mais tarde.' };
    }

    redirect('/');
}

export async function signup(formData: FormData) {
    const validatedFields = signupSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Dados inválidos. Por favor, corrija os campos.'
        };
    }

    const { name, email, password, role } = validatedFields.data;

    try {
        const result = await fetch(`${process.env.BACKEND_API_URL}/users/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, role })
        });

        if (!result.ok) {
            const errorText = await result.text();
            try {
                const errorData = JSON.parse(errorText);
                return { message: errorData.message || 'Ocorreu um erro no cadastro.' };
            } catch {
                return { message: errorText || 'Ocorreu um erro no cadastro.' };
            }
        }
    } catch (error) {
        console.log('Erro de rede ou na API;', error);
        return { message: 'Não foi possivel conectar ao servidor. Tente novamente mais tarde.' };
    }
    redirect('/login');
}