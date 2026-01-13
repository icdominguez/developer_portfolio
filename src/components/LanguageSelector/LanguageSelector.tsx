import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
    const { i18n } = useTranslation();

    const languages = [
        { code: "en", name: "English", flag: "https://flagcdn.com/gb.svg" },
        { code: "es", name: "Español", flag: "https://flagcdn.com/es.svg" },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState("en");
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleLanguageChange = (langCode: string) => {
        setSelectedLang(langCode);
        setIsOpen(false);
        i18n.changeLanguage(langCode);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const currentLanguage =
        languages.find((lang) => lang.code === selectedLang) ?? languages[0];
    return (
        <div ref={dropdownRef} className="relative flex flex-col items-center">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-full bg-cover bg-center bg-no-repeat transition-transform duration-200 hover:scale-110"
                style={{
                    backgroundImage: `url(${currentLanguage.flag})`,
                }}
            ></button>

            {/* Dropdown con círculos de banderas */}
            {isOpen && (
                <div className="absolute top-14 left-1/2 -translate-x-1/2 flex flex-col gap-1.5 z-50 animate-in fade-in duration-200">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`w-10 h-10 rounded-full bg-cover bg-center bg-no-repeat shadow-md transition-all duration-200 outline-none hover:scale-110 ${
                                selectedLang === lang.code
                                    ? "border-3 border-blue-500"
                                    : "border-2 border-gray-300"
                            }`}
                            onClick={() => handleLanguageChange(lang.code)}
                            style={{
                                backgroundImage: `url(${lang.flag})`,
                            }}
                        ></button>
                    ))}
                </div>
            )}
        </div>
    );
}
