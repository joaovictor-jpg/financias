'use client';

import { useState } from 'react';
import { login, signup } from './action';

type formProps = {
    type: string;
    children: React.ReactNode;
}

type resultProps = {
    data?: undefined;
    messagem: string | null;
    errors: { [key: string]: string[] | undefined }
}

export const Form = ({ type, children }: formProps) => {

    const [message, setMessage] = useState<string | null>(null);

    const handleLogin = async (formData: FormData) => {
        if (type === 'login') {
            const result = await login(formData);

            if (result && result.message) {
                setMessage(result.message);
            }
        } else if (type === 'signup') {
            const result = await signup(formData);
            if (result && result.message) {
                setMessage(result.message);
            }
        }
    };

    return (
        <form action={handleLogin} className='flex flex-col gap-5'>
            {children}
            {message && <p className='mt-2 text-sm text-red-500'>{message}</p>}
        </form >
    );
};