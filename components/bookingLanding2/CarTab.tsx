"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "../select/Select";
import cars from "/public/img/bookbanner/cars.jpg";

const time = [
  { id: 1, name: "Time" },
  { id: 2, name: "8:30 am" },
  { id: 3, name: "8:30 am" },
];

const CarTab = () => {
  const [pickUpDate, setPickUpDate] = useState(null);
  const [dropOffDate, setDropOffDate] = useState(null);

  return (
    <>
      <div className="col-xl-8 col-lg-8 col-md-6">
        <div className="dating__body">
          <h5 className="bdcommontext text-center">
            Book Car Rental Worldwide
          </h5>
          <div className="dating__body__box mb__30">
            <div className="row g-4">
              <div className="col-xl-6">
                <div className="dating__item dating__hidden">
                  <input type="text" placeholder="Enter Locality City" />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="dating__item dating__inetial select__border">
                  {/* select here */}
                  <Select data={time} />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="dating__item">
                  {/* Date Picker */}
                  <DatePicker
                    placeholderText="Pick-up Date"
                    selected={pickUpDate}
                    onChange={(date: any) => setPickUpDate(date)}
                  />
                  <span className="calendaricon">
                    <i className="material-symbols-outlined">calendar_month</i>
                  </span>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="dating__item">
                  {/* Date Picker */}
                  <DatePicker
                    placeholderText="Drop-off date"
                    selected={dropOffDate}
                    onChange={(date: any) => setDropOffDate(date)}
                  />
                  <span className="calendaricon">
                    <i className="material-symbols-outlined">calendar_month</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="boock__check pb__40">
            <input
              className="form-check-input"
              type="checkbox"
              id="bcheckbok20"
            />
            <label className="form-check-label" htmlFor="bcheckbok20">
              Driver aged 25 - 70
            </label>
          </div>
          <div className="dating__item max-200">
            <button type="submit" className="cmn__btn">
              <span>Search Cars</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="booktricket__thumb">
          <Image src={cars} alt="img" className="img-fluid" />
          <Link href="/URL:void(0)" className="cmn__btn cmn__hotel">
            <span>Book Now</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CarTab;
