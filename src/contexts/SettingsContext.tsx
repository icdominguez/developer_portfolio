import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { useTranslation } from "react-i18next";

type Theme = "light" | "dark";
interface Language {
    code: "es" | "en";
    flag: string;
    name: string;
}

interface SettingsContextType {
    theme: Theme;
    toggleTheme: () => void;
    language: Language;
    switchLanguage: (language: Language) => void;
}

export const LANGUAGES: Record<string, Language> = {
    es: { code: "es", flag: "https://flagcdn.com/es.svg", name: "Español" },
    en: { code: "en", flag: "https://flagcdn.com/gb.svg", name: "English" },
};

const getSystemTheme = (): Theme => {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return "dark";
    }
    return "light";
};

const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split("-")[0];
    return LANGUAGES[browserLang] || LANGUAGES.es;
};

const SettingsContext = createContext<SettingsContextType | undefined>(
    undefined
);

export function SettingsProvider({ children }: { children: ReactNode }) {
    const { i18n } = useTranslation();

    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem("theme");
        return (savedTheme as Theme) || getSystemTheme();
    });

    const [language, setLanguage] = useState<Language>(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            try {
                return JSON.parse(savedLanguage) as Language;
            } catch {
                return getBrowserLanguage();
            }
        }
        return getBrowserLanguage();
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);

        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    useEffect(() => {
        localStorage.setItem("language", JSON.stringify(language));
        i18n.changeLanguage(language.code);
    }, [language]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const switchLanguage = (newLanguage: Language) => {
        setLanguage(newLanguage);
    };

    return (
        <SettingsContext.Provider
            value={{ theme, language, toggleTheme, switchLanguage }}
        >
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error("useSettings must be used within a SettingsProvider");
    }
    return context;
}
