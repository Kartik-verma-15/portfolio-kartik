
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-white border-t border-gray-200 py-16 px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Left Side */}
          <div className="group">
            <h2
              className="
                relative
                inline-block
                text-3xl
                md:text-5xl
                font-audiowide
                text-gray-400
                transition-all
                duration-500
                group-hover:text-orange-500
              "
            >
              KARTIK VERMA

              <motion.span
                className="absolute left-0 -bottom-3 h-[3px] bg-orange-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </h2>

            <p className="mt-6 text-gray-400 text-sm tracking-widest uppercase">
              Let's Build Something Amazing
            </p>
          </div>

          {/* Right Side */}
          <div className="flex gap-8">

            {/* Gmail */}
            <motion.a
              href="mailto:kartiklataverma15@gmail.com"
              whileHover={{
                y: -8,
                scale: 1.15,
              }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-gray-400 hover:text-orange-500"
            >
              <FaEnvelope size={32} />
            </motion.a>

            {/* Github */}
            <motion.a
              href="https://github.com/Kartik-verma-15"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -8,
                scale: 1.15,
              }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-gray-400 hover:text-orange-500"
            >
              <FaGithub size={32} />
            </motion.a>

            {/* Linkedin */}
            <motion.a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -8,
                scale: 1.15,
              }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-gray-400 hover:text-orange-500"
            >
              <FaLinkedin size={32} />
            </motion.a>

          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">

          <p>
            © {new Date().getFullYear()} KARTIK VERMA.
          </p>

          <p>
            Designed & Developed with React, Tailwind & Motion.
          </p>

        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;

