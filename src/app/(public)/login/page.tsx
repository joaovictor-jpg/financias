import { Form } from '@/Components/form';
import { TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
    return (
        <main className='flex min-h-screen w-full flex-col items-center justify-center bg-slate-50 p-4'>
            <div className="flex flex-grow flex-col items-center justify-center gap-4">
                <div className="flex flex-col items-center gap-3 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                        <TrendingUp size={32} className="text-white" />
                    </div>
                    <h1 className='text-3xl font-bold text-slate-800'>Jota&apos;s Finance</h1>
                    <p className='text-slate-500'>Gerencie suas finanças com inteligência</p>
                </div>

                <div className='mt-8 w-full max-w-md rounded-2xl bg-white p-8 shadow-xl'>
                    <div className='mb-6 text-left'>
                        <h2 className='text-2xl font-bold text-slate-800'>Fazer Login</h2>
                        <p className='text-slate-500'>Entre na sua conta para acessar o dashboard</p>
                    </div>
                    <Form />
                    <div className='my-6 flex item-center gap-4'>
                        <hr className='w-full border-t border-slate-200' />
                        <span className='text-sm text-slate-400'>ou</span>
                        <hr className='w-full border-t border-slate-200' />
                    </div>
                    <p className='text-center text-sm text-slate-500'>
                        Não tem uma conta?{' '}
                        <Link href='#' className='font-semibold text-black hover:underline'>
                            criar conta
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
};