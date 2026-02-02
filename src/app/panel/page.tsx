"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

export default function PanelPage() {
    const [view, setView] = useState("login"); // 'login', 'user', 'admin'
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Modal states
    const [showAddClientModal, setShowAddClientModal] = useState(false);
    const [showBlockDateModal, setShowBlockDateModal] = useState(false);

    // Smart Garage State (Now Admin Only)
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
        <div className="bg-[#120f0c] min-h-screen font-sans flex flex-col pt-20">
            <Navbar />

            <div className="max-w-[1280px] mx-auto w-full px-4 md:px-10 lg:px-20 flex-grow flex flex-col gap-8">
                <main className="flex flex-col gap-10 pb-20 pt-10">
                    {/* LOGIN VIEW */}
                    {view === "login" && (
                        <div className="max-w-md mx-auto w-full bg-[#1a1613] border border-[#3a2f27] rounded-3xl p-8 md:p-12 flex flex-col gap-8 shadow-2xl mt-12 animate-fade-in">
                            <div className="flex flex-col gap-2 text-center">
                                <h1 className="text-3xl font-bold text-white">Strefa Klienta</h1>
                                <p className="text-gray-400">Garaż Giżycko - Twój warsztat</p>
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

                    {/* USER DASHBOARD (Informational) */}
                    {view === "user" && (
                        <div className="animate-fade-in">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-4xl font-bold text-white">Witaj, Jan!</h1>
                                    <p className="text-gray-400">Oto szczegóły Twojej dzisiejszej wizyty.</p>
                                </div>
                                <button onClick={handleLogout} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                                    <span className="material-symbols-outlined">logout</span> Wyloguj
                                </button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Access Card */}
                                <div className="bg-gradient-to-br from-[#23170f] to-[#1a1613] border border-primary/30 rounded-3xl p-8 md:p-10 flex flex-col justify-center items-center text-center gap-6 shadow-[0_0_50px_rgba(255,106,0,0.1)] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <span className="material-symbols-outlined text-primary text-5xl mb-2">lock_open</span>
                                    <div>
                                        <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Kod Dostępu do Bramy</p>
                                        <div className="text-7xl font-mono font-bold text-white tracking-widest drop-shadow-xl">
                                            4892
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-500 bg-[#120f0c] px-4 py-2 rounded-full border border-[#3a2f27]">
                                        Ważny dzisiaj: 18:00 - 21:00
                                    </div>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 flex flex-col gap-3 hover:border-primary/30 transition-colors">
                                        <span className="material-symbols-outlined text-gray-400 text-3xl">wifi</span>
                                        <span className="text-gray-500 text-xs uppercase font-bold">WiFi</span>
                                        <div className="text-white font-mono text-xl">Garage_Guest</div>
                                        <div className="text-gray-400 text-sm">Hasło: <span className="text-primary font-bold">Smar+Garage24</span></div>
                                    </div>

                                    <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 flex flex-col gap-3 hover:border-primary/30 transition-colors">
                                        <span className="material-symbols-outlined text-gray-400 text-3xl">directions_car</span>
                                        <span className="text-gray-500 text-xs uppercase font-bold">Stanowisko</span>
                                        <div className="text-white text-3xl font-bold">Nr 2</div>
                                        <div className="text-gray-400 text-sm">Podnośnik 4T</div>
                                    </div>

                                    <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 flex flex-col gap-3 sm:col-span-2 hover:border-primary/30 transition-colors cursor-pointer group">
                                        <div className="flex justify-between items-start">
                                            <div className="flex flex-col gap-1">
                                                <span className="material-symbols-outlined text-gray-400 text-3xl group-hover:text-primary transition-colors">help</span>
                                                <span className="text-white font-bold text-lg mt-2">Instrukcja Obsługi</span>
                                            </div>
                                            <span className="material-symbols-outlined text-gray-600 group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
                                        </div>
                                        <p className="text-gray-400 text-sm">Jak obsługiwać podnośnik i gdzie znaleźć narzędzia.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-white font-bold">Jesteś na miejscu?</h3>
                                    <p className="text-gray-400 text-sm">Otwórz bramę zdalnie jeśli kod nie działa.</p>
                                </div>
                                <button className="bg-[#23170f] hover:bg-primary border border-primary/30 text-primary hover:text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2">
                                    <span className="material-symbols-outlined">remote_gen</span>
                                    Otwórz Bramę
                                </button>
                            </div>
                        </div>
                    )}

                    {/* ADMIN DASHBOARD (With Smart Features) */}
                    {view === "admin" && (
                        <div className="animate-fade-in">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                                <div className="flex flex-col gap-2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-wider w-fit border border-red-500/20">
                                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                        Admin Mode
                                    </div>
                                    <h1 className="text-4xl font-bold text-white">Centrum Zarządzania</h1>
                                </div>
                                <button onClick={handleLogout} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                                    <span className="material-symbols-outlined">logout</span> Wyloguj
                                </button>
                            </div>

                            {/* Smart Garage Controls (Now Here) */}
                            <section className="bg-gradient-to-r from-[#23170f] to-[#1a1613] border border-[#3a2f27] rounded-2xl p-6 md:p-8 flex flex-col gap-6 mb-8 shadow-xl">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">smartphone</span>
                                    Smart Garage Control
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <button
                                        onClick={() => setGateOpen(!gateOpen)}
                                        className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${gateOpen ? 'bg-primary/20 border-primary text-white scale-[1.02]' : 'bg-[#1a1613] border-[#3a2f27] text-gray-400 hover:border-gray-600'}`}
                                    >
                                        <span className={`material-symbols-outlined text-3xl transition-transform ${gateOpen ? 'text-primary' : ''}`}>
                                            {gateOpen ? 'gate' : 'fence'}
                                        </span>
                                        <span className="font-bold text-sm">{gateOpen ? 'Brama Otwarta' : 'Brama Zamknięta'}</span>
                                    </button>

                                    <button
                                        onClick={() => setLightsOn(!lightsOn)}
                                        className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${lightsOn ? 'bg-yellow-500/20 border-yellow-500 text-white scale-[1.02]' : 'bg-[#1a1613] border-[#3a2f27] text-gray-400 hover:border-gray-600'}`}
                                    >
                                        <span className={`material-symbols-outlined text-3xl transition-transform ${lightsOn ? 'text-yellow-500' : ''}`}>
                                            {lightsOn ? 'lightbulb' : 'light_off'}
                                        </span>
                                        <span className="font-bold text-sm">{lightsOn ? 'Światła Włączone' : 'Światła Wyłączone'}</span>
                                    </button>

                                    <button
                                        onClick={() => setHeatingOn(!heatingOn)}
                                        className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${heatingOn ? 'bg-red-500/20 border-red-500 text-white scale-[1.02]' : 'bg-[#1a1613] border-[#3a2f27] text-gray-400 hover:border-gray-600'}`}
                                    >
                                        <span className={`material-symbols-outlined text-3xl transition-transform ${heatingOn ? 'text-red-500' : ''}`}>
                                            thermostat
                                        </span>
                                        <span className="font-bold text-sm">{heatingOn ? 'Ogrzewanie ON' : 'Ogrzewanie OFF'}</span>
                                    </button>
                                </div>
                            </section>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
                                    <button
                                        onClick={() => setShowAddClientModal(true)}
                                        className="w-full bg-[#23170f] hover:bg-[#2a1d15] border border-[#3a2f27] text-white p-4 rounded-xl flex items-center gap-4 transition-all hover:scale-[1.02] text-left group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">person_add</span>
                                        </div>
                                        <span className="font-medium">Dodaj klienta</span>
                                    </button>
                                    <button
                                        onClick={() => setShowBlockDateModal(true)}
                                        className="w-full bg-[#23170f] hover:bg-[#2a1d15] border border-[#3a2f27] text-white p-4 rounded-xl flex items-center gap-4 transition-all hover:scale-[1.02] text-left group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">block</span>
                                        </div>
                                        <span className="font-medium">Zablokuj termin</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
            <Footer />

            {/* Add Client Modal */}
            <Modal
                isOpen={showAddClientModal}
                onClose={() => setShowAddClientModal(false)}
                title="Dodaj Nowego Klienta"
                actionLabel="Dodaj"
                onAction={() => {
                    // Handle add client
                    setShowAddClientModal(false);
                }}
            >
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="text-sm text-gray-400 mb-1 block">Imię i Nazwisko</label>
                        <input
                            type="text"
                            placeholder="Jan Kowalski"
                            className="w-full bg-[#23170f] border border-[#3a2f27] text-white rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-400 mb-1 block">Email</label>
                        <input
                            type="email"
                            placeholder="jan@kowalski.pl"
                            className="w-full bg-[#23170f] border border-[#3a2f27] text-white rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-400 mb-1 block">Numer Rejestracyjny</label>
                        <input
                            type="text"
                            placeholder="WN 12345"
                            className="w-full bg-[#23170f] border border-[#3a2f27] text-white rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                </div>
            </Modal>

            {/* Block Date Modal */}
            <Modal
                isOpen={showBlockDateModal}
                onClose={() => setShowBlockDateModal(false)}
                title="Zablokuj Termin"
                actionLabel="Zablokuj"
                onAction={() => {
                    // Handle block date
                    setShowBlockDateModal(false);
                }}
            >
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="text-sm text-gray-400 mb-1 block">Data</label>
                        <input
                            type="date"
                            className="w-full bg-[#23170f] border border-[#3a2f27] text-white rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-sm text-gray-400 mb-1 block">Od</label>
                            <input
                                type="time"
                                className="w-full bg-[#23170f] border border-[#3a2f27] text-white rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-400 mb-1 block">Do</label>
                            <input
                                type="time"
                                className="w-full bg-[#23170f] border border-[#3a2f27] text-white rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm text-gray-400 mb-1 block">Powód (opcjonalnie)</label>
                        <textarea
                            placeholder="np. Konserwacja sprzętu"
                            rows={3}
                            className="w-full bg-[#23170f] border border-[#3a2f27] text-white rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors resize-none"
                        ></textarea>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
