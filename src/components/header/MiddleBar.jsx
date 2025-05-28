import React from "react";
import Container from "../commonlayout/Container";
import { IoMdSearch } from "react-icons/io";
import CartIcon from "../../icons/cartIcon";
import UserIcon from "../../icons/UserIcon";
import SearchIcon from "../../icons/SearchIcon";

const MiddleBar = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-8">
        <div className="flex items-center cursor-pointer">
          <img src="images/logo.png" alt="logo" />
        </div>

        <div className="flex items-center">
          <div className="relative flex items-center mr-[48px]">
            <input
              className="relative w-[332px] border border-[rgba(48,48,48,0.35)] py-[18px] px-6 rounded-[10px] text-sm font-['Montserrat'] leading-6 text-[#303030] placeholder:text-[#303030] focus:outline-none focus:border-[#ff624c] transition-colors duration-200"
              type="text"
              placeholder="Search Products ..."
            />
            <SearchIcon className=" absolute " />
          </div>

          <div className='flex items-center  relative pl-[50px] before:content-[""] before:bg-[#bfbfbf] before:absolute before:w-[1px] before:h-[32px] before:right-[-40px] before:top-[50%] before:-translate-[50%]'>
            <div className="absolute  left-0 cursor-pointer hover:text-[#ff624c] transition-transform duration-200">
              <CartIcon />
            </div>
            <div className="flex flex-col items-start cursor-pointer">
              <p className='font-["Montserrat"] text-base font-normal leading-6'>
              Cart
            </p>
            <span className='font-["Montserrat"] font-bold text-base leading-5'>
              $ 150,00
            </span>
            </div>
          </div>

          <div className="relative pl-[50px] ml-[89px] flex items-center">
            <div className="absolute  left-0 cursor-pointer  hover:text-[#ff624c] transition-transform duration-200 ">
              <UserIcon />
            </div>
           <div className="flex flex-col items-start cursor-pointer">
             <p className='font-["Montserrat"] text-base font-normal leading-6'>
              User
            </p>
            <span className='font-["Montserrat"] font-bold text-base leading-5'>
              Account
            </span>
           </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MiddleBar;
