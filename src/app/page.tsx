"use client";

import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-[#120f0c] min-h-screen font-sans">
            <main className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 py-6 flex flex-col gap-12 md:gap-24">
                {/* Navigation */}
                <nav className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="flex items-center justify-center rounded bg-primary/20 p-1.5 text-primary">
                            <span className="material-symbols-outlined text-2xl">garage_home</span>
                        </div>
                        <h1 className="text-white text-xl font-bold tracking-wide">
                            Garage Rent
                        </h1>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium text-sm">
                        <a href="#" className="hover:text-primary transition-colors">
                            Oferta
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Cennik
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Lokalizacja
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Kontakt
                        </a>
                    </div>
                    <button className="hidden md:flex bg-primary hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-lg transition-colors text-sm shadow-[0_4px_14px_0_rgba(255,107,0,0.39)]">
                        Rezerwuj teraz
                    </button>
                    <button className="md:hidden text-white">
                        <span className="material-symbols-outlined text-3xl">menu</span>
                    </button>
                </nav>

                {/* Hero Section */}
                <section className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
                    <div className="flex-1 flex flex-col gap-8 md:gap-10">
                        <div className="flex flex-col gap-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#23170f] border border-[#3a2f27] w-fit">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-xs uppercase tracking-wider font-bold text-gray-400">
                                    Dostępne: 2 stanowiska
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                                Twój warsztat <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                                    na godziny
                                </span>
                            </h1>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                Profesjonalna przestrzeń dla pasjonatów motoryzacji. W pełni
                                wyposażone stanowiska, podnośniki i narzędzia. Naprawiaj sam,
                                oszczędzaj i ucz się.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="h-14 px-8 rounded-xl bg-primary hover:bg-orange-600 text-white font-bold text-lg shadow-[0_0_40px_-10px_rgba(255,107,0,0.5)] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">calendar_month</span>
                                Rezerwuj termin
                            </button>
                            <button className="h-14 px-8 rounded-xl bg-[#23170f] border border-[#3a2f27] hover:border-gray-500 text-white font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">play_circle</span>
                                Zobacz jak to działa
                            </button>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full border-2 border-[#120f0c] bg-gray-700"></div>
                                <div className="w-10 h-10 rounded-full border-2 border-[#120f0c] bg-gray-600"></div>
                                <div className="w-10 h-10 rounded-full border-2 border-[#120f0c] bg-gray-500"></div>
                                <div className="w-10 h-10 rounded-full border-2 border-[#120f0c] bg-[#23170f] flex items-center justify-center text-xs text-white">
                                    +1k
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-yellow-400 text-base">
                                    <span className="material-symbols-outlined text-[18px] fill-current">
                                        star
                                    </span>
                                    <span className="material-symbols-outlined text-[18px] fill-current">
                                        star
                                    </span>
                                    <span className="material-symbols-outlined text-[18px] fill-current">
                                        star
                                    </span>
                                    <span className="material-symbols-outlined text-[18px] fill-current">
                                        star
                                    </span>
                                    <span className="material-symbols-outlined text-[18px] fill-current">
                                        star
                                    </span>
                                </div>
                                <div className="flex gap-1.5">
                                    <span className="font-medium text-white">4.9/5</span>
                                    <span>na podstawie 120+ opinii</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center">
                        {/* Abstract Background Element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

                        {/* Main Image Container */}
                        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[#3a2f27] bg-[#1a1613] shadow-2xl">
                            <img
                                src="/garaz-app/screen.png"
                                alt="Garage interior with car lift"
                                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                            />

                            {/* Float Widget 1 */}
                            <div className="absolute top-8 right-8 bg-[#120f0c]/80 backdrop-blur-md p-4 rounded-xl border border-[#3a2f27] shadow-xl animate-fade-in-up">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                        <span className="material-symbols-outlined">check_circle</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">
                                            Zestaw kluczy
                                        </h4>
                                        <p className="text-gray-400 text-xs">Wliczone w cenę</p>
                                    </div>
                                </div>
                            </div>

                            {/* Float Widget 2 */}
                            <div
                                className="absolute bottom-8 left-8 bg-[#120f0c]/80 backdrop-blur-md p-4 rounded-xl border border-[#3a2f27] shadow-xl animate-fade-in-up"
                                style={{ animationDelay: "0.2s" }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">payments</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">
                                            Już od 35 zł/h
                                        </h4>
                                        <p className="text-gray-400 text-xs">Bez ukrytych opłat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Section */}
                <section className="flex flex-col gap-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#3a2f27] pb-8">
                        <div className="flex flex-col gap-3 max-w-2xl">
                            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                                Profesjonalne wyposażenie
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Wszystko, czego potrzebujesz do samodzielnej naprawy samochodu.
                            </p>
                        </div>
                        <a
                            className="text-primary font-bold hover:underline inline-flex items-center gap-1"
                            href="#"
                        >
                            Zobacz pełną listę narzędzi
                            <span className="material-symbols-outlined text-[18px]">
                                arrow_forward
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Feature 1 */}
                        <div className="group flex flex-col gap-4 rounded-xl border border-[#3a2f27] bg-[#23170f] p-8 hover:border-primary/50 transition-all duration-300 hover:bg-[#2a1d15]">
                            <div className="w-14 h-14 rounded-full bg-[#2a1d15] group-hover:bg-primary/20 flex items-center justify-center border border-[#3a2f27] group-hover:border-primary/30 transition-colors">
                                <span className="material-symbols-outlined text-white group-hover:text-primary text-[28px]">
                                    handyman
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-white text-xl font-bold">Narzędzia w cenie</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Pełny zestaw kluczy YATO, wkrętaków, ściągaczy i narzędzi
                                    specjalistycznych dostępnych bez dopłat.
                                </p>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="group flex flex-col gap-4 rounded-xl border border-[#3a2f27] bg-[#23170f] p-8 hover:border-primary/50 transition-all duration-300 hover:bg-[#2a1d15]">
                            <div className="w-14 h-14 rounded-full bg-[#2a1d15] group-hover:bg-primary/20 flex items-center justify-center border border-[#3a2f27] group-hover:border-primary/30 transition-colors">
                                <span className="material-symbols-outlined text-white group-hover:text-primary text-[28px]">
                                    directions_car
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-white text-xl font-bold">Podnośnik 4T</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Profesjonalny hydrauliczny podnośnik dwukolumnowy o udźwigu 4
                                    ton dla Twojej wygody i bezpieczeństwa.
                                </p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="group flex flex-col gap-4 rounded-xl border border-[#3a2f27] bg-[#23170f] p-8 hover:border-primary/50 transition-all duration-300 hover:bg-[#2a1d15]">
                            <div className="w-14 h-14 rounded-full bg-[#2a1d15] group-hover:bg-primary/20 flex items-center justify-center border border-[#3a2f27] group-hover:border-primary/30 transition-colors">
                                <span className="material-symbols-outlined text-white group-hover:text-primary text-[28px]">
                                    schedule
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-white text-xl font-bold">Dostęp 24/7</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    System bezobsługowy. Rezerwuj online, otrzymaj kod dostępu i
                                    naprawiaj kiedy chcesz - nawet w nocy.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="flex flex-col lg:flex-row gap-8 rounded-2xl bg-[#23170f] border border-[#3a2f27] overflow-hidden">
                    <div className="flex-1 flex flex-col justify-center p-8 lg:p-12 gap-6">
                        <div>
                            <h2 className="text-white text-3xl font-bold mb-2">Znajdź nas</h2>
                            <p className="text-gray-400 text-lg">
                                Jesteśmy w centrum strefy przemysłowej Giżycka.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0 text-primary">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Adres</h4>
                                    <p className="text-gray-400">
                                        ul. Sybiraków 28
                                        <br />
                                        11-500 Giżycko
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0 text-primary">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Kontakt</h4>
                                    <p className="text-gray-400">
                                        +48 123 456 789
                                        <br />
                                        kontakt@garagerent.pl
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0 text-primary">
                                    <span className="material-symbols-outlined">timer</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Godziny otwarcia</h4>
                                    <p className="text-gray-400">Poniedziałek - Niedziela: 24h</p>
                                </div>
                            </div>
                        </div>
                        <button className="mt-4 flex items-center justify-center gap-2 rounded-lg h-12 px-6 border border-gray-600 hover:border-white text-white font-medium transition-colors w-fit">
                            <span className="material-symbols-outlined text-[20px]">map</span>
                            <span>Nawiguj do nas</span>
                        </button>
                    </div>
                    <div className="flex-1 min-h-[400px] lg:min-h-auto relative bg-[#1a1613]">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-80"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRlyi3TZECMpmpDxxY5CEK_G3r4hbOvu7NyQKr0rex4Z3d3WwwHh5pe7qyJFEIdSm0IqxHPx8Fp8v4aoLFo6jsop1ANNEweFUBmfxiJ4QtMVkPDzltQbj1MmoPajWLSuIXy75aI6SmsftogHbk1SCiSs1Zs7zi_Ay0H7X9I5fTOxI1SdybcBtJ1mATte-ew9vUGZ2zWZJbg0nT3W5VWb2OMKR5zS2kKBLD8BJmYIM0r-ATVV2xexHjmfTP9zxFllEiCIw2wLGLDkAI')",
                            }}
                        >
                            {/* Fallback visual for map */}
                            <div className="w-full h-full bg-neutral-800 flex items-center justify-center relative overflow-hidden">
                                <img
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale mix-blend-multiply"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIZF8daHmqyB40p5KE5NqQcQrUsh7spGfcgjW8utYG8vAvERJ11uG7xMKm3fQq08dnKoqfo7ZaRfpqil1DV9fN74FdjJm8PfCPYbHe8NV_O045ctEds6ynXXgUuCiczzc8FktPdYb5smPGRSxTDPYPgEzjpTzT_Q0EbGy85vC-R1DWkRdt9QgFM4DiekrFF5pfh0dbDtSELhjMPmQSf9vNev0YRFJ-s2pSTyr9yHsXZhjTRFFgu1oXuFZHDorOlVEqGUi9rXRD6Q8Y"
                                    alt="Map location pin"
                                />
                                <div className="z-10 bg-primary rounded-full p-4 shadow-[0_0_30px_rgba(255,106,0,0.6)] animate-bounce">
                                    <span className="material-symbols-outlined text-white text-3xl">
                                        location_on
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-[#3a2f27] bg-[#120f0c] mt-auto">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 py-12 flex flex-col gap-10">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center rounded bg-primary/20 p-1.5 text-primary">
                                    <span className="material-symbols-outlined text-xl">
                                        garage_home
                                    </span>
                                </div>
                                <h2 className="text-white text-xl font-bold">Garage Rent</h2>
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-[#23170f] border border-[#3a2f27] flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors"
                                >
                                    <span className="material-symbols-outlined text-xl">
                                        public
                                    </span>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-[#23170f] border border-[#3a2f27] flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors"
                                >
                                    <span className="material-symbols-outlined text-xl">
                                        thumb_up
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="h-px w-full bg-[#23170f]"></div>
                        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                            <p>© 2024 Garage Rent Giżycko. Wszelkie prawa zastrzeżone.</p>
                            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                                <a href="#" className="hover:text-primary transition-colors">
                                    Regulamin
                                </a>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Polityka Prywatności
                                </a>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Kontakt
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
