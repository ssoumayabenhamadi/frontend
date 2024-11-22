import { useEffect, useState } from 'react'
import { Button } from "../../components/ui/Button"
import { Input } from "../../components/ui/input"
import Textarea from "../../components/ui/Textarea"
import { Avatar} from "../../components/ui/avatar"
import {AvatarImage} from "../../components/ui/AvatarImage";
import {AvatarFallback} from "../../components/ui/AvatarFallback";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Label } from "../../components/ui/label"
import { Star } from 'lucide-react'

export default function ProfilePage() {
    const [user, setUser] = useState({
        username: "Jean Dupont",
        email: "jean.dupont@example.com",
        address : null,
        dateOfBirth: 28,
        interests: ["Jeux de société", "Jeux vidéo", "Musique"],
    })

    const convertToList = (interestsString) => {
        return interestsString.split(",").map((interest) => interest.trim());
    };

    const calculateAge = (dateOfBirth) => {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
      
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
      
        return age;
      };

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('userData'))
        data.dateOfBirth = calculateAge(data.dateOfBirth);        
        data.interests = convertToList(data.interests)
        setUser(data)
    }, [])

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profil</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center">
                            <Avatar className="w-32 h-32 mb-4">
                                <AvatarImage src="/placeholder-avatar.jpg" alt={user.username} />
                                <AvatarFallback>{user.username.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <h2 className="text-2xl font-bold mb-2">{user.username}</h2>
                            <div className="flex items-center mb-4">
                                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                                <span>4,5</span>
                            </div>
                            <p className="text-gray-600 mb-2">{user.city}</p>
                            <p className="text-gray-600 mb-4">{user.dateOfBirth} ans</p>
                            <div className="flex flex-wrap gap-2">
                                {user.interests.map((interest, index) => (
                                    <span key={index} className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="md:w-2/3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Modifier le profil</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div>
                                    <Label htmlFor="name">Username</Label>
                                    <Input id="name" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
                                </div>
                                <div>
                                    <Label htmlFor="city">Ville</Label>
                                    <Input id="city" value={user.address?.city} />
                                </div>
                                <div>
                                    <Label htmlFor="city">Street</Label>
                                    <Input id="city" value={user.address?.street} />
                                </div>
                                <div>
                                    <Label htmlFor="city">Postal Code</Label>
                                    <Input id="city" value={user.address?.postalCode} />
                                </div>
                                <div>
                                    <Label htmlFor="city">Country</Label>
                                    <Input id="city" value={user.address?.country} />
                                </div>
                                <div>
                                    <Label htmlFor="age">Âge</Label>
                                    <Input id="age" type="number" value={user.dateOfBirth} onChange={(e) => setUser({...user,  dateOfBirth: parseInt(e.target.value)})} />
                                </div>
                                <div>
                                    <Label htmlFor="interests">Centres d'intérêt</Label>
                                    <Textarea id="interests" value={user.interests.join(', ')} onChange={(e) => setUser({...user, interests: e.target.value.split(', ')})} />
                                </div>
                                <Button type="submit">Enregistrer les modifications</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}