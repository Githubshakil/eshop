import React from 'react'
import Container from '../commonlayout/Container'
import { IoMdSearch } from "react-icons/io";

const MiddleBar = () => {
  return (
    <Container>
      
      <div className='flex justify-between items-center py-8'>
        <div>
          <img src="images/logo.png" alt="logo" />
        </div>


        <div className='flex items-center'>
          <div className='relative flex items-center mr-[48px]'>
            <input 
            className='w-[332px] border border-[rgba(48,48,48,0.35)] py-[18px] px-6 rounded-[10px]' 
            type="text"
            placeholder='Search Products ...' 
            />
            <IoMdSearch className='text-3xl absolute top-1/2 right-6 -translate-y-1/2' />
          </div>
          <div>cart</div>
          <div>account</div>
        </div>
      </div>

    </Container>
  )
}

export default MiddleBar