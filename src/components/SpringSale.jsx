import React from 'react'
import Container from './commonlayout/Container'

const SpringSale = () => {
  return (
    <>
        <div className='w-full h-[829px] bg-[#f4f4f4] mt-[80px]'>
            <Container>
               <div>
                 {/* laft side */}
                    <div className='pt-[235px] mb-[40px]'>
                        <h4 className=' font-["Poppins"] text-[56px] text-normal font-bold leading-[68px]'>Spring Sale</h4>
                    </div>
                    <div className=' w-[400px] flex justify-between items-baseline'>
                        <div>
                            <h6 className='font-["Poppins" text-[35px] font-semibold leading-[46px] text-[#FF624C]'>00</h6>
                            <p className='font-["Montserrat] text-base font-normal leading-6 text-[#303030]'>Days</p>
                        </div>
                        <span className='text-[#FF624C] text-[36px] '>:</span>
                        <div>
                            <h6 className='font-["Poppins" text-[35px] font-semibold leading-[46px] text-[#FF624C]'>03</h6>
                            <p className='font-["Montserrat] text-base font-normal leading-6 text-[#303030]'>Hours</p>
                        </div>
                        <span className='text-[#FF624C] text-[36px] '>:</span>
                        <div>
                            <h6 className='font-["Poppins" text-[35px] font-semibold leading-[46px] text-[#FF624C]'>40</h6>
                            <p className='font-["Montserrat] text-base font-normal leading-6 text-[#303030]'>Minutes</p>
                        </div>
                        <span className='text-[#FF624C] text-[36px] '>:</span>
                        <div>
                            <h6 className='font-["Poppins" text-[35px] font-semibold leading-[46px] text-[#FF624C]'>12</h6>
                            <p className='font-["Montserrat] text-base font-normal leading-6 text-[#303030]'>Seconds</p>
                        </div>
                    </div>
                {/* right side */}
                    <div></div>
               </div>
            </Container>
        </div>
    </>
  )
}

export default SpringSale