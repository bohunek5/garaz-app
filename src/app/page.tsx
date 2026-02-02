```javascript
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#120f0c] min-h-screen font-sans flex flex-col">
      <div className="max-w-[1280px] mx-auto w-full px-4 md:px-10 lg:px-20 flex-grow flex flex-col gap-12 md:gap-24">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full rounded-3xl overflow-hidden min-h-[600px] flex items-center bg-black">
             {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src="/garaz-app/hero-bg.png" 
                    alt="Garage workshop background" 
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 px-8 md:px-16 flex flex-col gap-8 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3a2f27]/50 border border-primary/30 w-fit backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-xs uppercase tracking-wider font-bold text-primary">
                      Dostępne Teraz
                    </span>
                 </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    Twój własny <br/> warsztat na <br/> godziny w <span className="text-primary">Giżycku</span>
                </h1>
                
                <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                    Profesjonalna przestrzeń przy ul. Sybiraków 28. <br className="hidden md:block"/>
                    Wynajmij stanowisko z podnośnikiem, napraw swoje <br className="hidden md:block"/>
                    auto i wyjedź z satysfakcją.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <Link href="/panel">
                        <button className="h-12 px-8 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-900/20 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                            Zarezerwuj termin
                            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                        </button>
                    </Link>
                    <Link href="/cennik">
                        <button className="h-12 px-8 rounded-lg bg-[#23170f]/80 backdrop-blur-sm border border-gray-600 hover:bg-gray-800 text-white font-medium text-sm transition-all flex items-center justify-center w-full sm:w-auto">
                            Zobacz cennik
                        </button>
                    </Link>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400 font-medium mt-4">
                     <span className="material-symbols-outlined text-primary text-[20px]">star</span>
                     <span className="text-white font-bold">4.9/5</span>
                     <span>na podstawie 120+ opinii</span>
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
            <Link
              className="text-primary font-bold hover:underline inline-flex items-center gap-1"
              href="/oferta"
            >
              Zobacz pełną listę narzędzi
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
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
        <section className="flex flex-col lg:flex-row gap-8 rounded-2xl bg-[#23170f] border border-[#3a2f27] overflow-hidden mb-12">
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
            <Link href="/lokalizacja">
                <button className="mt-4 flex items-center justify-center gap-2 rounded-lg h-12 px-6 border border-gray-600 hover:border-white text-white font-medium transition-colors w-fit">
                <span className="material-symbols-outlined text-[20px]">map</span>
                <span>Nawiguj do nas</span>
                </button>
            </Link>
          </div>
          <div className="flex-1 min-h-[400px] lg:min-h-auto relative bg-[#1a1613]">
            <GoogleMap />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
```
