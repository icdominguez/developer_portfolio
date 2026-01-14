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
            contact: {
                do_you_like_my_work: "Do you like my work?",
                your_name: "Your name",
                name: "Name",
                your_email: "Your email",
                email: "Email",
                your_message: "Your message",
                message: "Message",
                send_message: "Send message",
                feel_free_to_reach_out:
                    "Feel free to reach out, I'm always open to connect!",
                have_a_project_in_mind:
                    "Have a <1>project in mind</1>, or a <3>question</3>?",
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
            contact: {
                do_you_like_my_work: "¿Te ha gustado mi trabajo?",
                your_name: "Tu nombre",
                name: "Nombre",
                your_email: "Tu correo",
                email: "Correo",
                your_message: "Tu mensaje",
                message: "Mensaje",
                send_message: "Enviar mensaje",
                feel_free_to_reach_out:
                    "No dudes en ponerte en contacto conmigo, ¡siempre estoy dispuesto a conectar!",
                have_a_project_in_mind:
                    "Tienes un <1>proyecto en mente</1>, o alguna <3>pregunta</3>?",
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
