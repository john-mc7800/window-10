import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { BiMessage } from "react-icons/bi";
import Image from 'next/image';
import ClockCalculator from '../ClockCalender';
import NotificationMenuComponent from './NotificationMenuComponent';
  

export default function ToolbarRightSection() {
  const[notificationMenu,setNotificationMenu]=useState(false);
    const toggleNotificationMenu = () => {
      setNotificationMenu((prev) => !prev);
    };
    const notificationMessage = "No new notification";
  
  const menuItems = [
    { label: 'Location', icon: '/images/location.png' },
    { label: 'Battery Saver', icon: '/images/battery saver.png' },
    { label: 'Bluetooth', icon: '/images/bluetooth.png' },
    { label: 'Night Light', icon: '/images/night.png' },
    { label: 'Tablet Mode', icon: '/images/tablet.png' },
    { label: 'Rotation Lock', icon: '/images/rotation.png' },
    { label: 'Mobile Hotspot', icon: '/images/hotspot.png' },
    { label: 'Airplane Mode', icon: '/images/airplane.png' },
    { label: 'Nearby Share', icon: '/images/Share.png' },
    { label: 'Setting', icon: '/images/Setting.png' },
    { label: 'Network', icon: '/images/Network2.png' },
    { label: 'Connect', icon: '/images/connect.png' },
    { label: 'Project', icon: '/images/Project.png' },
    { label: 'VPN', icon: '/images/VPN.png' },
    { label: 'Focus assist', icon: '/images/Focus assist.png' },
    { label: 'Screen Snip', icon: '/images/snip.png' },
    // Add more items as needed
  ];
    
  return (
    <div className="flex justify-end gap-x-4 items-center -2">
      <IoIosArrowUp size={20} color="white" />
      <Image src="/images/speaker.png" width={20} height={20} alt="speaker"/>
      <Image src="/images/wifi.png" width={22} height={22} alt="wifi" className='-rotate-45'/>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" className="text-white text-xl" >
        <path fill="currentColor" d="M17 384h432V128H17Zm32-224h368v192H49Z" ></path>
        <path fill="currentColor" d="M70.69 182.92H256v146.16H70.69zM465 202.67h32v106.67h-32z" ></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" className="text-white text-2xl" >
        <path fill="currentColor" d="M3 7c-1.094 0-2 .906-2 2v14c0 1.094.906 2 2 2h26c1.094 0 2-.906 2-2V9c0-1.094-.906-2-2-2zm0 2h26v14H3zm2 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM5 15v2h4v-2zm6 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h4v-2zM5 19v2h4v-2zm6 0v2h10v-2zm12 0v2h4v-2z"></path>
      </svg>
      <p className="text-white text-xs">ENG</p>
      <ClockCalculator />
      <div className="relative" >
        <BiMessage className="text-2xl" onClick={toggleNotificationMenu}/>
        {notificationMenu&&
        <NotificationMenuComponent notificationMessage={notificationMessage} menuItems={menuItems} />
        }
      </div>
      <button className="border-l border-[#787777] h-10 w-0"></button>
    </div>
  )
}