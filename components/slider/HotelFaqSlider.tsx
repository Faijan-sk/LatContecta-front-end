'use client'

import Image from 'next/image'
import { useRef } from 'react'
import Slider from 'react-slick'
import SliderNavigation from '../common/SliderNavigation'

import hqustion1 from '/public/img/slider/hqustion1.jpg'
import hqustion2 from '/public/img/slider/hqustion2.jpg'

const HotelFaqSlider = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div className="hotel__qustionslider owl-theme owl-carousel">
      <Slider {...settings} ref={sliderRef} className="overflow-x-hidden">
        <div className="qustion__item">
          <Image src={hqustion1} alt="img" className="img-fluid" />
        </div>
        <div className="qustion__item">
          <Image src={hqustion2} alt="img" className="img-fluid" />
        </div>
        <div className="qustion__item">
          <Image src={hqustion1} alt="img" className="img-fluid" />
        </div>
        <div className="qustion__item">
          <Image src={hqustion2} alt="img" className="img-fluid" />
        </div>
        <div className="qustion__item">
          <Image src={hqustion1} alt="img" className="img-fluid" />
        </div>
        <div className="qustion__item">
          <Image src={hqustion2} alt="img" className="img-fluid" />
        </div>
        <div className="qustion__item">
          <Image src={hqustion1} alt="img" className="img-fluid" />
        </div>
        <div className="qustion__item">
          <Image src={hqustion2} alt="img" className="img-fluid" />
        </div>
      </Slider>

      {/* Slider Navigation */}
      <SliderNavigation sliderRef={sliderRef} arrow="chevron_right" />
    </div>
  )
}

export default HotelFaqSlider
