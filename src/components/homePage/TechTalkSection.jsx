import React from 'react'
import Container from '../commonlayout/Container'
import SubHeading from '../commonlayout/SubHeading'
import SideButton from '../commonlayout/SideButton'
import Clock from '../../icons/Clock'

const TechTalkSection = () => {
  return (
    <>
    <Container>
        <div className='mb-20'>
            <SubHeading subText={"Tech Talk"}/>
        <div className='flex justify-between items-center mt-6 mb-12 '>
            <p className='font-["Montserrat"] text-[20px] font-normal leading-[30px] text-[#303030]'>Stay up to date with the latest trends, reviews, and insights from our experts.</p>
            <SideButton sidetext={"View All"}/>
        </div>
        <div className='flex items-center gap-12 '>
            <div className=' border border-transparent  hover:border-[rgba(48,48,48,0.25)]  hover:border- duration-300  rounded-[25px] cursor-pointer'>
                <div className='w-[440px] h-[406px] rounded-[25px] bg-[#D9D9D9] mb-[32px] mx-auto duration-300'></div>
                <h5 className='font-["Poppins"] text-2xl font-semibold leading-[30px] mb-8 w-[439px]'>Our Category Choices for Top 10 Tech Gadgets in 2023</h5>
                <div className='flex items-center justify-between mb-12 '>
                    <button className='py-[7px] px-5 bg-[#ff624c] text-white rounded-[10px] text-center  '>Gadgets</button>
                    <div className='flex items-center gap-[10px]'>
                        <Clock/><span>10 April 2023</span>
                    </div>
                </div>
            </div>

            <div className=' border border-transparent   hover:border-[rgba(48,48,48,0.25)]  hover:border- duration-300  rounded-[25px] cursor-pointer'>
                <div className='w-[440px] h-[406px] rounded-[25px] bg-[#D9D9D9] mb-[32px] mx-auto duration-300'></div>
                <h5 className='font-["Poppins"] text-2xl font-semibold leading-[30px] mb-8 w-[439px]'>Our Category Choices for Top 10 Tech Gadgets in 2023</h5>
                <div className='flex items-center justify-between mb-12 '>
                    <button className='py-[7px] px-5 bg-[#ff624c] text-white rounded-[10px] text-center  '>Tips</button>
                    <div className='flex items-center gap-[10px]'>
                        <Clock/><span>12 April 2023</span>
                    </div>
                </div>
            </div>

            <div className=' border border-transparent   hover:border-[rgba(48,48,48,0.25)]  hover:border- duration-300  rounded-[25px] cursor-pointer'>
                <div className='w-[440px] h-[406px] rounded-[25px] bg-[#D9D9D9] mb-[32px] mx-auto duration-300'></div>
                <h5 className='font-["Poppins"] text-2xl font-semibold leading-[30px] mb-8 w-[439px]'>Our Category Choices for Top 10 Tech Gadgets in 2023</h5>
                <div className='flex items-center justify-between mb-12 '>
                    <button className='py-[7px] px-5 bg-[#ff624c] text-white rounded-[10px] text-center  '>Review</button>
                    <div className='flex items-center gap-[10px]'>
                        <Clock/><span>16 April 2023</span>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    </Container>
    </>
  )
}

export default TechTalkSection