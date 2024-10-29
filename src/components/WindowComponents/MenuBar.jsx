import React from 'react'
import { BsPinAngle } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";


export default function MenuBar() {
  return (
    <>
      <div className='flex flex-row text-xs items-center gap-1 cursor-context-menu'>
      <button className='px-4 cursor-context-menu hover:bg-gray-50 hover:border border-gray-200'>File</button>
      <button className='px-4 cursor-context-menu hover:bg-gray-50 hover:border border-gray-200'>Home</button>
      <button className='px-4 cursor-context-menu hover:bg-gray-50 hover:border border-gray-200'>Share</button>
      <button className='px-4 cursor-context-menu hover:bg-gray-50 hover:border border-gray-200'>View</button>
      </div>

      {/* file Section  */}
      <div className="w-[40vw] h-[40vh] grid grid-cols-[40%_60%]">
        <div className="bg-red-900">

          <p>Open new window</p>
          <IoMdArrowDropright />
        </div>
        <div className="bg-red-100"></div>
      </div>
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
