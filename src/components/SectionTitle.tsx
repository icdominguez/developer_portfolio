type SectionTitleProps = {
    title: string;
};

export function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div className="w-full mx-auto pb-4">
            <div className="text-center relative">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h2 className="text-6xl md:text-9xl font-bold bg-linear-to-r from-slate-200/0 to-slate-200/30 dark:from-slate-700/0 dark:to-slate-700/30 bg-clip-text text-transparent">
                        {title.toUpperCase()}
                    </h2>
                </div>

                <h2 className="text-3xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 relative">
                    {title}
                </h2>
            </div>
        </div>
    );
}
