"use client";
import Image from "next/image";
import React, { useState } from "react";
import Window from "./Window";

export default function DesktopIcon() {
  const [openWindow, setOpenWindow] = useState(null);

  // Array of icon data
  const icons = [
    {
      id: "thispc",
      name: "This PC",
      imageSrc: "/images/thispc.png",
      altText: "thispc",
      content: <p>This is the content of This PC.</p>,
    },
    {
      id: "network",
      name: "Network",
      imageSrc: "/images/network.png",
      altText: "network",
      content: <p>This is the content of the Network window.</p>,
    },
    {
      id: "recyclebin",
      name: "Recycle Bin",
      imageSrc: "/images/recycle bin.png",
      altText: "recycle bin",
      content: <p>This is the content of the Recycle Bin.</p>,
    },
    {
      id: "controlpanel",
      name: "Control Panel",
      imageSrc: "/images/control panel.png",
      altText: "control panel",
      content: <p>This is the content of the Control Panel.</p>,
    },
  ];

  // Handle double-click to open window
  const handleIconDoubleClick = (iconId) => {
    setOpenWindow(iconId);
  };

  return (
    <div className="mx-2 mt-2 flex flex-col flex-wrap gap-4">
      {/* Render icons dynamically */}
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="px-2 hover:bg-gray-400 hover:bg-opacity-30 hover:border hover:border-gray-600 w-fit"
          onDoubleClick={() => handleIconDoubleClick(icon.id)}
        >
          <Image src={icon.imageSrc} width={60} height={60} alt={icon.altText} />
          <p className="text-white text-center text-xs">{icon.name}</p>
        </div>
      ))}

      {/* Render the open window content dynamically */}
      {openWindow && (
        <Window
          title={icons.find((icon) => icon.id === openWindow).name}
          content={icons.find((icon) => icon.id === openWindow).content}
          onClose={() => setOpenWindow(null)}
        />
      )}
    </div>
  );
}
