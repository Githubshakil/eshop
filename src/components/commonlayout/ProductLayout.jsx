import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";

const ProductLayout = ({
  percentTag,
  springBox,
  percentTagRound,
  priceHilight,
  percentValue,
  category,
  title,
  rating,
  totalRating,
  price,
  border,
  stock,
  stockAmount,
  image,
  delPrice,
  text,
  roundIcon=true,
  imageHeight="214px",
  customStyle
}) => {
  let [ratingValue, setRatingValue] = useState(new Array(+rating).fill(rating));
  return (
    <div
      className={`${customStyle} mx-0.5 ml-5 border border-transparent p-6  duration-300  rounded-lg group`}
    >
      <div className=" relative">
        {/* {blankimg &&
                <div className='w-[236px] h-[214px] bg-[#d9d9d9] mt-6 ml-6 mr-[25px] mb-10 '></div>
            } */}
        {(image && (
          <img
            className="w-full"
            src="images/productimg.png"
            alt="productimg"
          />
        )) || <div className="w-full   bg-[#d9d9d9] " style={{height:imageHeight}}></div>}

        {percentTag && (
          <div className=' bg-[#ff624c] py-[8px] px-[20px] absolute -top-2  right-[-9px] rounded-md font-["Montserrat"] font-bold text-base text-white'>
            {percentValue}
          </div>
        )}
        {percentTagRound && (
          <div className='w-[100px] h-[100px] flex items-center justify-center bg-[#ff624c] py-[25px] px-[20px] absolute -top-0  right-0 rounded-[50%] font-["Montserrat"] font-bold text-[24px] text-white'>
            {`${stockAmount}%`}
          </div>
        )}
        {roundIcon &&
        <div className=" w-full flex items-center justify-center  gap-[18px] absolute bottom-[6px] left-[50%] -translate-x-[50%] scale-0 group-hover:scale-100 duration-300">
          <div className="h-[50px] w-[50px] rounded-full bg-white border border-[#ff624c] flex items-center justify-center text-[25px] text-[#ff624c] hover:bg-[#ff624c] hover:text-white duration-300 cursor-pointer">
            <BsCart3 />
          </div>
          <div className="h-[50px] w-[50px] rounded-full bg-white border border-[#ff624c] flex items-center justify-center text-[25px] text-[#ff624c] hover:bg-[#ff624c] hover:text-white duration-300 cursor-pointer">
            <IoIosHeartEmpty />
          </div>
          <div className="h-[50px] w-[50px] rounded-full bg-white border border-[#ff624c] flex items-center justify-center text-[25px] text-[#ff624c] hover:bg-[#ff624c] hover:text-white duration-300 cursor-pointer">
            <IoShareSocialOutline />
          </div>
        </div>
        }
        
      </div>
      <div>
        <p className='font-["Montserrat"] font-normal text-sm leading-5 uppercase  tracking-[5px] mt-[46px] mb-4 text-[#303030]'>
          {category}
        </p>
        <h3 className='font-["Poppins"] font-semibold text-[18px] leading-[30px] group-hover:text-[#ff624c]  group-hover:underline duration-300 cursor-pointer'>
          {title}
        </h3>
        <div className="flex items-center gap-2 text-[#fed550] mt-1 mb-6">
          {ratingValue.map((item, index) => (
            <IoStar key={index} />
          ))}

          <span className='font-["Montserrat"] font-normal text-base text-[#303030]'>
            {totalRating}
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          {(priceHilight && (
            <p className='font-["Poppins"] font-semibold text-[24px] leading-[30px]'>
              ${price}
            </p>
          )) || (
            <p className='font-["Poppins"] font-semibold text-[24px] leading-[30px] text-[#ff624c]'>
              ${price}
            </p>
          )}
          {delPrice && (
            <del className='font-["Montserrat"] text-base font-normal leading-6 text-[#303030]'>
              {delPrice}
            </del>
          )}
        </div>

        {stock && (
          <div className="w-full h-[30px] bg-[rgba(48,48,48,0.25)] rounded-[25px] relative group mt-8">
            <div className={` h-[30px] bg-[rgb(48,48,48)] rounded-[25px] text-center text-white font-["Montserrat"] text-base font-bold leading-6 group-hover:bg-[#ff624c] duration-300 `} style={{width:`${stockAmount}%`}}></div>
            <p className=' w-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-white font-["Montserrat"] text-base font-bold leading-6 '>
              {stockAmount < 80  ? `${stockAmount}% AVAILABLE` : "LIMITED STOCK"}
              
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductLayout;
