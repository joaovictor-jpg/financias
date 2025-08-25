
type CampoPrps = {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    children: React.ReactNode;
    Icon: React.ReactNode;
    errors?: string[];
}

export const Campo = ({label, type, name, placeholder, children, Icon, errors}: CampoPrps) => {
    return (
        <div>
            <label
                htmlFor={label}
                className='mb-2 block text-sm font-medium text-slate-600 cursor-pointer'
            >
                {children}
            </label>
            <div className='relative'>
                {Icon}
                <input
                    type={type}
                    id={label}
                    name={name}
                    className='w-full rounded-lg border border-slate-200 bg-slate-50 p-3 pl-10 text-slate-700 transition-color focus:border-blue-500 focus:outline-none focus:ring-l focus:ring-blue-500'
                    placeholder={placeholder}
                />
            </div>
            {errors && (
                <p className="mt-1 text-sm text-red-600">{errors[0]}</p>
            )}
        </div>
    );
};