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
            home: {
                description:
                    "I build high-quality native Android and iOS applications, developing the backend as well to deliver true end-to-end solutions. I focus on clean, scalable code, on-time delivery, and products that get real results",
            },
            about: {
                marquee: {
                    architecture: "Architecture",
                    production: "Production",
                    scalability: "Scalability",
                },
                years_of_experience: "Years of experience",
                apps_developed: "Apps developed",
                apps_in_store: "Apps in store",
                description: `I’m a mobile developer with <1> over 5 years of experience</1> building native Android applications, consistently working across backend systems throughout my career. 
                    
                    My core expertise is <1>native mobile development</1>, and I’m currently expanding my work into iOS while focusing on freelance projects. 
                    
                    I design and build products <1> end-to-end</1> from database modeling and server setup to delivering production-ready mobile apps. I focus on <1>scalable architecture, clean code, and turning ideas into reliable, real-world applications.</1>`,
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
                    "Have a <1>project in mind</1>, or a <1>question</1>?",
            },
            experience: {
                descriptions: {
                    appsoluciones:
                        "Employee tracking and company management project for multiple companies. Fully developed the solution: app design, database creation, REST API development, and iOS and Android app construction, taking the project from initial concept to a functional product currently in the market.",
                    stradivarius:
                        "Development of the official Stradivarius app for Android developed in Kotlin, leading the migration of the interface from XML to Jetpack Compose and the incorporation of new features.",
                    astrata:
                        "Development of mobile applications for the transport and logistics sector, in React Native and native Android, taking part in defining the architecture, creating new apps from scratch, and improving existing solutions, along with the associated backend.",
                    hasten: "Android native application development for bus ticket sales, integrated with the Redsys payment platform.",
                    icp: "Development of mobile applications for the transport and logistics sector, focused on truck drivers and supported by device features such as Google Maps, camera, and location services, involving frontend and backend.",
                    serban: "Implementation of biometric solutions for mobile and web environments, including voice, signature, and recognition systems. Cross-functional work on frontend and backend, with a focus on the integration and robustness of Android solutions.",
                },
            },
            download_resume: "Resume",
            greeting: "Hi I'm",
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
            home: {
                description:
                    "Creo aplicaciones nativas de alta calidad para Android e iOS, desarrollando también el backend para ofrecer soluciones completas. Me centro en crear código limpio y escalable, cumplir con los plazos de entrega y crear productos que obtengan resultados reales.",
            },
            about: {
                marquee: {
                    architecture: "Arquitectura",
                    production: "Producción",
                    scalability: "Escalabilidad",
                },
                years_of_experience: "Años de experiencia",
                apps_developed: "Apps desarrolladas",
                apps_in_store: "Apps en la tienda",
                description: `Soy desarrollador móvil <1> con más de 5 años de experiencia</1> creando aplicaciones nativas para Android, trabajando consistentemente en sistemas backend durante toda mi carrera.

                    Mi especialidad principal es <1>desarrollo móvil nativo</1>, y actualmente estoy expandiendo mi trabajo hacia iOS mientras me enfoco en proyectos freelance.

                    Diseño y construyo productos <1>end-to-end</1> desde el modelado de base de datos y la configuración del servidor hasta la entrega de aplicaciones móviles listas para producción. Me enfoco en <1>arquitectura escalable, código limpio y transformar ideas en aplicaciones confiables del mundo real.</1>`,
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
                    "Tienes un <1>proyecto en mente</1>, o alguna <1>pregunta</1>?",
            },
            experience: {
                descriptions: {
                    appsoluciones:
                        "Proyecto de fichaje y gestión de empleados para distintas empresas. Solución end-to-end: diseño de la aplicación, creación de la base de datos, implementación de la REST API y construcción de las apps iOS y Android, llevando el proyecto desde la idea inicial hasta un producto en producción.",
                    stradivarius:
                        "Evolución de la aplicación oficial de Stradivarius para Android en producción, desarrollada en Kotlin, liderando la migración de la interfaz de XML a Jetpack Compose y la incorporación de nuevas funcionalidades.",
                    astrata:
                        "Desarrollo de aplicaciones móviles para el sector transporte y logística, en React Native y Android nativo, participando en la definición de la arquitectura, la creación desde cero de nuevas apps y la mejora de soluciones existentes, junto con el backend asociado.",
                    hasten: "Desarrollo de una aplicación Android nativa para la venta de billetes de autobús, integrada con la plataforma de pago Redsys.",
                    icp: "Desarrollo de aplicaciones móviles Android para el sector transporte y logística, orientadas a camioneros y apoyadas en funcionalidades del dispositivo como Google Maps, cámara y servicios de localización, participando en frontend y backend.",
                    serban: "Implementación de soluciones biométricas para entornos móviles y web, incluyendo sistemas de voz, firma y reconocimiento. Trabajo transversal en frontend y backend, con foco en la integración y robustez de las soluciones Android.",
                },
            },
            download_resume: "Curriculum",
            greeting: "Hola, soy",
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
