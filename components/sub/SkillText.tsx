"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">What I Bring to the Table</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="gap-6 mt-6 text-4xl font-bold text-white w-auto h-auto"
      >
        <span>
          Making Apps with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
            {" "}
            Modern Tech{" "}
          </span>
        </span>
      </motion.div>
    </div>
  );
};

export default SkillText;
