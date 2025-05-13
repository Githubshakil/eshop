import React from 'react'

const Button = ({text, bg="#ff624c", fontName="Montserrat", fontWeight="bold",size="xl", color="white", paddingY="4", paddingX="10", radius="10"}) => {
  return (
    <button className={`bg-[${bg}] font-${fontName} font-${fontWeight} text-${size} text-${color} py-${paddingY}px px-${paddingX}px rounded-[${radius}px] cursor-pointer`}>{text}</button>
  )
}

export default Button