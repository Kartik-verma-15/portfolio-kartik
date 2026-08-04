import React from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

function WireframeSphere() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="sphere overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="ring"
            style={{
              transform: `rotateY(${i * 22.5}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Move diagonally
  const x = useTransform(scrollYProgress, [0, 0.3], [0, -250]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -180]);

  // Slight shrink
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.72]);

  // Glass background
  const opacity = useTransform(scrollYProgress, [0.12, 0.25], [0, 1]);

  // Rounded corners appear gradually
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["0px", "999px"]
  );

  return (
    <section
      id="home"
      className="relative w-screen h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Name */}
      <motion.div
        style={{
          x,
          y,
          scale,
        }}
        className="absolute z-50 flex flex-col items-center"
      >
        <motion.div
          style={{
            opacity,
            borderRadius,
          }}
          className="absolute inset-0 bg-white/20 backdrop-blur-xl border border-white/20 shadow-xl"
        />

        <div className="relative px-8 py-4">
          <h1 className="text-5xl font-audiowide">
            KARTIK VERMA
          </h1>

          <h3 className="text-sm text-center text-stone-800 font-plaster">
            31-07-2026
          </h3>
        </div>
      </motion.div>

      {/* Sphere */}
      <WireframeSphere />

      {/* Left Bottom */}
      <h1 className="absolute -left-4 bottom-20 text-6xl opacity-50 drop-shadow-md text-gray-400">
        /UX Designer
      </h1>

      {/* Left Top */}
      <h1 className="absolute left-2 top-6 text-[20px] opacity-65 drop-shadow-md text-gray-400">
        Creating meaningful design
      </h1>

      {/* Right */}
      <h1 className="absolute -right-3 bottom-1/3 text-6xl opacity-50 drop-shadow-md text-gray-400">
        UI/
      </h1>

      {/* Right Top */}
      <h1 className="absolute right-2 top-[85px] text-[20px] opacity-65 drop-shadow-md text-gray-400">
        simply beautiful interfaces
      </h1>
    </section>
  );
}
