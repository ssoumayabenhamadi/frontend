import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Star } from 'lucide-react'

export default function ProfilePage() {
    const [user, setUser] = useState({
        name: "Jean Dupont",
        email: "jean.dupont@example.com",
        city: "Paris",
        age: 28,
        interests: ["Jeux de société", "Jeux vidéo", "Musique"],
        rating: 4.5,
    })

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
                                <AvatarImage src="/placeholder-avatar.jpg" alt={user.name} />
                                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
                            <div className="flex items-center mb-4">
                                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                                <span>{user.rating.toFixed(1)}</span>
                            </div>
                            <p className="text-gray-600 mb-2">{user.city}</p>
                            <p className="text-gray-600 mb-4">{user.age} ans</p>
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
                                    <Label htmlFor="name">Nom</Label>
                                    <Input id="name" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
                                </div>
                                <div>
                                    <Label htmlFor="city">Ville</Label>
                                    <Input id="city" value={user.city} onChange={(e) => setUser({...user, city: e.target.value})} />
                                </div>
                                <div>
                                    <Label htmlFor="age">Âge</Label>
                                    <Input id="age" type="number" value={user.age} onChange={(e) => setUser({...user, age: parseInt(e.target.value)})} />
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