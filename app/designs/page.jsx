import React from 'react'
// import { bagelFatOne } from '../font'
import Image from 'next/image'
import Link from 'next/link'
import {Bagel_Fat_One} from 'next/font/google'


export const bagelFatOne  = Bagel_Fat_One ({
  subsets: ['latin'],
  weight: ['400'],
});



const Designs = () => {
  return (

    <div className={`relative`}>

        <button className={` absolute top-[-4rem] left-16 tracking-wider rounded-2xl shadow-inner text-white p-3 px-4 bg-[#671e67] hover:bg-[#411b41] ${bagelFatOne.className}`}> <Link href="/">Go Back</Link> </button>

        <div className={` text-[5rem] ms-[10rem] mb-16 mt-[8rem] max-[400px]:ms-[3rem] max-[400px]:text-[3rem] tracking-wider text-white ${bagelFatOne.className} `}>
            My Designs  
        </div>           

        <div className='flex justify-center w-full mb-[5rem]'>     

            <div className='p-3 flex gap-9 w-[95%] flex-wrap justify-center mb-10'>

                <div className={` bg-transparent w-[21rem] h-[21rem] rounded-xl `}>
                
                    <div className='bg-[#280a0a] w-[100%] h-[300px] p-3 flex justify-center items-center'> 
                        <Image src="/pizzadesign.png" width={500} height={780} alt="pizzadesign"></Image>
                    </div>

                </div>

                <div className={` bg-transparent w-[21rem] h-[21rem] rounded-xl `}>

                    <div className='bg-[#280a0a] w-[100%] h-[300px] p-3 flex justify-center items-center'> 
                        <Image src="/digitalsphere.png" width={500} height={780} alt="digitalsphere"></Image>
                    </div>

                </div>

                <div className={` bg-transparent w-[21rem] h-[21rem] rounded-xl `}>

                    <div className='bg-[#280a0a] w-[100%] h-[300px] flex justify-center items-center'> 
                        <Image src="/cocktailsmenu.png" width={800} height={780} alt="menu"></Image>
                    </div>
                    
                </div>     

                <div className={` bg-transparent w-[21rem] h-[21rem] rounded-xl `}>

                    <div className='bg-[#280a0a] w-[100%] h-[300px] overflow-hidden flex justify-center items-center'> 
                        <Image src="/palmac.png" width={800} height={780} alt="menu"></Image>
                    </div>
                    
                </div>     

            </div>

        </div>  
    </div>

  )                 
}

export default Designs