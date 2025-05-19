'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import Slider from 'react-slick'
import SliderNavigation from '../common/SliderNavigation'
import aritel from '/public/img/payment/aritel.png'
import paypal from '/public/img/payment/paypal.png'

const PromoSponsorSliderTwo = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <>
      <Slider {...settings} ref={sliderRef}>
        <div className="promo__sponsor__item">
          <div className="promo__box">
            <div className="thumb">
              <Image src={aritel} alt="img" />
            </div>
            <div className="content">
              <span className="fz-16 link">
                Recharge your Airtel number today and get 10% Cashback
                instantly!
              </span>
              <Link href="/order">
                <span>Apply</span>
                <span className="icon">
                  <i className="material-symbols-outlined">east</i>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="promo__sponsor__item">
          <div className="promo__box">
            <div className="thumb">
              <Image src={paypal} alt="img" />
            </div>
            <div className="content">
              <span className="fz-16 link">
                Use code PAPAY50 and get ₹50 off on your next payment.
              </span>
              <Link href="/order">
                <span>Apply</span>
                <span className="icon">
                  <i className="material-symbols-outlined">east</i>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="promo__sponsor__item">
          <div className="promo__box">
            <div className="thumb">
              <Image src={aritel} alt="img" />
            </div>
            <div className="content">
              <span className="fz-16 link">
                Recharge your Airtel number today and get 10% Cashback
                instantly!
              </span>
              <Link href="/order">
                <span>Apply</span>
                <span className="icon">
                  <i className="material-symbols-outlined">east</i>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="promo__sponsor__item">
          <div className="promo__box">
            <div className="thumb">
              <Image src={paypal} alt="img" />
            </div>
            <div className="content">
              <span className="fz-16 link">
                {' '}
                Use code PAPAY50 and get ₹50 off on your next payment.
              </span>
              <Link href="/order">
                <span>Apply</span>
                <span className="icon">
                  <i className="material-symbols-outlined">east</i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Slider>

      {/* Slider Navigation */}
      <SliderNavigation
        sliderRef={sliderRef}
        arrow="keyboard_double_arrow_right"
      />
    </>
  )
}

export default PromoSponsorSliderTwo
