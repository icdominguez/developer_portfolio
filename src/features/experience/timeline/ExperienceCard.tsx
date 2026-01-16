import { experienceCardStyles } from "../types/ExperienceCardStyles";
import { ExperienceCardType } from "../types/ExperienceCardType";

type ExperienceCardProps = {
    description: string;
    type: ExperienceCardType;
};

export function ExperienceCard({ description, type }: ExperienceCardProps) {
    const styles = experienceCardStyles[type];

    return (
        <div
            className={`px-3 py-1 text-xs font-medium ${styles.bg} ${styles.border} border rounded-full`}
        >
            <p className={`text-xs ${styles.text}`}>{description}</p>
        </div>
    );
}
