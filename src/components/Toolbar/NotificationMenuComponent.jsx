import React ,{useState} from 'react'
import Image from 'next/image';

// Define the component to accept props
export default function NotificationMenuComponent({ notificationMessage = "No new notification", menuItems = [] }) {
  const [value, setValue] = useState(20); // Starting value

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="z-20 bg-[#262625] text-white fixed right-0 bottom-11 select-none w-[420px] h-[730px]">
      <p className="text-end text-[#8CB5D4] px-6 pt-6 text-xs hover:text-white">Manage Notifications</p>
      
      {/* Notification message section */}
      <div className="w-full h-[290px] text-sm text-center content-center font-normal">
        <p>{notificationMessage}</p>
      </div>
      
      <p className="text-[#8CB5D4] py-1 px-4 text-sm hover:text-white">Collapse</p>
      
      {/* Menu items grid */}
      <div className="w-full h-[300px] grid grid-cols-4 px-4 py-2 gap-1 ">
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col justify-between bg-gray-200 bg-opacity-10 p-1 hover:outline hover:outline-offset-0 hover:outline-1 bg-re-900">
            <Image src={item.icon} width={20} height={20} alt={item.label} />
            <p className="text-xs">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[50px_1fr] items-center justify-between px-16 py-4 ">
        <div className="">
          <Image src="/images/brightness.png" width={20} height={20} alt="brightness" />
        </div>
        <div className="w-full">
          <input type="range" min={20} max={100} value={value} onChange={handleChange} className="w-full h-2 bg-gray-300 rounded-lg appearance-none blue-range-slider" style={{background: `linear-gradient(to right, #3498db ${((value - 20) / 80) * 100}%, #838383 ${((value - 20) / 80) * 100}%)`}}/>
        </div>
      </div>
    </div>
  );
}
