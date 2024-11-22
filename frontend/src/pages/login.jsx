import React, { useState } from "react"
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/Button';
import { login } from '../api/auth'
import { useNavigate } from 'react-router-dom'
import Header from "../components/layout/header";


export default function Login() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',

      });
    
    const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [id]: value, // Met à jour le champ correspondant
    }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    login(formData.username, formData.password).then((res) => {
        if(res.success){
            navigate('/auth/profile')
        }
        localStorage.setItem('userData', JSON.stringify(res.data))
        
    })
    .catch((err) => {
        
    })
    };

    return (
        <>
        <Header />
        <div className="container mx-auto px-4 py-12" style={{width: "50%", alignContent: "center"}}>
            <h1 className="text-2xl font-bold">Connexion</h1>
            <form className="mt-4">
                <Label htmlFor="email">Username</Label>
                <Input
                    id="username"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <div className="space-y-4">
                    <Button onClick={handleSubmit}>
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
        </>
    );
}


