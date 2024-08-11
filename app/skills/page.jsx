"use client"
// import { bagelFatOne } from "../font"
import Image from "next/image"
import Link from "next/link"
import SkillsData from "./../json/skills.json"
import {Bagel_Fat_One} from 'next/font/google'


export const bagelFatOne  = Bagel_Fat_One ({
  subsets: ['latin'],
  weight: ['400'],
});



const Skills = () => {
  return (
    <div className="relative">
             
        <button className={` absolute top-[-4rem] max-[400px]:top-[-5rem] left-12 tracking-wider rounded-2xl shadow-inner text-white p-3 px-4 bg-[#671e67] hover:bg-[#411b41] ${bagelFatOne.className}`}> <Link href="/">Go Back</Link> </button>
        <div className="w-full text-white mt-[8.5rem] mb-10">
            <h1 className={` text-[4.5rem] ms-[11rem] max-[400px]:ms-[5rem] max-[400px]:text-[3rem] mb-[5rem] tracking-wider ${bagelFatOne.className}`}>My Skills</h1>
            
            <div className={`mt-16 mb-[8rem] flex justify-center text-center`}> 

                <div className=" flex flex-wrap justify-center gap-5 w-[55%] max-[400px]:w-[90%] text-center">
                    {SkillsData.map((element, index) => (
                        <div key={index} className=" bg-[#fff] w-[5rem] h-[5rem] flex justify-center items-center p-3 rounded-xl shadow-white shadow-md">
                            <Image src={element.image} width={40} height={760} alt={element.name}></Image>
                        </div>
                    ))}                                                    
                     
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills