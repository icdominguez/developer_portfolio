import { SPRITE_URL } from "../constants/paths";

type DefaultButtonProps = {
    iconId: string;
    onClick?: () => void;
};

export default function DefaultButton({ iconId, onClick }: DefaultButtonProps) {
    return (
        <button
            onClick={onClick}
            className="
            rounded-full w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-slate-300 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
        >
            <svg className="w-6 h-6">
                <use href={`${SPRITE_URL}#${iconId}`} />
            </svg>
        </button>
    );
}
