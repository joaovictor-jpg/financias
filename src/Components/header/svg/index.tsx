export const SVG = ({children}: Readonly<{children: React.ReactNode;}>) => {
    return (
        <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="peer-hover/expand:scale-125 peer-hover/expand:text-blue-400 peer-hover/expand:fill-blue-400 peer-checked/expand:text-blue-400 peer-checked/expand:fill-blue-400 text-2xl peer-checked/expand:scale-125 ease-in-out duration-300"
        >
            {children}
        </svg>
    );
};