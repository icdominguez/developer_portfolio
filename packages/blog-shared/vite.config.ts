import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

const isWatch = process.argv.includes("--watch") || process.argv.includes("-w");

export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        watch: {
            ignored: ["**/dist/**"],
        },
    },
    build: {
        watch: isWatch ? {
            exclude: ["node_modules/**", "dist/**"],
        } : null,
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "BlogShared",
            fileName: (format) => `blog-shared.${format === "es" ? "js" : "cjs"}`,
            formats: ["es", "cjs"],
        },
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "@tiptap/core",
                "@tiptap/react",
                "@tiptap/starter-kit",
                "tiptap-extension-code-block-shiki",
                "tiptap-extension-resize-image",
                "shiki",
            ],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
                assetFileNames: "styles/[name].[ext]",
            },
        },
    },
});
