import React from 'react'
import SubHeading from '../commonlayout/SubHeading'
import Container from '../commonlayout/Container'
import SideButton from '../commonlayout/SideButton'

const BestSellerSection = () => {
  return (
    <>
    <Container>
        <div className='flex justify-between'>
            {/* left side */}
            <div>
                <div className='flex items-center justify-between gap-[500px]'>
                    <div><SubHeading subText={"Best Seller"}/></div>
                    <div><SideButton sidetext={"View All"} /></div>
                </div>
                <div>

                </div>
            </div>
            {/* right side */}
            <div className='max-w-[544px] bg-[#f4f4f4]'>
                <h4>Buy One, Get One Free!</h4>
            </div>
    </div>
    </Container>
    </>
  )
}

export default BestSellerSection