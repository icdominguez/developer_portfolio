import { useState } from "react";
import ChangeThemeButton from "./ChangeThemeButton";
import DefaultButton from "./DefaultButton";

export default function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const links = [
        { to: "home", label: "Home" },
        { to: "about", label: "About" },
        { to: "experience", label: "Experience" },
        { to: "projects", label: "Projects" },
        { to: "contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 w-full pt-4 pb-4 bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                {/* Name */}
                <h1
                    className="cursor-pointer text-xl font-bold 
                    bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent 
                    hover:underline hover:underline-offset-4 hover:decoration-cyan-500"
                >
                    IC
                </h1>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map(({ to, label }) => (
                        <a
                            key={to}
                            href={`#${to}`}
                            className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
                        >
                            {label}
                        </a>
                    ))}

                    <ChangeThemeButton />
                </div>

                {/* Mobile buttons */}
                <div className="md:hidden flex items-center gap-3">
                    <ChangeThemeButton />

                    <DefaultButton
                        iconId={isMenuOpen ? "close-icon" : "menu-icon"}
                        onClick={() => setMenuOpen(!isMenuOpen)}
                    />
                </div>

                {/* Mobile menu */}
                <div
                    className={`fixed top-16 left-0 right-0 z-40 md:hidden bg-white dark:bg-slate-950 shadow-lg transition-all duration-300 ${
                        isMenuOpen
                            ? "top-16 opacity-100"
                            : "-top-full opacity-0 pointer-events-none"
                    }`}
                >
                    <ul className="flex flex-col text-sm">
                        {links.map(({ to, label }) => (
                            <li key={to} className="w-full">
                                <a
                                    key={to}
                                    href={`#${to}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="block py-2 px-6"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
