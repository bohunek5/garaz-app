"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function OfferPage() {
    return (
        <div className="bg-[#120f0c] min-h-screen font-sans flex flex-col">


            <div className="max-w-[1280px] mx-auto w-full px-4 md:px-10 lg:px-20 flex-grow flex flex-col gap-8">
                <main className="flex flex-col gap-12 pb-20 pt-10">
                    <div className="flex flex-col gap-4 text-center py-10 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Nasza Oferta</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Oferujemy nie tylko miejsce, ale pełne zaplecze warsztatowe. <br />
                            Sprawdź, co znajdziesz w cenie wynajmu.
                        </p>
                    </div>

                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Category 1 */}
                        <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors animate-fade-in" style={{ animationDelay: "0s" }}>
                            <div className="h-56 relative overflow-hidden">
                                <Image
                                    src="/garaz-app/assets/offer-workstations.png"
                                    alt="Stanowiska warsztatowe"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1613] to-transparent"></div>
                                <div className="absolute bottom-4 left-6">
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">Stanowiska</h3>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col gap-4">
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Nasze stanowiska są zaprojektowane z myślą o maksymalnej wygodzie i bezpieczeństwie. Każde z nich posiada profesjonalny podnośnik i dostęp do zasilania.
                                </p>
                                <ul className="text-gray-300 space-y-3 text-sm">
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Podnośnik dwukolumnowy 4T (YATO)</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Podnośnik nożycowy 3T do prac podwoziowych</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Dedykowane stanowisko detailingowe z mocnym oświetleniem</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Oświetlenie inspekcyjne LED 360°</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Stół warsztatowy z imadłem na każdym stanowisku</li>
                                </ul>
                            </div>
                        </div>

                        {/* Category 2 */}
                        <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors animate-fade-in" style={{ animationDelay: "0.1s" }}>
                            <div className="h-56 relative overflow-hidden">
                                <Image
                                    src="/garaz-app/assets/offer-tools.png"
                                    alt="Narzędzia specjalistyczne"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1613] to-transparent"></div>
                                <div className="absolute bottom-4 left-6">
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">Narzędzia Specjalistyczne</h3>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col gap-4">
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Nie musisz posiadać drogich narzędzi, aby wykonać kompleksową naprawę. Udostępniamy sprzęt najwyższej klasy dostępny na żądanie.
                                </p>
                                <ul className="text-gray-300 space-y-3 text-sm">
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Pneumatyczna zlewarka do oleju 80L</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Żuraw warsztatowy o udźwigu 2T i stojaki do silników</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Profesjonalne ściągacze do sprężyn i łożysk</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Klucze dynamometryczne o szerokim zakresie (5-300Nm)</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Stacjonarna prasa hydrauliczna 20T</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Pneumatyczny ściągacz do sprężyn McPherson</li>
                                </ul>
                            </div>
                        </div>

                        {/* Category 3 */}
                        <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            <div className="h-56 relative overflow-hidden">
                                <Image
                                    src="/garaz-app/assets/offer-electronics.png"
                                    alt="Elektronarzędzia i diagnostyka"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1613] to-transparent"></div>
                                <div className="absolute bottom-4 left-6">
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">Elektronika i Diagnostyka</h3>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col gap-4">
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Nowoczesne samochody wymagają elektroniki. Oferujemy kompresory i narzędzia diagnostyczne, które pomogą Ci usunąć każdą usterkę.
                                </p>
                                <ul className="text-gray-300 space-y-3 text-sm">
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Klucze udarowe pneumatyczne 1500Nm</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>System sprężonego powietrza (Kompresor 200L)</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Zaawansowany tester diagnostyczny OBD2 (wszystkie marki)</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Szlifierki kątowe, wiertarki i wyrzynarki Makita</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Lampa UV do klimatyzacji i zestaw do sprawdzania szczelności</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>Zasilacz laboratoryjny i multimetr True RMS</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div className="bg-[#1a1613] border border-[#3a2f27] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-bold text-white">Czegoś brakuje?</h2>
                            <p className="text-gray-400 max-w-md">
                                Stale rozszerzamy nasz asortyment. Jeśli potrzebujesz specjalistycznego narzędzia, daj nam znać przed wizytą.
                            </p>
                        </div>
                        <Link href="/lokalizacja">
                            <button className="bg-white text-black hover:bg-gray-200 font-bold py-3.5 px-8 rounded-xl transition-all hover:scale-105 text-sm whitespace-nowrap">
                                Skontaktuj się z nami
                            </button>
                        </Link>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
