import React from 'react'

const AccordianItem = ({title,content, onToggle,isOpen}) => {
  return (
    <>
      <div onClick={onToggle} className='mb-6'>
          <button className='w-full p-3 text-left bg-white py-[32px] px-12 rounded-[25px] font-["Poppins"] font-semibold text-[24px] '>{title}</button>
          {isOpen &&
          <div className='p-4 bg-purple-500 '> 
              {content}
          </div>
          }
      </div>
    </>
  )
}

export default AccordianItem