import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Folder({ folders }) {
  return (
    <div className="flex flex-row flex-wrap">
      {folders.map((folder, index) => (
        <Link href="#" key={index} className="group">
          <div className="relative flex flex-col items-center p-2 bg-white hover:bg-blue-50">
            <div className="relative w-20 h-20">
              <Image 
                src={folder.imageUrl || "/images/folder.png"} 
                width={74} 
                height={74} 
                alt={`${folder.file || folder} Folder Icon`} 
              />
            </div>
            <span className="mt-1 text-xs text-center text-black">
              {folder.file || folder} {/* Displays 'file' if present; otherwise folder name */}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
