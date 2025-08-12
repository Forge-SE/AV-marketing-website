import React from 'react'

const Blip = ({textSpan}:{
  textSpan:string
}) => {
  return (
    <div className='bg-orange-300 border border-orange-800 px-3 py-4 rounded-full'>
      <span className='text-gray-900 clash font-medium text-sm'>{textSpan}</span>
    </div>
  )
}

export default Blip

