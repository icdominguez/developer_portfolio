import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../components/SectionTitle";

export default function Home() {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center"
        >
            <SectionTitle title={t("nav.home")} />
        </section>
    );
}
