import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-white h-[10vh]  p-5'>
      <div className=''>
    <Image src="/logo.png" alt="Afrovivo Logo" width={150} height={50} className='ml-10'/>
      </div>
      <div className=' flex justify-center items-center gap-4'>

      </div>
    </nav>
  )
}

export default Navbar

