import React from 'react'
import { IoCloseOutline } from 'react-icons/io5';
import { RiFileCopyLine } from "react-icons/ri";
import { FcFolder } from "react-icons/fc";
import Image from 'next/image';
import { VscChromeMinimize } from "react-icons/vsc";
import { IoMdArrowDropdown } from "react-icons/io";




export default function TitleBar({title,onClose}) {
  return (
    <div>
      <div className="flex flex-row items-center space-x-2">
      <FcFolder size={18}/>
      <p className='cursor-context-menu'>|</p>
      <Image src="/images/page tick1.png" width={17 } height={17} alt='page tick'/>
      <IoMdArrowDropdown  size={18}/>      
      <p className='cursor-context-menu'>|</p>
      <h1 className="text-xs text-black cursor-context-menu">{title==="This PC"?"File Explorer":title}</h1>
      </div>
      
      <div className="flex flex-row items-center absolute top-0 right-0">
      <button  className=" text-black hover:bg-gray-400 hover:bg-opacity-50 py-1 px-3 cursor-context-menu" >
      <VscChromeMinimize  size={20}/>
      </button>
      <button  className=" text-black hover:bg-gray-400 hover:bg-opacity-50 py-1 px-3 cursor-context-menu" >
        <RiFileCopyLine size={16}/>
      </button>
      <button onClick={onClose}  className="text-black hover:bg-red-600 py-1 px-3 cursor-context-menu" >
        <IoCloseOutline size={20}/>
      </button>

      
      </div>
    </div>
  )
}
