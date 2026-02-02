"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#120f0c]/80 backdrop-blur-md border-b border-[#3a2f27]/50 shadow-lg transition-all duration-300">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 cursor-pointer group">
                    <div className="flex items-center justify-center rounded bg-primary p-1.5 text-black transition-transform group-hover:scale-110">
                        <span className="material-symbols-outlined text-xl">garage_home</span>
                    </div>
                    <h1 className="text-white text-xl font-bold tracking-wide group-hover:text-primary transition-colors">
                        Garaż Giżycko 24/7
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-3 text-gray-300 font-medium text-sm">
                    <Link href="/oferta">
                        <button className="px-4 py-2 rounded-lg bg-[#23170f]/60 border border-[#3a2f27] hover:bg-[#2a1d15] hover:border-primary/50 text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">home_repair_service</span>
                            Oferta
                        </button>
                    </Link>
                    <Link href="/cennik">
                        <button className="px-4 py-2 rounded-lg bg-[#23170f]/60 border border-[#3a2f27] hover:bg-[#2a1d15] hover:border-primary/50 text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">payments</span>
                            Cennik
                        </button>
                    </Link>
                    <Link href="/lokalizacja">
                        <button className="px-4 py-2 rounded-lg bg-[#23170f]/60 border border-[#3a2f27] hover:bg-[#2a1d15] hover:border-primary/50 text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">location_on</span>
                            Lokalizacja
                        </button>
                    </Link>
                    <Link href="/panel">
                        <button className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary text-primary hover:text-white transition-all duration-300 flex items-center gap-2 font-semibold">
                            <span className="material-symbols-outlined text-[18px]">account_circle</span>
                            Panel Klienta
                        </button>
                    </Link>
                </div>

                <div className="hidden md:flex gap-4">
                    <Link href="/panel">
                        <button className="text-white bg-primary hover:bg-orange-600 rounded-lg px-5 py-2.5 text-sm font-bold transition-all shadow-lg shadow-orange-900/20 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">login</span>
                            Zaloguj się
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="material-symbols-outlined text-3xl">
                        {isMobileMenuOpen ? "close" : "menu"}
                    </span>
                </button>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-[#1a1613] border border-[#3a2f27] rounded-xl p-4 flex flex-col gap-3 md:hidden shadow-2xl animate-fade-in-down mt-2">
                        <Link href="/oferta" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="w-full px-4 py-3 rounded-lg bg-[#23170f]/60 border border-[#3a2f27] text-gray-300 hover:bg-[#2a1d15] hover:border-primary/50 hover:text-white transition-all duration-300 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[20px]">home_repair_service</span>
                                <span className="flex-1 text-left">Oferta</span>
                            </button>
                        </Link>
                        <Link href="/cennik" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="w-full px-4 py-3 rounded-lg bg-[#23170f]/60 border border-[#3a2f27] text-gray-300 hover:bg-[#2a1d15] hover:border-primary/50 hover:text-white transition-all duration-300 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[20px]">payments</span>
                                <span className="flex-1 text-left">Cennik</span>
                            </button>
                        </Link>
                        <Link href="/lokalizacja" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="w-full px-4 py-3 rounded-lg bg-[#23170f]/60 border border-[#3a2f27] text-gray-300 hover:bg-[#2a1d15] hover:border-primary/50 hover:text-white transition-all duration-300 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[20px]">location_on</span>
                                <span className="flex-1 text-left">Lokalizacja</span>
                            </button>
                        </Link>
                        <Link href="/panel" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="w-full px-4 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-3 font-semibold">
                                <span className="material-symbols-outlined text-[20px]">account_circle</span>
                                <span className="flex-1 text-left">Panel Klienta</span>
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
