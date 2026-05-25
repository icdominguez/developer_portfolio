import { SPRITE_URL } from "../../constants/paths";
import { formatDateToShortString } from "../../utils/Dates";
import { translations } from "../../translations/Translations";
import { Language } from "../../contexts/LanguageContext";

type Translations = typeof translations.es;

interface DatesInfoProps {
    t: Translations;
    language: Language;
    createdAt: Date | null | undefined;
    updatedAt: Date | null | undefined;
}

export function DatesInfo({ t, language, createdAt, updatedAt }: DatesInfoProps) {
    if (!createdAt) return null;

    return (
        <div className="border-b border-slate-700/60 px-4 py-2 flex items-center gap-5 flex-wrap text-xs text-slate-500">
            <div className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5">
                    <use href={`${SPRITE_URL}#calendar-icon`} />
                </svg>

                <p>
                    {t.created_on}
                    {formatDateToShortString(createdAt, language)}
                </p>
            </div>

            {updatedAt && (
                <div className="flex items-center gap-2.5">
                    <svg className="w-3.5 h-3.5">
                        <use href={`${SPRITE_URL}#updated-icon`} />
                    </svg>
                    <p>
                        {t.updated_on}
                        {formatDateToShortString(
                            updatedAt,
                            language,
                        )}
                    </p>
                </div>
            )}
        </div>
    );
}
