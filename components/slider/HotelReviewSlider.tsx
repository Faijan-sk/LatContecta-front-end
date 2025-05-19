"use client";

import Image from "next/image";
import Slider from "react-slick";
import kriri from "/public/img/room/kriri.png";
import jenlia from "/public/img/testimonial/jenlia.png";
import quote from "/public/img/testimonial/quote.png";

const testimonials = [
  {
    id: "testimonial1",
    imageSrc: quote,
    said: "You said about us",
    moment: "Unique moments",
    description:
      "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
    client: {
      thumbSrc: jenlia,
      name: "Jenelia D’suza",
      designation: "Student",
    },
  },
  {
    id: "testimonial2",
    imageSrc: quote,
    said: "You said about us",
    moment: "Amazing Hotel",
    description:
      "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
    client: {
      thumbSrc: kriri,
      name: "Kriri Lara",
      designation: "Doctor",
    },
  },
  {
    id: "testimonial3",
    imageSrc: quote,
    said: "You said about us",
    moment: "Unique moments",
    description:
      "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
    client: {
      thumbSrc: jenlia,
      name: "Jenelia D’suza",
      designation: "Student",
    },
  },
  {
    id: "testimonial4",
    imageSrc: quote,
    said: "You said about us",
    moment: "Amazing Hotel",
    description:
      "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
    client: {
      thumbSrc: kriri,
      name: "Kriri Lara",
      designation: "Doctor",
    },
  },
  {
    id: "testimonial5",
    imageSrc: quote,
    said: "You said about us",
    moment: "Unique moments",
    description:
      "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
    client: {
      thumbSrc: jenlia,
      name: "Jenelia D’suza",
      designation: "Student",
    },
  },
  {
    id: "testimonial6",
    imageSrc: quote,
    said: "You said about us",
    moment: "Amazing Hotel",
    description:
      "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
    client: {
      thumbSrc: kriri,
      name: "Kriri Lara",
      designation: "Doctor",
    },
  },
];

const HotelReviewSlider = () => {
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
    <div className="testimoial__wrap__swimming owl-theme owl-carousel z-2">
      <Slider {...settings}>
        {testimonials.map(
          ({ id, imageSrc, said, moment, description, client }) => (
            <div key={id} className="testimonial__item">
              <div className="quotes">
                <Image src={imageSrc} alt="img" className="img-fluid" />
              </div>
              <span className="said">{said}</span>
              <span className="moment">{moment}</span>
              <p className="fz-18 fw-600">{description}</p>
              <div className="client">
                <div className="thumb">
                  <Image src={client.thumbSrc} alt="img" />
                </div>
                <div className="content">
                  <h6 className="name">{client.name}</h6>
                  <span className="desination">{client.designation}</span>
                </div>
              </div>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default HotelReviewSlider;
