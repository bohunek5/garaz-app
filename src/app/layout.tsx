import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Garaż Giżycko 24/7 | Wynajem Garażu z Wyposażeniem Warsztatowym",
    description: "Wynajmij w pełni wyposażony garaż w Giżycku. Podnośniki, narzędzia specjalistyczne, ogrzewanie. Dostępny 24/7. Idealne miejsce do naprawy i detailingu Twojego samochodu.",
    keywords: "wynajem garażu Giżycko, garaż warsztatowy, podnośnik samochodowy, naprawa auta Giżycko, detailing Giżycko, garaż z wyposażeniem",
    authors: [{ name: "Garaż Giżycko" }],
    icons: {
        icon: "/garaz-app/favicon.png",
    },
    openGraph: {
        title: "Garaż Giżycko 24/7 | Wynajem Garażu z Wyposażeniem",
        description: "Wynajmij w pełni wyposażony garaż w Giżycku. Podnośniki, narzędzia, ogrzewanie. Dostępny 24/7.",
        type: "website",
        locale: "pl_PL",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" />
            </head>
            <body className={`${inter.variable} font-sans bg-[#1A1A1A] text-white antialiased`}>
                {children}
            </body>
        </html>
    );
}
