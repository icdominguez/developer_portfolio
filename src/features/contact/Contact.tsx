import { useState } from "react";
import { SPRITE_URL } from "../../constants/paths";
import { useTranslation, Trans } from "react-i18next";
import { SectionTitle } from "../../components/SectionTitle";

export default function Contact() {
    const { t } = useTranslation();

    const [touched, setTouched] = useState({
        email: false,
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true,
        });
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(formData.email);
    const showEmailError = touched.email && !isEmailValid;

    const isFormComplete =
        formData.name.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.message.trim() !== "";

    const isSubmitDisabled = !isFormComplete || !isEmailValid;

    return (
        <section
            id="contact"
            className="flex flex-col items-center bg-slate-50/50 dark:bg-slate-900/50"
        >
            <SectionTitle title={t("nav.contact")} />

            <Trans
                i18nKey="contact.have_a_project_in_mind"
                components={{
                    1: (
                        <span className="text-blue-600 dark:text-blue-400 font-bold" />
                    ),
                    3: (
                        <span className="text-blue-600 dark:text-blue-400 font-bold" />
                    ),
                }}
                parent="span"
            ></Trans>

            <span className="text-center">
                {t("contact.feel_free_to_reach_out")}
            </span>

            <form
                className="w-full max-w-xl mx-auto px-4 py-4 sm:px-0 pt-4 pb-12"
                onSubmit={handleSubmit}
            >
                <div className="w-full flex flex-col pb-4">
                    <label
                        className="w-full text-sm font-medium pb-2 flex flex-row items-center"
                        htmlFor="name"
                    >
                        <svg className="w-4 h-4 text-blue-500">
                            <use href={`${SPRITE_URL}#user-icon`} />
                        </svg>
                        <span className="px-2 font-normal">
                            {t("contact.name")}{" "}
                            <span className="text-red-500">*</span>
                        </span>
                    </label>
                    <input
                        className="flex w-full border px-3 py-1 text-base shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder={t("contact.your_name")}
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full flex flex-col pb-4">
                    <label
                        className="w-full text-sm font-medium pb-2 flex flex-row items-center"
                        htmlFor="email"
                    >
                        <svg className="w-4 h-4 text-blue-500">
                            <use href={`${SPRITE_URL}#email-icon`} />
                        </svg>
                        <span className="px-2 font-normal">
                            {t("contact.email")}{" "}
                            <span className="text-red-500">*</span>
                        </span>
                    </label>
                    <input
                        className={`flex w-full border px-3 py-1 text-base shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 rounded-xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 transition-all ${
                            showEmailError
                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                : "border-slate-200 dark:border-slate-700 focus:ring-blue-500 focus:border-transparent"
                        }`}
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder={t("contact.your_email")}
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {showEmailError && (
                        <p className="text-red-500 text-sm italic pt-2">
                            Invalid email. Please review it.
                        </p>
                    )}
                </div>
                <div className="w-full flex flex-col pb-12">
                    <label
                        className="w-full text-sm font-medium pb-2 flex flex-row items-center"
                        htmlFor="message"
                    >
                        <svg className="w-4 h-4 text-blue-500">
                            <use href={`${SPRITE_URL}#chat-icon`} />
                        </svg>
                        <span className="px-2 font-normal">
                            {t("contact.message")}{" "}
                            <span className="text-red-500">*</span>
                        </span>
                    </label>
                    <textarea
                        className="flex w-full border px-3 py-1 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        id="message"
                        name="message"
                        rows={6}
                        placeholder={t("contact.your_message")}
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isSubmitDisabled}
                >
                    <svg className="w-6 h-6">
                        <use href={`${SPRITE_URL}#send-icon`} />
                    </svg>
                    {t("contact.send_message")}
                </button>
            </form>
        </section>
    );
}
