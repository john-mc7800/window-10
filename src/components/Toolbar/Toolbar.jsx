"use client"
import React, { useContext, useState } from "react";
import { IoLogoWindows } from "react-icons/io";
import { FcFolder } from "react-icons/fc";
import { FaOpera } from "react-icons/fa";
import Image from "next/image";
import WindowMenuComponent from "./windowMenu/WindowMenuComponent";
import FileManagerComponenet from "./FileManagerComponenet";
import ToolbarRightSection from "./ToolbarRightSection";


  export default function Toolbar() {
    const[windowMenu,setWindowMenu]=useState(false);
    const toggleWindowMenu = () => {
      setWindowMenu((prev) => !prev);
    };
    const[FileManager,setFileManager]=useState(false);
    const toggleFileManager = () => {
      setFileManager((prev) => !prev);
    };
    const closeFileManager = () => {
      setFileManager(false);
    };
  
  
    
    
    return (
      <div className="h-fit ">
        <div className="absolute bottom-0 bg-[#1d1616] w-full h-[7vh]  z-10 backdrop-blur-3xl "></div>
        <div className="absolute bottom-0 h-[7vh] w-full grid grid-cols-2 justify-between items-center text-white z-20 select-none">
          <div className="flex flex-row  items-center gap-x- ">
            <div className="relative" >
              <div className="hover:bg-gray-200  hover:bg-opacity-10 p-4">
              <IoLogoWindows size={20} className="" onClick={toggleWindowMenu}/>
              </div>
              {windowMenu&&
              <div className="z-20">
              <WindowMenuComponent />
              </div>}
            </div>
            <div className="font-thin text-base text-gray-500">||</div>
            <div className="hover:bg-gray-200 hover:bg-opacity-10 py-2 px-4" >
            <FcFolder size={30} className="" onDoubleClick={toggleFileManager} />
            {FileManager&&
            <div className=" fixed top-0 left-0">
              <FileManagerComponenet onClose={closeFileManager}/>
            </div>
              
            }

            </div>
            <div className="hover:bg-gray-200  hover:bg-opacity-10 p-2">
            <Image width={32} height={32} src="https://img.icons8.com/fluency/48/chrome.png" alt="Chrome" className="mx-2"/>
            </div>
            <div className="hover:bg-gray-200  hover:bg-opacity-10 p-2">
            <Image width={32} height={32} src="https://img.icons8.com/fluency/48/ms-edge-new.png" alt="Microsoft Edge" className="mx-2" />
            </div>
            <div className="hover:bg-gray-200  hover:bg-opacity-10 p-2">
            <Image width={32} height={32} src="https://img.icons8.com/fluency/48/opera.png" alt="Skype" className="mx-2"/>

            </div>
            <div className="hover:bg-gray-200  hover:bg-opacity-10 p-2">
            <Image width={32} height={32} src="https://img.icons8.com/fluency/48/skype.png" alt="Skype" className="mx-2"/>
            </div>
          </div>
          <div className="mx-2  h-[7vh] flex justify-end items-center ">
            <ToolbarRightSection/>
          </div>
        </div>
      </div>
    );
  }
