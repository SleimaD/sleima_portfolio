"use client"
import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import worksData from './../json/works'
import {Bagel_Fat_One} from 'next/font/google'


export const bagelFatOne  = Bagel_Fat_One ({
  subsets: ['latin'],
  weight: ['400'],
});



const Works = () => {


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setItemsPerPage(2); 
      } else {
        setItemsPerPage(4); 
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(worksData.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentItems = worksData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

 
return (
    <div className={`relative text-white mt-[0rem] mb-16`}>
      <div className="flex justify-center w-full">
        <div
          className={`p-2 flex gap-9 w-[99%] mb-[1.5rem] flex-wrap justify-center`}
        >
          {currentItems.map((element) => (
            <div
              key={element.alt}
              className="relative blockmauve flex h-[18rem] w-[28rem] items-center justify-center rounded-[1.5em] border-[1px] border-[#813d98dc] bg-[#813d982f] p-[0.5rem] text-lime-300 bg-opacity-75"
            >
              <div className="group absolute left-1/2 top-1/2 flex h-[3em] w-[3em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] border-[#ffffffaa] bg-[#5453539a] backdrop-blur-[20px] duration-[500ms] hover:h-[17rem] hover:w-[27em] max-[426px]:hover:w-[24.5em] max-[426px]:hover:h-[16rem] blockhover hover:rounded-[1.5em]">
               
                <svg
                        className="h-[1.5em] w-[1.5em] duration-300 group-hover:opacity-0 cursor-pointer"
                        viewBox="0 0 48 48"
                        fill="none"
                        height="48"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <g clip-path="url(#a)">
                            <path
                            clip-rule="evenodd"
                            d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z"
                            fill-rule="evenodd"
                            fill="#fff"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="a">
                            <path d="M0 0h48v48H0z" fill="#fff"></path>
                            </clipPath>
                        </defs>
                        </svg>
                        <div
                        className="items-left  duration-600 absolute left-0 top-0 flex h-[17em] w-[26em] overflow-y-auto translate-y-[100%] flex-col justify-between p-[1.5em] font-nunito text-[hsl(0,0%,85%)] group-hover:translate-y-0"
                        >
                        <div className="items-left flex flex-col justify-center w-full p-3  ">
                            <h1 className="text-[1.5em] font-bold leading-[0.8em] mb-4">{element.name}</h1>
                            <p className="text-[0.9em] font-light mb-5">
                                {element.description}
                            </p>
                            <p class="text-[0.9em] font-light mb-3 ">
                                <span className='font-bold italic '>Challenges : </span> {element.challenges}
                            </p>
                            <p className="text-[0.9em] font-light mb-3">
                               <span className='font-bold italic'> Tools : </span> {element.tools}
                            </p>
                        </div>
                            <a href={element.websiteUrl} className="cursor-pointer text-[1rem] underline"> View </a>
                        </div>


              </div>
              <img
                className="w-full h-full transition-all duration-300 rounded-xl"
                src={element.image}
                alt={element.alt}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center ">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handleClick(i + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-gray-500 text-white"
                : "bg-transparent text-white"
            } border border-white`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );

}      
                                  
export default Works;

