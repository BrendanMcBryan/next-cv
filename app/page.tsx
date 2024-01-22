"use client"; // This is a client component 👈🏽
import Image from 'next/image'
import React, { useState } from 'react'

import StickMenu from './ui/stickysidemenu'
import Navbar from "./ui/navbar";
import Project from './ui/project';

import TopSection from './sections/top';
import AboutSection from './sections/about';
import Contact from './sections/contact';

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (

    <main className="flex flex-col items-center justify-center px-0 ">
      {/* <Navbar/> */}

      <StickMenu show={showSidebar} setter={setShowSidebar} />
      <TopSection />
      <AboutSection />
      <Project title="Offering Memoranda" />
      <Contact />




    </main>
  )
}
