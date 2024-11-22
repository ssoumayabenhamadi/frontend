"use client"

import { useState } from 'react'
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Avatar } from "../components/ui/avatar"
import {AvatarFallback} from "../components/ui/AvatarFallback";
import {AvatarImage} from "../components/ui/AvatarImage";
import { Calendar, Clock, MapPin, Users, DollarSign } from 'lucide-react'

export default function PartyDetailsPage() {
    const [party] = useState({
        id: 1,
        name: "Soirée Monopoly",
        type: "Jeux de société",
        location: "123 Rue de la Fête, Paris",
        date: "2024-06-15",
        time: "20:00",
        maxParticipants: 8,
        currentParticipants: 5,
        price: 5,
        description: "Venez participer à notre soirée Monopoly ! Nous aurons plusieurs plateaux disponibles pour jouer en parallèle. Ambiance conviviale garantie !",
        games: ["Monopoly", "Cluedo", "Risk"],
        organizer: {
            name: "Marie Dubois",
            rating: 4.8,
        },
    })

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">{party.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Détails de la soirée</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                <span>{party.date}</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-5 h-5 mr-2" />
                                <span>{party.time}</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span>{party.location}</span>
                            </div>
                            <div className="flex items-center">
                                <Users className="w-5 h-5 mr-2" />
                                <span>{party.currentParticipants} / {party.maxParticipants} participants</span>
                            </div>
                            <div className="flex items-center">
                                <DollarSign className="w-5 h-5 mr-2" />
                                <span>{party.price} €</span>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Description</h3>
                                <p>{party.description}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Jeux disponibles</h3>
                                <ul className="list-disc list-inside">
                                    {party.games.map((game, index) => (
                                        <li key={index}>{game}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Organisateur</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder-avatar.jpg" alt={party.organizer.name} />
                                    <AvatarFallback>{party.organizer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{party.organizer.name}</p>
                                    <p className="text-sm text-gray-500">Note : {party.organizer.rating}/5</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Button className="w-full">Participer à la soirée</Button>
                </div>
            </div>
        </div>
    )
}