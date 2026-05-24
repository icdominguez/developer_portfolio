// packages/blog-shared/src/extensions/YoutubeAutoEmbed.ts
import { Youtube } from "@tiptap/extension-youtube";

export const YoutubeAutoEmbed = Youtube.extend({
    addPasteRules() {
        return [
            {
                find: /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/g,
                handler({ match, chain, range }) {
                    chain()
                        .deleteRange(range)
                        .setYoutubeVideo({ src: match[0] })
                        .run();
                },
            },
        ];
    },
});
