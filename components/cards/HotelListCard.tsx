import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import bshape from "/public/img/details/bshape.png";
import tshape from "/public/img/details/tshape.png";
import bedss from "/public/img/svg/bedss.svg";
import coffee from "/public/img/svg/coffee.svg";
import facilities_bussen from "/public/img/svg/facilities-bussen.svg";
import gum from "/public/img/svg/gum.svg";
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

const HotelListCard = ({ data }: { data: HotelProps }) => {
  const { image, link, location, price, rating, roomPerNight, title } = data;

  return (
    <div className="bits__hotel d-flex align-items-center gap-4">
      <div className="thumb">
        <Link href={link}>
          <Image src={image} alt="img" className="img-fluid" />
        </Link>
      </div>
      <div className="content">
        <div className="title gap-3 d-flex mb__10">
          <h5>{title}</h5>
          <span className="rating fz-16 fw-400 lato dtext d-flex align-items-center gap-2">
            <Image src={star} alt="img" />
            {rating}
          </span>
        </div>
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
          <li>
            <Image src={bedss} alt="img" />
          </li>
          <li>
            <Image src={gum} alt="img" />
          </li>
        </ul>
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
        <Link href={link} className="cmn__btn">
          <span>Book Now</span>
        </Link>
      </div>

      <div className="tshape">
        <Image src={tshape} alt="img" />
      </div>
      <div className="bshape">
        <Image src={bshape} alt="img" />
      </div>
    </div>
  );
};

export default HotelListCard;
