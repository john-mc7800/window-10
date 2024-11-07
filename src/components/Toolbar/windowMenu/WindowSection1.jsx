import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxAvatar } from 'react-icons/rx';
import { IoDocumentOutline } from 'react-icons/io5';
import { AiOutlinePicture } from 'react-icons/ai';
import { CiSettings } from 'react-icons/ci';
import { GiPowerButton } from 'react-icons/gi';

const iconItems = [
  { id: 1, icon: <RxAvatar size={22} />, name: 'Avatar' },
  { id: 2, icon: <IoDocumentOutline size={22} />, name: 'Documents' },
  { id: 3, icon: <AiOutlinePicture size={22} />, name: 'Gallery' },
  { id: 4, icon: <CiSettings size={22} />, name: 'Settings' },
  { id: 5, icon: <GiPowerButton size={22} />, name: 'Power' },
];

export default function WindowSection1() {
  return (
    <div className="flex flex-col justify-between items-center pl-4 h-[76vh]">
      <RxHamburgerMenu size={18} />
      <div className="flex flex-col justify-between items-center text-white gap-6 mb-4">
        {iconItems.map((item) => (
          <div key={item.id} className="tooltip" data-tooltip={item.name}>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  )
}
