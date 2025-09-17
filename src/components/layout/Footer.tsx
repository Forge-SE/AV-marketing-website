'use client'
import React from 'react'
import Image from 'next/image'
import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/outline'
export const Footer = () => {
  return (
    <div className='bg-white/90 h-auto p-10 flex flex-col justify-center items-center gap-10 border-t border-t-gray-100 w-full'>
      <div className='flex justify-between items-center gap-6 mb-4 w-full'>
        <div className='flex flex-col justify-center items-start gap-2'>
 <Image src="/logo.png" alt="Afrovivo Logo"  width={100} height={100}/>
 <p className='text-base font-normal uppercase text-orange-800'>Let&apos;s power Africa&apos;s energy future together</p>
        </div>
        <div className='flex flex-col justify-center items-start gap-2'>
<div className='flex justify-center items-center gap-2'>
<MapIcon className='w-5 h-5 text-orange-700'/>
<p className='text-base text-gray-600'>Accra, Ghana 
  <span className='text-xs bg-orange-100 text-orange-950 p-1 rounded-sm font-semibold ml-4'>Headquarters</span>
</p>
</div>
<div className='flex justify-center items-center gap-2'>
<EnvelopeIcon className='w-5 h-5 text-orange-700'/>
<p className='text-base text-gray-600'>info@afrovivointernational.com</p>
</div>
<div className='flex justify-center items-center gap-2'>
<PhoneIcon className='w-5 h-5 text-orange-700'/>
<p className='text-base text-gray-600'>+233 123 456 789</p>
</div>
        </div>
       
       <div className='flex flex-col justify-start items-center gap-2'>
<button className='flex  justify-center items-center gap-2 bg-orange-700 text-white hover:bg-orange-500 text-sm px-4 py-3 rounded-sm cursor-pointer group'
onClick={() => { window.location.href = 'mailto:info@afrovivointernational.com' }}
>
  <EnvelopeIcon className='w-5 h-5 text-white hidden group-hover:flex group-hover:animate-bounce'/>
  Get In Touch
</button>
       </div>
      </div>
      <p className='text-center text-sm text-gray-600'>
        &copy; {new Date().getFullYear()} Afrovivo International Ltd. All rights reserved.
      </p>
    </div>
  )
}


