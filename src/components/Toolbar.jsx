"use client"
import React, { useEffect, useRef, useState } from "react";
import { IoLogoWindows } from "react-icons/io";
import { FcFolder } from "react-icons/fc";
import { FaOpera } from "react-icons/fa";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import { IoWifiOutline } from "react-icons/io5";
import ClockCalculator from "./ClockCalender";
import { BiMessage } from "react-icons/bi";
// import WindowMenuComponent from "./windowMenuComponent";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import { IoDocumentOutline } from "react-icons/io5";
import { AiOutlinePicture } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { GiPowerButton } from "react-icons/gi";

export default function Toolbar() {
  const[windowMenu,setWindowMenu]=useState(false);
  const windowMenuRef = useRef(null);
  const toggleWindowMenu = () => {
    setWindowMenu((prev) => !prev);
  };
  // Close window menu when clicking outside
  const handleClickOutside = (event) => {
    if (windowMenuRef.current && !windowMenuRef.current.contains(event.target)) {
      setWindowMenu(false); // Close the window menu
    }
  };

  // Add event listener when the component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
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
          {windowMenu&&<>
            <div ref={windowMenuRef} className="w-[650px] h-[630px] absolute bottom-8 -left-5 bg-[#262625] z-1 grid grid-cols-[50px_200px_1fr] pt-4">
              <div className="flex flex-col justify-between items-center">
                <RxHamburgerMenu size={22}/>
                <div className="flex flex-col justify-between items-center text-white gap-6 mb-4">
                <RxAvatar size={22}/>
                <IoDocumentOutline size={22} />
                <AiOutlinePicture size={22} />
                <CiSettings size={22} />
                <GiPowerButton size={22} />
                </div>
              </div>
              <div className="bg-blu-800 px-2 space-y-4">
                <div className="space-y-2">
                <h3 className="text-white text-xs font-thin pl-1">Recently added</h3>
                <div className="flex flex-row items-center gap-4 ">
                <Image src="/images/postman.png" width={30} height={30} alt="postman"/>
                  <p className="text-white text-xs font-thin">Postman</p>
                </div>
                <div className="flex flex-row items-center gap-4 ">
                <Image src="/images/mongodb.png" width={30} height={30} alt="mongodb" className="bg-white rounded-full p-0.5"/>
                  <p className="text-white text-xs font-thin">MongoDBCompass</p>
                </div>
                </div>
                <div className="space-y-2">
                <h3 className="text-white text-xs font-thin pl-1">#</h3>
                <div className="flex flex-row items-center gap-4 ">
                <Image src="/images/3d white.png" width={30} height={30} alt="postman"/>
                  <p className="text-white text-xs font-thin">3D Viewer</p>
                </div>
                </div>
                <div className="space-y-2">
                <h3 className="text-white text-xs font-thin pl-1">C</h3>
                <div className="flex flex-row items-center gap-4 ">
                <Image src="/images/calculator.png" width={30} height={30} alt="postman"/>
                  <p className="text-white text-xs font-thin">Calculator</p>
                </div>
                <div className="flex flex-row items-center gap-4 ">
                <Image src="/images/calendar.png" width={30} height={30} alt="postman"/>
                  <p className="text-white text-xs font-thin">Calender</p>
                </div>
                <div className="flex flex-row items-center gap-4 ">
                <Image src="/images/camera.png" width={30} height={30} alt="postman"/>
                  <p className="text-white text-xs font-thin">Camera</p>
                </div>
                <div className="flex flex-row items-center gap-4 ">
                <Image src="/images/folder2.png" width={30} height={30} alt="postman"/>
                  <p className="text-white text-xs font-thin">Chrome Apps</p>
                </div>
                <div className="flex flex-row items-center gap-4 ">
                <Image src="/images/clock.png" width={30} height={30} alt="postman"/>
                  <p className="text-white text-xs font-thin">Clock</p>
                </div>
                <div className="flex flex-row items-center gap-4 ">
                <Image src="/images/cortana.png" width={30} height={30} alt="postman"/>
                  <p className="text-white text-xs font-thin">Cortana</p>
                </div>
                </div>
                <div className="space-y-2">
                <h3 className="text-white text-xs font-thin pl-1">F</h3>
                <div className="flex flex-row items-center gap-4 ">
                <Image src="/images/.png" width={30} height={30} alt="postman"/>
                  <p className="text-white text-xs font-thin"></p>
                </div>
                </div>
              </div>
              <div className="bg-yellow-800">c</div>
            </div>
          {/* <WindowMenuComponent/> */}
          </>}
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
          <div className="flex justify-end gap-x-4 items-center -2">
            <IoIosArrowUp size={20} color="white" />
            <IoWifiOutline size={21} color="white" className="-rotate-45 " />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 56 56"
              className="text-white text-xl"
            >
              <path
                fill="currentColor"
                d="M47.937 49.384c.737.497 1.713.298 2.29-.518C53.87 43.65 56 36.941 56 29.834S53.85 16 50.227 10.783c-.577-.816-1.553-1.015-2.29-.498c-.756.518-.876 1.513-.298 2.35c3.205 4.717 5.196 10.77 5.196 17.2s-1.931 12.561-5.196 17.2c-.578.816-.458 1.811.298 2.349M22.715 48.01c1.353 0 2.329-.995 2.329-2.33V13.929c0-1.334-.976-2.448-2.37-2.448c-.975 0-1.612.477-2.687 1.433l-9.356 8.301a.7.7 0 0 1-.498.18H4.22c-2.826 0-4.22 1.413-4.22 4.42v7.922c0 3.006 1.394 4.42 4.22 4.42h5.913c.199 0 .378.06.498.179l9.356 8.381c.976.876 1.752 1.294 2.728 1.294m17.2-4.061c.776.517 1.732.318 2.289-.478c2.628-3.663 4.16-8.54 4.16-13.637c0-5.116-1.512-9.993-4.16-13.656c-.577-.777-1.513-.976-2.29-.458c-.756.518-.875 1.493-.278 2.35c2.17 3.184 3.524 7.365 3.524 11.764c0 4.4-1.314 8.62-3.524 11.766c-.577.856-.478 1.831.279 2.349m-18.355-.14c-.1 0-.22-.06-.339-.179l-8.819-7.943c-.477-.438-.875-.537-1.413-.537h-6.63c-.776 0-1.154-.359-1.154-1.155v-8.44c0-.777.378-1.155 1.155-1.155h6.629c.537 0 .916-.08 1.413-.538l8.82-8.003c.099-.08.218-.159.338-.159c.179 0 .279.12.279.279v27.53c0 .18-.1.298-.28.298m10.412-5.235c.676.478 1.652.318 2.23-.458c1.552-2.09 2.487-5.156 2.487-8.282c0-3.125-.955-6.17-2.488-8.301c-.577-.776-1.533-.936-2.23-.458c-.875.577-.975 1.593-.338 2.469c1.155 1.552 1.851 3.921 1.851 6.29s-.736 4.738-1.87 6.311c-.598.856-.499 1.832.357 2.429"
              ></path>
            </svg>
            {/* <GrKeyboard color="white" size={25} /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
              className="text-white text-xl"
            >
              <path
                fill="currentColor"
                d="M17 384h432V128H17Zm32-224h368v192H49Z"
              ></path>
              <path
                fill="currentColor"
                d="M70.69 182.92H256v146.16H70.69zM465 202.67h32v106.67h-32z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
              className="text-white text-2xl"
            >
              <path
                fill="currentColor"
                d="M3 7c-1.094 0-2 .906-2 2v14c0 1.094.906 2 2 2h26c1.094 0 2-.906 2-2V9c0-1.094-.906-2-2-2zm0 2h26v14H3zm2 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM5 15v2h4v-2zm6 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h4v-2zM5 19v2h4v-2zm6 0v2h10v-2zm12 0v2h4v-2z"
              ></path>
            </svg>
            <p className="text-white text-xs">ENG</p>
            <ClockCalculator />
            <BiMessage className="text-2xl" />
            <button className="border-l border-[#787777] h-10 w-0"></button>
          </div>
        </div>
      </div>
    </>
  );
}
