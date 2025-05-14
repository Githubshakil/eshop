import React from 'react'
import  Container  from '../commonlayout/Container';
import { IoLocationOutline } from 'react-icons/io5'
import { BsTelephone } from 'react-icons/bs'
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FooterBottom = () => {
  return (
    <div className='mt-[100px]'>
      <Container>
        <div className='flex'>
          <div >
              <img src="images/logo.png" alt="logo" />
              <ul className='relative ' >
                <li className='  mt-[158px]'>
                  <BsTelephone  />
                  <div className=' absolute left-[24px] bottom-[54px] flex font-["Montserrat"] text-base text-[#303030] font-normal leading-6 '>
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
                    
                
            
          <div>two</div>
          <div>Three</div>
          <div>four</div>
          <div>five</div>
        </div>
      </Container>
    </div>
  )
}

export default FooterBottom