import Image from "next/image";
import Link from "next/link";
import bmw from "/public/img/cars/bmw.jpg";
import cadillac from "/public/img/cars/cadillac.jpg";
import chevrolet from "/public/img/cars/chevrolet.jpg";
import datsun from "/public/img/cars/datsun.jpg";
import ferrari from "/public/img/cars/ferrari.jpg";
import acs from "/public/img/svg/acs.svg";
import lock from "/public/img/svg/lock.svg";
import person from "/public/img/svg/person.svg";
import setting from "/public/img/svg/setting.svg";
import speeder from "/public/img/svg/speeder.svg";

const data = [
  {
    id: 1,
    car_name: "Ferrari",
    car_img: ferrari,
  },
  {
    id: 6,
    car_name: "Cadillac L77",
    car_img: datsun,
  },
  {
    id: 2,
    car_name: "Cadillac",
    car_img: cadillac,
  },
  {
    id: 3,
    car_name: "Chevrolet",
    car_img: chevrolet,
  },
  {
    id: 4,
    car_name: "Datsun",
    car_img: datsun,
  },
  {
    id: 5,
    car_name: "BMW Creta",
    car_img: bmw,
  },
];

const AllCars = () => {
  return (
    <>
      {data.map(({ id, car_name, car_img }) => (
        <div key={id} className="col-xl-6 col-lg-6 col-md-6">
          <div className="carferrari__item flex-wrap d-flex align-items-center bgwhite p__10">
            <Link href="/URL:void(0)" className="thumb">
              <Image src={car_img} alt={car_name} className="img-fluid" />
              <span className="price base fw-500 lato fz-18 ">$312</span>
              <span className="price2 base fw-400 lato fz-16">20% off</span>
            </Link>
            <div className="carferrari__content">
              <div className="d-flex carferari__box justify-content-center">
                <div className="farrari__left">
                  <div className="d-flex mb__20 align-items-center gap-4">
                    <Link href="/URL:void(0)">
                      <h5 className="dtext">{car_name}</h5>
                    </Link>
                    <span className="suv fz-16 fw-400 lato d-block gratext">
                      <span className="gratext">Suv</span>
                    </span>
                  </div>
                </div>
              </div>
              <ul className="ferrari__pats mb__20 justify-content-between d-flex align-items-center">
                <li className="d-grid justify-content-center text-center">
                  <span className="icon mb__10">
                    <Image src={person} alt="icon" />
                  </span>
                  <span className="dtext fz-16 fw-400 lato d-block">5</span>
                </li>
                <li className="d-grid justify-content-center text-center">
                  <span className="icon mb__10">
                    <Image src={lock} alt="icon" />
                  </span>
                  <span className="dtext fz-16 fw-400 lato d-block">3</span>
                </li>
                <li className="d-grid justify-content-center text-center">
                  <span className="icon mb__10">
                    <Image src={setting} alt="icon" />
                  </span>
                  <span className="dtext fz-16 fw-400 lato d-block">Auto</span>
                </li>
                <li className="d-grid justify-content-center text-center">
                  <span className="icon mb__10">
                    <Image src={speeder} alt="icon" />
                  </span>
                  <span className="dtext fz-16 fw-400 lato d-block">Km/h</span>
                </li>
                <li className="d-grid justify-content-center text-center">
                  <span className="icon mb__10">
                    <Image src={acs} alt="icon" />
                  </span>
                  <span className="dtext fz-16 fw-400 lato d-block">A/C</span>
                </li>
              </ul>
              <ul className="ferrari__list d-flex">
                <li className="fz-16 fw-400 pratext lato">Free Cancellation</li>
                <li className="fz-16 fw-400 pratext lato">Price Guarantee</li>
                <li className="fz-16 fw-400 pratext lato">
                  Instantly Confirmed
                </li>
                <li className="fz-16 fw-400 pratext lato">
                  Third Party Liability
                </li>
              </ul>
              <div className="d-flex justify-content-center">
                <Link href="/car-confirm-details" className="cmn__btn">
                  <span>Book Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllCars;
