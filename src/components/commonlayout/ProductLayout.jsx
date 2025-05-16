import React from 'react'
import { IoStar } from "react-icons/io5";

const ProductLayout = () => {
  return (
    <div className=' border border-gray-500 p-6 bg-gray-700'>
        <div>
            <img src="images/productimg.png" alt="productimg" />
        </div>
        <div>
            <p>LAPTOP</p>
            <h3>S21 Laptop Ultra HD LED Screen Feature 2023 ...</h3>
            <div className='flex items-center gap-2 text-yellow-500'>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <span>( 100 )</span>
            </div>
            <p>$1,199.00</p>

        </div>
    </div>
  )
}

export default ProductLayout