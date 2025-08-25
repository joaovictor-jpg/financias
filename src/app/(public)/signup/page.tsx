import { Form } from '@/Components/form';
import { Campo } from '@/Components/form/campo';
import { Select } from '@/Components/form/select';
import { Mail, TrendingUp, Lock, User } from 'lucide-react';
import Link from 'next/link';

export default function signup() {
    return (
        <main className='flex min-h-screen w-full flex-col items-center justify-center bg-slate-50 p-4'>
            <div className="flex flex-grow flex-col items-center justify-center gap-4">
                <div className="flex flex-col items-center gap-3 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                        <TrendingUp size={32} className="text-white" />
                    </div>
                    <h1 className='text-3xl font-bold text-slate-800'>Jota&apos;s Finance</h1>
                    <p className='text-slate-500'>Comece sua jornada financeira hoje</p>
                </div>

                <div className='mt-8 w-full max-w-md rounded-2xl bg-white p-8 shadow-xl'>
                    <div className='mb-6 text-left'>
                        <h2 className='text-2xl font-bold text-slate-800'>Fazer Login</h2>
                        <p className='text-slate-500'>Entre na sua conta para acessar o dashboard</p>
                    </div>
                    <Form type='signup'>
                        <Campo
                            label='name'
                            type='text'
                            name='name'
                            placeholder="Seu nome completo"
                            Icon={<User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />}
                        >
                            nome
                        </Campo>
                        <Campo
                            label='email'
                            type='email'
                            name='email'
                            placeholder="seu@email.com"
                            Icon={<Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />}
                        >
                            Email
                        </Campo>
                        <Campo
                            label='password'
                            type='password'
                            name='password'
                            placeholder="••••••••"
                            Icon={<Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400' size={20} />}
                        >
                            Senha
                        </Campo>
                        <Campo
                            label='confirmPassword'
                            type='password'
                            name='confirmPassword'
                            placeholder="••••••••"
                            Icon={<Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400' size={20} />}
                        >
                            Confirma senha
                        </Campo>
                        <Select name='role' />
                        <button
                            type="submit"
                            className="mt-4 w-full rounded-lg bg-gradient-to-r from-green-500 to-green-600 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105"
                        >
                            Entrar
                        </button>
                    </Form>
                    <div className='my-6 flex item-center gap-4'>
                        <hr className='w-full border-t border-slate-200' />
                        <span className='text-sm text-slate-400'>ou</span>
                        <hr className='w-full border-t border-slate-200' />
                    </div>
                    <p className='text-center text-sm text-slate-500'>
                        Já tem uma conta?{' '}
                        <Link href='/login' className='font-semibold text-black hover:underline'>
                            Fazer login
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}