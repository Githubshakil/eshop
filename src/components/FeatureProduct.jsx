import React from 'react'
import ProductLayout from './commonlayout/ProductLayout'
import  Container  from '../components/commonlayout/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";




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
        border: "2px solid #303030",
        color: "#e53e3e",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward size={16} color="#303030" className=' absolute top-[50%] left-[50%] -translate-[50%]'  />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} flex justify-center items-center `}
      style={{ ...style,
        left:"-50px",
        marginLeft: "10px",
        display: "flex",
        background: "#fff",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "2px solid #303030",
        color: "#e53e3e",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        cursor: "pointer",
       }}
      onClick={onClick}
    >
      <IoIosArrowBack size={14} color='#303030 ' className=' absolute top-[50%] left-[50%] -translate-[50%]' />
      </div>
  );
}

const FeatureProduct = ({stock=false}) => {
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2500
  };
  return (
    <Container>
          
            <div className='px-14'>
              <Slider {...settings}>
            
            
              <ProductLayout percentValue="40%" percentTag = {true} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "3" totalRating="(100)" price="1,199.00" border={true} bg="transparent" stock={stock} stockAmount ="50" /> 
            <ProductLayout percentValue="40%" percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "2" totalRating="(10)" price="1,199.00" border={true} bg="transparent" stock={stock} stockAmount ="50"/> 
            <ProductLayout percentValue="40%" percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "3" totalRating="(60)" price="1,199.00" border={true} bg="transparent" stock={stock} stockAmount ="50" /> 
            <ProductLayout percentValue="40%" percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "3" totalRating="(60)" price="1,199.00" border={true} bg="transparent" stock={stock} stockAmount ="50" /> 
            <ProductLayout percentValue="50%" percentTag = {true} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "5" totalRating="(200)" price="1,199.00" border={true} bg="transparent" stock={stock} stockAmount ="50"/> 
            <ProductLayout percentValue="40%" percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "4" totalRating="(160)" price="1,199.00" border={true} bg="transparent" stock={stock} stockAmount ="50" /> 

              
         </Slider>
            </div>
          
        
    </Container>
  )
}

export default FeatureProduct