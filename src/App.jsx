
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navigator from './Navigator'
import FloatingHeader from './FloatingHeader'
import InstagramCarousel from './Components'
import Navbar from './Navbar'
import GlitchReveal from './Glyphtext'
import { motion } from 'framer-motion'
import React, { useState } from "react";

import {
  MessageCircle,
  Activity,
  Phone,
  Users,
} from "lucide-react";
import Herosection from './Herosection'

const sections = [
  {
    id: "chat",
    label: "Chat",
    icon: MessageCircle,
  },
  {
    id: "status",
    label: "Status",
    icon: Activity,
  },
  {
    id: "calls",
    label: "Calls",
    icon: Phone,
  },
  {
    id: "contacts",
    label: "Contacts",
    icon: Users,
  },
];

export const MavicNavigation = () => {
  const [active, setActive] = useState("chat");

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">

      {/* NAVBAR */}
      <div
        className="
          relative
          overflow-hidden
          flex items-center
          gap-1
          p-1.5
          rounded-full
          border border-white/10
          bg-black/30
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        "
      >

        {/* =================================================
            MOVING BACKGROUND
            This is clipped by overflow-hidden
        ================================================= */}
        <motion.div
          className="
            absolute
            -inset-[100%]
            pointer-events-none
            opacity-60
            blur-3xl
          "
          animate={{
            x: ["-10%", "10%", "-5%", "-10%"],
            y: ["-5%", "10%", "-10%", "-5%"],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="
              absolute
              inset-0
              bg-[conic-gradient(
                from_0deg,
                #6366f1,
                #ec4899,
                #22d3ee,
                #8b5cf6,
                #6366f1
              )]
            "
          />
        </motion.div>


        {/* =================================================
            SECOND MOVING LIGHT
        ================================================= */}
        <motion.div
          className="
            absolute
            w-40
            h-40
            rounded-full
            bg-cyan-400/30
            blur-3xl
            pointer-events-none
          "
          animate={{
            x: [-60, 220, 80, -60],
            y: [-20, 20, 60, -20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        {/* =================================================
            NAV ITEMS
        ================================================= */}
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = active === section.id;

          return (
            <button
              key={section.id}
              onClick={() => setActive(section.id)}
              className="
                relative
                z-10
                flex
                items-center
                gap-2
                px-5
                py-3
                rounded-full
                text-sm
                font-medium
                outline-none
              "
            >

              {/* ==========================================
                  ACTIVE GLASS PILL
              ========================================== */}
              {isActive && (
                <motion.div
                  layoutId="activeGlass"
                  className="
                    absolute
                    inset-0
                    rounded-full

                    /* glass */
                    bg-white/5
                    backdrop-blur-xl


                    /* depth */
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]

                    /* glow */
                    after:absolute
                    after:inset-0
                    after:rounded-full
                    after:bg-white/5
                    after:pointer-events-none
                  "
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                    mass: 0.1,
                  }}
                />
              )}


              {/* ==========================================
                  CONTENT
              ========================================== */}
              <motion.div
                className="relative z-20 flex items-center gap-2"
                animate={
                  isActive
                    ? {
                        scale: [1, 1.08, 0.96, 1],
                      }
                    : {
                        scale: 1,
                      }
                }
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <Icon
                  size={16}
                  strokeWidth={1.8}
                  className={`
                    transition-colors duration-300
                    ${
                      isActive
                        ? "text-white"
                        : "text-white/50"
                    }
                  `}
                />

                <span
                  className={`
                    transition-colors duration-300
                    ${
                      isActive
                        ? "text-white"
                        : "text-white/50"
                    }
                  `}
                >
                  {section.label}
                </span>
              </motion.div>

            </button>
          );
        })}


        {/* ================================================
            TOP GLASS REFLECTION
        ================================================= */}
        

      </div>
    </div>
  );
}



function App() {
  

  return (
    <div>
      
      <FloatingHeader />
      <Navigator />
    </div>
  )
}

export default App
