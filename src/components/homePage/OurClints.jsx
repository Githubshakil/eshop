import React from 'react'
import Slider from 'react-slick'
import Samsung from '../../icons/Samsung'
import OpenAi from '../../icons/OpenAi'
import Amazon from '../../icons/Amazon'
import Tencent from '../../icons/Tencent'
import Spotify from '../../icons/Spotify'
import Container from '../commonlayout/Container'

const OurClints = () => {
    var settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 200
  };
  return (
    <>
    
       
            <Container>
                <div className='mb-[103px] '>
                 <Slider {...settings} >
                <div>
                    <Samsung/>
                </div>
                <div>
                    <OpenAi/>
                </div>
                <div>
                    <Amazon/>
                </div>
                <div>
                    <Tencent/>
                </div>
                <div>
                    <Spotify/>
                </div>
              </Slider>
            </div>
            </Container>
       
    
    </>
  )
}

export default OurClints