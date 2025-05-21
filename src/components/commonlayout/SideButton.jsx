import React from 'react'
import RightArrow from '../../icons/RightArrow'


const SideButton = ({sidetext}) => {
  return (
    <>
        <button className='flex items-center gap-4 font-["Montserrat"] text-base font-bold leading-6 text-[#FF624C]' >{sidetext} <RightArrow/> </button>
    </>
  )
}

export default SideButton