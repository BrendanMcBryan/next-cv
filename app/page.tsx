"use client"; // This is a client component 👈🏽
import Image from 'next/image'
import React, { useState } from 'react'

import StickMenu from './ui/stickysidemenu'
import Navbar from "./ui/navbar";

import TopSection from './sections/top';
import AboutSection from './sections/about';

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (

    <main className="flex  flex-col items-center justify-center px-0">
      {/* <Navbar/> */}

      <StickMenu show={showSidebar} setter={setShowSidebar} />
      <TopSection />
      {/* <AboutSection /> */}

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-400 before:dark:opacity-20 after:dark:from-sky-900 after:dark:via-[#01e6ff] after:dark:opacity-60 before:lg:h-[360px] z-[-1]"> */}




    </main>
  )
}
