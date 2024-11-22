import React from "react";

export function SelectContent({ children, isOpen }) {
    if (!isOpen) return null;

    return (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-md mt-2 max-h-60 w-full overflow-auto">
            {children}
        </ul>
    );
}
