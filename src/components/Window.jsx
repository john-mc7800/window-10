import React from "react";
import TitleBar from "./WindowComponents/TitleBar";
import MenuBar from "./WindowComponents/MenuBar";


export default function Window({ title, onClose }) {
  return (
    <div className="bg-white w-[100vw] h-[93vh]  shadow-lg">
      <div className=" py-2 px-4 flex justify-between items-center">
        <TitleBar title={title} onClose={onClose} />
      </div>
        <MenuBar/>
    </div>
  );
}
