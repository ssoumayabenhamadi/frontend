import React from "react";

export function SelectItem({ children, value, onSelect }) {
    return (
        <li
            onClick={() => onSelect(value)}
            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
        >
            {children}
        </li>
    );
}
