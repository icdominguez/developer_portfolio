import { useEffect, useRef, useState } from "react";
import { ExperienceItem } from "../types/ExperienceItem";
import { ExperienceCard } from "./ExperienceCard";
import { formatExperienceRange } from "../../../DateFormatters";
import { useSettings } from "../../../contexts/SettingsContext";

type TimelineItemProps = {
    item: ExperienceItem;
};

export default function TimelineItem({ item }: TimelineItemProps) {
    const { language } = useSettings();
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.1 }
        );

        itemRef.current && observer.observe(itemRef.current);
        return () => observer.disconnect();
    }, []);

    const dateRange = formatExperienceRange(item.from, item.to, language.code);

    return (
        <div
            ref={itemRef}
            className={`flex gap-4 transition-all duration-700 ${
                isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
            }`}
        >
            <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-linear-to-r from-blue-600 to-cyan-500" />
                <div className="w-0.5 bg-slate-200 dark:bg-slate-700 grow" />
            </div>

            {/* Contenido */}
            <div>
                {/* Periodo */}
                <div className="text-sm text-slate-500 dark:text-slate-400">
                    {dateRange}
                </div>

                {/* Posición */}
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.position}
                </h3>

                {/* Empresa */}
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {item.company}
                </div>

                {/* Descripción corta */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                    {item.shortDescription}
                </p>

                {/* Tags de tecnologías */}
                {item.highlights && item.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 mb-12">
                        {item.highlights.map((highlightItem, index) => (
                            <ExperienceCard
                                key={index}
                                description={highlightItem.description}
                                type={highlightItem.type}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
