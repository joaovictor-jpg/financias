import { BudgetCategoryItem } from '@/Components/budgetCategoryItem';
import { StatCard } from '@/Components/statCard';
import { BarChart2, DollarSign, PieChart, Plus, Target } from 'lucide-react';

const statsData = [
    { title: 'Total Gasto', value: 'R$ 2.200', icon: <BarChart2 size={20} />, change: '12% em relação ao mês anterior', changeType: 'down' as const },
    { title: 'Limite Total', value: 'R$ 2.800', icon: <Target size={20} />, change: 'Orçamento mensal definido' },
    { title: 'Economia', value: 'R$ 600', icon: <DollarSign size={20} />, change: 'Sobrou este mês', changeType: 'up' as const },
    { title: 'Taxa de Uso', value: '79%', icon: <PieChart size={20} />, change: 'Do orçamento utilizado' },
];

const budgetData = [
    { category: 'Alimentação', type: 'Essencial', spent: 1250, total: 1500, color: 'bg-red-500' },
    { category: 'Transporte', type: 'Essencial', spent: 450, total: 600, color: 'bg-blue-500' },
    { category: 'Entretenimento', type: 'Lazer', spent: 180, total: 300, color: 'bg-purple-500' },
    { category: 'Compras', type: 'Variável', spent: 320, total: 400, color: 'bg-green-500' },
];



export default function Dashboard() {
    return (
        <div className="flex flex-col gap-8 m-12">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Orçamento</h1>
                    <p className="text-slate-500">Gerencie seus gastos e metas financeiras</p>
                </div>
                <button className='flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700'>
                    <Plus size={18} />
                    Novo Orçamento
                </button>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                {statsData.map((stat) => (
                    <StatCard key={stat.title} {...stat} />
                ))}
            </div>

            <div className='rounded-xl bg-white p-6 shadow-2xl'>
                <h3 className='mb-4 text-lg font-bold text-slate-800'>Orçamentos por Categoria</h3>
                <p className='mb-6 text-sm text-slate-500'>Acompanhe seus gastos em cada categoria</p>
                <div className='flex flex-col gap-6'>
                    {budgetData.map((budget) => (
                        <BudgetCategoryItem key={budget.category} {...budget} />
                    ))}
                </div>
            </div>
        </div>
    );
}