"use client";

import Image from "next/image";
import Slider from "react-slick";
import g1 from "/public/img/slider/g1.jpg";
import g2 from "/public/img/slider/g2.jpg";
import g3 from "/public/img/slider/g3.jpg";
import g4 from "/public/img/slider/g4.jpg";
import g5 from "/public/img/slider/g5.jpg";

const galleryImageData = [
  { id: 1, src: g1 },
  { id: 2, src: g2 },
  { id: 3, src: g3 },
  { id: 4, src: g4 },
  { id: 5, src: g5 },
  { id: 6, src: g2 },
  { id: 7, src: g4 },
  { id: 8, src: g4 },
  { id: 9, src: g5 },
  { id: 10, src: g2 },
  { id: 11, src: g4 },
];

const GallerySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    className: "center",
    centerMode: true,
    centerPadding: "190px",
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: "20px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="hotel__gallerywrap owl-theme owl-carousel">
      <Slider {...settings} className="overflow-hidden">
        {galleryImageData.map(({ id, src }) => (
          <div key={id} className="galleryhotel__item">
            <Image src={src} alt="img" className="img-fluid mb-4" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GallerySlider;
