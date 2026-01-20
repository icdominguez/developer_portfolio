import { useTranslation } from "react-i18next";
import TypingText from "../../components/TypingText";
import TerminalParallax3DEffect from "./TerminalParallax3DEffect";

export default function Home() {
    const { t } = useTranslation();

    return (
        <section id="home">
            <div className="w-full flex items-center justify-center pt-20 pb-20">
                <div className="w-full max-w-7xl grid md:grid-cols-[1.1fr_0.9fr] items-start md:px-8">
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
                    </div>

                    {/* Left Column */}
                    <div className="w-full hidden md:block">
                        <TerminalParallax3DEffect />
                    </div>
                </div>
            </div>
        </section>
    );
}
