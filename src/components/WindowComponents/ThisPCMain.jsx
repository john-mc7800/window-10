import React, { useState } from 'react';
import OneDrivelist, { quickAccesslist, ThisPCList } from '@/data/ThisPCMainList';
import SidebarList from '../SidebarList';
import Folder from '../Folder';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



export default function ThisPCMain() {
    const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }
    return (
        <div className="w-fill h-fill grid grid-cols-[202px_1fr] h-[100%] fixed top-[70px] select-none">
            <div className="pt-4 border-r h-full">
                {/* Use SidebarList to render each item */}
                <SidebarList title="Quick access" icon="IoStarSharp" list={quickAccesslist} />
                <SidebarList title="OneDrive - Personal" icon="GrOnedrive" list={OneDrivelist} />
                <SidebarList title="This PC"  list={ThisPCList} imageSrc="/images/thispc.png" />
                <SidebarList title="Network" icon="Network" list={[]} imageSrc="/images/network.png" />
            </div>
            <div className="  w-[1155px]" >
                <div className="w-full select-none" >
                    <button className='flex flex-row items-center w-full pt-4 px-2 text-left 'onClick={toggleAccordion}  aria-expanded={isOpen}>
                        <MdOutlineKeyboardArrowDown size={22} className={`${isOpen?"":"-rotate-90"}`}/>
                        <span className="text-sm text-[#2C3E8E] w-[150px]">Frequent folders (4)</span>
                        <div className="border-b w-full mb-"></div>
                    </button>
                    {isOpen && (
                        <div className="w-full  px-6 bg-white">
                        <Folder/>
                        </div>
                    )}
                </div>
                <div className="w-full select-none" >
                    <button className='flex flex-row items-center w-full pt-4 px-2 text-left 'onClick={toggleAccordion}  aria-expanded={isOpen}>
                        <MdOutlineKeyboardArrowDown size={22} className={`${isOpen?"":"-rotate-90"}`}/>
                        <span className="text-sm text-[#2C3E8E] w-[150px]">Recent Files</span>
                        <div className="border-b w-full mb-"></div>
                    </button>
                    {isOpen && (
                        <div className="w-full  px-6 bg-white">
                        {/* <Files/> */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
