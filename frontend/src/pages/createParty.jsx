"use client"

import { useState } from 'react'
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function CreatePartyPage() {
    const [isPaid, setIsPaid] = useState(false)
    const [partyType, setPartyType] = useState("")

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Créer une soirée</h1>
            <form className="space-y-6">
                <div>
                    <Label htmlFor="name">Nom de la soirée</Label>
                    <Input id="name" placeholder="Entrez le nom de votre soirée" />
                </div>
                <div>
                    <Label htmlFor="location">Lieu</Label>
                    <Input id="location" placeholder="Entrez le lieu de la soirée" />
                </div>
                <div>
                    <Label htmlFor="type">Type de soirée</Label>
                    <Select onValueChange={setPartyType}>
                        <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez le type de soirée" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="jeux-societe">Jeux de société</SelectItem>
                            <SelectItem value="jeux-video">Jeux vidéo</SelectItem>
                            <SelectItem value="classique">Soirée classique</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                </div>
                <div>
                    <Label htmlFor="time">Heure</Label>
                    <Input id="time" type="time" />
                </div>
                <div>
                    <Label htmlFor="max-participants">Nombre maximum de participants</Label>
                    <Input id="max-participants" type="number" min="1" />
                </div>
                <div className="flex items-center space-x-2">
                    <Switch id="paid" checked={isPaid} onCheckedChange={setIsPaid} />
                    <Label htmlFor="paid">Soirée payante</Label>
                </div>
                {isPaid && (
                    <div>
                        <Label htmlFor="price">Prix</Label>
                        <Input id="price" type="number" min="0" step="0.01" placeholder="Entrez le prix en euros" />
                    </div>
                )}
                <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Décrivez votre soirée" />
                </div>
                {partyType === "jeux-societe" && (
                    <div>
                        <Label htmlFor="games">Jeux de société</Label>
                        <Textarea id="games" placeholder="Listez les jeux de société disponibles" />
                    </div>
                )}
                {partyType === "jeux-video" && (
                    <div>
                        <Label htmlFor="games">Jeux vidéo et plateformes</Label>
                        <Textarea id="games" placeholder="Listez les jeux vidéo et les plateformes" />
                    </div>
                )}
                <Button type="submit">Créer la soirée</Button>
            </form>
        </div>
    )
}