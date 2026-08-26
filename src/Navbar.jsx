import { motion } from "framer-motion";
import { Home, User, Briefcase, Code2, Mail } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },
  {
    name: "About",
    href: "#about",
    icon: User,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: Briefcase,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: Code2,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

const containerVariants = {
  collapsed: {
    width: 120,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  expanded: {
    width: 520,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const linksVariants = {
  collapsed: {
    opacity: 0,
    x: -10,
    pointerEvents: "none",
    transition: {
      duration: 0.15,
    },
  },

  expanded: {
    opacity: 1,
    x: 0,
    pointerEvents: "auto",
    transition: {
      duration: 0.35,
      delay: 0.15,
      staggerChildren: 0.06,
    },
  },
};

const linkItemVariants = {
  collapsed: {
    opacity: 0,
    y: 5,
  },

  expanded: {
    opacity: 1,
    y: 0,
  },
};

function Navbar() {
  return (
    <motion.nav
      initial="collapsed"
      whileHover="expanded"
      variants={containerVariants}
      className="
        fixed
        top-6
        left-1/2
        -translate-x-1/2
        z-50
        border-gray-400
        

        h-14
        overflow-hidden

        rounded-full
        border-2
        border-white/10

        bg-white/[0.07]
        backdrop-blur-xl

        shadow-[0_8px_40px_rgba(0,0,0,0.25)]

        px-2
      "
    >
      <div className="flex h-full items-center">

        {/* LOGO */}
        <motion.a
          href="#home"
          className="
            flex
            h-10
            shrink-0
            items-center
            rounded-full
            px-5

            text-sm
            font-semibold
            tracking-wide
            text-orange-950

            hover:bg-white/10
          "
        >
          MavicUI
        </motion.a>

        {/* NAV LINKS */}
        <motion.div
          variants={linksVariants}
          className="
            flex
            items-center
            gap-1
            ml-2
          "
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.name}
                href={item.href}
                variants={linkItemVariants}
                className="
                  group
                  flex
                  items-center
                  gap-2

                  rounded-full
                  px-1
                  py-2


                  text-sm
                  text-orange-900

                  transition-colors
                  duration-200

                  hover:bg-white/10
                  hover:text-orange-950
                "
              >
                <Icon
                  size={15}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-200
                    group-hover:scale-110
                  "
                />

                <span>{item.name}</span>
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </motion.nav>
  );
}

export default Navbar;