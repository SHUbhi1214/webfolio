import React from 'react';
import { motion } from "framer-motion";
import Reveal from './Reveal';

const achievements = [
  {
    Title: "Leetcode",
    description: "Attained a LeetCode rating of 1511, reflecting strong problem-solving and algorithmic proficiency.",
  },
  {
    Title: "Problem-solving",
    description: "Solved over 265+ questions on LeetCode and GeeksforGeeks.",
  },
  {
    Title: "JEE",
    description: "Achieved an All India Rank of 30,680 in JEE Mains out of 12 lakh candidates, placing in the top 2.5 percent, demonstrating academic excellence and competitive aptitude.",
  }
];

const Achievements = () => {
  return (
    <div className="p-10 max-w-[600px] mx-auto pt-20 pb-100 mb-40" id="achievements">
      <h1 className="text-4xl text-white font-bold text-center mb-2">Achievements</h1>

      {/* Shiny Blue Underline */}
      <motion.div
        className="h-1 w-60 bg-blue-500 mx-auto mb-12"
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

      {/* Increased spacing from heading to content via mt-8 */}
      <motion.div
        className="space-y-8 mt-8"
        initial="hidden"
        animate="visible"
      >
        {achievements.map((achievement, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-[600px] mx-auto border border-blue-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-blue-700/10"
            >
              <p className="text-gray-400">{achievement.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Achievements;
