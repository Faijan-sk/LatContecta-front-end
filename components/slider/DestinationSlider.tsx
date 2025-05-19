"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "../common/SliderNavigation";

import ps1 from "/public/img/slider/ps1.jpg";
import ps2 from "/public/img/slider/ps2.jpg";
import ps3 from "/public/img/slider/ps3.jpg";
import ps4 from "/public/img/slider/ps4.jpg";

const data = [
  {
    id: 1,
    place: "Hurry up!",
    img: ps1,
  },
  {
    id: 2,
    place: "Thailand",
    img: ps2,
  },
  {
    id: 3,
    place: "United Kingdom",
    img: ps3,
  },
  {
    id: 4,
    place: "Hungary",
    img: ps4,
  },
  {
    id: 5,
    place: "Hurry up!",
    img: ps1,
  },
  {
    id: 6,
    place: "Thailand",
    img: ps2,
  },
];

const DestinationSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    <div className="hurray__booking2 owl-theme owl-carousel">
      <Slider {...settings} ref={sliderRef}>
        {data.map(({ id, place, img }) => (
          <Link key={id} href="/video-tutorial" className="hurray__offer">
            <div className="thumb">
              <Image src={img} alt="img" />
            </div>
            <span className="country__select">
              <span>{place}</span>
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

export default DestinationSlider;
