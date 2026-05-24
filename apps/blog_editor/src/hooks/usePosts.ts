import { useEffect, useState } from "react";
import type { Post } from "../models/Post";
import { getPosts } from "../services/posts.service";

interface UsePostsReturn {
    posts: Post[];
    total: number;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export function usePosts(): UsePostsReturn {
    const [posts, setPosts] = useState<Post[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPosts = async () => {
        setLoading(true);
        setError(null);

        try {
            const result = await getPosts();
            setPosts(result.posts);
            setTotal(result.total);
        } catch (err) {
            const message =
                err instanceof Error
                    ? err.message
                    : "Error al cargar los posts";
            setError(message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return { posts, total, loading, error, refetch: fetchPosts };
}
