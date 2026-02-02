"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OfferPage() {
    return (
        <div className="bg-[#120f0c] min-h-screen font-sans flex flex-col">
            <div className="max-w-[1280px] mx-auto w-full px-4 md:px-10 lg:px-20 flex-grow flex flex-col gap-8">
                <Navbar />

                <main className="flex flex-col gap-12 pb-20">
                    <div className="flex flex-col gap-4 text-center py-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Nasza Oferta</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Oferujemy nie tylko miejsce, ale pełne zaplecze warsztatowe. <br />
                            Sprawdź, co znajdziesz w cenie wynajmu.
                        </p>
                    </div>

                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Category 1 */}
                        <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors">
                            <div className="h-48 bg-[#23170f] relative flex items-center justify-center">
                                <span className="material-symbols-outlined text-8xl text-primary/20 group-hover:text-primary/40 transition-colors">directions_car</span>
                            </div>
                            <div className="p-8 flex flex-col gap-4">
                                <h3 className="text-xl font-bold text-white">Stanowiska</h3>
                                <ul className="text-gray-400 space-y-2">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Podnośnik dwukolumnowy 4T</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Podnośnik nożycowy 3T</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Stanowisko do detailingu</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Oświetlenie inspekcyjne LED</li>
                                </ul>
                            </div>
                        </div>

                        {/* Category 2 */}
                        <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors">
                            <div className="h-48 bg-[#23170f] relative flex items-center justify-center">
                                <span className="material-symbols-outlined text-8xl text-primary/20 group-hover:text-primary/40 transition-colors">handyman</span>
                            </div>
                            <div className="p-8 flex flex-col gap-4">
                                <h3 className="text-xl font-bold text-white">Narzędzia Ręczne</h3>
                                <ul className="text-gray-400 space-y-2">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Zestawy kluczy YATO/NEO</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Klucze dynamometryczne</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Ściągacze do sprężyn/łożysk</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Wózek narzędziowy (200 el.)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Category 3 */}
                        <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors">
                            <div className="h-48 bg-[#23170f] relative flex items-center justify-center">
                                <span className="material-symbols-outlined text-8xl text-primary/20 group-hover:text-primary/40 transition-colors">power</span>
                            </div>
                            <div className="p-8 flex flex-col gap-4">
                                <h3 className="text-xl font-bold text-white">Elektronarzędzia</h3>
                                <ul className="text-gray-400 space-y-2">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Klucz udarowy pneumatyczny</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Szlifierka kątowa</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Wiertarko-wkrętarka</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Kompresor 100L</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div className="bg-[#1a1613] border border-[#3a2f27] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-bold text-white">Czegoś brakuje?</h2>
                            <p className="text-gray-400 max-w-md">
                                Stale rozszerzamy nasz asortyment. Jeśli potrzebujesz specjalistycznego narzędzia, daj nam znać przed wizytą.
                            </p>
                        </div>
                        <button className="bg-white text-black hover:bg-gray-200 font-bold py-3.5 px-8 rounded-xl transition-colors text-sm whitespace-nowrap">
                            Skontaktuj się z nami
                        </button>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
