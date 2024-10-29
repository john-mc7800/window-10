import React from "react";
import TitleBar from "./WindowComponents/TitleBar";


export default function Window({ title, onClose }) {
  return (
    <div className="bg-white w-[100vw] h-[93vh] absolute top-0 left-0  shadow-lg">
      <div className="relative py-2 px-4 flex justify-between items-center">
        <TitleBar title={title} onClose={onClose} />
      </div>
    </div>
  );
}
