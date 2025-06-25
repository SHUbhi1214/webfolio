import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si"
import { AiOutlineLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="w-full bg-transparent py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center space-y-6 text-center">

        {/* Title */}
        <h3 className="text-3xl font-semibold text-blue-400">
          Find Me Online
        </h3>

        {/* Glowing Underline */}
        <div className="h-1 w-48 bg-blue-500 mb-2 animate-pulse rounded-full shadow-md" />

        {/* Social Links */}
        <div className="flex gap-8 text-4xl mt-4">
          {/* GitHub */}
          <a
            href="https://github.com/SHUbhi1214"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-transform transform hover:scale-110"
          >
            <FaGithubSquare />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/shubhi_verma/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-yellow-200 transition-transform transform hover:scale-110"
          >
            <SiLeetcode />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shubhi-verma12/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-transform transform hover:scale-110"
          >
            <AiOutlineLinkedin />
          </a>
        </div>

        {/* Footer Note (optional) */}
        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Shubhi Verma. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
