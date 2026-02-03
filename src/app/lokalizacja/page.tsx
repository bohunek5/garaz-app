"use client";

import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";

export default function LocationPage() {
    return (
        <div className="bg-[#120f0c] min-h-screen font-sans flex flex-col">
            <div className="max-w-[1280px] mx-auto w-full px-4 md:px-10 lg:px-20 flex-grow flex flex-col gap-8">


                <main className="flex flex-col gap-12 pb-20 flex-grow">
                    <div className="flex flex-col gap-4 py-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Lokalizacja</h1>
                        <p className="text-gray-400 text-lg">
                            Znajdziesz nas w przemysłowym sercu Giżycka. <br />
                            Łatwy dojazd dla samochodów osobowych i dostawczych.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 h-[600px] lg:h-[500px]">
                        {/* Contact Info */}
                        <div className="lg:w-1/3 bg-[#1a1613] border border-[#3a2f27] rounded-3xl p-8 flex flex-col gap-8 h-fit">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#23170f] flex items-center justify-center text-primary border border-[#3a2f27] shrink-0">
                                    <span className="material-symbols-outlined text-2xl">location_on</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">Adres</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        ul. Sybiraków 28<br />
                                        11-500 Giżycko<br />
                                        <span className="text-xs text-gray-500">(Wjazd od strony ul. Przemysłowej, brama nr 4)</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#23170f] flex items-center justify-center text-primary border border-[#3a2f27] shrink-0">
                                    <span className="material-symbols-outlined text-2xl">call</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">Telefon</h3>
                                    <p className="text-gray-400 font-mono text-lg">
                                        +48 123 456 789
                                    </p>
                                    <p className="text-gray-500 text-sm mt-1">Czynny 24/7</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#23170f] flex items-center justify-center text-primary border border-[#3a2f27] shrink-0">
                                    <span className="material-symbols-outlined text-2xl">mail</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                                    <p className="text-gray-400">
                                        kontakt@garagerent.pl
                                    </p>
                                </div>
                            </div>

                            <button className="mt-4 w-full bg-primary hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">directions</span>
                                Nawiguj
                            </button>
                        </div>

                        {/* Map */}
                        <div className="flex-1 rounded-3xl overflow-hidden border border-[#3a2f27] shadow-2xl h-full">
                            <GoogleMap />
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
