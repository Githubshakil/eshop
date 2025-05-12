import React from 'react'
import Container from '../commonlayout/Container'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className='border-b border-[rgba(48,48,48,0.25)]  border-solid py-[22px]  '>
      <Container>
        <div className='flex items-center justify-between '>
          <div className='flex items-center gap-[50px] font-["Montserrat"] font-normal text-[14px] relative after:content-[""] after:bg-[#bfbfbf] after:absolute after:w-[1px] after:h-[32px] after:left-[62%] after:top-[50%] after:-translate-[50%]'>
            <Link to="https://maps.app.goo.gl/gZ7SG15p6xTnDNrT8" target='_blank' className='flex items-center gap-2'>
              <IoLocationOutline />
              123 Main Street, Anytown USA
            </Link>

            <Link to="tel: +1 (555) 123-4567" className='flex items-center gap-2'>
              <BsTelephone />
              +1 (555) 123-4567
            </Link>
          </div>
          <div>Right</div>
        </div>
      </Container>
        
      
    </div>
  )
}

export default TopBar
