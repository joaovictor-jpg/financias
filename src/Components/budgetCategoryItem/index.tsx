import { MoreHorizontal } from 'lucide-react';

type BudgetCategoryItemProps = {
    category: string;
    type: string;
    spent: number;
    total: number;
    color: string;
}

export const BudgetCategoryItem = ({ category, type, spent, total, color }: BudgetCategoryItemProps) => {
    const percentage = Math.round((spent / total) * 100);
    const remaining = total - spent;

    return (
        <div className="flex flex-col gap-2 border-b border-slate-100 pb-4 last:border-b-0">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className={`h-3 w-3 rounded-full ${color}`}></span>
                    <div>
                        <p className="font-semibold text-slate-700">{category}</p>
                        <p className="text-xs text-slate-500">{type}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {percentage >= 100 && (
                        <span className="rounded-md bg-red-100 px-2 py-1 text-xs font-semibold text-red-600">No Limite</span>
                    )}
                    <p className="text-sm font-semibold text-slate-700">
                        {spent.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </p>
                    <button className="text-slate-400 hover:text-slate-700">
                        <MoreHorizontal size={20} />
                    </button>
                </div>
            </div>

            <div className="h-2 w-full rounded-full bg-slate-200">
                <div
                    className={'h-2 rounded-full bg-amber-950'}
                    style={{ width: `${percentage > 100 ? 100 : percentage}%` }}
                ></div>
            </div>
            <div className="flex justify-between text-sm text-slate-500">
                <span>{percentage}% utilizado</span>
                <span>
                    {remaining >= 0 ? `${remaining.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} restante` : `Estourado em ${Math.abs(remaining).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
                </span>
            </div>
        </div>
    );
};