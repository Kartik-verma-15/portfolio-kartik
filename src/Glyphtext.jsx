
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const GLYPHS = [
  "ᚷ",
  "Ж",
  "Ƶ",
  "ฬ",
  "Ξ",
  "₪",
  "Ø",
  "Ȝ",
  "Ð",
  "Ψ",
  "Ł",
  "Я",
  "ʬ",
  "Ǝ",
  "ᛉ",
  "ֆ",
  "ꙮ",
  "⟟",
  "ᚱ",
  "҂",
  "Σ",
  "Ѯ",
  "Þ",
  "Ж",
];

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

export default function GlitchReveal({
  text = "Mavic",
  secondaryText = "UI",
  className = "",
}) {
  const [characters, setCharacters] = useState([]);
  const [revealed, setRevealed] = useState(false);
  const [glitch, setGlitch] = useState(false);

  const timers = useRef([]);

  /*
    Create the initial scrambled characters
  */
  useEffect(() => {
    const initial = text.split("").map((char) => ({
      target: char,
      current: char === " " ? " " : randomGlyph(),
      locked: char === " ",
    }));

    setCharacters(initial);
    setRevealed(false);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [text]);

  /*
    Main reveal animation
  */
  useEffect(() => {
    if (!characters.length) return;

    const startDelay = 1200;

    const startTimer = setTimeout(() => {
      text.split("").forEach((_, index) => {
        const delay = startDelay + index * 120;

        const timer = setTimeout(() => {
          let iterations = 0;

          const scrambleInterval = setInterval(() => {
            iterations++;

            setCharacters((prev) =>
              prev.map((item, i) => {
                if (i !== index || item.target === " ") {
                  return item;
                }

                return {
                  ...item,
                  current:
                    iterations > 7
                      ? item.target
                      : randomGlyph(),
                };
              })
            );

            if (iterations >= 9) {
              clearInterval(scrambleInterval);

              setCharacters((prev) =>
                prev.map((item, i) =>
                  i === index
                    ? {
                        ...item,
                        current: item.target,
                        locked: true,
                      }
                    : item
                )
              );
            }
          }, 55);

          timers.current.push(scrambleInterval);
        }, delay);

        timers.current.push(timer);
      });

      /*
        Finish animation
      */
      const revealTimer = setTimeout(() => {
        setRevealed(true);
      }, text.length * 120 + 850);

      timers.current.push(revealTimer);
    }, 300);

    timers.current.push(startTimer);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [text, characters.length]);

  /*
    Random glitch bursts after reveal
  */
  useEffect(() => {
    if (!revealed) return;

    const interval = setInterval(() => {
      const shouldGlitch = Math.random() > 0.55;

      if (shouldGlitch) {
        setGlitch(true);

        setTimeout(() => {
          setGlitch(false);
        }, 100 + Math.random() * 180);
      }
    }, 1400);

    return () => clearInterval(interval);
  }, [revealed]);

  return (
    <div
      className={`flex flex-col items-center justify-center ${className}`}
    >
      {/* MAIN GLITCH TEXT */}
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(12px)",
          scale: 1.04,
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative"
      >
        {/* Red glitch layer */}
        <motion.div
          animate={
            glitch
              ? {
                  x: [-3, 4, -2, 3, 0],
                  opacity: [0, 0.8, 0.4, 0.8, 0],
                }
              : {
                  x: 0,
                  opacity: 0,
                }
          }
          transition={{ duration: 0.18 }}
          className="pointer-events-none absolute inset-0 font-mono text-4xl font-bold tracking-[0.15em] text-red-500"
        >
          {characters.map((char, index) => (
            <span key={index}>{char.current}</span>
          ))}
        </motion.div>

        {/* Cyan glitch layer */}
        <motion.div
          animate={
            glitch
              ? {
                  x: [3, -4, 2, -3, 0],
                  opacity: [0, 0.8, 0.4, 0.8, 0],
                }
              : {
                  x: 0,
                  opacity: 0,
                }
          }
          transition={{ duration: 0.18 }}
          className="pointer-events-none absolute inset-0 font-mono text-4xl font-bold tracking-[0.15em] text-cyan-400"
        >
          {characters.map((char, index) => (
            <span key={index}>{char.current}</span>
          ))}
        </motion.div>

        {/* Main text */}
        <div
          className={`relative z-10 font-mono text-4xl font-bold tracking-[0.15em] ${
            glitch ? "translate-x-[1px]" : ""
          }`}
        >
          {characters.map((char, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                y: 8,
                filter: "blur(5px)",
              }}
              animate={{
                opacity: char.locked ? 1 : 0.7,
                y: 0,
                filter: char.locked
                  ? "blur(0px)"
                  : "blur(1px)",
              }}
              transition={{
                duration: 0.2,
              }}
              className="inline-block"
            >
              {char.current}
            </motion.span>
          ))}
        </div>

        {/* Scanline */}
        <motion.div
          initial={{
            top: "0%",
            opacity: 0,
          }}
          animate={{
            top: ["0%", "100%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-0 h-[2px] w-full bg-white/60"
        />

        {/* Glitch flash */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            revealed
              ? {
                  opacity: [0, 0.6, 0, 0.3, 0],
                }
              : {}
          }
          transition={{
            duration: 0.35,
            delay: 0.1,
          }}
          className="pointer-events-none absolute inset-0 bg-white/20 mix-blend-screen"
        />
      </motion.div>

      {/* SECONDARY TEXT */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: revealed ? 0.45 : 0,
          y: revealed ? 0 : 10,
          filter: revealed
            ? "blur(0px)"
            : "blur(8px)",
        }}
        transition={{
          duration: 0.8,
          delay: 0.15,
        }}
        className="mt-3 font-serif text-lg tracking-[0.25em]"
      >
        {secondaryText}
      </motion.div>
    </div>
  );
}

