import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { GrOnedrive } from "react-icons/gr";
import { IoStarSharp } from 'react-icons/io5';
import OneDrivelist, {quickAccesslist} from '@/data/ThisPCMainList';
import Image from 'next/image';
import QuickAccessList from './QuickAccessList';

export default function ThisPCMain() {
    const [activeItem, setActiveItem] = useState(null);

    const iconMapping = {
        GrOnedrive: GrOnedrive,
        IoStarSharp: IoStarSharp,
    };

    const toggleActive = (itemId) => {
        setActiveItem(itemId === activeItem ? null : itemId); // Toggle functionality
    };

    return (
        <div className="w-fill h-fill grid grid-cols-[14vw_1fr] h-[100%] fixed top-[70px]">
            <div className="pt-4 border-r h-full">
                {/* Manually rendering each item from ThisPCMainList */}
                <div className={`${activeItem === "quickAccess" ? "bg-neutral-300 hover:outline hover:outline-blue-500 hover:outline-offset-0 hover:outline-1" : ""} items-start hover:bg-blue-300 hover:bg-opacity-80 py-1 grid grid-cols-[10%_10%_1fr] gap- pl-2`} onClick={() => toggleActive("quickAccess")}>
                    <IoIosArrowForward size={14} className='text-gray-400' />
                    <div><IoStarSharp size={14} className="text-[#2FB3FF] mx-2" /></div>
                    <p className="text-xs ml-3 select-none">Quick access</p>
                </div>
                {activeItem === "quickAccess" && <QuickAccessList list={quickAccesslist}/>}

                
                <div className={`${activeItem === "oneDrive" ? "bg-neutral-300 hover:outline hover:outline-blue-500 hover:outline-offset-0 hover:outline-1" : ""} items-start hover:bg-blue-300 hover:bg-opacity-80 py-1 grid grid-cols-[10%_10%_1fr] gap- pl-2`} onClick={() => toggleActive("oneDrive")} >
                    <IoIosArrowForward size={14} className='text-gray-400' />
                    <div><GrOnedrive size={14} className="text-[#138DDC] mx-2" /></div>
                    <p className="text-xs ml-3 select-none">OneDrive - Personal</p>
                </div>
                {activeItem === "oneDrive" && <QuickAccessList list={OneDrivelist}/>}

                <div className={`${activeItem === "thisPc" ? "bg-neutral-300 hover:outline hover:outline-blue-500 hover:outline-offset-0 hover:outline-1" : ""} items-start hover:bg-blue-300 hover:bg-opacity-80 py-1 grid grid-cols-[10%_10%_1fr] gap- pl-2`} onClick={() => toggleActive("thisPc")} >
                    <IoIosArrowForward size={14} className='text-gray-400' />
                    <div><Image src={`/images/thispc.png`} width={40} height={40} alt="This PC" className='mx-1 hover:bg-transparent' /></div>
                    <p className="text-xs ml-3 select-none">This PC</p>
                </div>

                <div className={`${activeItem === "Network" ? "bg-neutral-300 hover:outline hover:outline-blue-500 hover:outline-offset-0 hover:outline-1" : ""} items-start hover:bg-blue-300 hover:bg-opacity-80 py-1 grid grid-cols-[10%_10%_1fr] gap- pl-2`} onClick={() => toggleActive("Network")}>
                    <IoIosArrowForward size={14} className='text-gray-400' />
                    <div><Image src={`/images/network.png`} width={40} height={40} alt="Network" className='mx-1 hover:bg-transparent' /></div>
                    <p className="text-xs ml-3 select-none">Network</p>
                </div>

            </div>
            <div className="pt-8">
                <div className="">
                    {/* Other content can go here */}
                </div>
            </div>
        </div>
    );
}
