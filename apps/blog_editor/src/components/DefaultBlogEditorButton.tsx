import type { ButtonHTMLAttributes } from "react";
import { SPRITE_URL } from "../constants/paths";

type ButtonVariant = 'primary' | 'success' | 'danger' | 'outline';

interface DefaultBlogEditorButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    icon?: string;
    text: string;
    variant?: ButtonVariant;
}

const BASE_CLASSES = "flex cursor-pointer items-center justify-center px-4 py-1.5 gap-2 shadow-sm rounded-md font-medium text-sm transition-colors h-8 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

const STYLE_MAP: Record<ButtonVariant, string> = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white border border-transparent",
    success: "bg-emerald-600 hover:bg-emerald-700 text-white border border-transparent",
    danger: "bg-red-500 hover:bg-red-600 text-white border border-transparent",
    outline: "bg-transparent border border-slate-600 text-slate-300 hover:bg-slate-800",
};

export const DefaultBlogEditorButton = ({
    onClick,
    icon,
    text,
    variant = "primary",
    className = "",
    ...props
}: DefaultBlogEditorButtonProps) => {

    const buttonClasses = `${BASE_CLASSES} ${STYLE_MAP[variant]} ${className}`;

    return (
        <button
            onClick={onClick}
            className={buttonClasses} {...props}
        >
            {icon && (
                <svg className="w-4 h-4 text-white">
                    <use href={`${SPRITE_URL}#${icon}`} />
                </svg>
            )}
            {text}
        </button>
    );
};
