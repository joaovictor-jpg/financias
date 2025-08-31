'use server';

import { post } from '@/api/api';
import { loginSchema } from '@/api/schemas/login';
import { signupSchema } from '@/api/schemas/signu';
import { validatedFormData } from '@/api/validations/validatedFormData';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
    const result = await validatedFormData(formData, loginSchema);

    if (result.errors) {
        console.log(result.errors);
        return result;
    };

    const { email, password } = result.data;


    try {
        const response = await post('/users/login', { email, password });

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
    const result = await validatedFormData(formData, signupSchema);

    if (result.errors) {
        console.log(result.errors);
        return result;
    };

    const { name, email, password, role } = result.data;

    try {
        const response = await post('/users/signup', { name, email, password, role });
        if (!response.ok) {
            const errorText = await response.text();
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