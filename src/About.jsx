import React from "react";
import { motion } from "framer-motion";
const aboutText="I am a UI/UX Designer and Frontend Developer passionate about creating modern, intuitive and visually engaging digital experiences."; 
const funkyWords = ["UI", "UX", "Designer", "modern"]; 

function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-screen px-10 py-20 bg-neutral-100"
    >
      {/* Heading */}
      

<div className="flex items-center  gap-4">
  {/* Line */}
  <motion.div
    className="w-[50px] absolute left-0 z-20 bg-[#ececec] border-r-4 border-red-500"
    initial={{ height: 0 }}
    animate={{ height: 56 }} // h-14 = 56px
    transition={{
      duration: 0.6,
      ease: "easeOut",
    }}
  />

  {/* Heading */}
  <motion.h2
    className="text-5xl z-0 ml-4 font-audiowide tracking-wider"
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
    ABOUT
  </motion.h2>
</div>

      {/* Content */}
      



{/* Typewriter Paragraph */}



<p className="mt-12 text-xl text-gray-600 leading-relaxed max-w-3xl">

  {aboutText.split(" ").map((word, index) => (

    <motion.span

      key={index}

      initial={{

        opacity: 0,

        scale: 1,

      }}

      whileInView={{

        opacity: 1,

        scale: funkyWords.includes(word) ? 1.6 : 1,

      }}

      viewport={{ once: true }}

      transition={{

        delay: 1.2 + index * 0.08,

        duration: 0.4,

      }}

      className="inline-block mr-2"

    >

      {word}

    </motion.span>

  ))}

</p>
      
    </section>
  );
}

export default About;