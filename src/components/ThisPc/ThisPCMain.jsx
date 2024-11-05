import React, { useState } from 'react';
import OneDrivelist, { folders, quickAccesslist, Recentfile, ThisPCList } from '@/data/ThisPCMainList';
import SidebarList from './SidebarList';
import Folder from '../Folder';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



export default function ThisPCMain() {
    const [FrequentIsOpen, setFrequentIsOpen] = useState(true)
    const [RecentIsOpen, setRecentIsOpen] = useState(true) 
    const [QuickAccessIsOpen, setQuickAccessIsOpen] = useState(false)
    const [OneDriveIsOpen, setOneDriveIsOpen] = useState(false)
    const [ThisPCIsOpen, setThisPCIsOpen] = useState(false)
    const [NetworkIsOpen, setNetworkIsOpen] = useState(false)

    const toggleQuickAccesscomponenet = () => {
        setQuickAccessIsOpen(true)
        setThisPCIsOpen(false); 
        setNetworkIsOpen(false); 
        setOneDriveIsOpen(false); 
    }
    const toggleOneDrivecomponenet = () => {
        setQuickAccessIsOpen(false)
        setThisPCIsOpen(false)
        setOneDriveIsOpen(true); 
        setNetworkIsOpen(false); 
    }
    const toggleThisPCcomponenet = () => {
        setThisPCIsOpen(true)
        setQuickAccessIsOpen(false); 
        setOneDriveIsOpen(false); 
        setNetworkIsOpen(false); 
    }
    const toggleNetworkcomponenet = () => {
        setThisPCIsOpen(false)
        setQuickAccessIsOpen(false); 
        setOneDriveIsOpen(false); 
        setNetworkIsOpen(true); 

    }
    const toggleFrequentAccordion = () => {setFrequentIsOpen(!FrequentIsOpen)}
    const toggleRecentAccordion = () => {setRecentIsOpen(!RecentIsOpen)}
    return (
        <div className="w-fill h-fill grid grid-cols-[202px_1fr] h-[100%] fixed top-[70px] select-none">
            <div className="pt-4 border-r h-full">
                {/* Use SidebarList to render each item */}
                <div onClick={toggleQuickAccesscomponenet}>
                <SidebarList title="Quick access" icon="IoStarSharp" list={quickAccesslist} />
                </div>
                <div onClick={toggleOneDrivecomponenet}>
                <SidebarList title="OneDrive - Personal" icon="GrOnedrive" list={OneDrivelist} />
                </div>
                <div onClick={toggleThisPCcomponenet}>
                <SidebarList title="This PC"  list={ThisPCList} imageSrc="/images/thispc.png" />
                </div>
                <div onClick={toggleNetworkcomponenet}>
                <SidebarList title="Network" icon="Network" list={[]} imageSrc="/images/network.png" />
                </div>
            </div>
            <div className=" w-[1155px]" >
            {QuickAccessIsOpen&&(<>
                <div className="w-full select-none" >
                    <button className='flex flex-row items-center w-full pt-4 px-2 text-left 'onClick={toggleFrequentAccordion}  aria-expanded={FrequentIsOpen}>
                        <MdOutlineKeyboardArrowDown size={22} className={`${FrequentIsOpen?"":"-rotate-90"}`}/>
                        <span className="text-sm text-[#2C3E8E] w-[150px]" >Frequent folders (4)</span>
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
                        <MdOutlineKeyboardArrowDown size={22} className={`${RecentIsOpen?"":"-rotate-90"}`}/>
                        <span className="text-sm text-[#2C3E8E] w-[150px]">Recent Files</span>
                        <div className="border-b w-full mb-"></div>
                    </button>
                    {RecentIsOpen && (
                        <div className="w-full  px-6 bg-white">
                        <Folder folders={Recentfile}/>
                        </div>
                    )}
                    
                </div>
                </>)}

                {OneDriveIsOpen&&(<h1>OneDriveIsOpen</h1>)}
                {ThisPCIsOpen&&(<h1>fghjkl</h1>)}
                {NetworkIsOpen&&(<h1>NetworkIsOpen</h1>)}
            </div>
        </div>
    );
}
