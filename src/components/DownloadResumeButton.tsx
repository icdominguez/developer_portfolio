import { useTranslation } from "react-i18next";
import { SPRITE_URL } from "../constants/paths";
import { LANGUAGES, useSettings } from "../contexts/SettingsContext";

export default function DownloadResumeButton() {
    const { t } = useTranslation();
    const { language } = useSettings();

    function handleClick() {
        const fileId =
            language === LANGUAGES.es
                ? "17ewbaEn5sv_eAczE5Hl1GMK1NutXY3Qm"
                : "1JxAZUsugRaDX9UIK5rxnkNmfSqgKsoP2";
        const resumeUrl = `https://drive.google.com/file/d/${fileId}/view?usp=drive_link`;
        window.open(resumeUrl, "_blank");
    }

    return (
        <button
            onClick={handleClick}
            className="group flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
        >
            <svg className="w-5 h-5 group-hover:animate-bounce">
                <use href={`${SPRITE_URL}#download-icon`} />
            </svg>
            {t("download_resume")}
        </button>
    );
}
