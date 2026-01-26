import { useTranslation } from "react-i18next";
import Timeline from "./timeline/Timeline";
import { SectionTitle } from "../../components/SectionTitle";
import DownloadResumeButton from "../../components/DownloadResumeButton";
export default function Experience() {
    const { t } = useTranslation();

    return (
        <section
            id="experience"
            className="flex flex-col items-center justify-center pb-20"
        >
            <SectionTitle title={t("nav.experience")} />

            <Timeline />

            <DownloadResumeButton location="experience" />
        </section>
    );
}
