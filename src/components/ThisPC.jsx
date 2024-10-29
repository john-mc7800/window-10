import React from "react";

export default function ThisPC({ setShowThisPC }) {
  return (
    <div className="text- bg-white w-[100vw] h-[100vh]">
      <div className="relative grid grid-cols-[1fr_1fr] justify-between items-center border-b py-2 w-full">
        <h1>This PC component,usama</h1>
        <button
          onClick={() => setShowThisPC(false)}
          className="absolute top-1 right-2 mt-2 text-black "
        >
          Close
        </button>
      </div>
    </div>
  );
}
