"use client";

import { useEffect, useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    actionLabel?: string;
    onAction?: () => void;
}

export default function Modal({ isOpen, onClose, title, children, actionLabel, onAction }: ModalProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setVisible(true), 10);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => setVisible(false), 300); // Wait for animation
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!visible && !isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Content */}
            <div className={`relative bg-[#1a1613] border border-[#3a2f27] rounded-2xl w-full max-w-md shadow-2xl transform transition-all duration-300 ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"}`}>
                <div className="flex items-center justify-between p-6 border-b border-[#3a2f27]">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="p-6">
                    {children}
                </div>

                <div className="p-6 pt-0 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg border border-[#3a2f27] text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                    >
                        Anuluj
                    </button>
                    {actionLabel && onAction && (
                        <button
                            onClick={onAction}
                            className="bg-primary hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg shadow-orange-900/20"
                        >
                            {actionLabel}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
