
import React, { useState } from "react";
import { motion, AnimatePresence ,useInView } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Music2,
  Moon,
  Sun,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  BriefcaseBusiness,
  Coffee,
  Heart,
  Sparkles,
  MoveUpRight,
} from "lucide-react";

import { useRef } from "react";


export const Signature = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const paths = [
    // K — large signature flourish
    "M12 95 C38 65, 68 24, 94 7 C76 35, 51 75, 31 104 C18 125, 35 132, 57 111 C76 94, 91 72, 105 57 C93 76, 102 90, 121 79",

    // artik
    "M119 79 C130 61, 145 55, 148 64 C151 73, 132 88, 125 82 C120 76, 139 58, 149 64 C159 71, 148 84, 153 86 C161 88, 174 68, 182 61 C171 77, 169 86, 177 84 C187 80, 199 64, 208 57 C196 75, 193 88, 201 86 C214 82, 228 66, 237 61 C226 76, 223 86, 231 84 C241 81, 249 70, 257 63",

    // V — oversized initial
    "M259 62 C278 44, 292 23, 303 8 C293 37, 278 69, 264 103 C285 84, 305 62, 323 56",

    // erma
    "M321 76 C333 61, 347 56, 350 64 C353 72, 332 86, 327 80 C323 74, 343 59, 352 65 C361 72, 355 83, 363 83 C372 83, 383 69, 393 60 C383 76, 380 86, 389 84 C400 81, 414 66, 423 59 C414 74, 411 84, 420 83 C431 81, 444 66, 453 61 C442 76, 443 85, 451 83 C464 80, 480 69, 494 67",

    // Final underline flourish
    "M357 97 C405 103, 460 94, 513 76",
  ];

  return (
      <div
        ref={ref}
        className="pointer-events-none absolute inset-x-5 bottom-24 z-10 w-[calc(100%-2.5rem)] max-w-2xl text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.45)] sm:inset-x-6 sm:bottom-28 sm:w-[calc(100%-3rem)]"
      >
      <svg
        viewBox="0 0 530 145"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        fill="none"
        role="img"
        aria-label="Kartik Verma signature"
      >
        {paths.map((d, index) => (
          <motion.path
            key={index}
            d={d}
            stroke="currentColor"
            strokeWidth={index === 0 || index === 2 ? 2.2 : 1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: isInView ? 1 : 0,
            }}
            transition={{
              duration: index === 4 ? 0.8 : 1.2,
              delay: isInView ? index * 0.65 : 0,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const skills = [
  "React",
  "Tailwind",
  "Framer Motion",
  "JavaScript",
  "HTML",
  "CSS",
  "Figma",
  "Git",
];

const songs = ["52 Bars ", "Plug Talk", "Silence"];

const projects = [
  "Portfolio v2",
  "Learning SVG Filters",
  "React Three Fiber",
];

const facts = [
  { icon: Coffee, text: "Coffee > Tea" },
  { icon: Heart, text: "Loves Micro Interactions" },
  { icon: Moon, text: "Night Owl" },
];

const cardTransition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1],
};

function InfoCard({
  children,
  className = "",
  dark = false,
  number,
  onClick,
}) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -3 }}
      transition={cardTransition}
      className={`relative min-w-0 overflow-hidden rounded-xl border p-5 sm:p-6 ${
        dark
          ? "border-neutral-800 bg-[#151515] text-[#f5f1e8]"
          : "border-[#d5d0c6] bg-white/20 text-[#171717] hover:border-[#f15a32]"
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

function CardLabel({ icon: Icon, children, number, dark = false }) {
  return (
    <div className="mb-6 flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        <Icon size={19} strokeWidth={1.8} />
        <span className="truncate text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-[11px]">
          {children}
        </span>
      </div>

      {number && (
        <span
          className={`shrink-0 font-mono text-[10px] ${
            dark ? "text-neutral-500" : "text-neutral-400"
          }`}
        >
          / {number}
        </span>
      )}
    </div>
  );
}

export default function About2() {
  const [darkMode, setDarkMode] = useState(false);

  const pageTheme = darkMode
    ? "bg-[#111111] text-[#f5f1e8]"
    : "bg-[#f5f2eb] text-[#171717]";

  const mutedText = darkMode
    ? "text-neutral-400"
    : "text-neutral-500";

  const subtleBorder = darkMode
    ? "border-neutral-800"
    : "border-[#d5d0c6]";

  return (
    <section
      id="about"
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${pageTheme}`}
    >
      {/* Decorative details */}
      <div
        className={`pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full border ${subtleBorder}`}
      />
      <div
        className={`pointer-events-none absolute bottom-20 right-0 hidden h-40 w-40 opacity-40 sm:block ${
          darkMode ? "text-[#f15a32]" : "text-[#f15a32]"
        }`}
      >
        <svg viewBox="0 0 100 100" fill="currentColor">
          {Array.from({ length: 25 }).map((_, i) => (
            <circle
              key={i}
              cx={(i % 5) * 20 + 5}
              cy={Math.floor(i / 5) * 20 + 5}
              r="1.3"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1800px] px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        {/* Top line */}
        <div className="mb-7 flex items-center justify-between gap-4 sm:mb-10">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-widest sm:text-xs">
              01 / 04
            </span>

            <span
              className={`hidden h-px w-12 sm:block ${darkMode ? "bg-neutral-600" : "bg-neutral-400"}`}
            />

            <span
              className={`text-[9px] font-semibold uppercase tracking-[0.25em] sm:text-[10px] ${mutedText}`}
            >
              About me
            </span>
          </div>

          {/* Working theme toggle */}
          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            aria-pressed={darkMode}
            className={`flex items-center gap-3 rounded-full border p-1 transition-colors ${
              darkMode
                ? "border-neutral-700 bg-neutral-900"
                : "border-[#c9c4ba] bg-white/50"
            }`}
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                !darkMode
                  ? "bg-[#171717] text-white"
                  : "text-neutral-500"
              }`}
            >
              <Sun size={15} />
            </span>

            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                darkMode
                  ? "bg-[#f5f1e8] text-black"
                  : "text-neutral-500"
              }`}
            >
              <Moon size={15} />
            </span>
          </button>
        </div>

        {/* Oversized heading */}
        <div className="mb-10 grid grid-cols-1 items-end gap-5 md:mb-12 md:grid-cols-[1fr_auto]">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="select-none text-[clamp(4.5rem,14.2vw,13rem)] font-black uppercase leading-[0.76] tracking-[-0.095em]"
          >
            ABOUT
          </motion.h1>

          <div className="mb-1 flex items-center gap-4 md:max-w-[250px]">
            <div
              className={`hidden h-px flex-1 md:block ${darkMode ? "bg-neutral-600" : "bg-neutral-400"}`}
            />

            <p
              className={`max-w-[180px] text-[10px] font-medium uppercase leading-5 tracking-[0.24em] sm:text-xs ${mutedText}`}
            >
              Let&apos;s build something great together.
            </p>

            <Sparkles
              className="shrink-0 text-[#f15a32]"
              size={29}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Main editorial grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          {/* Profile column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={cardTransition}
            className="flex flex-col gap-5 lg:col-span-6"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_0.88fr]">
              {/* Portrait */}
              <div className="group relative min-h-[330px] overflow-hidden rounded-xl bg-neutral-300 sm:min-h-[420px]">
                <img
                  src="https://res.cloudinary.com/dlexbwlfv/image/upload/v1792867780/Cinematic_Blue-Purple_Studio_Portrait_gyfoo6.png"
                  alt="Editorial portrait"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/5" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f15a32]" />
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/80">
                      Designer & Developer
                    </span>
                  </div>

                  <div className="flex items-end justify-between gap-2">
                    <span className="text-xs font-medium text-white/90">
                      Based in India
                    </span>
                    <ArrowUpRight className="text-white" size={20} />
                  </div>
                </div>

                <Signature />
              </div>

              {/* Profile information */}
              <div className="flex flex-col justify-center py-2 sm:py-5">
                <p
                  className={`mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] ${mutedText}`}
                >
                  Hello, I&apos;m
                </p>

                <h2 className="text-4xl font-bold leading-[0.94] tracking-[-0.065em] sm:text-5xl xl:text-6xl">
                  Kartik
                  <br />
                  Verma<span className="text-[#f15a32]">.</span>
                </h2>

                <p className="mt-5 max-w-[260px] text-base leading-snug sm:text-lg">
                  UI/UX Designer &amp; Frontend Developer
                </p>

                <div
                  className={`mt-5 flex items-center gap-2 text-xs ${mutedText}`}
                >
                  <MapPin size={15} className="text-[#f15a32]" />
                  Delhi, India
                </div>

                <div className="my-6 h-px w-12 bg-[#f15a32]" />

                <p className={`max-w-[300px] text-sm leading-6 ${mutedText}`}>
                  I design and build modern, clean and user-friendly digital
                  experiences. I love turning ideas into interactive products
                  that people enjoy using.
                </p>

                <a
                  href="mailto:"
                  className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-semibold transition-colors hover:text-[#f15a32]"
                >
                  Let&apos;s connect
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* Current projects */}
            <InfoCard className="flex-1">
              <CardLabel
                icon={BriefcaseBusiness}
                number="04"
              >
                Currently Building
              </CardLabel>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_0.7fr]">
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.08,
                        ...cardTransition,
                      }}
                      className="group flex items-center gap-3 text-sm"
                    >
                      <ArrowRight
                        size={15}
                        className="text-[#f15a32] transition-transform group-hover:translate-x-1"
                      />
                      <span>{project}</span>
                    </motion.div>
                  ))}
                </div>

                <div
                  className={`hidden items-center border-l pl-6 sm:flex ${
                    darkMode ? "border-neutral-700" : "border-[#d5d0c6]"
                  }`}
                >
                  <p
                    className={`max-w-[150px] text-[10px] uppercase leading-6 tracking-[0.24em] ${mutedText}`}
                  >
                    Ideas into interactive experiences.
                  </p>
                  <Sparkles
                    className="ml-auto shrink-0 text-[#f15a32]"
                    size={23}
                  />
                </div>
              </div>
            </InfoCard>
          </motion.div>

          {/* Information cards */}
          <div className="grid grid-cols-1 content-start gap-4 sm:grid-cols-2 lg:col-span-6 lg:gap-5">
            {/* Education */}
            <InfoCard className="sm:col-span-1">
              <CardLabel icon={GraduationCap} number="01">
                Education
              </CardLabel>

              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold leading-snug">
                    Bachelor of Computer Applications
                  </h3>
                  <p className={`mt-1 text-xs ${mutedText}`}>
                    Currently Pursuing
                  </p>
                </div>

                <div
                  className={`h-px ${darkMode ? "bg-neutral-800" : "bg-[#ddd8ce]"}`}
                />

                <div>
                  <h3 className="text-base font-semibold">Class XII</h3>
                  <p className={`mt-1 text-xs ${mutedText}`}>
                    Science Stream
                  </p>
                </div>
              </div>
            </InfoCard>

            {/* Theme toggle card */}
            <InfoCard
              className="flex min-h-[180px] flex-col justify-between"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              <CardLabel icon={Moon}>
                Theme Toggle
              </CardLabel>

              <div>
                <p className={`max-w-[190px] text-sm leading-6 ${mutedText}`}>
                  Switch between light and dark mode.
                </p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDarkMode((prev) => !prev);
                  }}
                  aria-label="Toggle theme"
                  className={`mt-4 flex items-center gap-3 rounded-full border px-3 py-2 text-xs transition-colors ${
                    darkMode
                      ? "border-neutral-700"
                      : "border-[#c9c4ba]"
                  }`}
                >
                  <Sun size={15} />
                  <span
                    className={`rounded-full px-3 py-1.5 ${
                      darkMode
                        ? "bg-[#f5f1e8] text-black"
                        : "bg-[#171717] text-white"
                    }`}
                  >
                    {darkMode ? "Dark" : "Light"}
                  </span>
                </button>
              </div>
            </InfoCard>

            {/* Tech stack */}
            <InfoCard className="sm:col-span-2">
              <CardLabel icon={Code2} number="02">
                Tech Stack
              </CardLabel>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.04,
                      ...cardTransition,
                    }}
                    whileHover={{
                      y: -3,
                      backgroundColor: "#f15a32",
                      color: "#ffffff",
                      borderColor: "#f15a32",
                    }}
                    className={`cursor-default rounded-full border px-4 py-2 text-sm transition-colors ${
                      darkMode
                        ? "border-neutral-700"
                        : "border-[#c9c4ba]"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </InfoCard>

            {/* Favorite songs */}
            <InfoCard className="sm:col-span-1">
              <CardLabel icon={Music2} number="03">
                Favorite Songs
              </CardLabel>

              <div className="space-y-4">
                {songs.map((song) => (
                  <div
                    key={song}
                    className="group flex items-center gap-3 text-sm"
                  >
                    <Music2
                      size={16}
                      className="shrink-0 text-[#f15a32] transition-transform group-hover:scale-110"
                    />
                    <span>{song}</span>
                  </div>
                ))}
              </div>
            </InfoCard>

            {/* Fun facts */}
            <InfoCard className="sm:col-span-1">
              <CardLabel icon={Sparkles} number="05">
                Fun Facts
              </CardLabel>

              <div className="space-y-4">
                {facts.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 text-xs sm:text-sm"
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                      className="shrink-0 text-[#f15a32]"
                    />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </InfoCard>

            {/* Closing quote */}
            <InfoCard
              dark
              className="flex min-h-[190px] flex-col justify-between sm:col-span-2 sm:flex-row sm:items-end"
            >
              <div className="flex items-start gap-4">
                <MoveUpRight
                  size={22}
                  className="mt-1 shrink-0 text-[#f15a32]"
                />

                <h3 className="max-w-[230px] text-3xl font-bold uppercase leading-[0.98] tracking-[-0.05em] sm:text-4xl">
                  Good things
                  <br />
                  take time<span className="text-[#f15a32]">.</span>
                </h3>
              </div>

              <div className="mt-7 flex items-end justify-between gap-4 sm:mt-0 sm:flex-col sm:items-end">
                <p className="text-right text-[9px] uppercase leading-5 tracking-[0.24em] text-neutral-400">
                  Stay curious
                  <br />
                  Stay creative
                </p>

                <ArrowUpRight
                  size={22}
                  className="text-[#f15a32]"
                />
              </div>

              <div className="absolute -bottom-16 right-12 h-40 w-40 rounded-full border border-neutral-700/60" />
            </InfoCard>
          </div>
        </div>

        {/* Bottom signature */}
        <div
          className={`mt-8 flex items-center justify-between gap-4 border-t pt-5 ${subtleBorder}`}
        >
          <p className={`text-[9px] uppercase tracking-[0.2em] ${mutedText}`}>
            Independent designer & developer
          </p>

          <p className="text-[10px] font-semibold tracking-wide">
            KARTIK VERMA<span className="text-[#f15a32]">.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
