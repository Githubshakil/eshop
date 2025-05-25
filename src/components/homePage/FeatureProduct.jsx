import React from 'react'
import ProductLayout from '../commonlayout/ProductLayout'
import  Container  from '../commonlayout/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import SubHeading from '../commonlayout/SubHeading';
import SideButton from '../commonlayout/SideButton';




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} grid place-items-center`}
      style={{
        ...style,
        right:"-42px",
        marginLeft: "10px",
        display: "flex",
        background: "#fff",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "1px solid #303030",
        color: "#303030",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward size={16} color="#303030" className=' absolute top-[50%] left-[50%] -translate-[50%]'  />
    </div>
  );
}



const FeatureProduct = ({stock=false}) => {
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    autoplay: true,
    autoplaySpeed: 2500
  };
  return (
    <Container>
            <div className='mt-20 flex items-center justify-between'>
              <SubHeading subText={'Featured Products'} />
              <SideButton sidetext={"View All"} />
            </div>
          
            <div className='px-14 mt-[76px]'>
              <Slider {...settings}>
            
            
            <ProductLayout image={true} blankimg={false} percentValue="40%" percentTag = {true} category = "PHONE" title= "JPhone 13 High Quality Value Buy Best Cam..." rating = "3" totalRating="(100)" price="599.00" delPrice={"$999.00"} border={true} bg="transparent" stock={stock} stockAmount ="50" /> 
            <ProductLayout image={true} blankimg={false} percentValue="40%" percentTag = {false} category = "AUDIO" title= "WH-1000XM4 Wireless Headphones High Qu..." rating = "2" totalRating="(10)" price="59.00" border={true} bg="transparent" stock={stock} stockAmount ="50"/> 
            <ProductLayout image={true} blankimg={false} percentValue="40%" percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "3" totalRating="(60)" price="1,199.00" border={true} bg="transparent" stock={stock} stockAmount ="50" /> 
            <ProductLayout image={true} blankimg={false} percentValue="40%" percentTag = {false} category = "CAMERA" title= "Mini Polaroid Camerafor Girls with Flash Li..." rating = "3" totalRating="(60)" price="79.00" border={true} bg="transparent" stock={stock} stockAmount ="50" /> 
            <ProductLayout image={true} blankimg={false} percentValue="50%" percentTag = {true} category = "TELEVISION" title= "AG OLED65CXPUA 4K Smart OLED TV New ..." rating = "5" totalRating="(200)" price="2,799.00" border={true} bg="transparent" stock={stock} stockAmount ="50"/> 
            <ProductLayout image={true} blankimg={false} percentValue="40%" percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "4" totalRating="(160)" price="1,199.00" border={true} bg="transparent" stock={stock} stockAmount ="50" /> 

              
         </Slider>
            </div>
          
        
    </Container>
  )
}

export default FeatureProduct