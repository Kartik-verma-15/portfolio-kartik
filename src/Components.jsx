import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1000",
    caption: "Golden hour glow over urban landscapes",
  },
  {
    url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1000",
    caption: "Serene moments in nature's shadow",
  },
  {
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000",
    caption: "Vibrant portraits with natural backlighting",
  },
  {
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43b?w=1000",
    caption: "Dramatic contrasts and deep shadows",
  },
  {
    url: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=1000",
    caption: "Intimate expressions captured in daylight",
  },
];

export default function InstagramCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [accentColor, setAccentColor] = useState("rgb(30, 30, 40)");
  const [isPaused, setIsPaused] = useState(false);

  // Motion values for interactive drag-parallax
  const dragX = useMotionValue(0);
  const imageParallaxX = useTransform(dragX, [-200, 200], [-30, 30]);

  // Dynamic Background Accent Extractor
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = images[index].url;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = 1;
      canvas.height = 1;
      ctx.drawImage(img, 0, 0, 1, 1);
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
      setAccentColor(`rgb(${r}, ${g}, ${b})`);
    };
  }, [index]);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
    dragX.set(0);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    dragX.set(0);
  };

  // Auto-play timer with pause on hover
  useEffect(() => {
    if (isHovered || isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isHovered, isPaused, index]);

  // Mouse wheel navigation handler
  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > 30 || Math.abs(e.deltaY) > 30) {
      if (isPaused) return;
      setIsPaused(true);
      if (e.deltaX > 0 || e.deltaY > 0) next();
      else prev();

      setTimeout(() => setIsPaused(false), 600);
    }
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onWheel={handleWheel}
      animate={{ backgroundColor: accentColor }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="relative flex h-[600px] w-full items-center justify-center overflow-hidden transition-colors duration-1000"
    >
      {/* Ambient background blur */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index].url}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center blur-3xl scale-125"
          style={{ backgroundImage: `url(${images[index].url})` }}
        />
      </AnimatePresence>

      {/* 3D Perspective Container */}
      <div
        className="relative flex w-full max-w-7xl items-center justify-center"
        style={{ perspective: "1500px" }}
      >
        {images.map((imgObj, i) => {
          let offset = i - index;
          const halfLength = Math.floor(images.length / 2);

          if (offset < -halfLength) offset += images.length;
          if (offset > halfLength) offset -= images.length;

          const isCenter = offset === 0;

          return (
            <motion.div
              key={imgObj.url}
              layout
              drag={isCenter ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x: isCenter ? dragX : undefined }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -100) next();
                if (info.offset.x > 100) prev();
                dragX.set(0);
              }}
              animate={{
                x: offset * 280,
                scale: isCenter ? 1 : 0.78,
                rotateY: offset * -28,
                rotateZ: offset * -2,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
                zIndex: 10 - Math.abs(offset),
                filter: isCenter
                  ? "blur(0px) brightness(1)"
                  : "blur(4px) brightness(0.5)",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 24,
                mass: 0.8,
              }}
              className="absolute cursor-grab active:cursor-grabbing transform-gpu"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl bg-black/40">
                <div className="overflow-hidden h-[500px] w-[340px]">
                  <motion.img
                    src={imgObj.url}
                    alt={imgObj.caption}
                    style={{ x: isCenter ? imageParallaxX : 0 }}
                    className="h-full w-full object-cover scale-110"
                  />
                </div>

                {/* Caption Gradient */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-16 text-white backdrop-blur-[2px]">
                  <p className="text-sm font-medium leading-snug tracking-wide opacity-90 drop-shadow-md">
                    {imgObj.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Glassmorphism Buttons */}
      <button
        onClick={prev}
        aria-label="Previous Slide"
        className="absolute left-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/25 active:scale-95"
      >
        ←
      </button>

      <button
        onClick={next}
        aria-label="Next Slide"
        className="absolute right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/25 active:scale-95"
      >
        →
      </button>

      {/* Progress Bar Indicator */}
      <div className="absolute bottom-6 z-20 h-1.5 w-64 overflow-hidden rounded-full bg-white/20 backdrop-blur-sm">
        <motion.div
          key={index}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: isHovered ? 0 : 5,
            ease: "linear",
          }}
          className="h-full bg-white shadow-sm"
        />
      </div>
    </motion.div>
  );
}