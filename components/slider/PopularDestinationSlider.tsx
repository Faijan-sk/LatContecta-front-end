"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "../common/SliderNavigation";
import dhaka from "/public/img/booking/dhaka.png";
import mumbai from "/public/img/booking/mumbai.png";
import tokyo from "/public/img/booking/tokyo.png";

const countries = [
  { id: "country1", name: "Tokyo", imgSrc: tokyo },
  { id: "country2", name: "Mumbai", imgSrc: mumbai },
  { id: "country3", name: "Dhaka", imgSrc: dhaka },
  { id: "country4", name: "Hungary", imgSrc: mumbai },
  { id: "country5", name: "Thailand", imgSrc: dhaka },
  { id: "country6", name: "Hungary", imgSrc: tokyo },
];

const PopularDestinationSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="hurray__hotel1 owl-theme owl-carousel">
      <Slider {...settings} ref={sliderRef}>
        {countries.map(({ id, name, imgSrc }) => (
          <Link key={id} href="/hotel-list" className="hurray__offer">
            <div className="thumb">
              <Image src={imgSrc} alt="img" />
            </div>
            <span className="country__select">
              <span>{name}</span>
              <span className="icon">
                <i className="material-symbols-outlined">chevron_right</i>
              </span>
            </span>
          </Link>
        ))}
      </Slider>

      {/* Slider Navigation */}
      <SliderNavigation sliderRef={sliderRef} arrow="chevron_right" />
    </div>
  );
};

export default PopularDestinationSlider;
