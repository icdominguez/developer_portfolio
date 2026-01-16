import { HighlightItem } from "./HighlightItem";

export interface ExperienceItem {
    from: Date;
    to: Date | null;
    company: string;
    position: string;
    shortDescription: string;
    highlights: HighlightItem[];
}
