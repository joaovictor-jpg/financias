
type CampoPrps = {
    label: string;
    type:string;
    placeholder: string;
    children: string
    Icon: React.ReactNode;
}

export const Campo = ({label, type, placeholder, children, Icon}: CampoPrps) => {
    return (
        <div>
            <label htmlFor={label} className='mb-2 block text-sm font-medium text-slate-600 cursor-pointer'>{children}</label>
            <div className='relative'>
                {Icon}
                <input type={type} id={label} className='w-full rounded-lg border border-slate-200 bg-slate-50 p-3 pl-10 text-slate-700 transition-color focus:border-blue-500 focus:outline-none focus:ring-l focus:ring-blue-500' placeholder={placeholder} />
            </div>
        </div>
    );
};