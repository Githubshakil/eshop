import React from 'react'
import SubHeading from '../commonlayout/SubHeading'
import Container from '../commonlayout/Container'
import SideButton from '../commonlayout/SideButton'
import ProductLayout from '../commonlayout/ProductLayout'

const BestSellerSection = () => {
    const stock = true;
  return (
    <>
    <Container>
        <div className='flex justify-between gap-[74px]'>
            {/* left side */}
            <div>
                <div className='flex items-center justify-between gap-[601px]'>
                    <div><SubHeading subText={"Best Seller"}/></div>
                    <div><SideButton sidetext={"View All"} /></div>
                </div>
                <div className='grid grid-cols-3 grid-rows-2 gap-6 max-w-[902px]'>
                    <ProductLayout image={false} blankimg={false} percentValue="40%" percentTag = {true} category = "PHONE" title= "JPhone 13 High Quality Value Buy Best Cam..." rating = "3" totalRating="(100)" price="599.00" delPrice={"$999.00"} border={true} bg="transparent" stock={false} stockAmount ="50" /> 
                    <ProductLayout image={false} blankimg={false} percentValue="40%" percentTag = {false} category = "AUDIO" title= "WH-1000XM4 Wireless Headphones High Qu..." rating = "2" totalRating="(10)" price="59.00" border={true} bg="transparent" stock={false} stockAmount ="50"/> 
                    <ProductLayout image={false} blankimg={false} percentValue="40%" percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "3" totalRating="(60)" price="1,199.00" border={true} bg="transparent" stock={false} stockAmount ="50" /> 
                    <ProductLayout image={false} blankimg={false} percentValue="40%" percentTag = {false} category = "CAMERA" title= "Mini Polaroid Camerafor Girls with Flash Li..." rating = "3" totalRating="(60)" price="79.00" border={true} bg="transparent" stock={false} stockAmount ="50" /> 
                    <ProductLayout image={false} blankimg={false} percentValue="50%" percentTag = {true} category = "TELEVISION" title= "AG OLED65CXPUA 4K Smart OLED TV New ..." rating = "5" totalRating="(200)" price="2,799.00" border={true} bg="transparent" stock={false} stockAmount ="50"/> 
                    <ProductLayout image={false} blankimg={false} percentValue="40%" percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "4" totalRating="(160)" price="1,199.00" border={true} bg="transparent" stock={false} stockAmount ="50" /> 
                </div>
            </div>
            {/* right side */}
            <div className='max-w-[544px] bg-[#f4f4f4] pt-20 px-[36px]'>
                <h4 className='max-w-[247px] font-["Poppins] text-[36px] font-semibold leading-[46px] text-[#303030] text-center ml-[122px] '>Buy One, Get One Free!</h4>
                <p className='max-w-[471px] font-["Montserrat"] text-[20px] font-normal leading-[30px] text-[#303030] text-center '>50% off promo for all headphones & earphones.</p>
            </div>
    </div>
    </Container>
    </>
  )
}

export default BestSellerSection