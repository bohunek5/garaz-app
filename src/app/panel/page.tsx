"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PanelPage() {
    const [view, setView] = useState("login"); // 'login', 'user', 'admin'
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Smart Garage State
    const [gateOpen, setGateOpen] = useState(false);
    const [lightsOn, setLightsOn] = useState(false);
    const [heatingOn, setHeatingOn] = useState(true);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        if (email === "admin" && password === "admin7") {
            setView("admin");
        } else if (email && password) {
            // Any other credentials -> User Panel
            setView("user");
        } else {
            setError("Wprowadź login i hasło");
        }
    };

    const handleLogout = () => {
        setView("login");
        setEmail("");
        setPassword("");
        setError("");
    };

    return (
        <div className="bg-[#120f0c] min-h-screen font-sans flex flex-col">
            <div className="max-w-[1280px] mx-auto w-full px-4 md:px-10 lg:px-20 flex-grow flex flex-col gap-8">
                <Navbar />

                <main className="flex flex-col gap-10 pb-20">
                    {/* LOGIN VIEW */}
                    {view === "login" && (
                        <div className="max-w-md mx-auto w-full bg-[#1a1613] border border-[#3a2f27] rounded-3xl p-8 md:p-12 flex flex-col gap-8 shadow-2xl mt-12">
                            <div className="flex flex-col gap-2 text-center">
                                <h1 className="text-3xl font-bold text-white">Witaj ponownie</h1>
                                <p className="text-gray-400">Zaloguj się do swojego warsztatu</p>
                            </div>

                            <form onSubmit={handleLogin} className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-400">Email lub Login</label>
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-[#23170f] border border-[#3a2f27] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="np. jan@kowalski.pl"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-400">Hasło</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-[#23170f] border border-[#3a2f27] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="••••••••"
                                    />
                                </div>

                                {error && <p className="text-red-500 text-sm text-center font-medium bg-red-500/10 py-2 rounded-lg">{error}</p>}

                                <button
                                    type="submit"
                                    className="bg-primary hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-orange-900/20"
                                >
                                    Zaloguj się
                                </button>
                            </form>
                            <div className="text-center text-sm text-gray-500">
                                Nie masz konta? <a href="#" className="text-primary hover:underline">Zarejestruj się</a>
                            </div>
                        </div>
                    )}

                    {/* USER DASHBOARD */}
                    {view === "user" && (
                        <>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-4xl font-bold text-white">Panel Klienta</h1>
                                    <p className="text-gray-400">Witaj, Jan! Zarządzaj swoim warsztatem.</p>
                                </div>
                                <button onClick={handleLogout} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                                    <span className="material-symbols-outlined">logout</span> Wyloguj
                                </button>
                            </div>

                            {/* Smart Garage Controls */}
                            <section className="bg-gradient-to-r from-[#23170f] to-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 md:p-8 flex flex-col gap-6">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">smartphone</span>
                                    Smart Garage
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <button
                                        onClick={() => setGateOpen(!gateOpen)}
                                        className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${gateOpen ? 'bg-primary/20 border-primary text-white' : 'bg-[#1a1613] border-[#3a2f27] text-gray-400 hover:border-gray-600'}`}
                                    >
                                        <span className={`material-symbols-outlined text-3xl ${gateOpen ? 'text-primary' : ''}`}>
                                            {gateOpen ? 'gate' : 'fence'}
                                        </span>
                                        <span className="font-bold text-sm">{gateOpen ? 'Brama Otwarta' : 'Brama Zamknięta'}</span>
                                    </button>

                                    <button
                                        onClick={() => setLightsOn(!lightsOn)}
                                        className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${lightsOn ? 'bg-yellow-500/20 border-yellow-500 text-white' : 'bg-[#1a1613] border-[#3a2f27] text-gray-400 hover:border-gray-600'}`}
                                    >
                                        <span className={`material-symbols-outlined text-3xl ${lightsOn ? 'text-yellow-500' : ''}`}>
                                            {lightsOn ? 'lightbulb' : 'light_off'}
                                        </span>
                                        <span className="font-bold text-sm">{lightsOn ? 'Światła Włączone' : 'Światła Wyłączone'}</span>
                                    </button>

                                    <button
                                        onClick={() => setHeatingOn(!heatingOn)}
                                        className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${heatingOn ? 'bg-red-500/20 border-red-500 text-white' : 'bg-[#1a1613] border-[#3a2f27] text-gray-400 hover:border-gray-600'}`}
                                    >
                                        <span className={`material-symbols-outlined text-3xl ${heatingOn ? 'text-red-500' : ''}`}>
                                            thermostat
                                        </span>
                                        <span className="font-bold text-sm">{heatingOn ? 'Ogrzewanie ON' : 'Ogrzewanie OFF'}</span>
                                    </button>
                                </div>
                            </section>

                            {/* Main Content (Stats & Booking) */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm font-medium">Aktywne rezerwacje</span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-4xl font-bold text-white">1</span>
                                        <span className="text-primary text-sm mb-1">nadchodząca</span>
                                    </div>
                                </div>
                                <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm font-medium">Twoje godziny</span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-4xl font-bold text-white">12</span>
                                        <span className="text-gray-500 text-sm mb-1">w tym miesiącu</span>
                                    </div>
                                </div>
                                <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm font-medium">Dostępne środki</span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-4xl font-bold text-white">45 zł</span>
                                        <button className="text-primary text-sm font-bold mb-1 hover:underline">Doładuj konto</button>
                                    </div>
                                </div>
                            </div>

                            <section className="flex flex-col lg:flex-row gap-8">
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
                                        <button className="flex-1 bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors text-sm">Edytuj</button>
                                        <button className="flex-1 bg-transparent border border-[#3a2f27] hover:border-white text-white font-bold py-3 rounded-xl transition-colors text-sm">Anuluj</button>
                                    </div>
                                </div>

                                <div className="flex-1 bg-gradient-to-br from-[#1a1613] to-[#2a1d15] border border-[#3a2f27] rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden">
                                    <div className="relative z-10 flex flex-col gap-4">
                                        <h2 className="text-xl font-bold text-white">Szybka rezerwacja</h2>
                                        <p className="text-gray-400">Potrzebujesz garażu na już? Sprawdź najbliższe wolne terminy.</p>
                                        <button className="w-full bg-white text-black hover:bg-gray-200 font-bold py-3.5 rounded-xl transition-colors text-sm mt-4 flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined">add_circle</span>
                                            Nowa rezerwacja
                                        </button>
                                    </div>
                                    <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[180px] text-white/5 pointer-events-none">garage_home</span>
                                </div>
                            </section>
                        </>
                    )}

                    {/* ADMIN DASHBOARD */}
                    {view === "admin" && (
                        <>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div className="flex flex-col gap-2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-wider w-fit border border-red-500/20">
                                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                        Admin Mode
                                    </div>
                                    <h1 className="text-4xl font-bold text-white">Panel Administratora</h1>
                                </div>
                                <button onClick={handleLogout} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                                    <span className="material-symbols-outlined">logout</span> Wyloguj
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm font-medium">Przychód (Miesięczny)</span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-3xl font-bold text-white">4 250 PLN</span>
                                        <span className="text-green-500 text-xs mb-1 flex items-center">
                                            <span className="material-symbols-outlined text-[16px]">trending_up</span> +12%
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm font-medium">Rezerwacje (Dziś)</span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-3xl font-bold text-white">8/12</span>
                                    </div>
                                </div>
                                <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm font-medium">Nowi Klienci</span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-3xl font-bold text-white">+5</span>
                                    </div>
                                </div>
                                <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm font-medium">Status Systemu</span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-green-500 font-bold">Online</span>
                                        <span className="text-gray-500 text-xs mb-1">v. 2.1.0</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2 bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-8 flex flex-col gap-6">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-xl font-bold text-white">Dzisiejsze Rezerwacje</h2>
                                        <button className="text-primary text-sm font-bold hover:underline">Zobacz pełny kalendarz</button>
                                    </div>
                                    <div className="space-y-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="flex items-center p-4 bg-[#23170f] rounded-xl border border-[#3a2f27] hover:border-primary/30 transition-colors">
                                                <div className="w-16 text-center border-r border-[#3a2f27] pr-4 mr-4">
                                                    <div className="text-white font-bold text-lg">1{i}:00</div>
                                                    <div className="text-gray-500 text-xs">1{i + 1}:00</div>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="text-white font-bold">Stanowisko {i % 2 === 0 ? 'z Podnośnikiem' : 'Standard'}</div>
                                                    <div className="text-gray-400 text-sm">Jan Kowalski (JK-{i}99)</div>
                                                </div>
                                                <div className="text-right">
                                                    <span className={`text-xs px-2 py-1 rounded bg-${i === 1 ? 'green' : 'gray'}-500/10 text-${i === 1 ? 'green' : 'gray'}-500 font-bold uppercase`}>
                                                        {i === 1 ? 'W trakcie' : 'Oczekuje'}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-8 flex flex-col gap-6">
                                    <h2 className="text-xl font-bold text-white">Szybkie Akcje</h2>
                                    <button className="w-full bg-[#23170f] hover:bg-[#2a1d15] border border-[#3a2f27] text-white p-4 rounded-xl flex items-center gap-4 transition-colors text-left group">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">person_add</span>
                                        </div>
                                        <span className="font-medium">Dodaj klienta</span>
                                    </button>
                                    <button className="w-full bg-[#23170f] hover:bg-[#2a1d15] border border-[#3a2f27] text-white p-4 rounded-xl flex items-center gap-4 transition-colors text-left group">
                                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">block</span>
                                        </div>
                                        <span className="font-medium">Zablokuj termin</span>
                                    </button>
                                    <button className="w-full bg-[#23170f] hover:bg-[#2a1d15] border border-[#3a2f27] text-white p-4 rounded-xl flex items-center gap-4 transition-colors text-left group">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">notifications</span>
                                        </div>
                                        <span className="font-medium">Wyślij powiadomienie</span>
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </main>
            </div>
            <Footer />
        </div>
    );
}

