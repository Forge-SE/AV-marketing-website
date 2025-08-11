import React from 'react'


interface CardProps{
  Icon:React.ReactNode
  title:string,
  subtext:string
}
const AboutCard = ({ Icon, title, subtext }: CardProps) => {
  return (
    <div className='flex flex-col justify-center items-start bg-orange-200 border border-orange-600 p-5 rounded-lg gap-4'>
      {Icon}
      <h3 className='text-2xl text-orange-950 font-bold clash'>{title}</h3>
      <p className='text-gray-900'>{subtext}</p>
    </div>
  )
}

export default AboutCard

