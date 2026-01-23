import { useTranslation } from "react-i18next";
import { SPRITE_URL } from "../../constants/paths";
import { Project } from "./types/Project";

export default function ProjectItem({ project }: { project: Project }) {
    const { t } = useTranslation();

    return (
        <div className="group relative bg-white dark:bg-slate-800/50 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-70 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-100 can-hover:opacity-0 transition-opacity duration-300 flex items-end justify-end p-4">
                    <a
                        href={project.projectUrl}
                        className="pointer-events-auto flex items-center gap-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 dark:hover:bg-slate-700 hover:border-blue-500 rounded-xl px-4 py-2 text-sm font-semibold hover:bg-white opacity-100 translate-y-0 can-hover:opacity-0 can-hover:translate-y-2 can-hover:group-hover:opacity-100 can-hover:group-hover:translate-0 transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg className="w-6 h-6">
                            <use href={`${SPRITE_URL}#github-icon`} />
                        </svg>
                        <p>Source Code</p>
                        <svg className="w-6 h-6">
                            <use href={`${SPRITE_URL}#go-arrow-icon`} />
                        </svg>
                    </a>
                </div>
                <img
                    className="w-full h-full object-cover transform transition-transform duration-500 ease-out can-hover:group-hover:scale-105"
                    src={project.imageUrl}
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {t(project.description)}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
