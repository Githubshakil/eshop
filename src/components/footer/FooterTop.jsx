import React from 'react'
import Container from '../commonlayout/Container'

const FooterTop = () => {
return (
    <>
            <Container>
                    <div className='h-[400px] rounded-[25px] bg-gradient-to-r from-[#f4f4f4]  to-[#d9d9d9cb] '>
                            <h3 className='text-[#303030] font-["Poppins"] text-4xl font-semibold max-w-[302px] h-[46px] leading-[46px]'>Get Our Updates</h3>
                            <p className='text-[#303030] font-["Montserrat"] text-[20px]  font-normal max-w-[514px] h-[60px] leading-[30px] mt-4'>
                                Browse our wide selection of electronics and find the perfect promo for you from newsletter.
                            </p>
                            <input type="text" />
                            <button>Subscribe</button>
                    </div>
            </Container>
    </>
)
}

export default FooterTop