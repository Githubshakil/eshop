import React from 'react'
import Phone from '../../../icons/Phone'
import Location from '../../../icons/Location'
import { Link } from 'react-router-dom'

const TopLeftBar = () => {
  return (
    <>
        <div className='flex items-center gap-[50px]  relative after:content-[""] after:bg-[#bfbfbf] after:absolute after:w-[1px] after:h-[32px] after:left-[62%] after:top-[50%] after:-translate-[50%]'>
            <Link to="https://maps.app.goo.gl/gZ7SG15p6xTnDNrT8" target='_blank' className='flex items-center gap-2 hover:text-[#ff624c] transition-all duration-300'>
              <Location />
              123 Main Street, Anytown USA
            </Link>

            <Link to="tel: +1 (555) 123-4567" className='flex items-center gap-2  hover:text-[#ff624c] transition-all duration-300'>
              <Phone />
              +1 (555) 123-4567
            </Link>
          </div>
    </>
  )
}

export default TopLeftBar