import { ExperienceCardType } from "./ExperienceCardType";

export const experienceCardStyles: Record<
    ExperienceCardType,
    { border: string; bg: string; text: string }
> = {
    android: {
        border: "border-emerald-500",
        bg: "bg-emerald-50 dark:bg-emerald-900/30",
        text: "text-emerald-700 dark:text-emerald-300",
    },
    ios: {
        border: "border-blue-500",
        bg: "bg-blue-50 dark:bg-blue-900/30",
        text: "text-blue-700 dark:text-blue-300",
    },
    frontend: {
        border: "border-indigo-500",
        bg: "bg-indigo-50 dark:bg-indigo-900/30",
        text: "text-indigo-700 dark:text-indigo-300",
    },
    backend: {
        border: "border-slate-500",
        bg: "bg-slate-50 dark:bg-slate-900/30",
        text: "text-slate-700 dark:text-slate-300",
    },
    domain: {
        border: "border-amber-500",
        bg: "bg-amber-50 dark:bg-amber-900/30",
        text: "text-amber-700 dark:text-amber-300",
    },
};
