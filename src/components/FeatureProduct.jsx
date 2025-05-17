import React from 'react'
import ProductLayout from './commonlayout/ProductLayout'
import  Container  from '../components/commonlayout/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
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
          <Slider {...settings}>
            
            <ProductLayout percentValue="40%" percentTag = {true} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "3" totalRating="(100)" price="1,199.00" border={true} bg="transparent" stock={stock} stockAmount ="50" /> 
            <ProductLayout percentValue="40%" percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "2" totalRating="(10)" price="1,199.00" border={true} bg="transparent" stock={stock} stockAmount ="50"/> 
            <ProductLayout percentValue="40%" percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "3" totalRating="(60)" price="1,199.00" border={true} bg="transparent" stock={stock} stockAmount ="50" /> 
            <ProductLayout percentValue="40%" percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "3" totalRating="(60)" price="1,199.00" border={true} bg="transparent" stock={stock} stockAmount ="50" /> 
            <ProductLayout percentValue="50%" percentTag = {true} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "5" totalRating="(200)" price="1,199.00" border={true} bg="transparent" stock={stock} stockAmount ="50"/> 
            <ProductLayout percentValue="40%" percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "4" totalRating="(160)" price="1,199.00" border={true} bg="transparent" stock={stock} stockAmount ="50" /> 
          </Slider>
        
    </Container>
  )
}

export default FeatureProduct