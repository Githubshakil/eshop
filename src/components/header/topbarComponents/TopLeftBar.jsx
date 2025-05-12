import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const TopLeftBar = () => {
  return (
    <>
        <div className='flex items-center gap-[50px]  relative after:content-[""] after:bg-[#bfbfbf] after:absolute after:w-[1px] after:h-[32px] after:left-[62%] after:top-[50%] after:-translate-[50%]'>
            <Link to="https://maps.app.goo.gl/gZ7SG15p6xTnDNrT8" target='_blank' className='flex items-center gap-2'>
              <IoLocationOutline />
              123 Main Street, Anytown USA
            </Link>

            <Link to="tel: +1 (555) 123-4567" className='flex items-center gap-2'>
              <BsTelephone />
              +1 (555) 123-4567
            </Link>
          </div>
    </>
  )
}

export default TopLeftBar