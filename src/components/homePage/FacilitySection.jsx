import React from 'react'
import Container from '../commonlayout/Container'
import Headphone from '../../icons/Headphone'
import Security from '../../icons/Security'
import Delivery from '../../icons/Delivery'
import Transparent from '../../icons/Transparent'



const FacilitySection = () => {
  return (
    <Container>
        <div className='flex justify-between items-center mb-20'>
            
                <div className='flex items-center gap-6'>
                    <div className='flex items-center '>
                        <Headphone/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h6 className='font-["Montserrat"] text-base text-normal font-bold leading-6 text-[#303030]'>Responsive</h6>
                        <p className='font-["Montserrat"] text-base text-normal font-normal leading-6  text-[#303030]'>Customer service available 24/7</p>
                    </div>
                    
                </div>

                <div className='flex items-center gap-6'>
                    <div className='flex items-center '>
                        <Security/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h6 className='font-["Montserrat"] text-base text-normal font-bold leading-6 text-[#303030]'>Secure</h6>
                        <p className='font-["Montserrat"] text-base text-normal font-normal leading-6  text-[#303030]'>Certified marketplace since 2017</p>
                    </div>
                    
                </div>

                <div className='flex items-center gap-6'>
                    <div className='flex items-center '>
                        <Delivery/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h6 className='font-["Montserrat"] text-base text-normal font-bold leading-6 text-[#303030]'>Shipping</h6>
                        <p className='font-["Montserrat"] text-base text-normal font-normal leading-6  text-[#303030]'>Free, fast, and reliable worldwide</p>
                    </div>
                    
                </div>

                <div className='flex items-center gap-6'>
                    <div className='flex items-center '>
                        <Transparent />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h6 className='font-["Montserrat"] text-base text-normal font-bold leading-6 text-[#303030]'>Transparent</h6>
                        <p className='font-["Montserrat"] text-base text-normal font-normal leading-6  text-[#303030]'>Hassle-free return policy</p>
                    </div>
                    
                </div>
        </div>
    </Container>
            )
          }
                
                
                
            

        

export default FacilitySection