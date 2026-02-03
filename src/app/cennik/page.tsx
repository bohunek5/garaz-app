"use client";

import Footer from "@/components/Footer";

export default function PricingPage() {
    return (
        <div className="bg-[#120f0c] min-h-screen font-sans flex flex-col">
            <div className="max-w-[1280px] mx-auto w-full px-4 md:px-10 lg:px-20 flex-grow flex flex-col gap-8">


                <main className="flex flex-col gap-12 pb-20">
                    <div className="flex flex-col gap-4 text-center py-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Cennik</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Przejrzyste zasady, brak ukrytych opłat. <br />
                            Im dłużej naprawiasz, tym mniej płacisz za godzinę.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-3xl border border-[#3a2f27]">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#23170f] text-gray-400 border-b border-[#3a2f27]">
                                    <th className="p-6 font-medium">Czas wynajmu</th>
                                    <th className="p-6 font-medium">Stanowisko Standard</th>
                                    <th className="p-6 font-medium">Stanowisko z Podnośnikiem</th>
                                </tr>
                            </thead>
                            <tbody className="text-white divide-y divide-[#3a2f27] bg-[#1a1613]">
                                <tr className="hover:bg-[#23170f] transition-colors">
                                    <td className="p-6 font-bold">1 godzina</td>
                                    <td className="p-6">35 PLN</td>
                                    <td className="p-6 text-primary font-bold">45 PLN</td>
                                </tr>
                                <tr className="hover:bg-[#23170f] transition-colors">
                                    <td className="p-6 font-bold">3 godziny (pakiet)</td>
                                    <td className="p-6">90 PLN <span className="text-xs text-green-500 ml-2">-15%</span></td>
                                    <td className="p-6 text-primary font-bold">120 PLN <span className="text-xs text-green-500 ml-2">-10%</span></td>
                                </tr>
                                <tr className="hover:bg-[#23170f] transition-colors">
                                    <td className="p-6 font-bold">Cały dzień (12h)</td>
                                    <td className="p-6">300 PLN</td>
                                    <td className="p-6 text-primary font-bold">400 PLN</td>
                                </tr>
                                <tr className="hover:bg-[#23170f] transition-colors">
                                    <td className="p-6 font-bold">Nocka (22:00 - 06:00)</td>
                                    <td className="p-6">200 PLN</td>
                                    <td className="p-6 text-primary font-bold">280 PLN</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#1a1613] border border-[#3a2f27] rounded-2xl p-8 flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">add_circle</span>
                                Usługi dodatkowe
                            </h3>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex justify-between items-center border-b border-[#3a2f27] pb-2">
                                    <span>Pomoc mechanika (konsultacja)</span>
                                    <span className="text-white font-bold">50 PLN / h</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-[#3a2f27] pb-2">
                                    <span>Utylizacja oleju / płynów</span>
                                    <span className="text-white font-bold">10 PLN</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-[#3a2f27] pb-2">
                                    <span>Wynajem spawarki MIG/MAG</span>
                                    <span className="text-white font-bold">40 PLN / h</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-[#3a2f27] pb-2">
                                    <span>Kawa z ekspresu</span>
                                    <span className="text-green-500 font-bold text-sm uppercase">Gratis</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-primary/20 to-orange-900/10 border border-primary/30 rounded-2xl p-8 flex flex-col justify-center gap-6 text-center">
                            <h3 className="text-2xl font-bold text-white">Karnet Miesięczny</h3>
                            <p className="text-gray-300">
                                Jesteś pasjonatem i często majsterkujesz? <br /> Wykup abonament i korzystaj bez limitu godzin*!
                            </p>
                            <div className="text-5xl font-bold text-white">
                                999 <span className="text-lg font-normal text-gray-400">PLN / mc</span>
                            </div>
                            <button className="bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors w-fit mx-auto mt-2">
                                Zamów karnet
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-2">*Obowiązuje limit rezerwacji max 4h dziennie.</p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
