import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            nav: {
                home: "Home",
                about: "About",
                projects: "Projects",
                experience: "Experience",
                contact: "Contact",
            },
        },
    },
    es: {
        translation: {
            nav: {
                home: "Inicio",
                about: "Acerca de",
                projects: "Proyectos",
                experience: "Experiencia",
                contact: "Contacto",
            },
        },
    },
};

export default i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});
