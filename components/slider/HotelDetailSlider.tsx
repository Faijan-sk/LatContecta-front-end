'use client'

import Image from 'next/image'
import { useRef } from 'react'
import Slider from 'react-slick'
import SliderNavigation from '../common/SliderNavigation'
import img1 from '@/public/img/phone/one__1_-removebg-preview.png'
import img2 from '@/public/img/phone/three__2___1_-removebg-preview.png'
import img4 from '@/public/img/phone/two__2___1_-removebg-preview.png'
import img3 from '@/public/img/phone/two.png'

const HotelDetailSlider = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="details__bookslider owl-theme owl-carousel w-full max-w-full mx-auto px-4">
      {/* Responsive container */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
        <Slider {...settings} ref={sliderRef}>
          {[img1, img2, img4, img3].map((image, index) => (
            <div key={index} className="item">
              <div className="flex justify-center items-center w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  width={300}
                  height={400}
                  className="w-auto h-full max-w-full max-h-full object-contain"
                  style={{
                    objectFit: 'contain',
                  }}
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* Slider Navigation */}
        <SliderNavigation sliderRef={sliderRef} arrow="chevron_right" />
      </div>
    </div>
  )
}

export default HotelDetailSlider
