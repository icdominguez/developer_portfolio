import type React from "react";
import { DefaultBlogEditorButton } from "../DefaultBlogEditorButton";
import { useLanguage } from "../../contexts/LanguageContext";

interface DeletePostDialogProps {
    dialogRef: React.RefObject<HTMLDialogElement | null>;
    title: string;
    description: string;
    onConfirm: () => void;
}

function DeletePostDialog({
    dialogRef,
    title,
    description,
    onConfirm,
}: DeletePostDialogProps) {
    const { t } = useLanguage();

    return (
        <dialog
            ref={dialogRef}
            className="rounded-lg p-6 bg-slate-950 border border-slate-600"
        >
            <h2 className="text-lg font-semibold pb-4 text-slate-100">
                {title}
            </h2>
            <p className="text-sm text-slate-500">{description}</p>

            <div className="flex flex-row-reverse gap-4 pt-4">
                <DefaultBlogEditorButton
                    onClick={onConfirm}
                    text={t.delete}
                    variant="danger"
                />

                <DefaultBlogEditorButton
                    onClick={() => {
                        dialogRef?.current?.close();
                    }}
                    text={t.cancel}
                    variant="outline"
                />
            </div>
        </dialog>
    );
}

export default DeletePostDialog;
