import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdCloudOutline } from 'react-icons/io'

export default function ThisPcComponentFolder({ folders }) {
  return (
    <div className="grid grid-cols-4 gap-0 flex-wrap">
      {folders.map((folder, index) => (
        <Link href="#" key={index} className="flex flex-row items-center justify-between p-2 hover:bg-blue-50">
          <div className="relative flex flex-row items-start">
            <div className="relative">
              <Image 
                src={folder.imageUrl || "/images/folder.png"} 
                width={44} 
                height={44} 
                alt={`${folder.file || folder} Folder Icon`} 
              />
            </div>
            <span className="mt-1 text-xs text-center text-black">
              {folder.file || folder} 
            </span>
          </div>
          {(folder.file === "3D Object" || folder.file === "Desktop" || folder.file === "Music") && (
            <IoMdCloudOutline size={18} className="text-blue-600" />
          )}
        </Link>
      ))}
    </div>
  )
}
