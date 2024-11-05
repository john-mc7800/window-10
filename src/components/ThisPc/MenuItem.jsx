import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

export default function MenuItem({ icon, text, onClick }) {
  return (
    <div className="flex flex-row items-center justify-between text-xs py-1 px-2 hover:bg-blue-100" onClick={onClick}>
    <div className="flex flex-row items-center gap-2">
      {icon}
      <p>{text}</p>
    </div>
    <IoMdArrowDropright size={20} />
  </div>
  )
}
