import { motion, useScroll, useTransform } from "framer-motion";

export default function FloatingHeader() {
  const { scrollY } = useScroll();

  // Appears after 120px of scrolling
  const opacity = useTransform(scrollY, [80, 190], [0, 1]);

  const y = useTransform(scrollY, [80, 190], [-20, 0]);

  const scale = useTransform(scrollY, [80, 190], [0.9, 1]);

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
      }}
      className="fixed
                 top-5
                 left-5
                 z-[999]
                 px-6
                 py-3
                 rounded-full
                 bg-white/20
                 backdrop-blur-xl
                 border
                 border-white/20
                 shadow-xl"
    >
      <h1 className="font-audiowide text-xl">
        KARTIK VERMA
      </h1>

      <p className="text-xs font-plaster">
        31-07-2026
      </p>
    </motion.div>
  );
}