import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { ThisPcComponentFiles } from '@/data/ThisPCMainList';
import ThisPcComponentFolder from './ThisPcComponentFolder';
import Image from 'next/image';


export default function ThisPcComponent() {
  const [FolderIsOpen, setFolderIsOpen] = useState(true) 
  const toggleFolder = () => {setFolderIsOpen(!FolderIsOpen)}
  const [DriveIsOpen, setDriveIsOpen] = useState(true) 
  const toggleDrive = () => {setDriveIsOpen(!DriveIsOpen)}

  return (
    <>
        <div className="w-full select-none" >
            <button className='flex flex-row items-center w-full pt-4 px-2 text-left 'onClick={toggleFolder}  aria-expanded={FolderIsOpen}>
                <MdOutlineKeyboardArrowDown size={24} className={`${FolderIsOpen?"":"-rotate-90"} text-gray-500 `}/>
                <span className="text-sm text-[#2C3E8E] w-[80px]">Folder (7)</span>
                <div className="border-b w-full mb-"></div>
            </button>
            {FolderIsOpen && (
                <div className="w-full  px-6 bg-white">
                <ThisPcComponentFolder  folders={ThisPcComponentFiles}/>
                </div>
            )}
            
        </div>
        <div className="w-full select-none" >
            <button className='flex flex-row items-center w-full pt-4 px-2 text-left 'onClick={toggleDrive}  aria-expanded={DriveIsOpen}>
                <MdOutlineKeyboardArrowDown size={24} className={`${DriveIsOpen?"":"-rotate-90"} text-gray-500 `}/>
                <span className="text-sm text-[#2C3E8E] w-[160px]">Devices and Drivers</span>
                <div className="border-b w-full mb-"></div>
            </button>
            {DriveIsOpen && (
                <>
                <div className="w-full  px-6 bg-white grid grid-cols-4 gap m-">
                    <div className="hover:bg-blue-50 p-1">
                        <div className="grid grid-cols-[60px_1fr] items-center pl-4">
                        <Image src="/images/drive c2.png" width={50} height={50} alt="Icon" />
                        <div className="text-xs">
                            <p>Local Disk (C:)</p>
                            <div className="w-full bg-gray-200  h-3">
                                <div className="bg-[#26A0DA] h-3 my-1  w-3/4" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>9.96 GB free of 69.7 GB</p>
                        </div>
                        </div>
                    </div>
                    <div className="hover:bg-blue-50 p-1">
                        <div className="grid grid-cols-[60px_1fr] items-center pl-4">
                        <Image src="/images/drive d.png" width={50} height={50} alt="Icon" />
                        <div className="text-xs">
                            <p>Local Disk (d:)</p>
                            <div className="w-full bg-gray-200  h-3">
                                <div className="bg-[#DA2626] h-3 my-1  w-3/4" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>3.67 GB free of 48.8 GB</p>
                        </div>
                        </div>
                    </div>
                    <div className=""></div>
                    <div className=""></div>
                
                </div>
                </>
            )}
            
        </div>
    </>
  )
}
