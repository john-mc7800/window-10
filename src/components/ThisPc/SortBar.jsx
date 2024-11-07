import React from 'react'

export default function SortBar() {
  return (
    <div>
      <div className="grid grid-cols-[250px_1fr_1fr_1fr_1fr] w-[800px] text-xs text-gray-500 m-1 ">
        <div className="border-r pl-1 border-gray-400 text-black">Name</div>
        <div className="border-r pl-1 border-gray-400 text-black">Status</div>
        <div className="border-r pl-1 border-gray-400 text-black">Date Modified</div>
        <div className="border-r pl-1 border-gray-400 text-black">Type</div>
        <div className="border-r pl-1 border-gray-400 text-black">Size</div>
      </div>
    </div>
  )
}
