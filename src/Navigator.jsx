import { useEffect, useState } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skill";
import Footer from "./Footer";
import AboutBento from "./About";
import {ProjectBento} from "./Bento";


const sections = ["home", "about", "projects", "skills", "Footer"];
export default function Navigator() {
  const [activeSection, setActiveSection] = useState("home");
   useEffect(() => { const observers = []; sections.forEach((id) => { const section = document.getElementById(id); 
    if (!section) return;
     const observer = new IntersectionObserver( ([entry]) => { if (entry.isIntersecting) { setActiveSection(id); } }, { threshold: 0.5, } ); observer.observe(section); observers.push(observer); }); return () => observers.forEach((obs) => obs.disconnect()); }, []);

  // observer code...

  return (
    <>
      <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-5">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() =>
              document
                .getElementById(section)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`h-[3px] rounded-full transition-all duration-300 ${
              activeSection === section
                ? "w-12 bg-red-500"
                : "w-8 bg-black hover:w-10"
            }`}
          />
        ))}
      </div>

      <section id="home" className="min-h-screen">
        <Home />
      </section>

      <section id="about" className="min-h-screen bg-neutral-100">
        <AboutBento />
      </section>

      <section id="projects" className="min-h-screen bg-neutral-100">
        <ProjectBento />
      </section>

      <section id="skills" className="min-h-screen bg-neutral-100">
        <Skills />
      </section>

      <section id="Footer" className="min-h-[33vh] bg-white">
        <Footer />
      </section>
    </>
  );
}