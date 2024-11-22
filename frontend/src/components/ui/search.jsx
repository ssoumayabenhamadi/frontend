import React, { useState } from "react";

export default function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm); // Appelle la fonction de recherche passée en prop
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
            <input
                type="text"
                placeholder="Rechercher une soirée..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Rechercher
            </button>
        </form>
    );
}
