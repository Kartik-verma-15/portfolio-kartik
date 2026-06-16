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
      className={`min-h-screen p-6 transition-all duration-500 ${
        dark
          ? "bg-zinc-950 text-white"
          : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <div className="mx-auto grid max-w-7xl auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-4">

        {/* PROFILE */}
        <motion.div
          whileHover={{ y: -5 }}
          className="col-span-1 row-span-2 rounded-3xl border border-zinc-800 bg-zinc-900 p-5 overflow-hidden"
        >
          <motion.img
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43d?w=800"
            alt=""
            className="h-44 w-full rounded-2xl object-cover"
          />

          <h2 className="mt-4 text-2xl font-bold">
            Kartik Verma
          </h2>

          <p className="mt-2 text-zinc-400">
            UI/UX Designer & Frontend Developer
          </p>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          initial={{ height: 180 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileHover={{ height: 320 }}
          transition={{ type: "spring" }}
          className={`col-span-2 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-5 ${hovered ? "z-20 text-white " : ""}`}
        >
          <div className="flex items-center gap-2">
            <GraduationCap />
            <h2 className="text-xl font-semibold">
              Education
            </h2>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <h3 className="font-semibold">
                Bachelor of Computer Applications
              </h3>
              <p className="text-sm text-zinc-400">
                Currently Pursuing
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Class XII
              </h3>
              <p className="text-sm text-zinc-400">
                Science Stream
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
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
          className="flex flex-col items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900"
        >
          <motion.div
            animate={{ rotate: dark ? 180 : 0 }}
          >
            {dark ? <Moon size={40} /> : <Sun size={40} />}
          </motion.div>

          <p className="mt-2">
            Theme Toggle
          </p>
        </motion.button>

        {/* STACK */}
        <motion.div
          onClick={() => (className = "bg-red-500")}
          whileHover={{ height: 280 , className: "bg-zinc-500 z-20 text-white",}}
          transition={{ type: "spring" }}
          className="col-span-2 overflow-hidden  rounded-3xl border border-zinc-800 bg-zinc-900 p-5"
        >
          <div className="flex items-center gap-2">
            <Code2 />
            <h2 className="text-xl font-semibold">
              Tech Stack
            </h2>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
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
                className="rounded-full border border-zinc-700 px-4 py-2"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SONGS */}
        <motion.div
          whileHover={{ y: -4 }}
          className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5"
        >
          <div className="flex items-center gap-2">
            <Music2 />
            <h2 className="font-semibold">
              Favorite Songs
            </h2>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <p>🎵 505</p>
            <p>🎵 Sweater Weather</p>
            <p>🎵 Until I Found You</p>
          </div>
        </motion.div>

        {/* CURRENTLY BUILDING */}
        <motion.div
          whileHover={{ y: -4 }}
          className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5"
        >
          <div className="flex items-center gap-2">
            <Rocket />
            <h2 className="font-semibold">
              Currently Building
            </h2>
          </div>

          <div className="mt-4 text-sm text-zinc-400">
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
          className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5"
        >
          <div className="flex items-center gap-2">
            <Sparkles />
            <h2 className="font-semibold">
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
        <motion.div
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
        </motion.div>
      </div>
    </div>
  );
}

