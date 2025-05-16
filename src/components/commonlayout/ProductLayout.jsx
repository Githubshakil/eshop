import React from 'react'
import { IoStar } from "react-icons/io5";

const ProductLayout = () => {
  return (
    <div className=' border border-gray-500 p-6  rounded-2xl'>
        <div>
            <img src="images/productimg.png" alt="productimg" />
        </div>
        <div>
            <p className='font-["Montserrat"] font-normal text-sm leading-5 uppercase  tracking-[5px] mt-[46px] mb-4 text-[#303030]'>LAPTOP</p>
            <h3 className='font-["Poppins"] font-semibold text-5 leading-[30px]'>S21 Laptop Ultra HD LED Screen Feature 2023 ...</h3>
            <div className='flex items-center gap-2 text-[#fed550]'>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <span className='text-[#303030]'>( 100 )</span>
            </div>
            <p>$1,199.00</p>

        </div>
    </div>
  )
}

export default ProductLayout