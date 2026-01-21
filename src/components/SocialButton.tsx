type SocialButtonProps = {
    icon: string;
    onClick: () => void;
    label: string;
};

export default function SocialButton({
    icon,
    onClick,
    label,
}: SocialButtonProps) {
    return (
        <button
            onClick={onClick}
            className="group relative inline-flex items-center justify-center w-14 h-14 rounded-full cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300"
            aria-label={label}
        >
            <svg className="w-6 h-6">
                <use href={`${icon}`} />
            </svg>
        </button>
    );
}
