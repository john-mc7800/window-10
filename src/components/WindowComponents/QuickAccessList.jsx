

import Image from 'next/image';
import React from 'react';

export default function QuickAccessList({ list }) {
  return (
    <div>
      {list.map((item, index) => (
        <div className="grid grid-cols-[20%_1fr] items-center px-4 cursor-context-menu hover:bg-gray-400" key={index}>
          <Image src={item.icon} width={20} height={20} alt='img'/>
          <p className='text-xs py-1 w-full -ml-2'>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
