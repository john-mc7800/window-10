import Image from 'next/image';
import { IoMdCloudOutline } from "react-icons/io";
import React from 'react';

export default function OneDrive() {
  // Data array with information for each item
  const items = [
    {
      image: "/images/screen.png",
      label: "Desktop",
      date: "05-Nov-24 11:22 AM",
      type: "File folder",
      size: ""
    },
    {
      image: "/images/document2.png",
      label: "document",
      date: "09-Nov-24 4:01 AM",
      type: "File folder",
      size: ""
    },
    {
      image: "/images/picture.png",
      label: "picture",
      date: "29-Oct-24 4:22 AM",
      type: "File folder",
      size: ""
    },
    {
      image: "/images/files/pdf.png",
      label: "Getting started with OneDrive",
      date: "09-Nov-24 4:22 AM",
      type: "Micro Edge Powerpoint",
      size: "1,124 KB"
    },
  ];

  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-[250px_1fr_1fr_1fr_1fr] w-[60vw] m-2 text-xs overflow-hidden">
          <div className="flex flex-row items-center gap-2">
            <Image src={item.image} width={20} height={20} alt="Icon" />
            <p className="text-black">{item.label}</p>
            
          </div>
          <div className="flex items-center text-blue-600">
            <IoMdCloudOutline size={18} />
          </div>
          <div className="text-black">{item.date}</div>
          <div className="text-black">{item.type}</div>
          <div className="text-black">{item.size}</div>  
        </div>
      ))}
    </>
  );
}
