import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { GrOnedrive } from 'react-icons/gr';
import { IoStarSharp } from 'react-icons/io5';
import Image from 'next/image';
import QuickAccessList from './QuickAccessList';

export default function SidebarList({ list, title, icon, imageSrc }) {
    const [isExpanded, setIsExpanded] = useState(true);

    const iconMapping = {
        GrOnedrive: GrOnedrive,
        IoStarSharp: IoStarSharp,
    };

    const Icon = iconMapping[icon];

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <div className={`items-start hover:bg-blue-300 hover:bg-opacity-80 py-1 grid grid-cols-[10%_10%_1fr] gap- pl-2 ${isExpanded ? 'bg-neutral-00 hover:outline hover:outline-1 hover:outline-blue-500' : ''}`} onDoubleClick={toggleExpand} >
                <IoIosArrowForward size={14} onClick={toggleExpand} className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                <div>{Icon ? <Icon size={16} className="text-[#2FB3FF] mx-1" /> : <Image src={imageSrc} width={30} height={30} alt={title} />}</div>
                <p className="text-xs ml-2 select-none text-black">{title}</p>
            </div>
            {isExpanded && <QuickAccessList list={list} />}
            {/* {title==="This PC"&&<h1>dfghjkl;</h1>} */}
        </div>
    );
}
