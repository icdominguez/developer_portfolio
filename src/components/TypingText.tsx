import { useEffect, useState } from "react";

export default function TypingText() {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const texts = ["Ismael Cordón", "Android & iOS Developer"];

    useEffect(() => {
        const currentText = texts[textIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseEnd = 1000;
        const pauseStart = 1000;

        const timeout = setTimeout(
            () => {
                if (!isDeleting && displayText === currentText) {
                    setTimeout(() => setIsDeleting(true), pauseStart);
                } else if (isDeleting && displayText === "") {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                } else if (isDeleting) {
                    setDisplayText(
                        currentText.substring(0, displayText.length - 1),
                    );
                } else {
                    setDisplayText(
                        currentText.substring(0, displayText.length + 1),
                    );
                }
            },
            displayText === currentText ? pauseEnd : typingSpeed,
        );

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex]);

    return (
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight min-h-20 md:min-h-25">
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {displayText}
            </span>
            <span className="animate-pulse text-blue-600">|</span>
        </h1>
    );
}
