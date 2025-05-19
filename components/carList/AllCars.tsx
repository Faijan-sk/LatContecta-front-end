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
      {data.map(({ id, car_name, car_img }, i, arr) => (
        <div
          key={id}
          className={`carferrari__item ${
            arr.length - 1 !== i ? "mb__30" : ""
          }  d-flex align-items-center bgwhite p__10`}
        >
          <Link href="/URL:void(0)" className="thumb">
            <Image src={car_img} alt={car_name} />
          </Link>
          <div className="carferrari__content">
            <div className="d-flex carferari__box justify-content-between">
              <div className="farrari__left">
                <div className="d-flex mb__24 align-items-center gap-4">
                  <Link href="/URL:void(0)">
                    <h5 className="dtext">{car_name}</h5>
                  </Link>
                  <span className="suv fz-16 fw-400 lato d-block gratext">
                    <span className="gratext">Suv</span>
                  </span>
                </div>
                <ul className="ferrari__list d-flex">
                  <li className="fz-16 fw-400 pratext lato">
                    Free Cancellation
                  </li>
                  <li className="fz-16 fw-400 pratext lato">Price Guarantee</li>
                  <li className="fz-16 fw-400 pratext lato">
                    Instantly Confirmed
                  </li>
                  <li className="fz-16 fw-400 pratext lato">
                    Third Party Liability
                  </li>
                </ul>
              </div>
              <div className="farrari__carbook">
                <div className="d-flex mb-1 pratext gap-3">
                  <span className="gratext fz-16 lato">20% off</span>
                  Per day
                </div>
                <div className="d-flex align-items-end mb__20 pratext gap-3">
                  <span className="gratext fz-18 fw-500 lato">$312</span>
                  <span className="troth3">$332</span>
                </div>
                <Link href="/car-confirm-details" className="cmn__btn">
                  <span>Book Now</span>
                </Link>
              </div>
            </div>
            <ul className="ferrari__pats justify-content-between d-flex align-items-center">
              <li className="d-grid justify-content-center text-center">
                <span className="icon mb__10">
                  <Image src={person} alt="icon" />
                </span>
                <span className="dtext fz-16 fw-400 lato d-block">5 Pass</span>
              </li>
              <li className="d-grid justify-content-center text-center">
                <span className="icon mb__10">
                  <Image src={lock} alt="icon" />
                </span>
                <span className="dtext fz-16 fw-400 lato d-block">
                  3 Big Bag
                </span>
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
                <span className="dtext fz-16 fw-400 lato d-block">100+ Km</span>
              </li>
              <li className="d-grid justify-content-center text-center">
                <span className="icon mb__10">
                  <Image src={acs} alt="icon" />
                </span>
                <span className="dtext fz-16 fw-400 lato d-block">A/C</span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllCars;
