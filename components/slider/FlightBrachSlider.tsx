"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "../common/SliderNavigation";
import locate from "/public/img/booking/locate.png";
import paris1 from "/public/img/flights/paris1.jpg";
import paris2 from "/public/img/flights/paris2.jpg";
import paris3 from "/public/img/flights/paris3.jpg";
import paris4 from "/public/img/flights/paris4.jpg";
import paris5 from "/public/img/flights/paris5.jpg";
import paris6 from "/public/img/flights/paris6.jpg";

const branchFlightItems = [
  {
    id: 1,
    imgSrc: paris1,
    location: "England",
    tourPackages: "14 Tour Packages",
    href: "/flight-oneway",
  },
  {
    id: 2,
    imgSrc: paris2,
    location: "Canada",
    tourPackages: "14 Tour Packages",
    href: "/flight-oneway",
  },
  {
    id: 3,
    imgSrc: paris3,
    location: "Kasmir",
    tourPackages: "14 Tour Packages",
    href: "/flight-oneway",
  },
  {
    id: 4,
    imgSrc: paris4,
    location: "Switzerland",
    tourPackages: "14 Tour Packages",
    href: "/flight-oneway",
  },
  {
    id: 5,
    imgSrc: paris5,
    location: "New Zealand",
    tourPackages: "14 Tour Packages",
    href: "/flight-oneway",
  },
  {
    id: 6,
    imgSrc: paris6,
    location: "Sydney",
    tourPackages: "14 Tour Packages",
    href: "/flight-oneway",
  },
  {
    id: 7,
    imgSrc: paris3,
    location: "England",
    tourPackages: "14 Tour Packages",
    href: "/flight-oneway",
  },
  {
    id: 8,
    imgSrc: paris5,
    location: "Dubai",
    tourPackages: "14 Tour Packages",
    href: "/flight-oneway",
  },
  {
    id: 9,
    imgSrc: paris1,
    location: "England",
    tourPackages: "14 Tour Packages",
    href: "/flight-oneway",
  },
  {
    id: 10,
    imgSrc: paris2,
    location: "Canada",
    tourPackages: "14 Tour Packages",
    href: "/flight-oneway",
  },
  {
    id: 11,
    imgSrc: paris3,
    location: "Kasmir",
    tourPackages: "14 Tour Packages",
    href: "/flight-oneway",
  },
];

const FlightBrachSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  return (
    <div className="flight__brachslider owl-theme relative owl-carousel">
      <Slider {...settings} ref={sliderRef}>
        {branchFlightItems.map(
          ({ id, imgSrc, location, tourPackages, href }) => (
            <div key={id} className="brach__flight__item">
              <Image src={imgSrc} alt="img" className="img-fluid" />
              <Link href={href} className="flitposition">
                <span className="location">
                  <span className="icon">
                    <Image src={locate} alt="img" />
                  </span>
                  <span className="text">{location}</span>
                </span>
                <span className="pages leftrightb pt__10 mt__20">
                  <span className="text">{tourPackages}</span>
                  <span className="arrow">
                    <i className="material-symbols-outlined">chevron_right</i>
                  </span>
                </span>
              </Link>
            </div>
          )
        )}
      </Slider>

      {/* Slider Navigation */}
      <SliderNavigation sliderRef={sliderRef} arrow="chevron_right" />
    </div>
  );
};

export default FlightBrachSlider;
