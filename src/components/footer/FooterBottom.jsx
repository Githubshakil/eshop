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
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Products List</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Order Tracking</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Products Guide</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Shopping Cart</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Tech Blog</Link></li>
            </ul>
          </div>


          <div className='ml-[96px]'>
            <h4 className='font-["Poppins"] font-semibold text-xl text-[#303030]'>Supports</h4>
            <ul className='font-["Montserrat"] text-[#303030] text-base font-normal leading-6'>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>About Us</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Privacy Policy</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Return Policy</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Help Centre</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Store Locations</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Careers</Link></li>
              </ul>
          </div>


          <div className='ml-[96px]'>
            <h4 className='font-["Poppins"] font-semibold text-xl text-[#303030]'>Categories</h4>
            <ul className='font-["Montserrat"] text-[#303030] text-base font-normal leading-6'>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Computers & Tablets</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Mobile Phones & Accessories</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>TV & Home Theater</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Audio & Headphones</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Cameras & Camcorders</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Gaming Equipment</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Home Appliances</Link></li>
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
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Twitter</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Instagram</Link></li>
              <li className='mt-3 hover:text-[#ff624c] duration-300'><Link to={"#"}>Facebook</Link></li>
             
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
            <h5 className='font-["Montserrat"] font-normal text-[14px] leading-5 text-[#303030] hover:text-[#ff624c] duration-300 '><Link to={"#"}>Privacy Policy</Link></h5>
            <h5 className='font-["Montserrat"] font-normal text-[14px] leading-5 text-[#303030] relative after:content-[""] after:bg-[#bfbfbf] after:absolute after:w-[1px] after:h-[16px] after:left-[-10px] after:top-[55%] after:-translate-[50%] before:content-[""] before:bg-[#bfbfbf] before:absolute before:w-[1px] before:h-[16px] before:right-[-10px] before:top-[55%] before:-translate-[50%] hover:text-[#ff624c] duration-300'><Link to={"#"}>Terms & Condition</Link></h5>
            <h5 className='font-["Montserrat"] font-normal text-[14px] leading-5 text-[#303030] hover:text-[#ff624c] duration-300'><Link to={"#"}>Sitemap</Link></h5>
          </div>
        </div>

      </Container>
    </div>
  )
}

export default FooterBottom