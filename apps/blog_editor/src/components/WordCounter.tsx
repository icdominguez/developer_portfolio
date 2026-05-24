import { SPRITE_URL } from "../constants/paths";
import { useLanguage } from "../contexts/LanguageContext";

interface WordCounterProps {
    wordCount: number;
}

export const WordCounter = ({ wordCount }: WordCounterProps) => {
    const { t } = useLanguage();
    return (
        <div className="flex items-center justify-end gap-2 px-4 py-3 bg-slate-800/50 border-t border-slate-700/60">
            <svg className="w-4 h-4 text-slate-400">
                <use href={`${SPRITE_URL}#pencil-icon`} />
            </svg>
            <p className="text-xs font-medium text-slate-400">
                <span className="text-slate-200 font-semibold">
                    {wordCount}
                </span>{" "}
                {t.words}
            </p>
        </div>
    );
};
