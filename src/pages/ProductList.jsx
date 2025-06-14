import React, { useState } from 'react'
import Container from '../../src/components/commonlayout/Container'


const ProductList = () => {
  let [minValue, setMinValue] = useState(0)
  let [maxValue, setMaxValue] = useState(1000)


  const updateSlider = (type, value)=>{
    if(type == min ){
        const newMin = Math.min(parseInt(value), maxValue)
        setMaxValue(newMin)
    }else{
      const newMax = Math.min(parseInt(value), minValue)
        setMinValue(newMax)
    }
  }
  return (
    <>
    <Container>
      <div className='flex'>
        <div className='w-[355px] bg-[#f4f4f4] rounded-[25px] p-[48px]'>
          <h3 className='font-["Montserrat"] font-bold text-[20px] '>Price</h3>
          <div className='mt-6' >
            <div className='flex justify-between mb-[30px]'>
              <span className='py-[25px] px-[42px] border border-[rgba(48,48,48,0.25)] rounded-[10px] bg-[#f4f4f4] '> $100</span>
              <span className='py-[25px] px-[42px] border border-[rgba(48,48,48,0.25)] rounded-[10px] bg-[#f4f4f4] '> $100</span>
            </div>
              <div className='relative w-full h-2 bg-green-500 rounded '>
                <div className=' absolute h-full bg-red-500 rounded left-[10%] w-[20%]'></div>
                <input 
                type="range"
                min="0"
                max="1000" 
                value="10"
                step="10"
                className=' absolute w-full h-2.5 bg-transparent pointer-event-none rounded appearance-none'
                />
                <input 
                type="range"
                min="0"
                max="1000" 
                value="200"
                step="10"
                className=' absolute w-full h-2.5 bg-transparent pointer-event-none rounded appearance-none'
                />
                
              </div>
          </div>
        </div>
        <div className='w-[80%]'>asd</div>
      </div>
    </Container>
    </>
  )
}

export default ProductList