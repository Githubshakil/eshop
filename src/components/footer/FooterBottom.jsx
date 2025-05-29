import React from "react";
import Container from "../commonlayout/Container";
import { Link } from "react-router-dom";
import VisaIcon from "../../icons/VisaIcon";
import MasterCardIcon from "../../icons/MasterCardIcon";
import PayIcon from "../../icons/PayIcon";
import PaypalIcon from "../../icons/PaypalIcon";
import PhoneFooter from "../../icons/PhoneFooter";
import EmailFooter from "../../icons/EmailFooter";
import LocationFooter from "../../icons/LocationFooter";

const FooterBottom = () => {
  return (
    <div className="mt-[100px]  pb-[100px]">
      <Container>
        <div className="flex border-b border-solid border-[rgba(48,48,48,0.25)]  ">
          <div className="mb-[80px]">
            <img src="images/logo.png" alt="logo" />
            <ul className="relative ">
              <li className="  mt-[158px] flex items-center gap-3 group">
                <div className="flex items-center gap-3 group-hover:scale-120 transition-all duration-300 cursor-pointer group-hover:text-[#ff624c]">
                  <PhoneFooter />
                </div>
                <Link
                  to="tel: +1 (555) 123-4567"
                  className="text-[#303030] font-['Montserrat'] text-base font-normal leading-6 group-hover:text-[#ff624c] transition-all duration-300"
                >
                  +1 (555) 123-4567
                </Link>
              </li>

              <li className="  mt-4 flex items-center gap-3 group">
                <div className="flex items-center gap-3 group-hover:scale-120 transition-all duration-300 cursor-pointer group-hover:text-[#ff624c]">
                  <EmailFooter />
                </div>
                <Link
                  to="mailto: information@eshop.com"
                  className="text-[#303030] font-['Montserrat'] text-base font-normal leading-6 group-hover:text-[#ff624c] transition-all duration-300"
                >
                  information@eshop.com
                </Link>
              </li>
              <li className="  mt-4 flex items-center gap-3 group">
                <div className="flex items-center gap-3 group-hover:scale-120 transition-all duration-300 cursor-pointer group-hover:text-[#ff624c]">
                  <LocationFooter />
                </div>
                <Link
                  to="https://maps.app.goo.gl/gZ7SG15p6xTnDNrT8"
                  target="_blank"
                  className="  text-[#303030]  font-['Montserrat'] text-base font-normal leading-6 hover:text-[#ff624c] transition-all duration-300"
                >
                  123 Main Street, Suite 105, Anytown USA
                </Link>
              </li>
            </ul>
          </div>

          <div className="ml-[167px]">
            <h4 className='font-["Poppins"] font-semibold text-xl text-[#303030]'>
              Links
            </h4>
            <ul className='font-["Montserrat"] text-[#303030] text-base font-normal leading-6'>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Products List</Link>
              </li>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Order Tracking</Link>
              </li>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Products Guide</Link>
              </li>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Shopping Cart</Link>
              </li>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Tech Blog</Link>
              </li>
            </ul>
          </div>

          <div className="ml-[96px]">
            <h4 className='font-["Poppins"] font-semibold text-xl text-[#303030]'>
              Supports
            </h4>
            <ul className='font-["Montserrat"] text-[#303030] text-base font-normal leading-6'>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>About Us</Link>
              </li>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Privacy Policy</Link>
              </li>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Return Policy</Link>
              </li>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Help Centre</Link>
              </li>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Store Locations</Link>
              </li>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Careers</Link>
              </li>
            </ul>
          </div>

          <div className="ml-[96px]">
            <h4 className='font-["Poppins"] font-semibold text-xl text-[#303030]'>
              Categories
            </h4>
            <ul className='font-["Montserrat"] text-[#303030] text-base font-normal leading-6'>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Computers & Tablets</Link>
              </li>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Mobile Phones & Accessories</Link>
              </li>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>TV & Home Theater</Link>
              </li>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Audio & Headphones</Link>
              </li>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Cameras & Camcorders</Link>
              </li>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Gaming Equipment</Link>
              </li>
              <li className="mt-3 hover:text-[#ff624c] duration-300">
                <Link to={"#"}>Home Appliances</Link>
              </li>
            </ul>
          </div>

          <div className="ml-[80px]">
            <h4 className='font-["Poppins"] font-semibold text-xl text-[#303030]'>
              Payments
            </h4>
            <div className="mt-[25px] flex gap-8">
              <VisaIcon />
              <MasterCardIcon />
              <PayIcon />
              <PaypalIcon />
            </div>

            <div className="mt-[73px]">
              <h4 className='font-["Poppins"] font-semibold text-xl text-[#303030]'>
                Follow Us
              </h4>
              <ul className='font-["Montserrat"] text-[#303030] text-base font-normal leading-6'>
                <li className="mt-3 hover:text-[#ff624c] duration-300">
                  <Link to={"#"}>Twitter</Link>
                </li>
                <li className="mt-3 hover:text-[#ff624c] duration-300">
                  <Link to={"#"}>Instagram</Link>
                </li>
                <li className="mt-3 hover:text-[#ff624c] duration-300">
                  <Link to={"#"}>Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=""></div>

        <div className="flex justify-between mt-2">
          <div>
            <span className='font-["Montserrat"] text-sm text-[rgba(48,48,48,0.75)] leading-5 font-normal'>
              Copyright © 2023 E-Shop. All Rights Reserved.
            </span>
          </div>

          <div className="flex gap-5 items-center">
            <h5 className='font-["Montserrat"] font-normal text-[14px] leading-5 text-[rgba(48,48,48,0.75)] hover:text-[#ff624c] duration-300 '>
              <Link to={"#"}>Privacy Policy</Link>
            </h5>
            <h5 className='font-["Montserrat"] font-normal text-[14px] leading-5 text-[rgba(48,48,48,0.75)] relative after:content-[""] after:bg-[#bfbfbf] after:absolute after:w-[1px] after:h-[16px] after:left-[-10px] after:top-[55%] after:-translate-[50%] before:content-[""] before:bg-[#bfbfbf] before:absolute before:w-[1px] before:h-[16px] before:right-[-10px] before:top-[55%] before:-translate-[50%] hover:text-[#ff624c] duration-300'>
              <Link to={"#"}>Terms & Condition</Link>
            </h5>
            <h5 className='font-["Montserrat"] font-normal text-[14px] leading-5 text-[rgba(48,48,48,0.75)] hover:text-[#ff624c] duration-300'>
              <Link to={"#"}>Sitemap</Link>
            </h5>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterBottom;
