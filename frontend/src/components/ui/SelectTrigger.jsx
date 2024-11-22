import React from "react";

export function SelectTrigger({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 flex items-center justify-between hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            {children}
            <span className="ml-2">▼</span>
        </button>
    );
}
