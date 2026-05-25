import { SPRITE_URL } from "../../constants/paths";
import type { Post } from "../../models/Post";

interface ReadingTimeProps {
    selectedPost: Post;
    setSelectedPost: (post: Post) => void;
    t: any;
}

export function ReadingTime({ selectedPost, setSelectedPost, t }: ReadingTimeProps) {
    return (
        <div className="flex gap-2 items-center">
            <svg className="w-4 h-4">
                <use href={`${SPRITE_URL}#timer-icon`} />
            </svg>

            <p className="font-medium text-xs">
                {t.reading_time} (min)
            </p>

            <input
                id="read_time_input"
                type="number"
                min={1}
                placeholder="5"
                value={selectedPost.readingTime}
                onChange={(e) => {
                    const readingTime = parseInt(
                        e.target.value,
                        10,
                    );
                    if (!isNaN(readingTime)) {
                        setSelectedPost({
                            ...selectedPost,
                            readingTime: readingTime,
                        });
                    }
                }}
                className="rounded-md border border-slate-600 focus:border-blue-500 bg-slate-800 px-3 py-1 shadow-sm text-sm text-slate-300 w-16 h-7 outline-none"
            />
        </div>
    )
}