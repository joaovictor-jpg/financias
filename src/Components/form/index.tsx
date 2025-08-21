import { Lock, Mail } from 'lucide-react';
import { Campo } from './campo';
import Link from 'next/link';

export const Form = () => {
    return (
        <form className='flex flex-col gap-5'>
            <Campo label='email' type='email' placeholder="seu@email.com" Icon={<Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />}>
                Email
            </Campo>
            <Campo label='password' type='password' placeholder="••••••••" Icon={<Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400' size={20} />}>
                Senha
            </Campo>
            <Link href="#" className='text-sm font-medium text-black'>Esqueceu a senha</Link>
            <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105"
            >
                Entrar
            </button>
        </form >
    );
};