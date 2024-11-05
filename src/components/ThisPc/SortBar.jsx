import React from 'react'

export default function SortBar() {
  return (
    <div>
      <div className="grid grid-cols-[250px_1fr_1fr_1fr_1fr] w-[800px] text-xs text-gray-500 m-1">
        <div className="border-r pl-1 border-gray-400">Name</div>
        <div className="border-r pl-1 border-gray-400">Status</div>
        <div className="border-r pl-1 border-gray-400">Date Modified</div>
        <div className="border-r pl-1 border-gray-400">Type</div>
        <div className="border-r pl-1 border-gray-400">Size</div>
      </div>
    </div>
  )
}
