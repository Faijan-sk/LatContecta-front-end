"use client";

import clientsData from "@/data/clientsData";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "../common/SliderNavigation";

const FlightTestimonialSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="flight__client__wrap owl-theme owl-carousel">
      <Slider {...settings} ref={sliderRef}>
        {clientsData.map((client) => {
          const {
            clientImageSrc,
            content,
            designation,
            id,
            imageSrc,
            name,
            rating,
          } = client;
          return (
            <div key={id} className="flight__client__item">
              <div className="header">
                <Image src={imageSrc} alt="img" className="img-fluid" />
                <p>{content}</p>
              </div>
              <div className="lastcommon">
                <Image src={clientImageSrc} alt={name} />
                <ul className="ratting">
                  {rating.map((itm) => (
                    <li key={itm.id}>
                      <Image src={itm.imageSrc} alt="img" />
                    </li>
                  ))}
                </ul>
                <h5>{name}</h5>
                <span className="degisnation">{designation}</span>
              </div>
            </div>
          );
        })}
      </Slider>

      {/* Slider Navigation */}
      <SliderNavigation sliderRef={sliderRef} arrow="chevron_right" />
    </div>
  );
};

export default FlightTestimonialSlider;
