import React from 'react'
import  Container  from '../commonlayout/Container';
import { IoLocationOutline } from 'react-icons/io5'
import { BsTelephone } from 'react-icons/bs'
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import VisaIcon from '../../icons/VisaIcon';
import MasterCardIcon from '../../icons/MasterCardIcon';
import PayIcon from '../../icons/PayIcon';
import PaypalIcon from '../../icons/PaypalIcon';


const FooterBottom = () => {
  return (
    <div className='mt-[100px]  pb-[100px]'>
      <Container>
        <div className='flex border-b border-solid border-[rgba(48,48,48,0.25)]  '>
          <div className='mb-[80px]' >
              <img src="images/logo.png" alt="logo" />
              <ul className='relative ' >
                <li className='  mt-[158px]'>
                  <BsTelephone  />
                  <div className=' absolute left-[24px] bottom-[54px] -mr-[200px] flex font-["Montserrat"] text-base text-[#303030] font-normal leading-6 '>
                    <Link to="tel: +1 (555) 123-4567"  >
                    +1 (555) 123-4567
                  </Link>
                  </div>
                </li>

                <li className='  mt-3'>
                  <FaEnvelope />
                  <div className=' absolute left-[26px]  top-[22px] flex font-["Montserrat"] text-base text-[#303030] font-normal leading-6  '>
                    <Link to="mailto: information@eshop.com"  >
                    information@eshop.com
                  </Link>
                  </div>
                </li>
                <li className='  mt-3'>
                  <IoLocationOutline  />
                  <div className=' absolute left-6 top-[50px] -mr-[220px] font-["Montserrat"] text-base text-[#303030] font-normal leading-6 '>
                    <Link to="https://maps.app.goo.gl/gZ7SG15p6xTnDNrT8" target='_blank' >
                    123 Main Street, Suite 105, Anytown USA
                  </Link>
                  </div>
                </li>
              </ul>
          </div>
                    
                
            
          <div className='ml-[387px]'>
            <h4 className='font-["Poppins"] font-semibold text-xl text-[#303030]'>Links</h4>
            <ul className='font-["Montserrat"] text-[#303030] text-base font-normal leading-6'>
              <li className='mt-3'>Products List</li>
              <li className='mt-3'>Order Tracking</li>
              <li className='mt-3'>Products Guide</li>
              <li className='mt-3'>Shopping Cart</li>
              <li className='mt-3'>Tech Blog</li>
            </ul>
          </div>


          <div className='ml-[96px]'>
            <h4 className='font-["Poppins"] font-semibold text-xl text-[#303030]'>Supports</h4>
            <ul className='font-["Montserrat"] text-[#303030] text-base font-normal leading-6'>
              <li className='mt-3'>About Us</li>
              <li className='mt-3'>Privacy Policy</li>
              <li className='mt-3'>Return Policy</li>
              <li className='mt-3'>Help Centre</li>
              <li className='mt-3'>Store Locations</li>
              <li className='mt-3'>Careers</li>
              </ul>
          </div>


          <div className='ml-[96px]'>
            <h4 className='font-["Poppins"] font-semibold text-xl text-[#303030]'>Categories</h4>
            <ul className='font-["Montserrat"] text-[#303030] text-base font-normal leading-6'>
              <li className='mt-3'>Computers & Tablets</li>
              <li className='mt-3'>Mobile Phones & Accessories</li>
              <li className='mt-3'>TV & Home Theater</li>
              <li className='mt-3'>Audio & Headphones</li>
              <li className='mt-3'>Cameras & Camcorders</li>
              <li className='mt-3'>Gaming Equipment</li>
              <li className='mt-3'>Home Appliances</li>
              </ul>
          </div>


          <div className='ml-[80px]'>
            <h4 className='font-["Poppins"] font-semibold text-xl text-[#303030]'>Payments</h4>
              <div className='mt-[25px] flex gap-8' >
                <VisaIcon  />
                <MasterCardIcon />
                <PayIcon />
                <PaypalIcon />
              </div>

            <div className='mt-[73px]'>
            <h4 className='font-["Poppins"] font-semibold text-xl text-[#303030]'>Follow Us</h4>
            <ul className='font-["Montserrat"] text-[#303030] text-base font-normal leading-6'>
              <li className='mt-3'>Twitter</li>
              <li className='mt-3'>Instagram</li>
              <li className='mt-3'>Facebook</li>
             
              </ul>
          </div>


          </div>
        </div>
        <div className=''></div>

        <div className='flex justify-between'>
          <div>
            <span className='font-["Montserrat"] text-[14px] text-[#303030] leading-5 font-normal'>Copyright © 2023 E-Shop. All Rights Reserved.</span>
          </div>

          <div className='flex gap-5 items-center'>
            <h5>Privacy Policy</h5>
            <h5 className='relative after:content-[""] after:bg-[#bfbfbf] after:absolute after:w-[1px] after:h-[16px] after:left-[-10px] after:top-[55%] after:-translate-[50%] before:content-[""] before:bg-[#bfbfbf] before:absolute before:w-[1px] before:h-[16px] before:right-[-10px] before:top-[55%] before:-translate-[50%]'>Terms & Condition</h5>
            <h5>Sitemap</h5>
          </div>
        </div>

      </Container>
    </div>
  )
}

export default FooterBottom