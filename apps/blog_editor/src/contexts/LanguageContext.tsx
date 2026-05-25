import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { translations } from "../translations/Translations";

export type Language = "es" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (typeof translations)["es"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
    // 1. Inicializamos el estado leyendo primero el localStorage
    const [language, setLanguage] = useState<Language>(() => {
        // Intentamos leer si ya había un idioma guardado previamente
        const savedLanguage = localStorage.getItem("app-language");

        // Comprobamos que lo que haya guardado sea válido ("es" o "en")
        if (savedLanguage === "es" || savedLanguage === "en") {
            return savedLanguage;
        }
        // Si no hay nada guardado, por defecto ponemos "es"
        return "es";
    });

    // 2. Cada vez que 'language' cambie, lo guardamos automáticamente
    useEffect(() => {
        localStorage.setItem("app-language", language);
    }, [language]);

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error(
            "useLanguage debe usarse dentro de un LanguageProvider",
        );
    }
    return context;
}
