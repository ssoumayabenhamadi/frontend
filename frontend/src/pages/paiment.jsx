import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/Button";
import Header from "../components/layout/header";

export default function PaymentPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const { eventId, userId } = location.state || {};

    const handlePayment = () => {
        alert("Paiement confirmé !");
        navigate("/confirmation");
    };



    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-12" style={{ maxWidth: "600px" }}>
                <h1 className="text-2xl font-bold mb-6">Paiement</h1>
                <p className="mb-4">Événement : <strong>{eventId}</strong></p>
                <p className="mb-4">Utilisateur : <strong>{userId}</strong></p>
                <form className="space-y-4">
                    <Label htmlFor="cardNumber">Numéro de carte bancaire</Label>
                    <Input id="cardNumber" type="text" placeholder="1234 5678 9012 3456" required />

                    <Label htmlFor="expiryDate">Date d'expiration</Label>
                    <Input id="expiryDate" type="text" placeholder="MM/AA" required />

                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" type="text" placeholder="123" required />

                    <Button type="button" onClick={handlePayment}>
                        Confirmer le paiement
                    </Button>
                </form>
            </div>
        </>
    );
}
