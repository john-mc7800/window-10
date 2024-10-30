"use client";

import Image from "next/image";
import React, { useState } from "react";
import Window from "./Window";
import IconsData from "../data/IconsData"; 

export default function DesktopIcon() {
  const [openWindow, setOpenWindow] = useState(null);
  const [icons] = useState(IconsData); 

  const handleIconDoubleClick = (iconId) => {
    setOpenWindow(iconId);
  };

  return (
    <div className="mx-2 mt-2 flex flex-col flex-wrap gap-4">
      {icons?.map(({ id, imageSrc, altText, name, name1 }) => (
        <div
          key={id}
          className="px-2 hover:bg-gray-400 hover:bg-opacity-30 hover:outline hover:outline-offset-0 hover:outline-1 hover:outline-gray-600 w-fit"
          onDoubleClick={() => handleIconDoubleClick(id)}
        >
          <Image src={imageSrc} width={60} height={60} alt={altText} />
          <p className="text-white text-center text-xs">
            {id === "controlpanel" ? (<>{name}<br />{name1}</>) : (name)}
          </p>
        </div>
      ))}

      {openWindow && (
        <div className="absolute top-0 left-0">
          <Window
            title={icons.find((icon) => icon.id === openWindow)?.name}
            content={<p>This is the content of {icons.find((icon) => icon.id === openWindow)?.name}.</p>}
            onClose={() => setOpenWindow(null)}
          />
        </div>
      )}
    </div>
  );
}
