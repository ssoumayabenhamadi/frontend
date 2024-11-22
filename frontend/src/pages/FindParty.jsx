import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "../components/ui/card";
import Search from "../components/ui/search";

export default function SearchParties() {
    const allParties = [
        {
            id: 1,
            name: "Soirée Monopoly",
            type: "Jeux de société",
            location: "Paris",
            date: "2024-11-25",
            description: "Une soirée conviviale autour du Monopoly et d'autres jeux.",
        },
        {
            id: 2,
            name: "LAN Party",
            type: "Jeux vidéo",
            location: "Lyon",
            date: "2024-12-10",
            description: "Une LAN party avec vos jeux préférés.",
        },
        {
            id: 3,
            name: "Soirée dansante",
            type: "Classique",
            location: "Marseille",
            date: "2024-11-30",
            description: "Dansez toute la nuit dans une ambiance festive.",
        },
    ];

    const [filteredParties, setFilteredParties] = useState(allParties);

    const handleSearch = (term) => {
        const lowerTerm = term.toLowerCase();
        const results = allParties.filter((party) =>
            party.name.toLowerCase().includes(lowerTerm) ||
            party.location.toLowerCase().includes(lowerTerm) ||
            party.type.toLowerCase().includes(lowerTerm)
        );
        setFilteredParties(results);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">Rechercher une soirée</h1>
            <div className="mb-8">
                <Search onSearch={handleSearch} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredParties.length > 0 ? (
                    filteredParties.map((party) => (
                        <Card key={party.id}>
                            <CardHeader>
                                <CardTitle>{party.name}</CardTitle>
                                <CardDescription>{party.type}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    <strong>Lieu :</strong> {party.location}
                                </p>
                                <p>
                                    <strong>Date :</strong> {party.date}
                                </p>
                                <p className="mt-2 text-gray-600">{party.description}</p>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p className="text-center col-span-3 text-gray-500">Aucune soirée trouvée.</p>
                )}
            </div>
        </div>
    );
}
