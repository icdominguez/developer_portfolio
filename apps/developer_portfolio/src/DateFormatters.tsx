export function formatExperienceDate(
    date: Date | null,
    locale: "es" | "en"
): string {
    if (!date) {
        return locale === "es" ? "Actual" : "Present";
    }

    return new Intl.DateTimeFormat(locale, {
        month: "short",
        year: "numeric",
    }).format(date);
}

export function formatExperienceRange(
    from: Date,
    to: Date | null,
    locale: "es" | "en"
): string {
    return `${formatExperienceDate(from, locale)} - ${formatExperienceDate(
        to,
        locale
    )}`;
}
