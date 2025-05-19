"use client";

import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "../common/SliderNavigation";
import img1 from "/public/img/details/hdetailsbig1.jpg";
import img2 from "/public/img/details/hdetailsbig2.jpg";
import img4 from "/public/img/details/hdetailsbig3.jpg";
import img3 from "/public/img/details/hdetailsbig4.jpg";

const HotelDetailSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0px",
  };

  return (
    <div className="details__bookslider owl-theme owl-carousel">
      <Slider {...settings} ref={sliderRef}>
        <div className="item" data-hash="zero">
          <Image src={img1} alt="img" className="img-fluid" />
        </div>
        <div className="item" data-hash="one">
          <Image src={img2} alt="img" className="img-fluid" />
        </div>
        <div className="item" data-hash="two">
          <Image src={img4} alt="img" className="img-fluid" />
        </div>
        <div className="item" data-hash="three">
          <Image src={img3} alt="img" className="img-fluid" />
        </div>
      </Slider>

      {/* Slider Navigation Here */}
      <SliderNavigation sliderRef={sliderRef} arrow="chevron_right" />
    </div>
  );
};

export default HotelDetailSlider;
