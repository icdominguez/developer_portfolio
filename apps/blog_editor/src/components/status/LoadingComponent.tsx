import { SPRITE_URL } from "../../constants/paths";
import { translations } from "../../translations/Translations";

type Translations = typeof translations.es;

interface LoadingComponentProps {
    t: Translations;
}

export function LoadingComponent({ t }: LoadingComponentProps) {
    return (
        <div className="h-screen flex items-center justify-center bg-slate-900">
            <div className="flex flex-col items-center gap-8 w-full max-w-xs px-6">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg bg-slate-950 animate-zoom-in-out">
                        <svg className="w-8 h-8">
                            <use href={`${SPRITE_URL}#brand-logo`} />
                        </svg>
                    </div>
                    <p className="text-sm font-semibold text-slate-200">
                        Blog Editor
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
                        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                            <div className="h-2.5 rounded-full bg-slate-700 w-30" />
                            <div className="h-2 rounded-full bg-slate-600 w-40" />
                        </div>

                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 bg-green-500/30 text-green-400">
                            Android
                        </span>
                    </div>

                    <div className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
                        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                            <div className="h-2.5 rounded-full bg-slate-700 w-40" />
                            <div className="h-2 rounded-full bg-slate-600 w-20" />
                        </div>

                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 bg-blue-500/30 text-blue-400">
                            iOS
                        </span>
                    </div>

                    <div className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
                        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                            <div className="h-2.5 rounded-full bg-slate-700 w-25" />
                            <div className="h-2 rounded-full bg-slate-600 w-35" />
                        </div>

                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 bg-purple-500/30 text-purple-400">
                            IA
                        </span>
                    </div>

                    <div className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
                        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                            <div className="h-2.5 rounded-full bg-slate-700 w-40" />
                            <div className="h-2 rounded-full bg-slate-600 w-28" />
                        </div>

                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 bg-green-500/30 text-green-400">
                            Android
                        </span>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center gap-2">
                    <div className="h-5 w-5 border-2 border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>
                    <p className="text-xs text-slate-500">{t.loading_posts}</p>
                </div>
            </div>
        </div>
    );
}
