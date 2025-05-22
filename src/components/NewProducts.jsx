import React from 'react'
import Container from './commonlayout/Container'
import SubHeading from './commonlayout/SubHeading'
import { IoIosArrowDown } from 'react-icons/io'
import ProductLayout from './commonlayout/ProductLayout'
import Button from './commonlayout/Button'


const NewProducts = () => {
  // Define the stock variable, for example as a boolean or a value expected by ProductLayout
  const stock = true;

  return (
    <>
        <Container>
            <div className='flex items-center justify-between mb-12'>
            <SubHeading subText={"New Products"}/>
            <div className='flex items-center gap-[100px]'>
                <div className='flex items-center gap-4'>
                <span className='font-["Montserrat"] text-base font-normal leading-6 text-[#303030]'>Sort by</span>
                <h6 className='flex items-center gap-4 font-["Montserrat"] text-base font-bold leading-6 text-[#FF624C]'>All Categories</h6>
                </div>
                <IoIosArrowDown className= 'w-4 h-4 text-[#303030] cursor-pointer' />
            </div>
                
            </div>

            <div className='flex items-center'>
            <ProductLayout  percentValue="40%" percentTag = {true} category = "WATCH" title= "Orange Watch 12 High Quality Health Sensor..." rating = "3" totalRating="(120)" price="959.99" border={true} bg="transparent" stock={false} stockAmount ="50" /> 
            <ProductLayout  percentValue="40%" percentTag = {false} category = "TABLET" title= "Ultra Tablet Qwerty HD 10765 Series Low Pri..." rating = "2" totalRating="(100)" price="799.00" border={true} bg="transparent" stock={false} stockAmount ="50"/> 
            <ProductLayout  percentValue="40%" percentTag = {false} category = "AUDIO" title= "QuietComfort 45 Wireless Headphone ..." rating = "3" totalRating="(120)" price="329.99" border={true} bg="transparent" stock={false} stockAmount ="50" /> 
            <ProductLayout  percentValue="40%" percentTag = {false} category = "LAPTOP" title= "Surface Laptop 4 XPS 13 Plus 64GB i7 Touch ..." rating = "3" totalRating="(120)" price="2,399.99" border={true} bg="transparent" stock={false} stockAmount ="50" /> 
            <ProductLayout  percentValue="50%" percentTag = {true} category = "CAMERA" title= "CamPro HERO10 Black Sleek Design 2023 4K ..." rating = "5" totalRating="(20)" price="1,499.99" border={true} bg="transparent" stock={false} stockAmount ="50"/> 
            </div>
            <div className='text-center mt-[64px]'>
              <Button text={"Load More"} border='1px solid' color='#ff624c' bg='transparent'  />
            </div>
        </Container>
    </>
  )
}

export default NewProducts