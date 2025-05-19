"use client";

import Image from "next/image";
import Slider from "react-slick";
import s1 from "/public/img/sponsor/s1.png";
import s2 from "/public/img/sponsor/s2.png";
import s3 from "/public/img/sponsor/s3.png";
import s4 from "/public/img/sponsor/s4.png";
import s5 from "/public/img/sponsor/s5.png";
import s6 from "/public/img/sponsor/s6.png";
import s7 from "/public/img/sponsor/s7.png";

const data = [
  { id: 1, img: s1 },
  { id: 2, img: s2 },
  { id: 3, img: s3 },
  { id: 4, img: s4 },
  { id: 5, img: s5 },
  { id: 6, img: s6 },
  { id: 7, img: s7 },
  { id: 8, img: s2 },
  { id: 9, img: s3 },
  { id: 10, img: s4 },
  { id: 11, img: s5 },
];

const SponsorSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 900,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  return (
    <div className="logo__sponsor owl-theme owl-carousel">
      <Slider {...settings}>
        {data.map(({ id, img }) => (
          <div key={id} className="item">
            <Image src={img} alt="img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SponsorSlider;
