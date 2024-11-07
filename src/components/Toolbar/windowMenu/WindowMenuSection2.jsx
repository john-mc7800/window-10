import React from 'react'
import Image from 'next/image';

const sidebarItems = [
  {
    category: "Recently added",
    items: [
      { name: "Postman", imgSrc: "/images/postman.png", alt: "postman" },
      { name: "MongoDBCompass", imgSrc: "/images/mongodb.png", alt: "mongodb", className: "bg-white rounded-full p-0.5" }
    ]
  },
  {
    category: "#",
    items: [
      { name: "3D Viewer", imgSrc: "/images/3d white.png", alt: "3d" }
    ]
  },
  {
    category: "C",
    items: [
      { name: "Calculator", imgSrc: "/images/calculator.png", alt: "calculator" },
      { name: "Calender", imgSrc: "/images/calendar.png", alt: "calendar" },
      { name: "Camera", imgSrc: "/images/camera.png", alt: "camera" },
      { name: "Chrome Apps", imgSrc: "/images/folder2.png", alt: "chrome apps" },
      { name: "Clock", imgSrc: "/images/clock.png", alt: "clock" },
      { name: "Cortana", imgSrc: "/images/cortana.png", alt: "cortana" }
    ]
  },
  {
    category: "F",
    items: [
      { name: "Feedback Hub", imgSrc: "/images/feedback.png", alt: "feedback" }
    ]
  },
  {
    category: "G",
    items: [
      { name: "Game", imgSrc: "/images/game.png", alt: "game" },
      { name: "Get Help", imgSrc: "/images/get help.png", alt: "get help" },
      { name: "GitHub, Inc", imgSrc: "/images/folder2.png", alt: "github" },
      { name: "Google Chrome", imgSrc: "/images/chrome.png", alt: "chrome" }
    ]
  }
];


export default function WindowMenuSection2() {
  return (
    <div className="bg-blu-800 space-y-4  left-[60px] overflow-auto scrollbar-custom z-2 h-[76vh]  ">
    {sidebarItems.map((category, index) => (
      <div key={index} className="space-y-2 mt-4">
        <h3 className="text-white text-xs font-thin pl-2">{category.category}</h3>
        {category.items.map((item, idx) => (
          <div key={idx} className="flex flex-row items-center gap-4 hover:bg-gray-200 hover:bg-opacity-10 px-2">
            <Image src={item.imgSrc} width={30} height={30} alt={item.alt} className={item.className || ''} />
            <p className="text-white text-xs font-thin">{item.name}</p>
          </div>
        ))}
      </div>
    ))}
  </div>
  )
}
