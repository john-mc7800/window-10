import Image from 'next/image';
import React, { useState } from 'react'
import { BsPinAngle } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import { SiPowershell } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";


export default function MenuBar() {
  const [fileIsOpen, setFileIsOpen] =useState(false);
  const handleFileButton=()=>{
    setFileIsOpen((prev)=> !prev);
  }
  return (
    <>
      <div className='flex flex-row text-xs items-center gap-1 cursor-context-menu'>
      <button onClick={handleFileButton} className='px-4 cursor-context-menu hover:bg-gray-50 hover:border border-gray-200'>File</button>
      <button className='px-4 cursor-context-menu hover:bg-gray-50 hover:border border-gray-200'>Home</button>
      <button className='px-4 cursor-context-menu hover:bg-gray-50 hover:border border-gray-200'>Share</button>
      <button className='px-4 cursor-context-menu hover:bg-gray-50 hover:border border-gray-200'>View</button>
      </div>

      {/* file Section  */}
      {fileIsOpen&&
      <div className="w-[45vw] h-[40vh] grid grid-cols-[40%_60%]">
        <div className="mx-4 my-2 ">
        <div className="flex flex-row items-center justify-between gap-2 my-4 text-xs ">
        <Image className='w-10 h-8 ' src="/images/doc layout.jpg" width={50} height={50} alt="Picture of the author" />
          <p >Open <u>n</u>ew window</p>
          <IoMdArrowDropright size={20} />
        </div>
        <div className="flex flex-row items-center gap-2 my-4 text-xs justify-between disabled">
          <SiPowershell size={36}/>
          <p>Open Windows Powe<u>r</u>Shell</p>
          <IoMdArrowDropright size={20} />
        </div>
        <div className="flex flex-row items-center gap-2 my-4 text-xs justify-between disabled">
          <SiPowershell size={36}/>
          <p>Change folder and search <u>o</u>ption</p>
          <IoMdArrowDropright size={20} />
        </div>
        <div className="flex flex-row items-center gap-2 my-4 text-xs justify-between disabled">
       <div className="flex flex-row items-center gap-2">
       <IoMdHelpCircle size={40} className='text-blue-800'/>
       <p><u>H</u>elp</p>
       </div>
          <IoMdArrowDropright size={20} />
        </div>
        <div className="flex flex-row items-center gap-2 my-4 text-xs justify-between disabled">
          <div className="flex flex-row items-center gap-2">
          <IoMdClose size={40} color='red'/>
          <p><u>C</u>lose</p>
          </div>
          <IoMdArrowDropright size={20} />
        </div>
        </div>
        <div className="bg-red-100"></div>
      </div>
      }
      {/* Home Section  */}
      <div className="m-2 hidden">
      <div className="flex flex-col justify-center items-center text-xs w-fit">
      <BsPinAngle size={30} color='gray'/>
        <p className='text-center'>Pin to Quick<br/> access</p>
      </div>
      </div>
    </>
  )
}
