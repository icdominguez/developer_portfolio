import type React from "react";
import { useState } from "react";
import { DefaultBlogEditorButton } from "../DefaultBlogEditorButton";
import { useLanguage } from "../../contexts/LanguageContext";

interface LinkDialogProps {
    dialogRef: React.RefObject<HTMLDialogElement | null>;
    onConfirm: (url: string, text: string) => void;
}

function LinkDialog({ dialogRef, onConfirm }: LinkDialogProps) {
    const [url, setUrl] = useState("");
    const [text, setText] = useState("");

    const { t } = useLanguage();

    const handleConfirm = () => {
        if (url.trim()) {
            onConfirm(url.trim(), text.trim());
            setUrl("");
            setText("");
            dialogRef.current?.close();
        }
    };

    const handleCancel = () => {
        setUrl("");
        setText("");
        dialogRef.current?.close();
    };

    return (
        <dialog
            ref={dialogRef}
            className="rounded-lg p-6 min-w-96 bg-slate-950 border border-slate-600"
        >
            <h2 className="text-lg font-semibold pb-4 text-slate-100">
                {t.insert_link}
            </h2>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="link-url"
                        className="text-sm font-medium text-slate-200"
                    >
                        URL
                    </label>
                    <input
                        id="link-url"
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://google.com"
                        className="rounded-md border border-slate-700/60 focus:border-blue-500 bg-transparent px-3 py-2 text-sm text-white outline-none transition-colors"
                        autoFocus
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="link-text"
                        className="text-sm font-medium text-slate-200"
                    >
                        {t.text_to_show}
                    </label>
                    <input
                        id="link-text"
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder={t.link_text}
                        className="rounded-md border border-slate-700/60 focus:border-blue-500 bg-transparent px-3 py-2 text-sm text-white outline-none transition-colors"
                    />
                </div>
            </div>

            <div className="flex flex-row-reverse gap-4 pt-5">
                <DefaultBlogEditorButton
                    onClick={handleConfirm}
                    text={t.accept}
                />

                <DefaultBlogEditorButton
                    onClick={handleCancel}
                    variant="outline"
                    text={t.cancel}
                />
            </div>
        </dialog>
    );
}

export default LinkDialog;
