import { useTranslation } from "react-i18next";
import TypingText from "../../components/TypingText";
import TerminalParallax3DEffect from "./TerminalParallax3DEffect";
import { SPRITE_URL } from "../../constants/paths";
import SocialButton from "../../components/SocialButton";
import DownloadResumeButton from "../../components/DownloadResumeButton";
import { trackOutboundClick } from "../../analytics/umami";

export default function Home() {
    const { t } = useTranslation();

    const handleGithubClick = () => {
        trackOutboundClick("github");
        window.open("https://github.com/icdominguez", "_blank");
    };

    const handleLinkedinClick = () => {
        trackOutboundClick("linkedin");
        window.open(
            "https://linkedin.com/in/ismael-cordon-dominguez/",
            "_blank",
        );
    };

    return (
        <section id="home">
            <div className="w-full flex items-center justify-center pt-20 pb-20">
                <div className="w-full max-w-7xl grid md:grid-cols-[1.1fr_0.9fr] items-start px-4 md:px-8">
                    {/* Left Column */}
                    <div className="w-full flex flex-col items-center md:items-start">
                        <div className="flex flex-row items-center">
                            <span className="inline-block animate-wave text-3xl sm:text-4xl lg:text-6xl">
                                👋
                            </span>
                            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold px-4">
                                {t("greeting")}
                            </h1>
                        </div>

                        <div className="mt-4">
                            <TypingText />
                        </div>

                        <p className="text-md md:text-lg text-center md:text-start text-slate-600 dark:text-slate-300 leading-relaxed mb-12 max-w-2xl">
                            {t("home.description")}
                        </p>

                        <div className="flex flex-row gap-4 items-center">
                            <DownloadResumeButton location="home" />

                            <SocialButton
                                icon={`${SPRITE_URL}#github-icon`}
                                onClick={handleGithubClick}
                                label="GitHub button"
                            />

                            <SocialButton
                                icon={`${SPRITE_URL}#linkedin-icon`}
                                onClick={handleLinkedinClick}
                                label="LinkedIn button"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full hidden md:flex h-full items-center justify-center pl-4">
                        <TerminalParallax3DEffect />
                    </div>
                </div>
            </div>
        </section>
    );
}
