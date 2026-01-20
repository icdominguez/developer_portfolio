import { useState } from "react";

export default function TerminalParallax3DEffect() {
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;

        setTransform({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
        setTransform({ rotateX: 0, rotateY: 0 });
    };

    return (
        <div className="perspective-[1000px]" style={{ perspective: "1000px" }}>
            <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="transition-transform duration-200 ease-out cursor-pointer"
                style={{
                    transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
                    transformStyle: "preserve-3d",
                }}
            >
                <div className="bg-terminal-bg rounded-lg shadow-2xl border border-slate-800 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-slate-400 text-sm">
                            Developer.kt
                        </span>
                    </div>
                    <div className="p-4 md:p-6 overflow-x-auto">
                        <code>
                            <div>
                                <span className="text-terminal-orange">
                                    val{" "}
                                </span>
                                <span className="text-white">
                                    developer = Developer(
                                </span>
                            </div>
                            <div className="ml-4">
                                <span className="text-terminal-blue">
                                    name ={" "}
                                </span>
                                <span className="text-terminal-green">
                                    "Ismael Cordón"
                                </span>
                                <span className="text-white">,</span>
                            </div>
                            <div className="ml-4">
                                <span className="text-terminal-blue">
                                    skills ={" "}
                                </span>
                                <span className="italic text-white">
                                    listOf(
                                </span>
                                <span className="text-terminal-green">
                                    "Kotlin", "Swift", "NodeJS", "Typescript",
                                    "PostgreSQL"
                                </span>
                                <span className="text-white">)</span>
                                <span className="text-white">,</span>
                            </div>
                            <div className="ml-4">
                                <span className="text-terminal-blue">
                                    focuses ={" "}
                                </span>
                                <span className="italic text-white">
                                    listOf(
                                </span>
                                <span className="text-terminal-green">
                                    "Mobile Native development", "backend"
                                </span>
                                <span className="text-white">)</span>
                                <span className="text-white">,</span>
                            </div>
                            <div className="ml-4">
                                <span className="text-terminal-blue">
                                    learning ={" "}
                                </span>
                                <span className="text-terminal-green">
                                    "Always"
                                </span>
                            </div>
                            <div>
                                <span className="text-white">)</span>
                            </div>
                        </code>
                    </div>
                </div>
            </div>
        </div>
    );
}
