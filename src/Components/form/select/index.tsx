import { ChevronDown } from 'lucide-react';

type selectProps = {
    name: string
}

export const Select = ({name}: selectProps) => {
    return (
        <div>
            <label
                htmlFor="role"
                className='mb-2 block text-sm font-medium text-slate-600'
            >
                Tipo de Perfil
            </label>
            <div className="relative w-full">
                <select
                    name={name}
                    id="role"
                    className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-200 p-2.5 text-slate-700 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    <option value="">Selecione</option>
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                </select>
                <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={20}
                />
            </div>
        </div>
    );
};