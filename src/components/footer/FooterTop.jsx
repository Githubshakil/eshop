import React from 'react'
import Container from '../commonlayout/Container'
import Button from '../Button'

const FooterTop = () => {
return (
    <>
            <Container>
                    <div className='py-[114px] px-[100px] rounded-[25px] bg-gradient-to-r from-[#f4f4f4]  to-[#d9d9d9cb] '>
                            <h3 className='text-[#303030] font-["Poppins"] text-4xl font-semibold max-w-[302px] h-[46px] leading-[46px]'>Get Our Updates</h3>
                            <p className='text-[#303030] font-["Montserrat"] text-[20px]  font-normal max-w-[475px] h-[60px] leading-[30px] mt-4 mb-8 '>
                                Browse our wide selection of electronics and find the perfect promo for you from newsletter.
                            </p>
                            <input
                                className="w-[494px] bg-white border border-[rgba(48,48,48,0.35)] py-[18px] px-6 rounded-[10px] mb-4"
                                type="text"
                                placeholder="Enter your email address ..."
                            />
                            <br />
                            <Button text="Subscribe" />
                    </div>
            </Container>
    </>
)
}

export default FooterTop