import React from 'react'
import Container from './commonlayout/Container'
import Button from './commonlayout/Button'
import ProductLayout from './commonlayout/ProductLayout'

const SpringSale = () => {
    const stock = true
  return (
    <>
        <div className='w-full h-[829px] bg-[#f4f4f4] mt-[80px] '>
            <Container>
               <div className='flex items-center justify-between'>
                 {/* laft side */}
                    <div>
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
                    <div className='mt-[72px] mb-[90px]'>
                        <Button text={"Shop Now"} />
                    </div>
                    <div>
                        <img src="images/dots.png" alt="" />
                    </div>
                    </div>
                {/* right side */}
                    <div className='flex items-center'>
                         <ProductLayout image={false} blankimg={false} percentValue="40%" percentTag = {false} category = "CAMERA" title= "Mini Polaroid Camerafor Girls with Flash Li..." rating = "3" totalRating="(60)" price="79.00" border={true} bg="transparent" stock={stock} stockAmount ="70" /> 
                        <ProductLayout image={false} blankimg={false} percentValue="50%" percentTag = {true} category = "TELEVISION" title= "AG OLED65CXPUA 4K Smart OLED TV New ..." rating = "5" totalRating="(200)" price="2,799.00" border={true} bg="transparent" stock={stock} stockAmount ="50"/> 


                    </div>
               </div>
            </Container>
        </div>
    </>
  )
}

export default SpringSale