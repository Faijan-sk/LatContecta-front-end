"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import check from "/public/img/pricing/check.svg";

const hotelPricingData = [
  {
    id: 1,
    packageName: "Basic",
    price: 29.99,
    features: [
      "Food take-way option",
      "Easy to access door",
      "Unlimited drinks",
      "Gym & other equipment",
      "Support 24/7 online",
    ],
  },
  {
    id: 2,
    packageName: "Advanced",
    price: 99.99,
    features: [
      "Food take-way option",
      "Easy to access door",
      "Unlimited drinks",
      "Gym & other equipment",
      "Support 24/7 online",
    ],
  },
  {
    id: 3,
    packageName: "Basic",
    price: 29.99,
    features: [
      "Food take-way option",
      "Easy to access door",
      "Unlimited drinks",
      "Gym & other equipment",
      "Support 24/7 online",
    ],
  },
  {
    id: 4,
    packageName: "Advanced",
    price: 99.99,
    features: [
      "Food take-way option",
      "Easy to access door",
      "Unlimited drinks",
      "Gym & other equipment",
      "Support 24/7 online",
    ],
  },
  {
    id: 5,
    packageName: "Basic",
    price: 29.99,
    features: [
      "Food take-way option",
      "Easy to access door",
      "Unlimited drinks",
      "Gym & other equipment",
      "Support 24/7 online",
    ],
  },
  {
    id: 6,
    packageName: "Advanced",
    price: 99.99,
    features: [
      "Food take-way option",
      "Easy to access door",
      "Unlimited drinks",
      "Gym & other equipment",
      "Support 24/7 online",
    ],
  },
];

const PriceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="hotel__pricing__wrapper owl-theme owl-carousel">
      <Slider {...settings}>
        {hotelPricingData.map(({ id, packageName, price, features }) => (
          <div key={id} className="hotel__price__item">
            <div className="header">
              <h5>{packageName}</h5>
              <h3>
                <span className="dollar">$</span>
                29
                <span className="dollar">{price}</span>
              </h3>
            </div>
            <ul className="pricing__list bordert pt__25">
              {features.map((itm, i) => (
                <li key={i}>
                  <span className="icon">
                    <Image src={check} alt="img" />
                  </span>
                  <span className="text">{itm}</span>
                </li>
              ))}
            </ul>
            <Link href="/signup" className="cmn__btn">
              <span>Make your offer</span>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PriceSlider;
