import React from 'react'
// import { bagelFatOne } from './../font'
import { MdEmail } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import {Bagel_Fat_One} from 'next/font/google'


export const bagelFatOne  = Bagel_Fat_One ({
  subsets: ['latin'],
  weight: ['400'],
});




function Contact() {
  return (
    <div className="bg-[#000000cb] w-[25%] h-full mt-10 rounded-tr-xl backdrop-blur-sm flex flex-col items-center p-4">
        <div className="flex justify-center items-center bg-[#5a575798] w-[11rem] h-[11rem] rounded-xl backdrop-blur-sm  mt-6 ">
            <img src="/bitmoji.png" alt="contact" className="w-[9rem] h-[9rem] " />
        </div>
        <h3 className={`text-white p-2 mt-4 text-[2rem] tracking-wide ${bagelFatOne.className} text-center `}>SLEIMA DUCROS</h3>
        <p className='text-white mt-6 mb-5 uppercase font-bold tracking-wide italic'>Full Stack Developer</p>
        <hr className='border-[#1d1d1d] border bg-purple-500 w-[80%] ' />
        <div className='mt-10 flex flex-col gap-10'>
            <div className='text-white flex gap-5 items-center '>
                <MdEmail className="text-[#813d98] border border-[#111111] p-3 rounded-lg shadow-sm shadow-[#1f1e1e] " size={60} />
                <div className='flex flex-col gap-2'>
                    <p className={`text-[#454545] tracking-wider text-lg ${bagelFatOne.className}`}>EMAIL</p>
                    <p className='text-sm'>sleima@icloud.com</p>
                </div>
            </div>
            <div className='text-white flex gap-5 items-center '>
                <IoPhonePortrait className="text-[#813d98] mt-4 border border-[#111111] p-3 rounded-lg shadow-sm shadow-[#1f1e1e] " size={60} />
                <div className='flex flex-col gap-2'>
                    <p className={`text-[#454545] tracking-wider text-lg ${bagelFatOne.className}`}>PHONE</p>
                    <p className='text-sm'>(+32) 465 13 55 25</p>
                </div>
            </div>
            <div className='text-white flex gap-5 items-center '>
                <FaLocationDot className="text-[#813d98] mt-4 border border-[#111111] p-3 rounded-lg shadow-sm shadow-[#1f1e1e] " size={60} />
                <div className='flex flex-col gap-2'>
                    <p className={`text-[#454545] tracking-wider text-lg ${bagelFatOne.className}`}>LOCATION</p>
                    <p className='text-sm'>Tervuren, Belgium</p>
                </div>
            </div>
        </div>
        <div className='mt-[4.5rem] flex justify-center items-center gap-3'>
           <a href='https://github.com/SleimaD'>  <FaGithubSquare className='text-white hover:text-black hover:bg-white  hover:shadow-sm hover:rounded-lg hover:shadow-[#aaa9a9] transition-all duration-100' size={38} /></a>
            <a href='https://www.linkedin.com/in/sleima-ducros/'><ImLinkedin className='text-white hover:text-[#0c67c2] hover:bg-[#fff] hover:rounded-lg  transition-all duration-300' size={35} /></a>
        </div>
    </div>
)
} 

export default Contact;