export const ENDPOINTS = {
    POSTS: "/posts",
    POST_BY_ID: (id: number) => `/posts/${id}`,
    UPDATE_POST: (id: number, publish: boolean) =>
        `/posts/${id}/update?publish=${publish}`,
    PUBLISH_POST: (id: number) => `/posts/${id}/publish`,
    SCHEDULE_POST: (id: number) => `/posts/${id}/schedule`,
    CHANGE_VISIBILITY: (id: number) => `/posts/${id}/visibility`,
    TAGS: "/tags",
} as const;
