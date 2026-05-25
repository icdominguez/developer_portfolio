import type React from "react";
import { useState } from "react";
import { SPRITE_URL } from "../../constants/paths";
import { DefaultBlogEditorButton } from "../DefaultBlogEditorButton";
import { useLanguage } from "../../contexts/LanguageContext";

interface SchedulePostDialogProps {
    dialogRef: React.RefObject<HTMLDialogElement | null>;
    onConfirm: (date: string, time: string) => void;
}

function SchedulePostDialog({ dialogRef, onConfirm }: SchedulePostDialogProps) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const { t } = useLanguage();

    const handleConfirm = () => {
        if (date && time) {
            onConfirm(date, time);
            setDate("");
            setTime("");
            dialogRef.current?.close();
        }
    };

    const handleCancel = () => {
        setDate("");
        setTime("");
        dialogRef.current?.close();
    };

    return (
        <dialog
            ref={dialogRef}
            className="rounded-lg p-6 min-w-96  bg-slate-950 border border-slate-600"
        >
            <div className="flex items-center gap-2 pb-2">
                <svg className="w-5 h-5 text-blue-500">
                    <use href={`${SPRITE_URL}#timer-icon`} />
                </svg>
                <h2 className="text-lg font-semibold text-slate-100">
                    {t.schedule_post}
                </h2>
            </div>

            <p className="text-sm text-slate-500 mb-6">
                {t.schedule_post_select_date}
            </p>

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="schedule-date"
                        className="text-sm font-medium text-slate-200"
                    >
                        {t.date}
                    </label>
                    <div className="relative">
                        <input
                            id="schedule-date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full rounded-md border border-slate-700/60 focus:border-blue-500 bg-transparent px-3 py-2 text-sm text-white outline-none transition-colors"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="schedule-time"
                        className="text-sm font-medium text-slate-200"
                    >
                        {t.hour}
                    </label>
                    <div className="relative">
                        <input
                            id="schedule-time"
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full rounded-md border border-slate-700/60 focus:border-blue-500 bg-transparent px-3 py-2 text-sm text-white outline-none transition-colors"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-row-reverse gap-4 pt-6">
                <DefaultBlogEditorButton
                    onClick={handleConfirm}
                    text={t.save}
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

export default SchedulePostDialog;
