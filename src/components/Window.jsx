import React from "react";
import TitleBar from "./WindowComponents/TitleBar";
import MenuBar from "./WindowComponents/MenuBar";
import LocationBar from "./statusBarComponents/LocationBar";


export default function Window({ title, onClose }) {
  return (
    <div className="bg-white w-[100vw] h-[93vh]  shadow-lg  ">
      <div className=" py- px-4 flex justify-between">
        <TitleBar title={title} onClose={onClose} />
      </div>
        <MenuBar onClose={onClose}/>
        <LocationBar/>
    </div>
  );
}
