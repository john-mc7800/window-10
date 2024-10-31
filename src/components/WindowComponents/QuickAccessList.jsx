import Image from 'next/image';
import React, { useState } from 'react';

export default function QuickAccessList({ list }) {
  const [activeItem, setActiveItem] = useState(null);

  const toggleActive = (itemId) => {
    // Toggle the active item; set it to null if clicked again
    setActiveItem((prev) => (prev === itemId ? null : itemId));
  };

  return (
    <div>
      {list.map((item, index) => (
        <div
          className={`${activeItem === index? "bg-neutral-300 hover:outline hover:outline-blue-500 hover:outline-offset-0 hover:outline-1": ""} grid grid-cols-[20%_1fr] items-center px-4 cursor-context-menu hover:bg-blue-300`} key={index} onClick={() => toggleActive(index)} >
          <Image src={item.icon} width={20} height={20} alt='icon' />
          <p className='text-xs py-1 w-full -ml-2'>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
