import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg bg-[#03001417] z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center backdrop-blur-md"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 font-bold text-lg px-[20px] py-[10px] rounded-lg tracking-widest border border-[#7042f861] bg-[#0300145e]">
            VBPR
          </span>
        </a>

        <div className="w-[400px] h-full flex flex-row items-center justify-between text-sm backdrop-blur-md">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-lg text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#experience" className="cursor-pointer">
              Experience
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
