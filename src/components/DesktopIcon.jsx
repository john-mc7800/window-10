"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import IconsData from "../data/IconsData";
import TitleBar from "./ThisPc/TitleBar";
import MenuBar from "./ThisPc/MenuBar";
import LocationBar from "./statusBarComponents/LocationBar";
import { AppStateContext } from "@/context/AppState";
import ThisPCMain from "./ThisPc/ThisPCMain";

export default function DesktopIcon() {
  const{openWindow,setOpenWindow,closeWindow}=useContext(AppStateContext)
  const [icons] = useState(IconsData);

  const handleIconDoubleClick = (iconId) => {
    setOpenWindow(iconId);
  };

  

  return (
    <div className="mx-2 mt-2 flex flex-col flex-wrap gap-4 z-1">
      {icons?.map(({ id, imageSrc, altText, name, name1 }) => (
        <div key={id} className="px-2 hover:bg-gray-400 hover:bg-opacity-30 hover:outline hover:outline-offset-0 hover:outline-1 hover:outline-gray-600 w-fit" onDoubleClick={() => handleIconDoubleClick(id)}>
          <Image src={imageSrc} width={60} height={60} alt={altText} />
          <p className="text-white text-center text-xs">
            {id === "controlpanel" ? (<>{name}<br />{name1}</>) : (name)}
          </p>
        </div>
      ))}
      {openWindow === "thispc" && (
        <div className="absolute top-0 left-0 bg-white shadow-lg w-[100vw] h-[100vh] ">
          <TitleBar title={icons.find((icon) => icon.id === openWindow)?.name} onClose={closeWindow}/>
          <MenuBar />
          <LocationBar />
          <ThisPCMain/>
        </div>
      )}
      {openWindow === "network" && (
        <div className="absolute top-0 left-0 bg-white shadow-lg w-[100vw] h-[100vh]">
          <p>network</p>
        </div>
      )}
    </div>
  );
}
