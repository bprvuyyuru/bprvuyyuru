"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/constants";
import MagicButton from "./MagicButton";
import { Player } from "@lottiefiles/react-lottie-player";

const Footer = () => {
  return (
    <footer className="w-full text-white mt-10" id="contact">
      <div className="grid justify-items-center lg:grid-cols-2 grid-cols-1 gap-5 p-[2rem]">
        <div className="flex flex-col gap-6 pl-10">
          <h1 className="heading lg:max-w-[45vw] text-4xl font-bold">
            Ready to take{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              your
            </span>{" "}
            digital presence to the next level?
          </h1>
          <p className="text-gray-300 heading lg:max-w-[45vw] text-2xl font-bold">
            Reach out to me today and let&apos;s discuss how I can help you
            <span className="cursive mx-4 text-white">achieve</span> your{" "}
            <span className="cursive mx-4 text-white">goals</span>.
          </p>
          <a href="mailto:bprvuyyuru@gmail.com" className="z-50">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="w-1/2 p-[2rem]">
          <Player
            src="https://lottie.host/e415c035-5035-48a6-9947-45143166e183/wQU634hqLj.json"
            className="player"
            loop
            autoplay
          />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center mx-5">
        <p className="text-sm font-light text-white">
          Copyright © 2026 Bhanu Vuyyuru
        </p>

        <div className="flex items-center md:gap-3 gap-6 z-50">
          {socialMedia.map((info) => (
            <a
              href="https://www.linkedin.com/in/bhanuvuyyuru/"
              target="_blank"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
