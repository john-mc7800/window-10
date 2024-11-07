'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { BsPinAngle } from 'react-icons/bs';
import { IoMdArrowDropright, IoMdClose, IoMdHelpCircle } from 'react-icons/io';
import { SiPowershell, SiPinboard } from 'react-icons/si';
import frequentPlaces from '@/data/FileData';
import { VscChecklist } from 'react-icons/vsc';
import MenuItem from './MenuItem';

export default function MenuBar({ onClose }) {
  const [fileIsOpen, setFileIsOpen] = useState(false);
  const menuRef = useRef(null); 

  const handleFileButton = () => {
    setFileIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setFileIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='flex flex-row text-xs items-center cursor-context-menu fixed'>
        <button onClick={handleFileButton} className='px-4 cursor-context-menu  z-10 bg-[#005596] text-white py-0.5 '>File</button>
        <button className='px-4 cursor-context-menu hover:bg-gray-50 hover:outline hover:outline-offset-0 hover:outline-1 hover:outline-gray-200 z-0 text-black'>Home</button>
        <button className='px-4 cursor-context-menu hover:bg-gray-50 hover:outline hover:outline-offset-0 hover:outline-1 hover:outline-gray-200 z-0 text-black'>Share</button>
        <button className='px-4 cursor-context-menu hover:bg-gray-50 hover:outline hover:outline-offset-0 hover:outline-1 hover:outline-gray-200 z-0 text-black'>View</button>
      </div>

      {fileIsOpen && (
        <div ref={menuRef} className="w-[650px] h-[300px] relative -top-9 z-10 bg-white border mt-8 ">
          <button onClick={handleFileButton} className='text-start text-xs px-4 py-1 cursor-context-menu border-y border-gray-200 z-10 w-fit text-white font-thin  bg-[#005596]'>File</button>
          <div className="w-[648px] h-[260px] grid grid-cols-[50%_50%] border ">
            <div className="space-y-1 bg-[#FBFCFD] border overflow-hidden">
              {/* Menu items */}
              <MenuItem icon={<Image className='w-10 h-8' src="/images/doc layout.jpg" width={50} height={50} alt="Picture of the author" />} text="Open new window" />
              <MenuItem icon={<SiPowershell size={36} />} text="Open Windows PowerShell" />
              <MenuItem icon={<VscChecklist size={36} className='text-blue-800'/>}   text="Change folder and search option" />
              <MenuItem icon={<IoMdHelpCircle size={40} className='text-blue-800' />} text="Help" />
              <MenuItem icon={<IoMdClose size={40} color='red' />} text="Close" onClick={onClose} />
            </div>
            <div className="bg-[#F6F7F8] border">
              <p className='border-b text-sm px-2'>Frequent places</p>
              {frequentPlaces.map(place => (
                <div key={place.id} className="flex flex-row justify-between items-center mx-2 py-1 hover:bg-gray-100 text-[10px]">
                  <p><u>{place.id}</u>&nbsp;&nbsp;{place.name}</p>
                  <SiPinboard size={18} className='text-[#686F73] -rotate-255 ' />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="m-2 hidden">
        <div className="flex flex-col justify-center items-center text-xs w-fit">
          <BsPinAngle size={30} color='gray' />
          <p className='text-center'>Pin to Quick<br /> access</p>
        </div>
      </div>
    </>
  );
}

// MenuItem Component for Reusability
// const MenuItem = ({ icon, text, onClick }) => (
//   <div className=""></div>
// );
