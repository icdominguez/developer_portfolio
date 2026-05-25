import { translations } from "../../translations/Translations";
import { SPRITE_URL } from "../../constants/paths";
import { DefaultBlogEditorButton } from "../DefaultBlogEditorButton";

type Translations = typeof translations.es;

interface NoPostComponentProps {
    t: Translations;
    onCreateFirstEntryClick: () => void;
}

export function NoPostComponent({
    t,
    onCreateFirstEntryClick,
}: NoPostComponentProps) {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-6 bg-slate-900">
            <div className="relative">
                <div className="absolute -left-5 top-2 w-40 h-24 bg-slate-800 border border-slate-700 rounded-xl shadow-sm -rotate-6 opacity-60" />
                <div className="absolute -right-5 top-2 w-40 h-24 bg-slate-800 border border-slate-700 rounded-xl shadow-sm -rotate-6 opacity-60" />

                <div className="relative w-44 h-28 bg-slate-800 border border-slate-700 rounded-xl shadow-md flex flex-col justify-center items-center gap-2 px-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md bg-slate-900">
                        <svg className="w-6 h-6">
                            <use href={`${SPRITE_URL}#brand-logo`} />
                        </svg>
                    </div>

                    <div className="space-y-1.5 w-full">
                        <div className="h-2 rounded-full bg-slate-700 w-full" />
                        <div className="h-2 rounded-full bg-slate-700 w-3/4" />
                    </div>

                    <div className="absolute -top-3 -right-3 w-7 h-7 bg-amber-400 rounded-full flex items-center justify-center shadow star-animate">
                        <svg className="w-4 h-4 text-white">
                            <use href={`${SPRITE_URL}#star-icon`} />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <h2 className="text-lg font-semibold text-slate-200">
                    {t.no_posts_yet}
                </h2>
                <p className="text-sm text-slate-500 text-center whitespace-pre-line leading-relaxed">
                    {t.start_creating_your_posts}
                </p>
            </div>

            <div>
                <DefaultBlogEditorButton
                    onClick={onCreateFirstEntryClick}
                    icon="plus-icon"
                    text={t.create_first_post}
                />
            </div>
        </div>
    );
}
