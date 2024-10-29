"use client";
import Image from "next/image";
import React, { useState } from "react";
import ThisPC from "./ThisPC"; 

export default function DesktopIcon() {
  const [showThisPC, setShowThisPC] = useState(false);

  const handleThisPCClick = () => {
    setShowThisPC(true); 
  };

  return (
    <div className="mx-2 mt-2 flex flex-col flex-wrap gap-4">
      <div className="px-2 hover:bg-gray-400 hover:bg-opacity-30 hover:border hover:border-gray-600 focus:bg-gray-400 focus:bg-opacity-30 focus:border focus:border-gray-600 w-fit z-0" onDoubleClick={handleThisPCClick}>
        <Image src="/images/thispc.png" width={60} height={60} alt="network" className="bg-transparent z-10"/>
        <p className="text-white text-center text-xs">This PC</p>
      </div>

      <div className="px-2 hover:bg-gray-400 hover:bg-opacity-30 hover:border hover:border-gray-600 w-fit z-0">
        <Image src="/images/network.png" width={60} height={60} alt="network" className="bg-transparent z-10"/>
        <p className="text-white text-center text-xs">Network</p>
      </div>

      <div className="px-2 hover:bg-gray-400 hover:bg-opacity-30 hover:border hover:border-gray-600 w-fit z-0">
        <Image src="/images/recycle bin.png" width={60} height={60} alt="network" className="bg-transparent z-10"/>
        <p className="text-white text-center text-xs">Recycle Bin</p>
      </div>

      <div className="px-2 hover:bg-gray-400 hover:bg-opacity-30 hover:border hover:border-gray-600 w-fit z-0">
        <Image src="/images/control panel.png" width={60} height={60} alt="network" className="bg-transparent z-10" />
        <p className="text-white text-center text-xs">Control<br /> Panel</p>
      </div>

      {showThisPC && (
        <div className="absolute top-20 left-20 p-4  rounded-md">
          <div className="absolute -top-20 -left-20">
            <ThisPC setShowThisPC={setShowThisPC} />
          </div>
        </div>
      )}
    </div>
  );
}
