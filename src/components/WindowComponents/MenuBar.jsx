import Image from 'next/image';
import React, { useState } from 'react';
import { BsPinAngle } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import { SiPowershell, SiPinboard } from "react-icons/si";
import { IoMdClose, IoMdHelpCircle } from "react-icons/io";
import frequentPlaces from '@/data/FileData'; 

export default function MenuBar() {
  const [fileIsOpen, setFileIsOpen] = useState(false);
  
  const handleFileButton = () => {
    setFileIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className='flex flex-row text-xs items-center gap-1 cursor-context-menu'>
        <button onClick={handleFileButton} className='px-4 cursor-context-menu hover:bg-gray-50 hover:border border-gray-200 z-10'>File</button>
        <button className='px-4 cursor-context-menu hover:bg-gray-50 hover:border border-gray-200 z-0'>Home</button>
        <button className='px-4 cursor-context-menu hover:bg-gray-50 hover:border border-gray-200 z-0'>Share</button>
        <button className='px-4 cursor-context-menu hover:bg-gray-50 hover:border border-gray-200 z-0'>View</button>
      </div>

      {/* file Section */}
      {fileIsOpen && (
        <div className="w-[45vw] h-[50vh] relative -top-5 z-10 bg-white border">
          <button onClick={handleFileButton} className='text-start text-xs px-4 py-1 cursor-context-menu border-y border-gray-200 z-10 w-full bg-[#F5F6F7]'>File</button>
          <div className="w-[45vw] h-[40vh] grid grid-cols-[50%_50%] ">
            <div className="space-y-2 bg-[#FBFCFD] border ">
              {/* Other menu items */}
              <div className="flex flex-row items-center justify-between text-xs py-2 px-2 hover:bg-blue-100">
                <div className="flex flex-row items-center gap-2">
                  <Image className='w-10 h-8 ' src="/images/doc layout.jpg" width={50} height={50} alt="Picture of the author" />
                  <p>Open <u>n</u>ew window</p>
                </div>
                <IoMdArrowDropright size={20} />
              </div>
              {/* ... other items */}
            </div>
            <div className="bg-[#F6F7F8] border">
              <p className='border-b'>Frequent places</p>
              {frequentPlaces.map(place => (
                <div key={place.id} className="flex flex-row justify-between items-center mx-2 py-1 hover:bg-gray-100">
                  <p>{place.name}</p>
                  <SiPinboard size={20} className='text-[#686F73] -rotate-255 ' />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Home Section */}
      <div className="m-2 hidden">
        <div className="flex flex-col justify-center items-center text-xs w-fit">
          <BsPinAngle size={30} color='gray' />
          <p className='text-center'>Pin to Quick<br /> access</p>
        </div>
      </div>
    </>
  );
}
