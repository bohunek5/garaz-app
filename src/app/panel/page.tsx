"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PanelPage() {
    return (
        <div className="bg-[#120f0c] min-h-screen font-sans flex flex-col">
            <div className="max-w-[1280px] mx-auto w-full px-4 md:px-10 lg:px-20 flex-grow flex flex-col gap-8">
                <Navbar />

                <main className="flex flex-col gap-10 pb-20">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-bold text-white">Panel Klienta</h1>
                        <p className="text-gray-400">Witaj, Jan! Zarządzaj swoimi rezerwacjami.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Stats Card 1 */}
                        <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 flex flex-col gap-2">
                            <span className="text-gray-400 text-sm font-medium">Aktywne rezerwacje</span>
                            <div className="flex items-end gap-2">
                                <span className="text-4xl font-bold text-white">1</span>
                                <span className="text-primary text-sm mb-1">nadchodząca</span>
                            </div>
                        </div>

                        {/* Stats Card 2 */}
                        <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 flex flex-col gap-2">
                            <span className="text-gray-400 text-sm font-medium">Twoje godziny</span>
                            <div className="flex items-end gap-2">
                                <span className="text-4xl font-bold text-white">12</span>
                                <span className="text-gray-500 text-sm mb-1">w tym miesiącu</span>
                            </div>
                        </div>

                        {/* Stats Card 3 */}
                        <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 flex flex-col gap-2">
                            <span className="text-gray-400 text-sm font-medium">Dostępne środki</span>
                            <div className="flex items-end gap-2">
                                <span className="text-4xl font-bold text-white">45 zł</span>
                                <button className="text-primary text-sm font-bold mb-1 hover:underline">Doładuj konto</button>
                            </div>
                        </div>
                    </div>

                    <section className="flex flex-col lg:flex-row gap-8">
                        {/* Upcoming Booking */}
                        <div className="flex-1 bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-8 flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-white">Następna wizyta</h2>
                                <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Potwierdzona</span>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4 p-4 bg-[#23170f] rounded-xl border border-[#3a2f27]">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-2xl">calendar_month</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold">12 Października 2023</h3>
                                        <p className="text-gray-400 text-sm">Czwartek</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-[#23170f] rounded-xl border border-[#3a2f27]">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-2xl">schedule</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold">18:00 - 21:00</h3>
                                        <p className="text-gray-400 text-sm">3 godziny | Stanowisko nr 2</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <button className="flex-1 bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors text-sm">
                                    Edytuj rezerwację
                                </button>
                                <button className="flex-1 bg-transparent border border-[#3a2f27] hover:border-white text-white font-bold py-3 rounded-xl transition-colors text-sm">
                                    Anuluj
                                </button>
                            </div>
                        </div>

                        {/* Quick Reservation */}
                        <div className="flex-1 bg-gradient-to-br from-[#1a1613] to-[#2a1d15] border border-[#3a2f27] rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden">
                            <div className="relative z-10 flex flex-col gap-4">
                                <h2 className="text-xl font-bold text-white">Szybka rezerwacja</h2>
                                <p className="text-gray-400">Potrzebujesz garażu na już? Sprawdź najbliższe wolne terminy.</p>
                                <button className="w-full bg-white text-black hover:bg-gray-200 font-bold py-3.5 rounded-xl transition-colors text-sm mt-4 flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">add_circle</span>
                                    Nowa rezerwacja
                                </button>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[180px] text-white/5 pointer-events-none">
                                garage_home
                            </span>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
}
