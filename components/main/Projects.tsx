"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/constants";
import { PinContainer } from "./Pin";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="w-full p-[2rem]">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">My Craft and Creations</h1>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="gap-6 mt-6 text-4xl font-bold text-white w-auto h-auto"
          >
            <span>
              A Small Selection of recent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-500">
                {" "}
                Projects{" "}
              </span>
            </span>
          </motion.div>
        </div>

        <div className="w-full grid justify-items-center lg:grid-cols-2 grid-cols-1 gap-1 mt-10 p-[2rem]">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center"
              key={item.id}
            >
              <PinContainer title={item.website} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="cursive p-2 font-bold text-white lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="font-light text-sm"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
