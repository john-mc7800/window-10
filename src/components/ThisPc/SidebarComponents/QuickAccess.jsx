import React, { useState } from 'react'
import Folder from '@/components/ThisPc/Folder'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { folders, Recentfile } from '@/data/ThisPCMainList';

export default function QuickAccess({toggleFrequentAccordion,FrequentIsOpen}) {
  const [RecentIsOpen, setRecentIsOpen] = useState(true) 
  const toggleRecentAccordion = () => {setRecentIsOpen(!RecentIsOpen)}

  return (
    <>
      <div className="w-full select-none" >
                    <button className='flex flex-row items-center w-full pt-4 px-2 text-left 'onClick={toggleFrequentAccordion}  aria-expanded={FrequentIsOpen}>
                        <MdOutlineKeyboardArrowDown size={24} className={`${FrequentIsOpen?"":"-rotate-90"}text-gray-500 `}/>
                        <span className="text-sm text-[#2C3E8E] w-36" >Frequent folders (4)</span>
                        <div className="border-b w-full mb-"></div>
                    </button>
                    {FrequentIsOpen && (
                        <div className="w-full  px-6 bg-white">
                        <Folder folders={folders}/>
                        </div>
                    )}
                </div>
                <div className="w-full select-none" >
                    <button className='flex flex-row items-center w-full pt-4 px-2 text-left 'onClick={toggleRecentAccordion}  aria-expanded={RecentIsOpen}>
                        <MdOutlineKeyboardArrowDown size={24} className={`${RecentIsOpen?"":"-rotate-90"} text-gray-500 `}/>
                        <span className="text-sm text-[#2C3E8E] w-24">Recent Files</span>
                        <div className="border-b w-full mb-"></div>
                    </button>
                    {RecentIsOpen && (
                        <div className="w-full  px-6 bg-white">
                        <Folder folders={Recentfile}/>
                        </div>
                    )}
                    
                </div>
    </>
  )
}
