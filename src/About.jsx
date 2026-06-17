import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Moon,
  Sun,
  GraduationCap,
  Code2,
  Music2,
  Rocket,
  Sparkles,
} from "lucide-react";
const aboutText="I am a UI/UX Designer and Frontend Developer passionate about creating modern, intuitive and visually engaging digital experiences."; 
const funkyWords = ["UI", "UX", "Designer", "modern"]; 




export default function AboutBento() {
  const [dark, setDark] = useState(true);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`min-h-screen p-6 transition-all duration-500 bg-transparent`}
    >
      <div className="flex items-center mb-10  gap-4">
  {/* Line */}
  <motion.div
    className="w-[50px] absolute left-0 z-20 bg-transparent border-r-4 border-red-500"
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
      <div className="mx-auto grid max-w-7xl auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-4">

        

        {/* PROFILE */}
        <motion.div
          whileHover={{ y: -5 }}
          className="col-span-1 row-span-2 rounded-3xl border  border-zinc-800 bg-transparent p-5 overflow-hidden"
        >
          <motion.img
            
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-44 mt-[3px] w-full rounded-[20px] object-cover"
          />

          <h2 className="mt-4  text-stone-800 text-2xl font-bold">
            Kartik Verma
          </h2>

          
          <p className="mt-2 text-sm ">
            20,
          </p>
          <p className="mt-2 text-sm ">
            Delhi,India
          </p>
          <p className="mt-2 text-sm ">
            UI/UX Designer & Frontend Developer
          </p>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          initial={{ height: 180 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileHover={{ height: 380 }}
          transition={{ type: "spring" }}
          className={`col-span-2 overflow-hidden rounded-3xl border border-zinc-800  bg-transparent p-5 ${hovered ? "z-30 text-white " : ""}`}
        >
          <div className="flex items-center gap-2">
            <GraduationCap />
            <h2 className="text-xl  font-semibold">
              Education
            </h2>
          </div>

          <div className="mt-[9px] text-stone-900 space-y-3">
            <div>
              <h3 className=" text-2xl font-semibold">
                Bachelor of Computer Applications
              </h3>
              <p className="text-sm text-zinc-400">
                Currently Pursuing
              </p>
            </div>

            <div>
              <h3 className=" mt-2 text-2xl font-semibold">
                Class XII
              </h3>
              <p className="text-sm text-zinc-400">
                Science Stream
              </p>
            </div>

            <div>
              <h3 className=" text-2xl font-semibold">
                Class X
              </h3>
              <p className="text-sm text-zinc-400">
                Secondary Education
              </p>
            </div>
          </div>
        </motion.div>

        {/* THEME */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setDark(!dark)}
          className="flex flex-col items-center justify-center rounded-3xl border border-zinc-800 bg-transparent "
        >
          <motion.div
            animate={{ rotate: dark ? 180 : 0 }}
          >
            {dark ? <Moon size={40} /> : <Sun size={40} />}
          </motion.div>

          <p className="mt-2 text-2xl ">
            Theme Toggle
          </p>
        </motion.button>

        {/* STACK */}
        <motion.div
          initial={{ height: 180 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          onClick={() => (className = "bg-red-500")}
          whileHover={{ height: 380  }}
          transition={{ type: "spring" }}
          className={`col-span-2 overflow-hidden  rounded-3xl border  border-zinc-800 bg-transparent p-5  ${hovered ? "z-20 text-white " : ""}`}
        >
          <div className="flex items-center gap-2">
            <Code2 />
            <h2 className="text-xl font-semibold">
              Tech Stack
            </h2>
          </div>

          <div className="mt-[14px] flex flex-wrap gap-3">
            {[
              "React",
              "Tailwind",
              "Framer Motion",
              "JavaScript",
              "HTML",
              "CSS",
              "Figma",
              "Git",
              
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                  

                }}
                className="rounded-full  text-2xl border border-zinc-700 px-4 py-2"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SONGS */}
        <motion.div
          whileHover={{ y: -4 }}
          className="rounded-3xl border border-zinc-800 bg-transparent p-5"
        >
          <div className="flex items-center gap-2">
            <Music2 />
            <h2 className="font-semibold text-2xl">
              Favorite Songs
            </h2>
          </div>

          <div className="mt-3 space-y-2 text-sm">
            <p>🎵 505</p>
            <p>🎵 Sweater Weather</p>
            <p>🎵 Until I Found You</p>
          </div>
        </motion.div>

        {/* CURRENTLY BUILDING */}
        <motion.div
          whileHover={{ y: -4 }}
          className="rounded-3xl border border-zinc-800 bg-transparent p-5"
        >
          <div className="flex items-center gap-2">
            <Rocket />
            <h2 className="font-semibold text-2xl ">
              Currently Building
            </h2>
          </div>

          <div className="mt-3 text-sm leading-relaxed ">
            Portfolio v2
            <br />
            Learning SVG Filters
            <br />
            React Three Fiber
          </div>
        </motion.div>

        {/* FUN FACTS */}
        <motion.div
          whileHover={{ y: -4 }}
          className="rounded-3xl border border-zinc-800 bg-transparent p-5"
        >
          <div className="flex items-center gap-2">
            <Sparkles />
            <h2 className="font-semibold text-2xl">
              Fun Facts
            </h2>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <p>☕ Coffee  Tea</p>
            <p>🎨 Loves Micro Interactions</p>
            <p>🌙 Night Owl</p>
          </div>
        </motion.div>

        {/* PHILOSOPHY */}
        {/*<motion.div
          whileHover={{
            scale: 1.01,
          }}
          className="col-span-1 md:col-span-4 rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 p-8"
        >
          <p className="text-3xl font-bold leading-relaxed md:text-5xl">
            "Good design attracts users.
            <br />
            Great design disappears and lets them focus
            on what matters."
          </p>
        </motion.div>*/}
      </div>
    </div>
  );
}

