import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

export default function WindowMenuComponent() {
  return (
    <div className="w-[650px] h-[600px] absolute bottom-8 -left-5 bg-[262625]  z-1 grid grid-cols-[50px_200px_1fr] ">
      <div className="bg-red-800 flex flex-col justify-between items-center">
        <RxHamburgerMenu />
        <div className="">
          <p>dcmlsdsda</p>
        </div>
      </div>
      <div className="bg-blue-800">basdasd</div>
      <div className="bg-yellow-800">c</div>
    </div>

  )
}
