import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const skills = [
    {
        category: "Frontend",
        technology: [
            { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
            { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
            { name: 'TAILWIND', icon: <RiTailwindCssFill className="text-blue-400" /> },
            { name: 'JAVASCRIPT', icon: <FaJs className=" text-yellow-500" /> },
            { name: 'REACT', icon: <FaReact className="text-blue-500" /> },
        ],
    },
    {
        category: 'Fullstack',
        technology: [
            { name: 'NODE JS', icon: <FaNodeJs className="text-green-500" /> },
            { name: 'Mongo DB', icon: <DiMongodb className="text-green-600" /> },
            { name: 'React', icon: <FaReact className="text-blue-500" /> },
            { name: 'Github', icon: <FaGithub className="text-white" /> },
        ],
    }
]

const Skills = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4 text-white pb-8 md:py-12" id="skills">
            <Reveal>
                <h2 className="text-4xl font-bold mb-2 text-center">My Skills</h2>

                {/* Shiny Underline */}
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

                <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-[1000px] mx-auto">
                    {skills.map((skill, index) => (
                        <div key={index} className="border border-blue-900 p-6 rounded-lg bg-blue-900/20 shadow-lg w-full md:w-1/2">
                            <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {skill.technology.map((tech, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <span className="text-2xl">{tech.icon}</span>
                                        <span>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Reveal>
        </div>
    )
}

export default Skills
