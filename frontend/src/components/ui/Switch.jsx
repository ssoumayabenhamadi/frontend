import React from 'react';

export default function Switch({ id, checked, onChange }) {
    return (
        <div className="relative inline-flex items-center">
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="sr-only"
            />
            <div
                className={`w-10 h-6 rounded-full transition-colors ${
                    checked ? 'bg-blue-500' : 'bg-gray-300'
                }`}
            ></div>
            <div
                className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    checked ? 'translate-x-4' : 'translate-x-0'
                }`}
            ></div>
        </div>
    );
}
