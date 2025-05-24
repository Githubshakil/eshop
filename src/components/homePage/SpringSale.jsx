import React from 'react'
import Container from '../commonlayout/Container'
import Button from '../commonlayout/Button'
import ProductLayout from '../commonlayout/ProductLayout'
import Slider from 'react-slick'
import { IoIosArrowForward } from 'react-icons/io'




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

const SpringSale = () => {
    // Define a stock value or array as needed
    const stock =100; // Example value, adjust as needed

    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    autoplay: true,
    autoplaySpeed: 2500,
   
  };
    
return (
    <>
        <div className="w-full min-h-[829px] bg-[#f4f4f4] mt-[80px]">
            <Container>
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* left side */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start">
                        <div className="pt-[100px] lg:pt-[235px] mb-[40px]">
                            <h4 className='font-["Poppins"] text-[36px] lg:text-[56px] font-bold leading-tight lg:leading-[68px]'>
                                Spring Sale
                            </h4>
                        </div>
                        <div className="w-full max-w-[400px] flex justify-between items-baseline">
                            <div className="flex flex-col items-center">
                                <h6 className='font-["Poppins"] text-[28px] lg:text-[35px] font-semibold leading-[38px] lg:leading-[46px] text-[#FF624C]'>00</h6>
                                <p className='font-["Montserrat"] text-base font-normal leading-6 text-[#303030]'>Days</p>
                            </div>
                            <span className="text-[#FF624C] text-[28px] lg:text-[36px]">:</span>
                            <div className="flex flex-col items-center">
                                <h6 className='font-["Poppins"] text-[28px] lg:text-[35px] font-semibold leading-[38px] lg:leading-[46px] text-[#FF624C]'>40</h6>
                                <p className='font-["Montserrat"] text-base font-normal leading-6 text-[#303030]'>Minutes</p>
                            </div>
                            <span className="text-[#FF624C] text-[28px] lg:text-[36px]">:</span>
                            <div className="flex flex-col items-center">
                                <h6 className='font-["Poppins"] text-[28px] lg:text-[35px] font-semibold leading-[38px] lg:leading-[46px] text-[#FF624C]'>12</h6>
                                <p className='font-["Montserrat"] text-base font-normal leading-6 text-[#303030]'>Seconds</p>
                            </div>
                        </div>
                        <div className="mt-[40px] lg:mt-[72px] mb-[40px] lg:mb-[90px]">
                            <Button text={"Shop Now"} />
                        </div>
                        <div>
                            <img src="images/dots.png" alt="" />
                        </div>
                    </div>
                    {/* right side */}
                    <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex flex-col">
                        <Slider {...settings}>
                            <ProductLayout image={true} blankimg={false} percentValue="40%" percentTag={false} percentTagRound={false} category="CAMERA" title="Mini Polaroid Camerafor Girls with Flash Li..." rating="3" totalRating="(60)" price="79.00" border={true} bg="transparent" stock={stock} stockAmount="70" />
                            <ProductLayout image={true} blankimg={false} percentValue="50%" percentTag={false} percentTagRound={true} category="TELEVISION" title="AG OLED65CXPUA 4K Smart OLED TV New ..." rating="5" totalRating="(200)" price="2,799.00" border={true} bg="transparent" stock={stock} stockAmount="50" />
                            <ProductLayout image={true} blankimg={false} percentValue="30%" percentTag={false} percentTagRound={false} category="LAPTOP" title="Ultra Slim Laptop 14 inch 8GB RAM..." rating="4" totalRating="(120)" price="999.00" border={true} bg="transparent" stock={stock} stockAmount="30" />
                            <ProductLayout image={true} blankimg={false} percentValue="20%" percentTag={false} percentTagRound={true} category="HEADPHONES" title="Wireless Noise Cancelling Headphones..." rating="4" totalRating="(80)" price="199.00" border={true} bg="transparent" stock={stock} stockAmount="40" />
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    </>
)
}

export default SpringSale