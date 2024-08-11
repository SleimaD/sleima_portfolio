import { useState } from 'react'
import React from 'react'
// import { bagelFatOne } from '../font'
import SkillsData from './../json/skills.json'
import Image from "next/image"
import {Bagel_Fat_One} from 'next/font/google'


export const bagelFatOne  = Bagel_Fat_One ({
  subsets: ['latin'],
  weight: ['400'],
});




function Resume() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(null);

  const openModal = (skill) => {
    setCurrentSkill(skill);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };  


  return (
    <div className='w-full  mb-[6rem]   p-4 overflow-y-auto '>
        <div className='w-full h-full flex flex-col justify-center items-center  mt-10 overflow-y-auto '>
          <h2 className={`text-white text-5xl tracking-wide ${bagelFatOne.className} mt-16 underline `}>Education</h2>


          <section className="design-section h-[180rem] mt-5   w-full">
            <div className="timeline">

              <div className="timeline-empty">
              </div>

              <div className="timeline-middle">
                  <div className="timeline-circle"></div>
              </div>
              <div className="timeline-component shadow-inner timeline-content">
                <h3 className='font-bold font-serif mb-2 '>Full Stack Developer  ( Training ) 
                 </h3>

                <p className='text-[0.9rem]  mb-4'>Molengeek (2023 - 2024)</p>

                <p className='text-[0.9rem] font-mono'>Completed intensive Full Stack Developer training at MolenGeek, gaining front-end and back-end skills through hands-on projects. Developed technical expertise and a collaborative work ethic, preparing for real-world web development challenges.</p>
              </div>
              <div className="timeline-component shadow-inner timeline-content">
                <h3 className='font-bold font-serif mb-2 '>Bachelor Degree in Business Informatics</h3>

                <p className='text-[0.9rem] mb-4'>Isfce, Brussels (Jan 2021 - Jun 2023)</p>

                <p className='text-[0.9rem] font-mono'>Bachelor degree in Business Informatics, focusing on IT and business process integration, covering database management, systems analysis, software development, and strategic IT management.</p>
              </div>
              <div className="timeline-middle">
                  <div className="timeline-circle"></div>
              </div>
                <div className="timeline-empty">
                </div>



              </div>
          </section>

          <h2 className={`text-white text-5xl tracking-wide ${bagelFatOne.className} mt-10 underline  `}>Experience</h2>

          <section className="design-section  h-[40rem] mb-10 w-full">
            <div className="timeline">

              <div className="timeline-empty">
              </div>

              <div className="timeline-middle">
                  <div className="timeline-circle"></div>
              </div>
              <div className="timeline-component shadow-inner timeline-content">
                <h3 className='font-bold font-serif mb-2 '>Full Stack Web development <small className='text-sm'>(Professional training )</small></h3>
                <p className='text-[0.9rem] mb-4 '>Molengeek (2023 - 2024)</p>
                <p className='text-[0.7rem] font-mono'>Completed intensive Full Stack Developer training at MolenGeek, gaining front-end and back-end skills through hands-on projects. Developed technical expertise and a collaborative work ethic, preparing for real-world web development challenges.</p>
              </div>
              <div className="timeline-component shadow-inner timeline-content">
                <h3 className='font-bold font-serif mb-2 '>Versatile Employee <small className='text-sm'>( student job )</small></h3>
                <p className='text-[0.9rem] mb-4 '>Carrefour (2023)</p>
                <p className='text-[0.7rem] font-mono'>Handled the cash register and stocked shelves, using organizational skills and providing good customer service.</p>

              </div>
              <div className="timeline-middle">
                  <div className="timeline-circle"></div>
              </div>
                <div className="timeline-empty">
                </div>

                <div className="timeline-empty">
                </div>

                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>
                <div className=" timeline-component shadow-inner timeline-content">
                  <h3 className='font-bold font-serif mb-2 '>Versatile Employee <small className='text-sm'>( student job )</small></h3>
                  <p className='text-[0.9rem] mb-4 '>Starcasino (2022)</p>
                  <p className='text-[0.7rem] font-mono'>Registered incoming clients, managed gaming machines, handled cash flow..</p>
              </div>


              </div>
          </section>

          <h2 className={`text-white text-5xl tracking-wide ${bagelFatOne.className} mt-5 mb-5 underline  `}>Skills</h2>

          <div className={`mt-16 mb-[10rem] flex justify-center text-center`}> 

            <div className=" flex flex-wrap justify-center gap-5 w-[80%] max-[400px]:w-[90%] text-center">
                {SkillsData.map((element, index) => (
                    <div key={index} className="boite bg-[#fff] w-[6rem] h-[6rem] flex flex-col gap-3 justify-center items-center p-3 rounded-xl shadow-inner cursor-pointer transition-colors" onClick={() => openModal(element)}>
                        <Image src={element.image} width={40} height={760} alt={element.name}></Image>
                        <p className='text-[0.7rem] font-mono font-bold'>{element.name}</p>
                    </div>
                ))}                                                    
                
            </div>

            {modalVisible && (
              <div className="fixed inset-0 bg-black bg-opacity-75 z-10 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                  ></div>
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <div
                    className="inline-block align-bottom bg-[#ffffff85] rounded-lg text-left overflow-hidden shadow-md shadow-white transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                  >
                    <div className="bg-[#ffffff85] px-7 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 p-3 font-serif">
                        {currentSkill ? currentSkill.description : ''}
                      </h3>
                    </div>
                    <div className="bg-[#ffffff85] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 text-red-600 text-base font-bold  focus:outline-none focus:ring-2 focus:ring-offset-2  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => closeModal()}
                      >
                        &#9747;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>



        </div>

    </div>
  )
}

export default Resume