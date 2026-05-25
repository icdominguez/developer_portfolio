import { SPRITE_URL } from "../../constants/paths";
import { translations } from "../../translations/Translations";

type Translations = typeof translations.es;

interface HidePostProps {
    t: Translations;
    isHidden: boolean;
    isLoading: boolean;
    onClick: () => void;
}

export default function HidePost({
    t,
    isHidden,
    isLoading,
    onClick,
}: HidePostProps) {
    return (
        <div className="ml-auto flex items-center gap-2">
            {isLoading && (
                <div className="h-5 w-5 border-2 border-zinc-200 border-t-red-400 rounded-full animate-spin" />
            )}

            <svg
                className={`w-4 h-4 ${isHidden ? "text-red-400" : "text-slate-500"}`}
            >
                <use href={`${SPRITE_URL}#eye-off-icon`} />
            </svg>

            <label className="text-xs text-slate-500">{t.hide_post}</label>

            <button
                onClick={onClick}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none disabled:opacity-60 ${isHidden ? "bg-red-400" : "bg-slate-600"} `}
            >
                <span
                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${isHidden ? "translate-x-4.5" : "translate-x-0.5"}`}
                />
            </button>
        </div>
    );
}
