import React from "react"

export function Button({ children, variant = 'default', ...props }) {
    const baseStyles =
        'inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variants = {
        default: 'bg-primary text-primary-foreground border-transparent hover:bg-blue-700',
        outline: 'bg-transparent text-primary border-gray-300 hover:bg-gray-100',
    };
    return (
        <button className={`${baseStyles} ${variants[variant]}`} {...props}>
            {children}
        </button>
    );
}
