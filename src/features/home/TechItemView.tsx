import { useEffect, useRef, useState } from "react";
import { TechItem } from "./types/TechItem";

export default function TechItemView({ techItem }: { techItem: TechItem }) {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.1 },
        );

        itemRef.current && observer.observe(itemRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={itemRef}
            className={`flex flex-row items-center px-4 py-2 rounded-2xl bg-gray-200 dark:bg-slate-800 w-fit transition-all duration-700 ${
                isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
            }`}
        >
            <img className="w-6 h-6" src={techItem.imageUrl} />
            <span className="pl-1 text-md md:text-lg text-center md:text-start text-slate-600 dark:text-slate-300">
                {techItem.name}
            </span>
        </div>
    );
}
