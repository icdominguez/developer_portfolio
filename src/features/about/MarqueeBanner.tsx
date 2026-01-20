import { useTranslation } from "react-i18next";

export default function MarqueeBanner() {
    const { t } = useTranslation();

    const items = [
        "Idea",
        t("about.marquee.architecture"),
        "Backend & APIs",
        "Android / iOS",
        t("about.marquee.production"),
        t("about.marquee.scalability"),
    ];

    return (
        <div className="w-full overflow-hidden bg-linear-to-r from-blue-600 to-cyan-500 py-4">
            <div className="inline-flex items-center whitespace-nowrap animate-marquee gap-2 hover:[animation-play-state:paused]">
                <span className="text-xl md:text-2xl">✦</span>
                {items.map((item, i) => (
                    <span
                        key={i}
                        className="text-xl md:text-2xl font-semibold flex items-center gap-4"
                    >
                        <span>{item} ✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
