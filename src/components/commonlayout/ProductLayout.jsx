import React from 'react'
import { IoStar } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";

const ProductLayout = () => {
  return (
    <div className=' border border-transparent p-6 hover:border-[rgba(48,48,48,0.25)] duration-300  rounded-lg group'>
        <div className=' relative'>
            <img src="images/productimg.png" alt="productimg" />
           <div className='flex justify-center gap-[18px] absolute bottom-[6px] left-[26px]'>
            <div className='h-[50px] w-[50px] rounded-full border border-[#ff624c] flex items-center justify-center text-[25px] text-[#ff624c] hover:bg-[#ff624c] hover:text-white duration-300 cursor-pointer'>
                <BsCart3 />
            </div>
            <div className='h-[50px] w-[50px] rounded-full border border-[#ff624c] flex items-center justify-center text-[25px] text-[#ff624c] hover:bg-[#ff624c] hover:text-white duration-300 cursor-pointer'>
                <IoIosHeartEmpty />
            </div>
            <div className='h-[50px] w-[50px] rounded-full border border-[#ff624c] flex items-center justify-center text-[25px] text-[#ff624c] hover:bg-[#ff624c] hover:text-white duration-300 cursor-pointer'>
                <IoShareSocialOutline />
            </div>

           </div>
        </div>
        <div>
            <p className='font-["Montserrat"] font-normal text-sm leading-5 uppercase  tracking-[5px] mt-[46px] mb-4 text-[#303030]'>LAPTOP</p>
            <h3 className='font-["Poppins"] font-semibold text-[20px] leading-[30px] group-hover:text-[#ff624c]  group-hover:underline duration-300 cursor-pointer'>S21 Laptop Ultra HD LED Screen Feature 2023 ...</h3>
            <div className='flex items-center gap-2 text-[#fed550] mt-1 mb-6'>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <span className='font-["Montserrat"] font-normal text-base text-[#303030]'>( 100 )</span>
            </div>
            <p className='font-["Poppins"] font-semibold text-[24px]'>$1,199.00</p>

        </div>
    </div>
  )
}

export default ProductLayout