import React,{useContext,useState} from 'react'
import TitleBar from "../ThisPc/TitleBar";
import MenuBar from "../ThisPc/MenuBar";
import LocationBar from "../statusBarComponents/LocationBar";
import ThisPCMain from "../ThisPc/ThisPCMain";
import { AppStateContext } from "@/context/AppState";
import IconsData from "@/data/IconsData";

export default function FileManagerComponenet({onClose}) {
  const{openWindow,}=useContext(AppStateContext)
  const [icons] = useState(IconsData);

  return (
    <div className="absolute bottom-90 left-0 bg-white shadow-lg w-[1370px] h-[722px] z-2">
      <TitleBar title={icons.find((icon) => icon.id === openWindow)?.name} onClose={onClose}/>
      <MenuBar />
      <LocationBar />
      <ThisPCMain/>
    </div>
  )
}
