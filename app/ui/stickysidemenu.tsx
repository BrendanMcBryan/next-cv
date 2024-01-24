
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { IoDocument, IoImages } from "react-icons/io5";
import DILogo from "@/public/DesigningIntentLogo.webp";
import Image from "next/image";


export default function StickMenu({ show, setter }: { show: any, setter: any }) {

  // Define our base class
  const linkClass = " font-light text-sm text-white w-[90px] ms-2 transition-[margin-right] ease-in-out duration-300 hover:font-bold cursor-pointer";
  const linkNoteClass = "text-xs text-white italic w-[90px] ms-2 transition-[margin-right] ease-in-out duration-300";
  
  const appendClass = show ? "mr-0" : " mr-[-102px] md:ml-0";


  return (<div className='fixed inset-y-0 right-0 flex flex-col items-center justify-center'>
    <aside className="flex flex-col p-3 bg-pink-600 rounded-l-lg"
      onMouseEnter={() => {
        setter((oldVal: any) => !oldVal);
      }}
      onMouseLeave={() => {
        setter((oldVal: any) => !oldVal);
      }}

    >


      <div className="flex items-center justify-start">
        <Image className="hover:animate-pulse flex flex-row me-3 max-w-[20px]" src={DILogo} alt="DI logo" width={20} height={20} layout="responsive" />

        <h2 className={`${linkNoteClass}${appendClass}`}>pdf downloads</h2>


      </div>
      <div className="flex items-center justify-start">
        <IoDocument className="text-white my-3 me-3 hover:animate-pulse text-xl" />
        <Link href="/McBryan_resume.pdf" locale={false} target="_blank" className={`${linkClass}${appendClass}`}>
          <h2>resume</h2>
        </Link>

      </div>
      <div className="flex items-center justify-start">
        <IoImages className="text-white me-3 hover:animate-pulse text-xl" />
        <Link href="/McBryan_portfolio.pdf" locale={false} target="_blank" className={`${linkClass}${appendClass}`}>
          <h2>portfolio</h2>
        </Link>
      </div>

    </aside >
  </div>)
}