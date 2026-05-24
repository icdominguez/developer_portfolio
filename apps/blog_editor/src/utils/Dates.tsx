import { Language } from "../contexts/LanguageContext";

export const formatDateToShortString = (
    date: Date,
    language: Language = "es",
): string => {
    return date.toLocaleDateString(language, {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
};

export const formatDateWithTime = (date: Date, language: Language): string => {
    const locale = language === "es" ? "es-ES" : "en-EN";

    const datePart = date.toLocaleDateString(locale, {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    const timePart = date.toLocaleTimeString(locale, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    return `${language === "es" ? `${datePart} a las ${timePart}` : `${datePart} ${timePart}`}`;
};
