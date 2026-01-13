import { useEffect, useState } from "react";
import { SPRITE_URL } from "../constants/paths";

export default function ChangeThemeButton() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="rounded-full w-10 h-10 flex items-center justify-center text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-600 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300"
            aria-label="Change theme"
        >
            <svg className="w-6 h-6">
                <use
                    href={`${SPRITE_URL}#${isDark ? "moon-icon" : "sun-icon"}`}
                />
            </svg>
        </button>
    );
}
