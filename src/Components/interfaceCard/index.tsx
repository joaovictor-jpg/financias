import { Eye } from 'lucide-react';
import React from 'react';

type InterfaceCardProps ={
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonTitle: string;
}

export const InterfaceCard = ({icon, title, description, buttonTitle}: InterfaceCardProps) => {
    return (
        <div className="flex w-full max-w-md flex-col gap-4 rounded-2xl bg-white p-6 shadow-md">
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                    {icon}
                </div>
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            </div>

            <p className='text-gray-500'>{description}</p>
            <button className='mt-2 flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm text-semibold text-white transition-colors hover:bg-slate-700 cursor-pointer'>
                <Eye size={16} />
                {buttonTitle}
            </button>
        </div>
    );
};