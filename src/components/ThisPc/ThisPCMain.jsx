import React, { useState } from 'react';
import OneDrivelist, {  quickAccesslist,  ThisPCList } from '@/data/ThisPCMainList';
import SidebarList from './SidebarList';
import QuickAccess from './SidebarComponents/QuickAccess';
import OneDrive from './SidebarComponents/OneDrive';
import SortBar from './SortBar';
import ThisPcComponent from './SidebarComponents/ThisPcComponent';


export default function ThisPCMain() {
    const [FrequentIsOpen, setFrequentIsOpen] = useState(true)
    const [QuickAccessIsOpen, setQuickAccessIsOpen] = useState(true)
    const [OneDriveIsOpen, setOneDriveIsOpen] = useState(false)
    const [ThisPCIsOpen, setThisPCIsOpen] = useState(false)
    const [NetworkIsOpen, setNetworkIsOpen] = useState(false)
    // const [DefaultIsOpen, setDefaultIsOpen] = useState(false)

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
    return (
        <div className="w-full  grid grid-cols-[202px_1fr] h-[100%] fixed top-[70px] select-none">
            <div className="pt-4  h-auto md:h-[84vh] z-0 border-r ">
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
            <div className="w-[100vw] md:w-[88vw] lg:w-full 3xl:w-full" >
            {QuickAccessIsOpen&&(<>
                <QuickAccess toggleFrequentAccordion={toggleFrequentAccordion} FrequentIsOpen={FrequentIsOpen} />
                </>)}
                {OneDriveIsOpen&&
                    <>
                    <SortBar/>
                    <OneDrive />
                    </>
                }
                {ThisPCIsOpen&&<>
                <ThisPcComponent/>
                </>}
                {NetworkIsOpen&&<h1 className='text-xs text-center pt-4 text-black'>This Folder is empty</h1>}
            </div>
        </div>
    );
}
