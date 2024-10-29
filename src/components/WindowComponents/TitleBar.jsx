import React from 'react'
import { IoCloseOutline } from 'react-icons/io5';
import { RiFileCopyLine } from "react-icons/ri";
import { FcFolder } from "react-icons/fc";
import Image from 'next/image';
import { VscChromeMinimize } from "react-icons/vsc";



export default function TitleBar({title,onClose}) {
  return (
    <div>
      <div className="flex flex-row items-center space-x-2">
      <FcFolder size={18}/>
      <Image src="/images/page tick1.png" width={17 } height={17} alt='page tick'/>
      
      <h1 className="text-xs text-black ">{title==="This PC"?"File Explorer":title}</h1>
      </div>
      
      <div className="flex flex-row items-center absolute top-0 right-0">
      <button onClick={onClose} className=" text-black hover:bg-gray-400 hover:bg-opacity-50 py-1 px-3" >
      <VscChromeMinimize  size={20}/>
      </button>
      <button onClick={onClose} className=" text-black hover:bg-gray-400 hover:bg-opacity-50 py-1 px-3" >
        <RiFileCopyLine size={20}/>
      </button>
      <button  className="text-black hover:bg-red-600 py-1 px-3" >
        <IoCloseOutline size={20}/>
      </button>
      
      </div>
    </div>
  )
}
