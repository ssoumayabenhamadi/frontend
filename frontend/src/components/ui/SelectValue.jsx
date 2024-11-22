import React from "react";

export function SelectValue({ value, placeholder }) {
    return (
        <span className="text-gray-700">
            {value || <span className="text-gray-400">{placeholder}</span>}
        </span>
    );
}
