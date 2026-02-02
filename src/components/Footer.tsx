export default function Footer() {
    return (
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
                            <span className="material-symbols-outlined text-xl">public</span>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-[#23170f] border border-[#3a2f27] flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-xl">thumb_up</span>
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
    );
}
