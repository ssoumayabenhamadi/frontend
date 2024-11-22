import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/Button";
import Header from "../components/layout/header";

export default function PartyParticipation() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        guests: 1,
        message: "",
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        // Simuler une API pour la participation
        setTimeout(() => {
            if (formData.name && formData.email) {
                setSuccessMessage("Votre participation a été enregistrée avec succès !");
            } else {
                setErrorMessage("Veuillez remplir tous les champs obligatoires.");
            }
        }, 500);
    };

    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-12" style={{ maxWidth: "600px" }}>
                <h1 className="text-2xl font-bold mb-6">Participation à la Soirée</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <Label htmlFor="email">Adresse Email *</Label>
                    <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <Label htmlFor="guests">Nombre de participants *</Label>
                    <Input
                        id="guests"
                        type="number"
                        min="1"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                    />

                    <Label htmlFor="message">Message (optionnel)</Label>
                    <Input
                        id="message"
                        type="text"
                        value={formData.message}
                        onChange={handleChange}
                    />

                    {successMessage && (
                        <p className="text-green-600">{successMessage}</p>
                    )}
                    {errorMessage && (
                        <p className="text-red-600">{errorMessage}</p>
                    )}

                    <Button type="submit">Confirmer la participation</Button>
                </form>
            </div>
        </>
    );
}
