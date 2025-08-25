import { Eye } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type InterfaceCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonTitle: string;
    rota: string
}

export const InterfaceCard = ({ icon, title, description, buttonTitle, rota }: InterfaceCardProps) => {
    return (
        <div className="flex w-full max-w-md flex-col gap-4 rounded-2xl bg-white p-6 shadow-md">
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                    {icon}
                </div>
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            </div>

            <p className='text-gray-500'>{description}</p>
            <div className="mt-auto cursor-pointer">
                <Link href={rota}>
                    <div className="flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700">
                        <Eye size={16} />
                        {buttonTitle}
                    </div>
                </Link>
            </div>
        </div>
    );
};