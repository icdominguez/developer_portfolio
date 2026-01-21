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
        <div className="w-full overflow-hidden relative bg-transparent border-y border-slate-200 dark:border-slate-800 py-4">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-white to-transparent dark:from-slate-900" />
            <div className="inline-flex items-center whitespace-nowrap animate-marquee gap-2 hover:[animation-play-state:paused]">
                <span className="text-xl md:text-2xl text-blue-600 dark:text-blue-400">
                    ✦
                </span>
                {items.map((item, i) => (
                    <span
                        key={i}
                        className="text-xl md:text-2xl font-semibold flex items-center gap-4"
                    >
                        <span>{item}</span>
                        <span className="text-blue-600 dark:text-blue-400">
                            {" "}
                            ✦
                        </span>
                    </span>
                ))}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-white to-transparent dark:from-slate-900" />
        </div>
    );
}
