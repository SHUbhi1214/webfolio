import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import girl from '../assets/girl.png';
import ShinyEffect from './ShinyEffect';

export const Hero = () => {
  return (
    <div className="pt-40 pb-32 max-w-[1400px] mx-auto relative" id="hero">
      {/* Grid Layout shifted to right */}
      <div className="grid md:grid-cols-2 place-items-center gap-12 md:gap-24 px-4 md:px-8 translate-x-14">

        {/* === Left Side === */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              'Frontend Developer', 1000,
              'Backend Developer', 1000,
              'Full Stack Developer'
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
            className="text-gray-200 text-5xl md:text-8xl font-bold leading-tight mb-6"
          >
            Hello, I am <br />
            <span className="text-blue-500">Shubhi Verma</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 text-lg md:text-2xl max-w-[550px] mb-8"
          >
            I am a passionate Fullstack Developer.
          </motion.p>
        </motion.div>

        {/* === Right Side - Image === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Blurred Glow */}
          <div className="absolute w-[480px] h-[480px] rounded-full bg-blue-500 opacity-15 blur-3xl z-0" />

          {/* Main Image */}
          <img
            src={girl}
            alt="Developer"
            className="w-[380px] h-[380px] md:w-[460px] md:h-[460px] object-cover rounded-full shadow-2xl z-10 transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>

       
    </div>
  );
};
