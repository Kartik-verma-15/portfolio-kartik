import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  GraduationCap, 
  Code2, 
  Music2, 
  Rocket, 
  Sparkles, 
  Moon, 
  Sun 
} from "lucide-react";

export default function AboutBento() {
  const [dark, setDark] = useState(true);
  const [hoveredEdu, setHoveredEdu] = useState(false);
  const [hoveredStack, setHoveredStack] = useState(false);

  return (
    <div className="min-h-screen mb-3 p-6 transition-all duration-500 bg-transparent">
      {/* Header Section */}
      <div className="relative flex items-center mb-10 gap-4">
        {/* Animated Line */}
        <motion.div
          className="w-[22px] absolute -left-3 z-20 bg-transparent  border-r-4 border-red-500"
          initial={{ height: 0 }}
          animate={{ height: 56 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl z-0 ml-4 font-audiowide tracking-wider"
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
            delay: 1.0,
            ease: "easeOut",
          }}
        >
          ABOUT
        </motion.h2>
      </div>

      {/* Bento Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 auto-rows-auto md:grid-cols-4 md:auto-rows-[180px]">
        
        {/* PROFILE */}
        <motion.div
          whileHover={{ y: -5 }}
          className="col-span-1 md:row-span-2 rounded-3xl border border-zinc-800 bg-transparent p-5 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="h-44 mt-[3px] w-full rounded-[20px] object-cover"
          />
          <h2 className="mt-4 text-stone-800 text-2xl font-bold">
            Kartik Verma
          </h2>
          <p className="mt-2 text-sm">20,</p>
          <p className="mt-2 text-sm">Delhi, India</p>
          <p className="mt-2 text-sm">UI/UX Designer & Frontend Developer</p>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          onHoverStart={() => setHoveredEdu(true)}
          onHoverEnd={() => setHoveredEdu(false)}
          className={`col-span-1 md:col-span-2 overflow-hidden rounded-3xl border border-zinc-800 bg-neutral-100 p-5 h-auto md:h-[180px] md:hover:h-[380px] transition-all duration-500 ease-in-out ${
            hoveredEdu ? "z-30 text-stone-900" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <GraduationCap />
            <h2 className="text-xl font-semibold">Education</h2>
          </div>

          <div className="mt-[9px] text-stone-900 space-y-3">
            <div>
              <h3 className="text-2xl font-semibold">
                Bachelor of Computer Applications
              </h3>
              <p className="text-sm text-zinc-400">Currently Pursuing</p>
            </div>
            <div>
              <h3 className="mt-2 text-2xl font-semibold">Class XII</h3>
              <p className="text-sm text-zinc-400">Science Stream</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Class X</h3>
              <p className="text-sm text-zinc-400">Secondary Education</p>
            </div>
          </div>
        </motion.div>

        {/* THEME TOGGLE */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setDark(!dark)}
          className="flex flex-col items-center justify-center p-5 rounded-3xl border border-zinc-800 bg-transparent min-h-[140px] md:min-h-full"
        >
          <motion.div animate={{ rotate: dark ? 180 : 0 }}>
            {dark ? <Moon size={40} /> : <Sun size={40} />}
          </motion.div>
          <p className="mt-2 text-2xl">Theme Toggle</p>
        </motion.button>

        {/* TECH STACK */}
        <motion.div
          onHoverStart={() => setHoveredStack(true)}
          onHoverEnd={() => setHoveredStack(false)}
          className={`col-span-1 md:col-span-2 overflow-hidden rounded-3xl border border-zinc-800 bg-neutral-100 p-5 h-auto md:h-[180px] md:hover:h-[380px] transition-all duration-500 ease-in-out ${
            hoveredStack ? "z-20 text-stone-900" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <Code2 />
            <h2 className="text-xl font-semibold">Tech Stack</h2>
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
              "GitHub",
              "Redux",
              "Node.js",
              "Express.js",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                className="rounded-full text-2xl border border-zinc-700 px-4 py-2"
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
            <h2 className="font-semibold text-2xl">Favorite Songs</h2>
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
            <h2 className="font-semibold text-2xl">Currently Building</h2>
          </div>
          <div className="mt-3 text-sm leading-relaxed">
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
            <h2 className="font-semibold text-2xl">Fun Facts</h2>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <p>☕ Coffee &gt; Tea</p>
            <p>🎨 Loves Micro Interactions</p>
            <p>🌙 Night Owl</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
