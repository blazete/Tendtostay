import React from 'react'
import Logo from '../../../utils/stayNestLogo.png'
const HotelHeader = () => {
  return (
    <div className='w-[100vw] flex items-center justify-between bg-blue-900 py-4 text-white mb-4'>
        <div className='flex items-center '>
        <img src={`${Logo}`} className='w-10 h-10 ml-3'/>
        <div className='text-xl font-bold ml-1'>Stay-Nest</div>
        </div>
        <div className='flex items-center justify-end gap-4 mr-3'>
            <div  className='cursor-pointer'>View Properties</div>
            <div>Profile Picture</div>
        </div>
    </div>
  )
}

export default HotelHeader