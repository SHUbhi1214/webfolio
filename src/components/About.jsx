import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id="about" className="w-full px-6 py-20 flex justify-center items-center bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl w-full"
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-4 text-center">About Me</h2>

        {/* Underline animation like in Tech Stack */}
        <motion.div
          className="h-1 w-40 bg-blue-500 mx-auto mb-10"
          style={{ transformOrigin: "center" }}
          initial={{ scaleX: 0 }}
          whileInView={{
            scaleX: [0, 1, 1.05, 1],
            boxShadow: [
              "0 0 0 rgba(59, 130, 246, 0)",
              "0 0 10px 5px rgba(59, 130, 246, 0.6)",
              "0 0 0 rgba(59, 130, 246, 0)",
            ],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: 0,
            times: [0, 0.4, 0.6, 1],
          }}
        />

        {/* Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          {/* CGPA Box at left center */}
          <div className="md:w-[160px] w-full flex justify-center md:justify-start">
  <div className="bg-gray-800/40 px-6 py-6 rounded-xl text-center shadow-lg">
    <h3 className="text-3xl font-bold text-white leading-none">
      7.58 <span className="text-base">AVG</span>
    </h3>
    <p className="text-sm text-gray-300 mt-1">CGPA</p>
  </div>
</div>

          {/* About Text */}
          <div className="flex-1 text-gray-200 text-base leading-7 tracking-normal">
            <p>
  Hey! I’m <span className="text-blue-300 font-semibold">Shubhi Verma</span>, a final year student at <span className="text-blue-300 font-medium">Birla Institute of Technology, Mesra</span>, currently pursuing a <span className="text-blue-300 font-medium">Bachelor of Technology in Electronics and Communication Engineering</span>. Alongside my academic journey, I’ve cultivated a strong passion for web development and have worked extensively on both frontend and backend projects.
</p>


            <br />

            <p>
              I specialize in the MERN stack (MongoDB, Express, React, Node.js) and love crafting responsive, user-friendly applications. I'm deeply committed to continuous learning and pushing the boundaries of what I can build.
            </p>

            <br />

            <p>
              Whether it's problem solving on platforms like LeetCode or building beautiful UIs in React, I enjoy turning ideas into reality through code.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
