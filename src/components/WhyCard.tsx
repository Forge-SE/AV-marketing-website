import React, { JSX } from 'react'

interface WhyCardProps{
  title:string,
  description?:string,
  icon:JSX.Element
}
const WhyCard = ({ title, description, icon}: WhyCardProps) => {
  return (
    <div className='flex flex-col justify-center items-start gap-4 bg-gray-100/50 shadow-lg hover:shadow-xl  p-6 rounded-sm'>
      {icon}
      <div className='flex flex-col justify-start items-start gap-2'>
 <h3 className='text-xl font-medium text-orange-950'>{title}</h3>
      <p className='text-sm text-gray-800'>{description}</p>
      </div>
     
    </div>
  )
    
}

export default WhyCard
