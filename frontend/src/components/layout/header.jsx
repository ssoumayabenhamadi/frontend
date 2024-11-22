import React from 'react';


export default function Header() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center bg-white shadow-md">
            <div className="flex items-center">
                <a href="/" className="flex items-center text-xl font-bold hover:underline underline-offset-4">
                    Soirée App
                </a>
            </div>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <a href="/" className="text-sm font-medium hover:underline underline-offset-4">
                    Accueil
                </a>
                <a href="/search" className="text-sm font-medium hover:underline underline-offset-4">
                    Trouver une soirée
                </a>
                <a href="/createParty" className="text-sm font-medium hover:underline underline-offset-4">
                    Organiser
                </a>
                <a href="/login" className="text-sm font-medium hover:underline underline-offset-4">
                    Connexion
                </a>
            </nav>
        </header>
    );
}
