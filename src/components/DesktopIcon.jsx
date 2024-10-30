"use client";

import Image from "next/image";
import React, { useState } from "react";
import Window from "./Window";
import IconsData from "../data/IconsData"; // Adjust the path as necessary

export default function DesktopIcon() {
  const [openWindow, setOpenWindow] = useState(null);
  const [icons] = useState(IconsData); // Directly use IconsData

  const handleIconDoubleClick = (iconId) => {
    setOpenWindow(iconId);
  };

  return (
    <div className="mx-2 mt-2 flex flex-col flex-wrap gap-4">
      {icons.length !== 0 && (
        icons.map((icon) => (
          <div
            key={icon.id}
            className="px-2 hover:bg-gray-400 hover:bg-opacity-30 hover:border hover:border-gray-600 w-fit"
            onDoubleClick={() => handleIconDoubleClick(icon.id)}
          >
            <Image src={icon.imageSrc} width={60} height={60} alt={icon.altText} />
            <p className="text-white text-center text-xs">{icon.name}</p>
          </div>
        ))
      )}

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
