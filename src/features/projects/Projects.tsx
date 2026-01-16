import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../components/SectionTitle";

export default function Projects() {
    const { t } = useTranslation();

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50"
        >
            <SectionTitle title={t("nav.projects")} />
        </section>
    );
}
