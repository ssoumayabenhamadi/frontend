import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/Button';

import React from "react"

export default function Signup() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold">Inscription</h1>
            <form className="mt-4">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" type="text" />
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password" />
                <Button type="submit" className="mt-4">
                    S'inscrire
                </Button>
            </form>
        </div>
    );
}
