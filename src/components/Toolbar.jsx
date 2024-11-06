"use client"
import React, { useEffect, useRef, useState } from "react";
import { IoLogoWindows } from "react-icons/io";
import { FcFolder } from "react-icons/fc";
import { FaOpera } from "react-icons/fa";
import Image from "next/image";
import WindowMenuComponent from "./windowMenu/WindowMenuComponent";
import ToolbarRightSection from "./ToolbarRightSection";

  export default function Toolbar() {
    const[windowMenu,setWindowMenu]=useState(false);
    const windowMenuRef = useRef(null);
    const toggleWindowMenu = () => {
      setWindowMenu((prev) => !prev);
    };
    const handleClickOutside = (event) => {
      if (windowMenuRef.current && !windowMenuRef.current.contains(event.target)) {
        setWindowMenu(false); 
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    
    return (
      <>
        <div className="absolute bottom-0 bg-[#1d1616] w-full h-[45px]  z-10 backdrop-blur-3xl "></div>
        <div className="absolute bottom-0 h-[45px] w-full grid grid-cols-2 justify-between items-center text-white z-20">
          <div className="flex flex-row  items-center gap-x-4 mx-4">
            <div className="relative" onClick={toggleWindowMenu}>
            <IoLogoWindows size={20} className="" />
            {windowMenu&&
            <div className="z-20">
            <WindowMenuComponent windowMenuRef={windowMenuRef}/>
            </div>}
            </div>
            <div className="font-thin text-base text-gray-500">||</div>
            <FcFolder size={30} className="" />
            <Image width={32} height={32} src="https://img.icons8.com/fluency/48/chrome.png" alt="Chrome" className="mx-2"/>
            <Image width={32} height={32} src="https://img.icons8.com/fluency/48/ms-edge-new.png" alt="Microsoft Edge" className="mx-2" />
            <FaOpera size={22} className="text-red-700" />
            <Image width={32} height={32} src="https://img.icons8.com/fluency/48/skype.png" alt="Skype" className="mx-2"
            />
          </div>
          <div className="mx-2  h-[45px] flex justify-end items-center ">
            <ToolbarRightSection/>
          </div>
        </div>
      </>
    );
  }
