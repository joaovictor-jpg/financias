
type ModernCardProps = {
    title: string;
    description: string;
    children: React.ReactNode;
}

export const Card = ({title, description, children}: ModernCardProps) => {
    return (
        <div className="max-w-sm  rounded-2xl bg-white p-3">
            <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                    {children}
                </div>
                <h3 className='mb-2 text-xl font-semibold text-gray-8000'>
                    {title}
                </h3>
                <p className='text-gray-500'>
                    {description}
                </p>
            </div>
        </div>
    );
};