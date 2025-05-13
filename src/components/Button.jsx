import React from 'react'

const Button = ({text, bg="#ff624c", fontName="Montserrat", fontWeight="bold",size="xl", color="white", paddingY="16", paddingX="40", radius="10"}) => {
  return (
    <button 
      style={{
        backgroundColor: bg,
        fontFamily: fontName,
        fontWeight: fontWeight,
        fontSize: size,
        color: color,
        padding: `${paddingY}px ${paddingX}px`,
        borderRadius: `${radius}px`,
        cursor: "pointer"
      }}
    >
      {text}
    </button>
  )
}

export default Button