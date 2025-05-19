import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import coffee from "/public/img/svg/coffee.svg";
import facilities_bussen from "/public/img/svg/facilities-bussen.svg";
import mlocation from "/public/img/svg/mlocation.svg";
import star from "/public/img/svg/star.svg";
import swing from "/public/img/svg/swing.svg";
import wifis from "/public/img/svg/wifis.svg";

type HotelProps = {
  id: number;
  title: string;
  rating: string;
  location: string;
  price: {
    originalPrice: string;
    discountedPrice: string;
    discount: string;
  };
  roomPerNight: string;
  image: StaticImageData;
  link: string;
};

const HotelGridCard = ({ data }: { data: HotelProps }) => {
  const { image, link, location, price, rating, roomPerNight, title } = data;

  return (
    <div className="bits__hotel d-grid align-items-center gap-3">
      <div className="thumb thumb2">
        <Link href={link}>
          <Image src={image} className="w-100" alt="img" />
        </Link>
      </div>
      <div className="content content__space">
        <div className="title gap-3 d-flex justify-content-between mb__10">
          <h5>{title}</h5>
          <span className="rating fz-16 fw-400 lato dtext d-flex align-items-center gap-2">
            <Image src={star} alt="img" />
            {rating}
          </span>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
          <span className="dubay mb__15 gap-2 d-flex align-items-center fz-16 fw-400 lato dtext">
            <Image src={mlocation} alt="svg" />
            {location}
          </span>
          <ul className="bitast__icon mb__15 d-flex align-items-center gap-2">
            <li>
              <Image src={coffee} alt="img" />
            </li>
            <li>
              <Image src={swing} alt="img" />
            </li>
            <li>
              <Image src={facilities_bussen} alt="img" />
            </li>
            <li>
              <Image src={wifis} alt="img" />
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-between flex-wrap align-items-center gap-1">
          <div className="price__off mb__10 d-flex gap-3">
            <span className="fz-18 fw-500 lato dtext">
              {price.discountedPrice}
            </span>
            <span className="linetrogh fz-16 mt-1 fw-500 lato">
              {price.originalPrice}
            </span>
            <span className="fz-16 fw-500 lato base d-block">
              {price.discount}
            </span>
          </div>
          <span className="fz-18 d-block fw400 mb__20 lato textfive">
            {roomPerNight}
          </span>
        </div>
        <div className="d-grid justify-content-center">
          <Link href={link} className="cmn__btn">
            <span>Book Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelGridCard;
