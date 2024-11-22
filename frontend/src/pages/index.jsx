import React from 'react';
import { Button } from "../components/ui/Button";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Trouvez votre prochaine soirée
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-500">
                                Rejoignez des soirées passionnantes ou organisez la vôtre.
                            </p>
                            <div className="space-x-4">
                                <a href="/FindParty" passHref>
                                    <Button>Trouver une soirée</Button>
                                </a>
                                <a href="/frontend/frontend/src/pages/createParty" passHref>
                                    <Button variant="outline">Organiser une soirée</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
