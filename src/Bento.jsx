
import { motion } from "framer-motion";
import React from "react";

import { ArrowUpRight, Trophy, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    type: "project",
    title: "Divya Bandhan",
    description:
      "A modern Indian wedding e-commerce experience with an elegant visual system.",
    tag: "E-Commerce",
    className: "md:col-span-2 md:row-span-2",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1600",
  },

  {
    id: 2,
    type: "project",
    title: "MavicUI",
    description:
      "A collection of animated UI components built with React, Tailwind and Motion.",
    tag: "UI Library",
    className: "md:col-span-1 md:row-span-2",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200",
  },

  {
    id: 3,
    type: "hackathon",
    title: "Hackathon Winner",
    description:
      "Built and shipped a winning product under intense time constraints.",
    tag: "2nd Place",
    className: "md:col-span-1 md:row-span-1",
  },

  {
    id: 4,
    type: "other",
    title: "Creative Experiments",
    description:
      "Exploring motion, interaction design, shaders and experimental interfaces.",
    tag: "Experiments",
    className: "md:col-span-1 md:row-span-1",
  },
];

export const BentoCard = ({ item, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover="hover"
      className={`group relative min-h-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900 ${item.className}`}
    >
      {/* PROJECT IMAGE */}
      {item.type === "project" && (
        <>
          <motion.img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
            variants={{
              hover: {
                scale: 1.08,
              },
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </>
      )}

      {/* HACKATHON BACKGROUND */}
      {item.type === "hackathon" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-500/10 to-transparent"
          variants={{
            hover: {
              scale: 1.15,
            },
          }}
          transition={{ duration: 0.7 }}
        />
      )}

      {/* EXPERIMENT BACKGROUND */}
      {item.type === "other" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-transparent" />

          <motion.div
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {/* CONTENT */}
      <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-between p-6 md:p-8">
        
        {/* TOP */}
        <div className="flex items-start justify-between">
          
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur-md">
            {item.tag}
          </span>

          <motion.div
            variants={{
              hover: {
                rotate: 45,
                scale: 1.1,
              },
            }}
            transition={{ duration: 0.3 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md"
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>

        {/* HACKATHON ICON */}
        {item.type === "hackathon" && (
          <motion.div
            initial={{ rotate: -10 }}
            whileHover={{ rotate: 10 }}
            className="absolute right-8 top-20"
          >
            <Trophy
              size={70}
              strokeWidth={1}
              className="text-yellow-400/70"
            />
          </motion.div>
        )}

        {/* BOTTOM */}
        <div>
          <motion.h2
            variants={{
              hover: {
                x: 5,
              },
            }}
            transition={{ duration: 0.3 }}
            className="max-w-xl text-2xl font-medium tracking-tight text-white md:text-3xl"
          >
            {item.title}
          </motion.h2>

          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
            {item.description}
          </p>
        </div>
      </div>

      {/* HOVER BORDER */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/0"
        variants={{
          hover: {
            borderColor: "rgba(255,255,255,0.2)",
          },
        }}
      />

      {/* SHINE */}
      <motion.div
        className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        variants={{
          hover: {
            x: "350%",
          },
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
    </motion.article>
  );
}

export const ProjectBento = () => {
  return (
    <section className="w-full bg-transparent px-5 py-24 text-stone-900 md:px-10 lg:px-16">

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"
      >
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
            Selected Work
          </p>

          <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
            Things I've
            <br />
            <span className="text-stone-900/40">built.</span>
          </h1>
        </div>

        <div className="flex items-center gap-2 text-sm text-white/40">
          <Sparkles size={16} />
          <span>Design × Code × Motion</span>
        </div>
      </motion.div>

      {/* BENTO GRID */}
      <div className="grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <BentoCard
            key={project.id}
            item={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}