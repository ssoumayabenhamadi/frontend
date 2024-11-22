import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,
} from "../components/ui/card";

export default function PartyList() {
    const [parties, setParties] = useState([
        {
            id: 1,
            name: "Soirée Monopoly",
            type: "Jeux de société",
            location: "Paris",
            date: "2024-11-25",
            time: "20:00",
            spots: 5,
            description: "Une soirée conviviale autour du Monopoly et d'autres jeux de société.",
        },
        {
            id: 2,
            name: "LAN Party",
            type: "Jeux vidéo",
            location: "Lyon",
            date: "2024-11-30",
            time: "19:00",
            spots: 8,
            description: "Organisez votre team et rejoignez cette LAN party épique.",
        },
        {
            id: 3,
            name: "Soirée dansante",
            type: "Classique",
            location: "Marseille",
            date: "2024-12-05",
            time: "21:00",
            spots: 10,
            description: "Dansez toute la nuit dans une ambiance festive et chaleureuse.",
        },
    ]);

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">Liste des Soirées</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {parties.map((party) => (
                    <Card key={party.id}>
                        <CardHeader>
                            <CardTitle>{party.name}</CardTitle>
                            <CardDescription>{party.type}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                <span className="font-semibold">Lieu :</span> {party.location}
                            </p>
                            <p>
                                <span className="font-semibold">Date :</span> {party.date}
                            </p>
                            <p>
                                <span className="font-semibold">Heure :</span> {party.time}
                            </p>
                            <p>
                                <span className="font-semibold">Places disponibles :</span> {party.spots}
                            </p>
                            <p className="mt-2 text-gray-600">{party.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
