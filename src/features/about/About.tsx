import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../components/SectionTitle";
import MarqueeBanner from "./MarqueeBanner";

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about">
            <div className="w-full flex flex-col items-center justify-center pt-20 pb-10">
                <SectionTitle title={t("nav.about")} />

                <MarqueeBanner />
            </div>
        </section>
    );
}
