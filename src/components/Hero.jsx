import React from 'react';
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from './ShinyEffect';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import girl from '../assets/girl.png'; // Adjust path if needed

export const Hero = () => {
  return (
    <div className="pt-40 pb-32 max-w-[1400px] mx-auto relative" id="hero">
      <div className="translate-x-12"> {/* Slightly shift the whole content right */}

        <div className="grid md:grid-cols-2 place-items-center gap-12 md:gap-24 px-4 md:px-8">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <TypeAnimation
              sequence={[
                "Frontend Developer", 1000,
                "Backend Developer", 1000,
                "Full Stack Developer"
              ]}
              speed={50}
              repeat={Infinity}
              className="font-bold text-gray-400 text-2xl md:text-5xl italic mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-200 md:text-8xl text-5xl tracking-tight mb-6 leading-tight"
            >
              Hello, I am <br />
              <span className="text-blue-500">Shubhi Verma</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="text-gray-300 max-w-[350px] md:max-w-[550px] md:text-2xl text-lg mb-8"
            >
              I am a passionate Fullstack Developer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-row items-center gap-6"
            >
              <motion.a
                whileHover={{ scale: 1.08, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)" }}
                href="/Shubhi Verma Resume.pdf"
                download
                className="z-10 cursor-pointer font-bold text-gray-200 text-lg md:text-xl px-8 py-4 border-2 border-blue-400 rounded-2xl transition-all duration-300"
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image with blurred circle */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            {/* Blurred Blue Glow */}
            <div className="absolute w-[480px] h-[480px] rounded-full bg-blue-500 opacity-15 blur-3xl z-0" />

            {/* Main Image */}
            <img
              src={girl}
              alt="Developer Illustration"
              className="w-[380px] h-[380px] md:w-[460px] md:h-[460px] object-cover rounded-full shadow-2xl z-10 transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </div>

      </div>

      {/* Background shiny effect */}
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1600} />
      </div>
    </div>
  );
};
