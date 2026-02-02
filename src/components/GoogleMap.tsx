"use client";

export default function GoogleMap({ className = "w-full h-full" }: { className?: string }) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Google Map Iframe */}
            <div className="absolute inset-0 bg-[#1a1613]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.6575778848464!2d21.763428977114674!3d54.03816657249405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e1599a0b925555%3A0xe53c35043588974a!2sSybirak%C3%BBw%2028%2C%2011-500%20Gi%C5%BCycko!5e0!3m2!1spl!2spl!4v1706890000000!5m2!1spl!2spl"
                    className="w-full h-full grayscale invert-[0.9] contrast-[1.1] brightness-[0.7] hue-rotate-[180deg] mix-blend-luminosity"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map showing garage location"
                ></iframe>
            </div>

            {/* Custom Marker Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative z-10 -translate-y-6 scale-50">
                    <div className="absolute -inset-4 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
                    <div className="relative z-10 bg-primary rounded-full p-3 shadow-[0_0_30px_rgba(255,106,0,0.8)] animate-bounce border-2 border-white">
                        <span className="material-symbols-outlined text-white text-3xl">
                            location_on
                        </span>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/50 blur-[2px] rounded-full animate-pulse mt-2"></div>
                </div>
            </div>
        </div>
    );
}
