import React from 'react'
import { IoIosArrowDown, IoMdArrowRoundBack, IoMdArrowRoundForward, IoMdArrowRoundUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { VscSearch } from "react-icons/vsc";

export default function LocationBar() {
  return (
    <div className='grid grid-cols-[8vw_80vw_10vw] w-[100vw] justify-between  h-fill gap-0'>
      <div className="flex flex-row items-center space-x-2 top-44 text-gray-400 font-thin text-md py-2 mx-2">
      <IoMdArrowRoundBack  />
      <IoMdArrowRoundForward   />
      <IoIosArrowDown  />
      <IoMdArrowRoundUp   />
      </div> 
      <div className="border flex justify-between">
        <div className="flex flex-row items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className='text-lg ml-2' width="1em" height="1em" viewBox="0 0 24 24"><path fill="#2FB3FF" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"/></svg>
          <IoIosArrowForward size={14}/>
          <p className='text-xs'>Quick access</p>
          <IoIosArrowForward size={14} />
        </div>
        <div className="flex flex-row items-center text-gray-500">
        <IoIosArrowDown size={14} />
        <div className='border-l-2 px-0.5'>
        <svg xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" viewBox="0 0 20 20"><g fill="currentColor"><path d="M13.937 4.211a1 1 0 0 1-1.126 1.653A5 5 0 1 0 15 10a1 1 0 1 1 2 0a7 7 0 1 1-3.063-5.789"/><path d="M13.539 12.506a1 1 0 1 1-1.078-1.685l3.482-2.227a1 1 0 0 1 1.077 1.685z"/><path d="M18.903 12.41a1 1 0 0 1-1.826.815l-1.508-3.38a1 1 0 1 1 1.826-.815z"/></g></svg>
        </div>
        </div>
      
      </div>
      <div className="relative w-fit">
        <input type="text" placeholder='Search Quick access' className='border placeholder:text-gary-600 indent-2 pr-8 py-0.5' />
        <VscSearch size={16} className='text-gary-600 absolute -top-1 right-3 my-2'/>
      </div>
    </div>
  )
}
