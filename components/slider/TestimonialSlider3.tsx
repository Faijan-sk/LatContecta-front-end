"use client";

import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "../common/SliderNavigation";
import alena from "/public/img/testimonial/alena.png";
import brad from "/public/img/testimonial/brad.png";
import jenlia from "/public/img/testimonial/jenlia.png";
import star from "/public/img/testimonial/star.png";

const TestimonialSlider3 = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
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
    <>
      <Slider {...settings} ref={sliderRef}>
        <div className="testimonial__item">
          <div className="star__wrap pb__20 d-flex align-items-center gap-2 justify-content-center">
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
          </div>
          <p className="fz-18 fw-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form...
          </p>
          <div className="client">
            <div className="thumb">
              <Image src={jenlia} alt="img" />
            </div>
            <div className="content">
              <h6 className="name">Jenelia d&#39;suza</h6>
              <span className="desination">Student</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="star__wrap pb__20 d-flex align-items-center gap-2 justify-content-center">
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
          </div>
          <p className="fz-18 fw-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form...
          </p>
          <div className="client">
            <div className="thumb">
              <Image src={alena} alt="img" />
            </div>
            <div className="content">
              <h6 className="name">Alena Hecals</h6>
              <span className="desination">Doctor</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="star__wrap pb__20 d-flex align-items-center gap-2 justify-content-center">
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
          </div>
          <p className="fz-18 fw-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form...
          </p>
          <div className="client">
            <div className="thumb">
              <Image src={brad} alt="img" />
            </div>
            <div className="content">
              <h6 className="name">Brad Hogds</h6>
              <span className="desination">Enginner</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="star__wrap pb__20 d-flex align-items-center gap-2 justify-content-center">
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
          </div>
          <p className="fz-18 fw-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form...
          </p>
          <div className="client">
            <div className="thumb">
              <Image src={jenlia} alt="img" />
            </div>
            <div className="content">
              <h6 className="name">Jenelia d&#39;suza</h6>
              <span className="desination">Student</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="star__wrap pb__20 d-flex align-items-center gap-2 justify-content-center">
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
            <span>
              <Image src={star} alt="icon" />
            </span>
          </div>
          <p className="fz-18 fw-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form...
          </p>
          <div className="client">
            <div className="thumb">
              <Image src={alena} alt="img" />
            </div>
            <div className="content">
              <h6 className="name">Alena Hecals</h6>
              <span className="desination">Doctor</span>
            </div>
          </div>
        </div>
      </Slider>
      {/* Slider Navigation */}
      <SliderNavigation sliderRef={sliderRef} arrow="chevron_right" />
    </>
  );
};

export default TestimonialSlider3;
