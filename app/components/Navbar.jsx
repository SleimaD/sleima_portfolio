"use client"
import { useState } from "react"
// import { bagelFatOne } from "../font"
import Link from "next/link"
import Resume from "./Resume"
import Works from "../works/page"
import {Bagel_Fat_One} from 'next/font/google'


export const bagelFatOne  = Bagel_Fat_One ({
  subsets: ['latin'],
  weight: ['400'],
});




const Navbar = ({ setActiveComponent, activeComponent }) => {
  


  return ( 
    <nav className="flex max-[400px]:flex-col max-[400px]:gap-2 items-center justify-end  mb-5 text-white  ≈ m-0 tracking-wider text-lg">
        
        <div className={`divnav w-[30%] bg-[#343333] flex justify-center items-center gap-8 p-5  rounded-bl-lg rounded-tr-lg ${bagelFatOne.className} `}> 
          <Link href="#" onClick={() => setActiveComponent('works')} className={`${activeComponent === 'works' ? 'text-[#954dad]' : 'text-[#ffffff]'} text-2xl `}>Work</Link>
          <Link href="#" onClick={() => setActiveComponent('resume')} className={`${activeComponent === 'resume' ? 'text-[#954dad]' : 'text-[#ffffff]'} text-2xl `}>Resume</Link>
        </div>
       
    </nav> 
  )     
}

export default Navbar;
