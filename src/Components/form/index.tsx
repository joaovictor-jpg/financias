'use client';

import { useState } from 'react';
import { login, signup } from './action';

type FormProps = {
    type: string;
    children: React.ReactNode;
}

type Error = {
    fieldName: string,
    messages: string[],
    messageGeral: string
}

export const Form = ({ type, children }: FormProps) => {

    const [states, setStates] = useState<FormError>({ message: null, errors: {} });
    const [errors, setErrors] = useState<Error[]>([]);

    const handleLogin = async (formData: FormData) => {

        let result: FormError | undefined;

        if (type === 'login') {
            result = await login(formData);
        } else if (type === 'signup') {
            result = await signup(formData);
        }

        if (result) {
            setStates(result);
            if (states.errors) {
                const errorArray = Object.entries(states.errors).map(([fieldName, messages]) => ({
                    fieldName,
                    messages,
                    messageGeral: result.message ?? ''
                }));

                setErrors(errorArray);
            }
        }
    };

    return (
        <form action={handleLogin} className='flex flex-col gap-5'>
            {children}
            {errors.map((erro) => erro.fieldName ? (
                <p className='mt-2 text-sm text-red-500' key={erro.fieldName}>{erro.messages}</p>
            ) : (
                <p className='mt-2 text-sm text-red-500' key={erro.messageGeral}>{erro.messageGeral}</p>
            ))}
        </form >
    );
};