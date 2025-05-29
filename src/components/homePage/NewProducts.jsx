import React, { useState } from "react";
import Container from "../commonlayout/Container";
import SubHeading from "../commonlayout/SubHeading";
import { IoIosArrowDown } from "react-icons/io";
import ProductLayout from "../commonlayout/ProductLayout";
import Button from "../commonlayout/Button";
import ArrowDown from "../../icons/ArrowDown";

const NewProducts = () => {
  
  const [selectedCategory, setSelectedCategory] = useState("all");

  const cetagories = [
    { name: "All Categories", value: "all" },
    { name: "Watch", value: "watch" },
    { name: "Tablet", value: "tablet" },
    { name: "Audio", value: "audio" },
    { name: "Laptop", value: "laptop" },
    { name: "Camera", value: "camera" },
  ];
  return (
    <>
      <Container>
        <div className="flex items-center justify-between mb-12">
          <SubHeading subText={"New Products"} />
          <div className="flex items-center gap-[100px]">
            <div className="flex items-center gap-4">
              <span className='font-["Montserrat"] text-base font-normal leading-6 text-[#303030]'>
                Sort by
              </span>
              <div className="flex items-center relative w-[250px]">
                <select
                className='ml-4 absolute  -top-3 left-0 w-[250px]  text-left cursor-pointer flex  text-[#FF624C] font-["Montserrat"] text-base font-normal leading-6'
                name="cetagories"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                }}
              >
                {cetagories.map((category, index) => (
                  <option
                    className=' text-[#303030] font-["Poppins] hover:text-[#ff624c] bg-white font-semibold transition-all duration-300 cursor-pointer'
                    key={index}
                    value={category.value}
                  >
                    {category.name}
                  </option>
                ))}
              </select>
              {/* <ArrowDown className=" absolute -top-2 right-0  w-[16px] h-[16px]"/> */}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6">
          <ProductLayout
            percentValue="40%"
            percentTag={true}
            category="WATCH"
            title="Orange Watch 12 High Quality Health Sensor..."
            rating="3"
            totalRating="(120)"
            price="959.99"
            priceHilight={false}
            delPrice={"$1,919.99"}
            border={true}
            customStyle={"bg-tranparent hover:border-[#303030]/25"}
            stock={false}
            stockAmount="50"
          />
          <ProductLayout
            percentValue="40%"
            percentTag={false}
            category="TABLET"
            title="Ultra Tablet Qwerty HD 10765 Series Low Pri..."
            rating="2"
            totalRating="(100)"
            price="799.00"
            priceHilight={true}
            border={true}
            customStyle={"bg-tranparent hover:border-[#303030]/25"}
            stock={false}
            stockAmount="50"
          />
          <ProductLayout
            percentValue="40%"
            percentTag={false}
            category="AUDIO"
            title="QuietComfort 45 Wireless Headphone ..."
            rating="3"
            totalRating="(120)"
            price="329.99"
            priceHilight={true}
            border={true}
            customStyle={"bg-tranparent hover:border-[#303030]/25"}
            stock={false}
            stockAmount="50"
          />
          <ProductLayout
            percentValue="40%"
            percentTag={false}
            category="LAPTOP"
            title="Surface Laptop 4 XPS 13 Plus 64GB i7 Touch ..."
            rating="3"
            totalRating="(120)"
            price="2,399.99"
            priceHilight={false}
            delPrice={"$2,878.00"}
            border={false}
            customStyle={"bg-tranparent hover:border-[#303030]/25"}
            stock={false}
            stockAmount="50"
          />
          <ProductLayout
            percentValue="50%"
            percentTag={true}
            category="CAMERA"
            title="CamPro HERO10 Black Sleek Design 2023 4K ..."
            rating="5"
            totalRating="(20)"
            price="1,499.99"
            priceHilight={true}
            border={true}
            customStyle={"bg-tranparent hover:border-[#303030]/25"}
            stock={false}
            stockAmount="50"
          />
        </div>
        <div className="text-center mt-[64px]">
          <Button
            text={"Load More"}
            border="1px solid"
            color="#ff624c"
            bg="none"
          />
        </div>
      </Container>
    </>
  );
};

export default NewProducts;
