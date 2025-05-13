import React from 'react'
import Container from '../commonlayout/Container'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const BottomBar = () => {
  return (
    <div className='bg-[#ff624c]'>
      <Container>
        <div className='flex justify-between items-center py-6'>
          <div>
            <ul className='flex items-center gap-[80px] text-white font-["Montserrat"] font-bold text-'>
              <li>
                <Link to={"/product-list"} className='flex items-center gap-4'> <FaBars /> All Categories</Link>
              </li >
              <li>
                <Link to={"/product-list"} className='flex items-center gap-4'>
                Products
                <FaAngleDown />
                </Link>
              </li>  
              <li>
                <Link to={"/blog-page"}>Blog</Link>
              </li>  
              <li>
                <Link to={"/contact-page"}>Contact</Link>
              </li>
            </ul>
          </div>
                
          <div>right</div>
        </div>
      </Container>
    </div>
  )
}

export default BottomBar