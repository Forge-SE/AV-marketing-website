import React from 'react'


interface CardProps{
  title: string,
  subtext: string,
  image?: string,
}
const ServicesCard = ({ title, subtext, image = "/bg-img.jpg" }: CardProps) => {
  return (
    <div
      className="flex flex-col justify-end items-start h-[50vh] bg-cover bg-center p-5 rounded-lg gap-4 relative"
      style={{ backgroundImage: `url(${image})` }}
    >
       <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)',
            zIndex: 0,
          }}
        />
        <div className='relative z-10'>
          <h3 className='text-2xl text-white font-bold clash'>{title}</h3>
          <p className='text-white text-sm'>{subtext}</p>
        </div>
    </div>
  )
}

export default ServicesCard

