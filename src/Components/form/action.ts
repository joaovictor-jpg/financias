'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const loginSchema = z.object({
    email: z.string().email({message: 'Por favor, insira um E-Mail Válido.'}),
    password: z.string().min(1, {message: 'A senha não pode estar em branco.'})
});

export async function authentication(formData: FormData) {
    const validatedFields = loginSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Dados inválidos'
        };
    }

    const {email, password} = validatedFields.data;

    try {
        const response = await fetch('http://localhost:8080/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
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

        cookies().set('session_token', token, {
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