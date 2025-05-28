import  { useEffect, useState } from 'react'
import Container from '../commonlayout/Container'
import Button from '../commonlayout/Button'
import ProductLayout from '../commonlayout/ProductLayout'
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'


// slider Arrow function

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
          className={className}
          style={{
            ...style,
            background:"#f4f4f4",
            display: "block",
            color: "#303030",
            fontSize: "20px",
            width: "40px",
            height: "40px",
            border: "1px solid #303030",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          }}
          onClick={onClick}
        >
          <IoIosArrowForward />
        </div>
  )  
}





const SpringSale = () => {
    // Define a stock value or array as needed
    const stock =100; // Example value, adjust as needed
    // timer function
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function  calculateTimeLeft(){
        const saleEndDate = new Date("June 30, 2025 12:00 AM +06").getTime()
        const now = new Date().getTime()
        const difference = saleEndDate - now;

        if(difference < 0) {
            return { Days: 0, hours: 0, minutes: 0, seconds: 0};
        }
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60 )) / (1000 * 60 )),
            seconds: Math.floor((difference % (1000 * 60 ) / 1000))
        }
    }

    useEffect(() => {
        const timer = setInterval(()=>{
            setTimeLeft(calculateTimeLeft())
        },1000)
        return () => clearInterval(timer)
    },[])


    // slider function
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    // autoplay: true,
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
                                <h6 className='font-["Poppins"] text-[28px] lg:text-[35px] font-semibold leading-[38px] lg:leading-[46px] text-[#FF624C]'>{timeLeft.days <= 9 ? `0${timeLeft.days}` : timeLeft.days}</h6>
                                <p className='font-["Montserrat"] text-base font-normal leading-6 text-[#303030]'>Days</p>
                            </div>
                            <span className="text-[#FF624C] text-[28px] lg:text-[36px]">:</span>
                            <div className="flex flex-col items-center">
                                <h6 className='font-["Poppins"] text-[28px] lg:text-[35px] font-semibold leading-[38px] lg:leading-[46px] text-[#FF624C]'>{timeLeft.hours <= 9 ? `0${timeLeft.hours}` : timeLeft.hours}</h6>
                                <p className='font-["Montserrat"] text-base font-normal leading-6 text-[#303030]'>Hours</p>
                            </div>
                            <span className="text-[#FF624C] text-[28px] lg:text-[36px]">:</span>
                            <div className="flex flex-col items-center">
                                <h6 className='font-["Poppins"] text-[28px] lg:text-[35px] font-semibold leading-[38px] lg:leading-[46px] text-[#FF624C]'>{timeLeft.minutes <= 9 ? `0${timeLeft.minutes}` : timeLeft.minutes}</h6>
                                <p className='font-["Montserrat"] text-base font-normal leading-6 text-[#303030]'>Minutes</p>
                            </div>
                            <span className="text-[#FF624C] text-[28px] lg:text-[36px]">:</span>
                            <div className="flex flex-col items-center">
                                <h6 className='font-["Poppins"] text-[28px] lg:text-[35px] font-semibold leading-[38px] lg:leading-[46px] text-[#FF624C]'>{timeLeft.seconds <= 9 ? `0${timeLeft.seconds}` : timeLeft.seconds}</h6>
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
                            <ProductLayout image={true} blankimg={false} percentValue="40%" percentTag={false} percentTagRound={false} category="CAMERA" title="Mini Polaroid Camerafor Girls with Flash Li..." rating="3" totalRating="(60)" price="79.00" border={true} bg="transparent" priceHilight={true}stock={stock} stockAmount="70" />
                            <ProductLayout image={true} blankimg={false} percentValue="50%" percentTag={false} percentTagRound={true} category="TELEVISION" title="AG OLED65CXPUA 4K Smart OLED TV New ..." rating="5" totalRating="(200)" price="2,799.00"delPrice={"$5,200.00"} border={true} bg="transparent" priceHilight={false}stock={stock} stockAmount="50" />
                            <ProductLayout image={true} blankimg={false} percentValue="30%" percentTag={false} percentTagRound={false} category="LAPTOP" title="Ultra Slim Laptop 14 inch 8GB RAM..." rating="4" totalRating="(120)" price="999.00" border={true} bg="transparent" priceHilight={true}stock={stock} stockAmount="30" />
                            <ProductLayout image={true} blankimg={false} percentValue="20%" percentTag={false} percentTagRound={true} category="HEADPHONES" title="Wireless Noise Cancelling Headphones..." rating="4" totalRating="(80)" price="199.00" border={true} delPrice={"$230.00"} bg="transparent"priceHilight={false} stock={stock} stockAmount="40" />
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    </>
)
}

export default SpringSale