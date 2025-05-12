import React from "react";
import Container from "../commonlayout/Container";
import { IoMdSearch } from "react-icons/io";
import CartIcon from "../../icons/cartIcon";
import UserIcon from "../../icons/UserIcon";

const MiddleBar = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-8">
        <div>
          <img src="images/logo.png" alt="logo" />
        </div>

        <div className="flex items-center">
          <div className="relative flex items-center mr-[48px]">
            <input
              className="w-[332px] border border-[rgba(48,48,48,0.35)] py-[18px] px-6 rounded-[10px]"
              type="text"
              placeholder="Search Products ..."
            />
            <IoMdSearch className="text-3xl absolute top-1/2 right-6 -translate-y-1/2" />
          </div>

          <div className='flex items-center  relative pl-[50px] before:content-[""] before:bg-[#bfbfbf] before:absolute before:w-[1px] before:h-[32px] before:right-[-40px] before:top-[50%] before:-translate-[50%]'>
            <div className="absolute top-[5px] left-0">
              <CartIcon />
            </div>
            <div>
              <p className='font-["Montserrat"] text-base font-normal leading-6'>
              Cart
            </p>
            <span className='font-["Montserrat"] font-bold text-sm leading-5'>
              $ 150,00
            </span>
            </div>
          </div>

          <div className="relative pl-[50px] ml-[89px] flex items-center">
            <div className="absolute top-[5px] left-0">
              <UserIcon />
            </div>
           <div>
             <p className='font-["Montserrat"] text-base font-normal leading-6'>
              User
            </p>
            <span className='font-["Montserrat"] font-bold text-sm leading-5'>
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
