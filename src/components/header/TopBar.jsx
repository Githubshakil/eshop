import React from "react";
import Container from "../commonlayout/Container";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import TopLeftBar from "./topbarComponents/TopLeftBar";
import TopRightBar from "./topbarComponents/TopRightBar";

const TopBar = () => {
  return (
    <div className="border-b border-[rgba(48,48,48,0.25)]  border-solid py-[22px]  ">
      <Container>
        <div className='flex items-center justify-between font-["Montserrat"] font-normal text-[14px] '>
          <TopLeftBar />
          <TopRightBar />
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
