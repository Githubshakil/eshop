import React from 'react'
import { LiaAngleRightSolid } from 'react-icons/lia'


const AccordianItem = ({title,content, onToggle,isOpen}) => {
  return (
    <>
      <div onClick={onToggle} className='mb-6 w-full p-3 text-left bg-white py-[32px] px-12 pl-[112px] rounded-[25px] font-["Poppins"] font-semibold text-[24px] relative group'>
          <button >
             <div className={`w-[32px] h-[32px] rounded-full ${isOpen ? "bg-transparent border border-[#FF624C] !text-[#FF624C] rotate-[90deg]" : "bg-[#ff624c]" }  bg-[#FF624C] text-[#fff] text-[14px] flex items-center justify-center  absolute top-[32px] left-[48px] duration-300`}>
              <LiaAngleRightSolid />
             </div>
             {title}
             </button>
          {isOpen &&
          <div className='font-["Montserrat] font-normal text-base text-[#303030] mt-6 leading-[30px]'> 
              {content}
          </div>
          }
      </div>
    </>
  )
}

export default AccordianItem