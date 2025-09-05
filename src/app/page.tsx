"use client"
import React, { useEffect, useState } from 'react';
export default function Home() {

  const heroBgImages =[
    'hero-section-bg.jpg',
    'hero-section-b.jpg',
    'hero-section-c.jpg',
  ]

  const [currentHeroIdx, setCurrentHeroIdx] = useState<number>(0);

  useEffect(()=>
  {
    const interval = setInterval(()=>
    {
      setCurrentHeroIdx((prev:number)=> prev + 1 % heroBgImages.length)
    },2000)
    return  ()=> clearInterval(interval)
  },[heroBgImages.length])
   
  return (

  
    <main className="space-y-20">
     {/* <section className="min-h-screen flex flex-col justify-center items-center  bg-[url('/hero-section-bg.jpg')] bg-cover bg-center">
      <div className="bg-black/40 bg-opacity-20  rounded-lg h-screen w-full flex flex-col justify-center items-start p-10">
      <h1 className="text-5xl font-bold text-white clash w-3/5 tracking-wide">Powering Africa's future. Driving global energy investments</h1>
      <p className="text-white text-base w-3/5 mt-4">Afrovivo International Ltd is a next-generation energy investment and infrastructure company,
building the bridge between global capital and Africa’s fast-growing oil, gas, and renewable
energy markets.</p>
<div className="flex space-x-6">
  <button className=" text-white text-sm px-4 py-3 rounded-sm mt-6 transition duration-300 bg-white/20 border border-white/50 hover:bg-white hover:text-black">
    Explore our strategy
  </button>
  <button className=" text-black text-sm px-4 py-3 rounded-sm mt-6 transition duration-300 bg-white hover:bg-orange-400 hover:text-white">
    Partner With Us
  </button>
</div>
        </div>
     </section> */}

     <section className="min-h-screen flex justify-center items-center w-full">
      <div className="w-1/2 h-screen flex flex-col justify-center items-start p-10 border border-orange-200 bg-orange-200/10">
  <h1 className="text-5xl font-bold text-black clash w-full tracking-wide">Powering Africa's future. Driving global energy investments</h1>
      <p className="text-black text-base w-4/5 mt-4">Afrovivo International Ltd is a next-generation energy investment and infrastructure company,
building the bridge between global capital and Africa’s fast-growing oil, gas, and renewable
energy markets.</p>

<div className="flex space-x-6">
  <button className=" text-black text-sm px-4 py-3 rounded-sm mt-6 transition duration-300  border border-black hover:bg-black hover:text-white">
    Explore our strategy
  </button>
  <button className=" text-white text-sm px-4 py-3 rounded-sm mt-6 transition duration-300 bg-orange-600 hover:bg-orange-500 hover:text-white">
    Partner With Us
  </button>
</div>
      </div>
      <div
          className="w-1/2 h-screen bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${heroBgImages[currentHeroIdx]})` }}
        >
        </div>

     </section>

     <section className="flex flex-col justify-center items-center gap-3 border-t border-t-orange-200 p-10 h-auto bg-orange-200/10">
        <span className=" clash font-normal text-4xl w-1/2 text-center">Creating <span className="text-orange-600 italic gambariano  font-semibold"> sustainable energy value
          </span> beyond investments</span>
     </section>
         
    </main>
  );

 
}
