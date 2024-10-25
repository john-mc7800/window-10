import React from "react";
import { IoLogoWindows } from "react-icons/io";
import { FcFolder } from "react-icons/fc";
import { FaOpera } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

export default function Toolbar() {
  return (
    <>
      <div className="absolute bottom-0 bg-[#271E1E] w-full h-[7vh] opacity-80"></div>
      <div className="text-white absolute bottom-0 h-[8vh] flex flex-row justify-between items-center gap-x-4 mx-4">
        <IoLogoWindows size={20} />
        <div className="font-thin text-base text-gray-500">||</div>
        <FcFolder size={25} />
        <FaOpera size={22} className="text-red-700" />
        <FaSkype size={22} className="text-blue-400" />
      </div>
    </>
  );
}
