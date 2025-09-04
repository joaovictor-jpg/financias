import { TrendingDown, TrendingUp } from 'lucide-react';

type StatCardProps = {
    title: string;
    value: string;
    icon: React.ReactNode;
    change?: string;
    changeType?: 'up' | 'down'
};

export const StatCard = ({title, value, icon, change, changeType}: StatCardProps) => {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500">{title}</p>
                <div className="text-slate-400">{icon}</div>
            </div>
            <p className="mt-2 text-3xl font-bold text-bold text-slate-800">{value}</p>
            {change && (
                <div className="mt-1 flex items-center gap-1 text-xs">
                    {changeType === 'up' ? (
                        <TrendingUp size={14} className="text-green-500" />
                    ) : (
                        <TrendingDown size={14} className="text-red-500" />
                    )}
                    <span className={changeType === 'up' ? 'text-gray-500' : 'text-red-500'}>{change}</span>
                </div>
            )}
        </div>
    );
};