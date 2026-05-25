import { useEffect } from "react";

interface ServerFeedbackToastProps {
    message: string;
    type: "success" | "error";
    onClose: () => void;
}

export function ServerFeedbackToast({ message, type, onClose }: ServerFeedbackToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

    return (
        <div className={`fixed bottom-6 right-6 text-white px-6 py-3 rounded-lg shadow-lg ${bgColor} z-50 flex items-center gap-3 transition-all font-medium`}>
            {type === "success" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            )}
            {message}
        </div>
    );
}
