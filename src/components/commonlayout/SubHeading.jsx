import React from "react";

const SubHeading = ({ subText }) => {
  return (
    <>
      <h4 className='font-["Poppins"] text-[#303030]  text-[36px] font-semibold leading-[46px] '>
        {subText}
      </h4>
    </>
  );
};

export default SubHeading;
