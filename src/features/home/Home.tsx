import { useTranslation } from "react-i18next";
import TypingText from "../../components/TypingText";

export default function Home() {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center"
        >
            <div className="flex flex-col w-full items-center justify-center">
                <div className="flex flow-col">
                    <div className="flex flex-row">
                        <span className="inline-block animate-wave text-3xl sm:text-4xl lg:text-6xl">
                            👋
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold px-4">
                            {t("greeting")}
                        </h1>
                    </div>
                </div>

                <TypingText />
            </div>
        </section>
    );
}
