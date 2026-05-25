import type { Tag } from "./Tag";

export const PostStatus = {
    DRAFT: "draft",
    PUBLISHED: "published",
    SCHEDULED: "scheduled",
    HIDDEN: "hidden",
} as const;

export type PostStatusType = (typeof PostStatus)[keyof typeof PostStatus];

export interface Post {
    id: number;
    title: string;
    titleEs: string;
    description: string;
    descriptionEs: string;
    content: string;
    contentEs: string;
    status: PostStatusType;
    tag: Tag;
    readingTime: number;
    scheduleAt: Date | null;
    publishedAt: Date | null;
    updatedAt: Date;
    createdAt: Date;
}
