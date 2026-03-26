"use client";
import React from "react";

import { workExperience } from "@/constants";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Experience = () => {
  return (
    <section id="experience">
      <div className="w-full p-[2rem]">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">My Journey So Far</h1>
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="gap-6 mt-6 text-4xl font-bold text-white w-auto h-auto"
          >
            <span>
              My Work
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-500">
                {" "}
                Experience{" "}
              </span>
            </span>
          </motion.div>
          <motion.div
            variants={slideInFromRight(0.5)}
            className="cursive text-[20px] text-gray-200 mt-[10px] text-center"
          >
            More than 5 years
          </motion.div>
        </div>

        <div className="w-full mt-12 grid justify-items-center lg:grid-cols-2 grid-cols-1 gap-10 p-[2rem]">
          {workExperience.map((card) => (
            <div
              key={card.id}
              className="flex-1 dark:text-white rounded-lg border border-[#5c61928b] opacity-[0.9]"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img src={card.thumbnail} className="lg:w-30 md:w-20 w-16" />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold text-white">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 text-gray-400">
                    {card.desc}
                  </p>
                  <p className="cursive text-sm text-start text-white mt-3">
                    {card.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
