import React from 'react'

const Button = ({text, bg="#ff624c", fontName="Montserrat", fontWeight="bold",size="xl", color="white"}) => {
  return (
    <button className={`bg-[${bg}] font-${fontName} font-${fontWeight} text-${size} text-${color}`}>{text}</button>
  )
}

export default Button