import { useTranslation } from "react-i18next";
import Timeline from "./timeline/Timeline";
export default function Experience() {
    const { t } = useTranslation();

    return (
        <section
            id="experience"
            className="flex flex-col items-center justify-center"
        >
            <h1 className="text-4xl sm:text-6xl font-bold sm:text-left text-center pb-4">
                {t("nav.experience")}
            </h1>

            <Timeline />
        </section>
    );
}
