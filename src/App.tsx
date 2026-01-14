import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./features/about/About";
import Contact from "./features/contact/Contact";
import Experience from "./features/experience/Experience";
import Home from "./features/home/Home";
import Projects from "./features/projects/Projects";

export default function App() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500">
            <NavBar />

            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />

            <Footer />
        </div>
    );
}
