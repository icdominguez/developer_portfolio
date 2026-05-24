import { useLanguage } from "../contexts/LanguageContext";

interface Props {
    onBeforeLanguageChange?: () => void;
}

export function LanguageSelector({ onBeforeLanguageChange }: Props) {
    const { language, setLanguage } = useLanguage();

    const handleChange = (lang: "es" | "en") => {
        onBeforeLanguageChange?.();
        setLanguage(lang);
    };

    return (
        <div className="flex items-center gap-1 bg-slate-800/60 rounded-lg p-0.5 border border-slate-700/50">
            <button
                onClick={() => handleChange("es")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer group ${
                    language === "es"
                        ? "bg-blue-600 text-white shadow"
                        : "text-slate-400 hover:text-slate-200"
                }`}
            >
                <span className="transition-transform group-hover:scale-110">
                    🇪🇸
                </span>
                ES
            </button>
            <button
                onClick={() => handleChange("en")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer group ${
                    language === "en"
                        ? "bg-blue-600 text-white shadow"
                        : "text-slate-400 hover:text-slate-200"
                }`}
            >
                <span className="transition-transform group-hover:scale-110">
                    🇬🇧
                </span>
                EN
            </button>
        </div>
    );
}
