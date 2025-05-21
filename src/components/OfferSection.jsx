import React from 'react'
import Container from './commonlayout/Container'
import Button from './commonlayout/Button'
const OfferSection = () => {
  return (
    <>
        <Container>
            <div className='my-20 flex gap-6'>
                {/* Free Shepping Everywere part */}
                <div className='w-[902px] h-[501px] rounded-[15px] relative'>
                    <img src="images/free_shipping.png" alt="" />
                    <div className=' absolute top-0 left-[56px]'>
                        <h5 className='mt-[102px] max-w-[250px] font-["Poppins"] text-[36px] text-[#303030] font-semibold leading-[46px]'>
                        Free Shipping Everywhere!
                        </h5>
                        <p className='mt-5 mb-[64px] max-w-[422px] font-["Poppins"] text-xl text-[#303030] font-normal leading-[30px]'>
                            Special for orders over $500.00 worldwide.
                            Available throughout May & June 2023
                        </p>
                        <Button text={"Shop Now"} />
                    </div>
                </div>
                    {/* Black Friday Clearance */}
                <div className='w-[594px] h-[501px] bg-[#D9D9D9] rounded-[15px] relative'>        
                    <img src="images/black_friday.png" alt="" />
                    <div className=' absolute top-0 left-[56px]'>
                        <h5 className='mt-[56px] max-w-[224px] font-["Poppins"] text-[36px] text-[#303030] font-semibold leading-[46px]'>
                        Black Friday Clearance
                        </h5>
                        <p className='mt-5 mb-[64px] max-w-[337px] font-["Poppins"] text-xl text-[#303030] font-normal leading-[30px]'>
                            Up to 80% promo for all products!
                        </p>
                        <Button text={"Shop Now"} />
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default OfferSection