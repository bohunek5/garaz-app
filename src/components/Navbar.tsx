"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between py-6 z-50">
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
                <div className="flex items-center justify-center rounded bg-primary p-1.5 text-black transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-xl">garage_home</span>
                </div>
                <h1 className="text-white text-xl font-bold tracking-wide group-hover:text-primary transition-colors">
                    Garage Rent
                </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium text-sm">
                <Link href="/oferta" className="hover:text-primary transition-colors">
                    Oferta
                </Link>
                <Link href="/cennik" className="hover:text-primary transition-colors">
                    Cennik
                </Link>
                <Link href="/lokalizacja" className="hover:text-primary transition-colors">
                    Lokalizacja
                </Link>
                <Link href="/panel" className="hover:text-primary transition-colors">
                    Panel Klienta
                </Link>
            </div>

            <div className="hidden md:flex gap-4">
                <Link href="/panel">
                    <button className="text-white border border-gray-600 hover:border-white rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5">
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
                <div className="absolute top-full left-0 right-0 bg-[#1a1613] border border-[#3a2f27] rounded-xl p-4 flex flex-col gap-4 md:hidden shadow-2xl animate-fade-in-down mt-2">
                    <Link href="/oferta" className="text-gray-300 hover:text-primary py-2 border-b border-[#3a2f27]" onClick={() => setIsMobileMenuOpen(false)}>
                        Oferta
                    </Link>
                    <Link href="/cennik" className="text-gray-300 hover:text-primary py-2 border-b border-[#3a2f27]" onClick={() => setIsMobileMenuOpen(false)}>
                        Cennik
                    </Link>
                    <Link href="/lokalizacja" className="text-gray-300 hover:text-primary py-2 border-b border-[#3a2f27]" onClick={() => setIsMobileMenuOpen(false)}>
                        Lokalizacja
                    </Link>
                    <Link href="/panel" className="text-primary font-bold py-2" onClick={() => setIsMobileMenuOpen(false)}>
                        Panel Klienta
                    </Link>
                </div>
            )}
        </nav>
    );
}
