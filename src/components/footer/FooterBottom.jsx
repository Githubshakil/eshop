import React from 'react'
import  Container  from '../commonlayout/Container';
import { IoLocationOutline } from 'react-icons/io5'
import { BsTelephone } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const FooterBottom = () => {
  return (
    <div className='mt-[100px]'>
      <Container>
        <div className='flex'>
          <div >
              <img src="images/logo.png" alt="logo" />
              <ul >
                <li className='relative left-8 mt-[158px]'>
                  <Link to="tel: +1 (555) 123-4567" >
                    <BsTelephone className=' absolute top-[20%] -left-8 ' />
                    +1 (555) 123-4567
                  </Link>
                </li>
                <li>
                    <Link to="mailto: information@eshop.com " >
                    <BsTelephone className=' absolute top-[20%] -left-8 ' />
                    +1 (555) 123-4567
                </li>
                <li className='relative left-8 mt-3'>
                  <Link to="https://maps.app.goo.gl/gZ7SG15p6xTnDNrT8" target='_blank' className='flex items-center gap-2'>
                     <IoLocationOutline className=' absolute top-[20%] -left-8 '/>
                    123 Main Street, Anytown USA
                  </Link>
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