import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import { ArrowUpRight } from "lucide-react";


function ProjectCard({ title, description }) {

  return (

    <motion.div

      whileHover={{

        y: -10,

        scale: 1.03,

      }}

      transition={{

        type: "linear",

        stiffness: 200,

      }}

      className="

        group

        relative

        overflow-hidden

        rounded-3xl

        border border-black/20

        bg-white/50

        backdrop-blur-xl

        p-[12px]

        shadow-xl

        cursor-pointer

      "

    >

      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />



      <h3 className="text-3xl font-bold mb-4 relative z-10">

        {title}

      </h3>



      <p className="text-gray-600 relative z-10">

        {description}

      </p>

    </motion.div>

  );

}
 

const projectsData = [
  {
    id: 1,
    title: "Go Shadows",
    description: "Natural personal care and body wellness brand.",
    image: "https://res.cloudinary.com/dlexbwlfv/image/upload/v1781547505/ChatGPT_Image_Jun_15_2026_11_47_43_PM_fdfacs.png",
    link: "https://gosadows.vercel.app", // Replace with your actual link
  },
  {
    id: 2,
    title: "Veru UI",
    description: "A comprehensive, animated UI , modern UI component library.",
    image: "https://res.cloudinary.com/dlexbwlfv/image/upload/v1781547113/ChatGPT_Image_Jun_15_2026_11_38_51_PM_roe7z7.png",
    link: "https://veru-ui.vercel.app", // Replace with your actual link
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen w-screen bg-[#F2F2F2] p-8 md:p-16 font-sans">
      {/* Header matching your original screenshot */}
      <div className="flex items-center md: gap-3 mb-16">
        <div className="w-1 h-14 bg-yellow-400"></div>
        <h2 className="text-5xl font-black font-audiowide tracking-tight text-black">PROJECTS</h2>
      </div>

      {/* Apple-style Horizontal Carousel Container */}
      <div className="flex flex-row justify-center md:justify-start  items-center flex-wrap gap-10">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            initial="rest"
            whileHover="hover"
            animate="rest"
            // Smooth scaling effect on the whole card like Apple's App Store
            whileTap={{ scale: 0.98 }}
            className="group relative w-72 h-[32rem] rounded-[2.5rem] overflow-hidden bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] cursor-pointer"
          >
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-[350px] h-full object-cover"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.05 } // Subtle zoom on the image
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* Hover Overlay Content */}
            <motion.div
              variants={{
                rest: { opacity: 0, y: 20 },
                hover: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0  flex flex-col justify-end p-6"
            >
              <div className="flex items-end justify-between gap-4">
                <div className="text-stone-900">
                  <h3 className="text-5xl font-bold mb-1 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-base text-black font-medium line-clamp-1">
                    {project.description}
                  </p>
                </div>
                
                {/* Link Arrow */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-colors duration-300 border border-white/10"
                >
                  <ArrowUpRight className="text-stone-900 w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}





