import { useEffect, useState } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

const sections = ["home", "about", "projects", "skills", "contact"];

export default function Navigator() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          threshold: 0.5,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <>
      {/* Vertical Navigator */}
      <div className="fixed right-6 top-1/2 z-100 flex -translate-y-1/2 flex-col gap-5">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() =>
              document
                .getElementById(section)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`h-[3px] rounded-full transition-all duration-300 cursor-pointer ${
              activeSection === section
                ? "w-12 bg-red-500"
                : "w-8 bg-black hover:w-10"
            }`}
          />
        ))}
      </div>

      {/* Sections */}
      <section
        id="home"
        className="h-screen text-5xl flex items-center justify-center font-audiowide"
      >
        <Home/>
      </section>

      <section
        id="about"
        className="h-screen flex items-center justify-center bg-gray-100 text-5xl font-bold"
      >
        <About/>
      </section>

      <section
        id="projects"
        className="h-screen flex items-center justify-center bg-gray-200 text-5xl font-bold"
      >
        <Projects/>
      </section>

      <section
        id="skills"
        className="h-screen flex items-center justify-center bg-gray-300 text-5xl font-bold"
      >
        Skills
      </section>

      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-gray-400 text-5xl font-bold"
      >
        Contact
      </section>
    </>
  );
}