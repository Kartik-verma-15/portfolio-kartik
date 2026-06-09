import { motion } from "framer-motion";



function ProjectCard({ title, description }) {

  return (

    <motion.div

      whileHover={{

        y: -10,

        scale: 1.03,

      }}

      transition={{

        type: "linear",

        stiffness: 200,

      }}

      className="

        group

        relative

        overflow-hidden

        rounded-3xl

        border border-black/20

        bg-white/50

        backdrop-blur-xl

        p-[12px]

        shadow-xl

        cursor-pointer

      "

    >

      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />



      <h3 className="text-3xl font-bold mb-4 relative z-10">

        {title}

      </h3>



      <p className="text-gray-600 relative z-10">

        {description}

      </p>

    </motion.div>

  );

}
 






function ProjectRow({

  title1,

  title2,

  shortDesc,

  longDesc,

}) {

  return (

    <motion.div

      initial={false}

      whileHover="hover"

      className="

        group

        overflow-hidden

        border-b

        border-black/20

        cursor-pointer

      "

    >

      <motion.div

        variants={{

          hover: {

            paddingTop: "2rem",

            paddingBottom: "2rem",

          },

        }}

        transition={{ duration: 0.4 }}

        className="

          px-8

          py-8

          flex

          justify-between

          gap-20

        "

      >

        {/* Left */}

        <div>

          <h2

            className="

              text-5xl

              font-bold

              leading-none

              transition-colors

              duration-300

              group-hover:text-orange-600

            "

          >

            {title1}

          </h2>



          <h2

            className="

              text-5xl

              font-bold

              leading-none

              transition-colors

              duration-300

              group-hover:text-orange-600

            "

          >

            {title2}

          </h2>

        </div>



        {/* Right */}

        <div className="max-w-md">

          <p

            className="

              text-gray-600

              group-hover:text-orange-600

              transition-colors

              duration-300

            "

          >

            {shortDesc}

          </p>



          <motion.p

            initial={{ height: 0, opacity: 0 }}

            variants={{

              hover: {

                height: "auto",

                opacity: 1,

                marginTop: "1rem",

              },

            }}

            className="

              overflow-hidden

              text-orange-600

            "

          >

            {longDesc}

          </motion.p>

        </div>

      </motion.div>



      {/* Hover Background */}

      <motion.div

        className="

          absolute

          inset-0

          -z-10

          bg-[#F4D7B5]

        "

        initial={{ scaleY: 0 }}

        whileHover={{ scaleY: 1 }}

        style={{ originY: 0.5 }}

      />

    </motion.div>

  );

}





function Projects() {

  return (

    <section

      id="projects"

      className="min-h-screen px-10 py-24 bg-[#ececec]"

    >

      {/* Heading */}

      <div className="flex items-center gap-4 mb-20">

        <div className="h-14 w-[4px] bg-yellow-400 rounded-full"></div>



        <h2 className="text-5xl font-audiowide tracking-wider">

          PROJECTS

        </h2>

      </div>



      {/* Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <ProjectRow

  title1="UI"

  title2="LIBRARY"

  shortDesc="Reusable animated components."

  longDesc="Includes magnetic buttons, gooey effects, SVG filters, animated cards, loaders and motion-driven interactions."

/>



<ProjectRow

  title1="PORTFOLIO"

  title2="WEBSITE"

  shortDesc="Personal designer portfolio."

  longDesc="Built with React, Tailwind and Framer Motion featuring smooth page transitions, custom animations and interactive storytelling."

/>  

      </div>

    </section>

  );

}



export default Projects;