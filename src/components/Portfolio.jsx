import React from 'react';
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import airline from "../assets/airline.jpg";
import ecom from "../assets/ecom.jpg";
import pgperfect from "../assets/pgperfect.jpg";

const projects = [
  {
    img: pgperfect,
    title: "PG Perfect",
    description: "A generalised PG management and accommodation software solution to handle all tasks including rent collection and payment options.",
    github: "https://github.com/SHUbhi1214/PG_Perfect"
  },
  {
    img: ecom,
    title: "E-Commerce App",
    description: "A full-stack MERN e-commerce platform with user authentication, admin dashboard, product listings, search and filter functionality, and secure checkout using Stripe.",
    github: "https://github.com/SHUbhi1214/E-Commerce-App"
  },
  {
    img: airline,
    title: "Airline Booking System",
    description: "This project is the backend service for airline ticket booking, including user management and a reminder service before flight timings.",
    github: "#"
  }
];

const Portfolio = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-6 text-gray-200 pt-12 md:pt-20 pb-16" id="projects">
      <h2 className="text-4xl font-bold mb-2 text-white text-center">Projects</h2>

      {/* Shiny Underline */}
      <motion.div
        className="h-1 w-40 bg-blue-500 mx-auto mb-12"
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

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-20 w-full max-w-4xl`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-1/2 p-4">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-[240px] md:h-[280px] object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-white mb-4">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              {project.description}
            </p>
            <a
              href={project.github}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-2xl w-fit"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Portfolio;
