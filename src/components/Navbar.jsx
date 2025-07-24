import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: '-100%',
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-6 md:px-12 h-20 text-gray-200 text-xl">
        {/* Left side: Logo + CV */}
        <div className="flex items-center gap-6">
          <a href="#" className="font-bold text-white">MY PORTFOLIO</a>
          <a
  href="/Shubhi-Verma-Resume.pdf"
  download
  className="px-6 py-3 border border-blue-400 text-base font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
>
  Download CV
</a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <li className="hover:text-blue-500 transition">
            <Link to="hero" smooth={true} offset={-80} duration={500}>Home</Link>
          </li>
          <li className="hover:text-blue-500 transition">
            <Link to="about" smooth={true} offset={-110} duration={500}>About</Link>
          </li>
          <li className="hover:text-blue-500 transition">
            <Link to="projects" smooth={true} offset={0} duration={500}>Projects</Link>
          </li>
          <li className="hover:text-blue-500 transition">
            <Link to="contact" smooth={true} offset={-90} duration={500}>Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          onClick={toggleNav}
          className="md:hidden z-50 text-gray-200 hover:text-blue-500 transition cursor-pointer"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Menu Drawer */}
        <motion.div
          initial={false}
          animate={nav ? 'open' : 'closed'}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
            <li className="hover:text-blue-500 transition">
              <Link to="hero" onClick={closeNav} smooth={true} offset={-80} duration={500}>Home</Link>
            </li>
            <li className="hover:text-blue-500 transition">
              <Link to="about" onClick={closeNav} smooth={true} offset={-110} duration={500}>About</Link>
            </li>
            <li className="hover:text-blue-500 transition">
              <Link to="projects" onClick={closeNav} smooth={true} offset={0} duration={500}>Projects</Link>
            </li>
            <li className="hover:text-blue-500 transition">
              <Link to="contact" onClick={closeNav} smooth={true} offset={-90} duration={500}>Contact</Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
