
import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

export default function Herosection() {
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-300);
  const cursorY = useMotionValue(-300);
  const maskSize = useMotionValue(0);

  const springConfig = {
    damping: 25,
    stiffness: 150,
    mass: 0.5,
  };

  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const smoothSize = useSpring(maskSize, {
    damping: 20,
    stiffness: 120,
  });

  // The transparent center tears away the photo.
  const tearMask = useMotionTemplate`
    radial-gradient(
      circle ${smoothSize}px at ${smoothX}px ${smoothY}px,
      transparent 0%,
      transparent 58%,
      rgba(0, 0, 0, 0.9) 85%,
      black 100%
    )
  `;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    maskSize.set(230);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    maskSize.set(0);
    cursorX.set(-300);
    cursorY.set(-300);
  };

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen min-h-[550px] w-full overflow-hidden bg-neutral-950 text-white md:cursor-none"
    >
      {/* BACKGROUND TYPOGRAPHY */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div className="w-full px-2 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="select-none text-[15vw] font-audiowide font-black uppercase leading-[0.85] tracking-[-0.08em] text-neutral-200 sm:text-[14vw] lg:text-[15vw]"
          >
            KARTIK
            <br />
            VERMA
          </motion.h1>

          <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-400 sm:text-xs md:text-sm">
            Frontend &amp; Design Engineer
          </p>
        </div>
      </div>

      {/* FULL-SCREEN PHOTO */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          maskImage: tearMask,
          WebkitMaskImage: tearMask,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2400&q=90"
          alt="Full-screen editorial portrait"
          draggable="false"
          className="h-full w-full select-none object-cover object-center grayscale contrast-125 brightness-75"
        />

        {/* Subtle cinematic shading */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/40" />
      </motion.div>

      {/* TOP INSTRUCTION */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-30 px-5 pt-7 sm:px-10 sm:pt-9">
        <div className="mx-auto flex max-w-[1600px] items-center gap-4 sm:gap-6">
          <span className="h-px flex-1 bg-white/45" />

          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="shrink-0 font-mono text-[9px] uppercase tracking-[0.22em] text-white sm:text-xs sm:tracking-[0.3em]"
          >
            Hover here to reveal
          </motion.p>

          <span className="h-px flex-1 bg-white/45" />
        </div>
      </div>

      {/* SMALL BOTTOM LABELS */}
      <div className="pointer-events-none absolute bottom-6 left-5 right-5 z-30 flex items-end justify-between sm:bottom-9 sm:left-10 sm:right-10">
        <div>
          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/60 sm:text-[10px]">
            Independent Designer &amp; Developer
          </p>
          <p className="text-sm font-medium tracking-tight text-white sm:text-base">
            The Art of Visual Silence
          </p>
        </div>

        <p className="hidden font-mono text-[10px] uppercase tracking-widest text-white/60 sm:block">
          Portfolio — 2026
        </p>
      </div>

      {/* CUSTOM CURSOR */}
      <motion.div
        className="pointer-events-none absolute left-0 top-0 z-40 hidden h-20 w-20 items-center justify-center rounded-full border border-white/80 bg-white/10 text-[9px] uppercase tracking-[0.2em] text-white backdrop-blur-sm md:flex"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 1 : 0,
        }}
      >
        Tear
      </motion.div>
    </section>
  );
}
