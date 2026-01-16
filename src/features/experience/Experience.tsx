import { useTranslation } from "react-i18next";
import Timeline from "./timeline/Timeline";
import { SectionTitle } from "../../components/SectionTitle";
export default function Experience() {
    const { t } = useTranslation();

    return (
        <section
            id="experience"
            className="flex flex-col items-center justify-center pt-12 pb-12"
        >
            <SectionTitle title={t("nav.experience")} />

            <Timeline />
        </section>
    );
}
