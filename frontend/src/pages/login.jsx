import React from "react"
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/Button';


export default function Login() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold">Connexion</h1>
            <form className="mt-4">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email"/>
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password"/>
                <div className="space-y-4">
                    <Button type="submit">
                        Se connecter
                    </Button>
                    <Button>
                        <a href="/signup" className="w-full text-center">
                            S'inscrire
                        </a>
                    </Button>
                </div>
            </form>
        </div>
    );
}


