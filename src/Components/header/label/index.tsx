import React from 'react';

type LabelProps = {
  htmlForm: string;
  children: React.ReactNode;
};

export const Label = ({htmlForm, children}: LabelProps) => {
    return (
        <label
            className="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl"
            htmlFor={htmlForm}
        >
            {children}
        </label>
    );
};