import { motion } from "framer-motion";
import React from "react";

function Skillcard({ name, link }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="drop-shadow-xl flex-shrink-0 flex justify-center items-center backdrop-blur-lg shadow-black md:w-[266px] md:h-[410px] w-[200px] h-[280px] bg-stone-900/50 rounded-[27px]"
    >
      <img
        src={link}
        alt={name}
        className="md:w-64 md:h-[400px] w-[190px] h-[270px] rounded-3xl"
      />
    </motion.div>
  );
}

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      link: "https://res.cloudinary.com/dlexbwlfv/image/upload/v1781123831/ChatGPT_Image_Jun_11_2026_01_35_46_AM_wzoqut.png",
    },
    {
      name: "Tailwind CSS",
      link: "https://res.cloudinary.com/dlexbwlfv/image/upload/v1781123832/ChatGPT_Image_Jun_11_2026_02_00_38_AM_ckcgrg.png",
    },
    {
      name: "JavaScript",
      link: "https://res.cloudinary.com/dlexbwlfv/image/upload/v1781290949/ChatGPT_Image_Jun_12_2026_11_59_30_PM_k8kkx9.png",
    },
    {
      name: "React",
      link: "https://res.cloudinary.com/dlexbwlfv/image/upload/v1781290950/ChatGPT_Image_Jun_12_2026_11_59_25_PM_haacli.png",
    },
    {
      name: "Node.js",
      link: "https://res.cloudinary.com/dlexbwlfv/image/upload/v1781290950/ChatGPT_Image_Jun_13_2026_12_01_44_AM_vfawe4.png",
    },
    {
      name: "MongoDB",
      link: "https://res.cloudinary.com/dlexbwlfv/image/upload/v1781290950/ChatGPT_Image_Jun_13_2026_12_29_51_AM_alxdq4.png",
    },
  ];

  return (
    <section
      id="skills"
      className="w-full overflow-hidden py-20"
    >
<div className="flex items-center mb-6 gap-4">
  {/* Line */}
  <motion.div
    className="w-[50px] absolute left-0 z-20 bg-neutral-100 border-r-4 border-lime-400"
    initial={{ height: 0 }}
    animate={{ height: 56 }} // h-14 = 56px
    transition={{
      duration: 0.6,
      ease: "easeOut",
    }}
  />

  {/* Heading */}
  <motion.h2
    className="text-5xl z-0 ml-16 font-audiowide tracking-wider"
    initial={{
      x: -100,
      opacity: 0,
    }}
    animate={{
      x: 0,
      opacity: 1,
    }}
    transition={{
      duration: 1.5,
      delay: 1.0, // starts after line finishes
      ease: "easeOut",
    }}
  >
    SKILLS
  </motion.h2>
</div>
        
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <Skillcard
            key={index}
            name={skill.name}
            link={skill.link}
          />
        ))}
      </motion.div>
    </section>
  );
}



