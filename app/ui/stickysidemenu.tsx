import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { IoDocument, IoImages } from "react-icons/io5";
import DILogo from "@/public/DesigningIntentLogo.webp";
import Image from "next/image";


export default function StickMenu({ show, setter }) {

  // Define our base class
  const className = " font-light text-sm text-white ms-2 transition-[margin-right] ease-in-out duration-300 hover:font-bold cursor-pointer";
  const appendClass = show ? "mr-0" : " mr-[-250px] md:ml-0";


  return (<>
    <aside className="flex flex-col p-3 bg-pink-500 right-0 fixed z-40 rounded-l-lg" onMouseEnter={() => {
      setter(oldVal => !oldVal);
    }}
      onMouseLeave={() => {
        setter(oldVal => !oldVal);
      }}

    >

      <div className="flex justify-center">
        <Image className="hover:animate-pulse " src={DILogo} alt="DI logo" width={20} height={20} />
      </div>
      <div className="flex items-center">
        <IoDocument className="text-white my-3 me-3 hover:animate-pulse text-xl" />
        <h2 className={`${className}${appendClass}`}>resume</h2>
      </div>
      <div className="flex items-center">
        <IoImages className="text-white me-3 hover:animate-pulse text-xl" />
        <h2 className={`${className}${appendClass}`}>pdf</h2>
      </div>

    </aside >
  </>)
}