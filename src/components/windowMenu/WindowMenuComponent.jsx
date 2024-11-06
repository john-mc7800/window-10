import React from 'react'
import Image from 'next/image';
import { FaLinkedin, FaSpotify } from "react-icons/fa";
import WindowMenuSection1 from './windowMenuSection1';
import WindowMenuSection2 from './WindowMenuSection2';


export default function WindowMenuComponent({windowMenuRef}) {
  return (
    <>
      <div ref={windowMenuRef} className="w-[650px] h-[630px] absolute bottom-8 -left-5 bg-[#262625] z-1 grid grid-cols-[50px_260px_250] pt-4">
        <WindowMenuSection1/>
        <WindowMenuSection2/>
        <div className=" fixed left-[340px]  mt-4  overflo-auto w-[250px]">
        <div className="">
        <p className='text-white text-xs'>Productivity</p>
          <div className="grid grid-cols-[90px_195px] mt-4 ">
            <div className=""></div>
            <div className="grid grid-cols-2 gap-1">
              <div className="bg-blu-500 w-[98px] h-[100px] grid grid-cols-3 gap-2  bg-gray-200 bg-opacity-10 p-2 hover:outline hover:outline-offset-2 hover:outline-1">
              <Image src="/images/cloud.png" width={25} height={25} alt="cloud" />
              <Image src="/images/skype.png" width={25} height={25} alt="skype" />
              </div>
              <div className="bg-re-600 w-[98px] h-[100px] bg-gray-200 bg-opacity-10 px-2 py-1 hover:outline hover:outline-offset-2 hover:outline-1 text-white flex flex-col justify-between text-xs">
                <div className="">
                <p className='font-thin leading-1'>Microsoft OneDrive</p>
                <p className='text-gray-400'>Don't forget to back up your...</p>
                </div>
                <p>Mail</p>
              </div>
              <div className="bg-yello-300 w-[98px] h-[100px] bg-gray-200 bg-opacity-10 p-2 hover:outline hover:outline-offset-2 hover:outline-1 bg-cover bg-center" style={{ backgroundImage: "url('/images/desktop.jpg')" }}></div>
              <div className="bg-yello-300 w-[98px] h-[100px] bg-gray-200 bg-opacity-10  hover:outline hover:outline-offset-2 hover:outline-1" >
              {/* <Image src="/images/linkedin.png" width={150} height={150} alt="skype" className='scale-125'/> */}
              <FaLinkedin className='text-blue-500' size={100}/>
              </div>
            </div>
          </div>
        </div>
        <div className="">
        <p className='text-white text-xs'>Productivity</p>
          <div className="grid grid-cols-3 mt-4 w-[285px] gap-1">
            <div className=" h-[100px] bg-gray-200 bg-opacity-10  hover:outline hover:outline-offset-2 hover:outline-1 text-xs">
              <div className="flex flex-col justify-center items-center">
              <Image src="/images/Microsoft Store.png" width={80} height={80} alt="cloud" className='p-2'/>
              <p>Microsoft Store</p>
              </div>
            </div>
            <div className="h-[100px] bg-gray-200 bg-opacity-10  hover:outline hover:outline-offset-2 hover:outline-1 ">
            <div className="h-[98px] flex flex-col justify-center items-center bg-[#43AD50] text-xs relative ">
              <FaSpotify className='text-white h-[100px] p-2 ' size={60}/>
              <div className="bg-gray-700 opacity-60 w-full h-[98px] absolute top-0 "></div>
              <p className='absolute bottom-0'>Spotify Music</p>
              </div>
            </div>
            <div className=" h-[100px] bg-gray-200 bg-opacity-10  hover:outline hover:outline-offset-2 hover:outline-1 text-xs">
              <div className="flex flex-col justify-center items-center">
              <Image src="/images/todo.png" width={80} height={80} alt="cloud"  className='p-2'/>
              <p>Microsoft To...</p>
              </div>
            </div>
            <div className=" h-[100px] bg-gray-200 bg-opacity-10  hover:outline hover:outline-offset-2 hover:outline-1 text-xs">
              <div className="flex flex-col justify-center items-center">
              <Image src="/images/movies.png" width={80} height={80} alt="cloud"  className='p-4'/>
              <p>Movies & TV</p>
              </div>
            </div>
            <div className=" h-[100px] bg-gray-200 bg-opacity-10  hover:outline hover:outline-offset-2 hover:outline-1 text-xs">
              <div className="flex flex-col justify-center items-center">
              <Image src="/images/solitaire.png" width={80} height={80} alt="cloud"  className='p-4'/>
              <p>Solitaire & Ca...</p>
              </div>
            </div>
            <div className=" h-[100px] bg-gray-200 bg-opacity-10  hover:outline hover:outline-offset-2 hover:outline-1 text-xs">
            <div className="bg-blu-500 w-[98px] h-[100px] grid grid-cols-3 gap-2   p-2 ">
              <Image src="/images/clipchamp.png" width={25} height={25} alt="cloud" />
              <Image src="/images/calculator.png" width={25} height={25} alt="skype" />
              </div>
            </div>
           
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-3 mt-8 w-[285px] ">
            <div className=" h-[100px] bg-gray-200 bg-opacity-10  hover:outline hover:outline-offset-2 hover:outline-1 text-xs">
              <div className="flex flex-col justify-center items-center">
              <Image src="/images/opera.png" width={80} height={80} alt="cloud" className='p-2'/>
              <p>Opera</p>
              </div>
            </div>
           
           
          </div>
        </div>


        </div>

        
      </div>
    </>

  )
}
