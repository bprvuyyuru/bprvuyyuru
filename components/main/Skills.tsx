"use client";
import { Backend_skill, Frontend_skill, Other_skill } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";
import { Player } from "@lottiefiles/react-lottie-player";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden p-[2rem]"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />
      <div className="flex flex-row w-full gap-6 p-8">
        <div className="w-1/3">
          <motion.div
            variants={slideInFromRight(0.5)}
            className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
          >
            My Frontend Tech Stack
          </motion.div>
          <div className="grid grid-cols-4 gap-[2rem] justify-around rounded-lg p-[1.4rem] border border-[#7042f88b] opacity-[0.9]">
            {Frontend_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="w-1/3">
          <motion.div
            variants={slideInFromRight(0.5)}
            className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
          >
            My Backend Tech Stack
          </motion.div>
          <div className="grid grid-cols-4 gap-[2rem] justify-around rounded-lg p-[1.4rem] border border-[#7042f88b] opacity-[0.9]">
            {Backend_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="w-1/3">
          <motion.div
            variants={slideInFromRight(0.5)}
            className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
          >
            My All Other Tech Stack
          </motion.div>
          <div className="grid grid-cols-4 gap-[2rem] justify-around rounded-lg p-[1.4rem] border border-[#7042f88b] opacity-[0.9]">
            {Other_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
          <Player
            src="https://lottie.host/345ab56f-87ed-4f63-91fb-c5ee37b456e9/PZUIZTHLSv.json"
            className="player"
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
