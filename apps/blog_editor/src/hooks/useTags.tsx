import { useEffect, useState } from "react";
import type { Tag } from "../models/Tag";
import { getAllTags } from "../services/posts.service";

interface UseTagsReturn {
    tags: Tag[],
    loading: boolean;
    error: string | null;
}

export function useTags(): UseTagsReturn {
    const [tags, setTags] = useState<Tag[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchTags();
    }, []);

    const fetchTags = async () => {
        setLoading(true)
        setError(null)

        try {
            const tags = await getAllTags()
            setTags(tags)
        } catch (error: any) {
            const message = error.response?.data?.message || "Error al obtener las etiquetas"
            setError(message)
        } finally {
            setLoading(false)
        }
    };

    return { tags, loading, error };
}