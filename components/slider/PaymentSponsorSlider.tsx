'use client'
import Addimg from '@/public/img/banner/addOne.webp'
import Image, { StaticImageData } from 'next/image'
import { useRef } from 'react'
import Slider from 'react-slick'
import SliderNavigation from '../common/SliderNavigation'

interface SliderProps {
  sliderData: {
    id: number
    img: StaticImageData
  }[]
}

const PaymentSponsorSlider = ({ sliderData }: SliderProps) => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: '0px',
  }

  return (
    <div className="payment__sponsor owl-theme owl-carousel">
      <Slider {...settings} ref={sliderRef} className="z-1">
        {sliderData.map((itm) => {
          const { id, img } = itm
          return (
            <div key={id} className="pay__sponsor__item">
              <Image
                style={{
                  width: '100%',
                  height: '47vh',
                }}
                src={Addimg}
                alt="img"
              />
            </div>
          )
        })}
      </Slider>

      {/* Slider Navigation */}
      <SliderNavigation sliderRef={sliderRef} arrow="trending_flat" />
    </div>
  )
}

export default PaymentSponsorSlider
