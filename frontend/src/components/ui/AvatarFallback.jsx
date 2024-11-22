import React from "react";

export function AvatarFallback({ children, className }) {
    return (
        <div
            className={`flex items-center justify-center w-full h-full text-sm font-medium text-gray-500 bg-gray-300 ${className}`}
        >
            {children}
        </div>
    );
}
