"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "../select/Select";
import bookhotel from "/public/img/bookbanner/bookhotel.jpg";

const room = [
  { id: 1, name: "Room" },
  { id: 2, name: "Single Room" },
  { id: 3, name: "Dobble Room" },
];

const HotelTab = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <>
      <div className="col-xl-8 col-lg-8 col-md-6">
        <div className="dating__body">
          <h5 className="bdcommontext text-center">
            Book Domestic and International Hotels
          </h5>
          <div className="dating__body__box mb__30">
            <div className="row g-4">
              <div className="col-xl-6">
                <div className="dating__item dating__hidden">
                  <input type="text" placeholder="Enter Locality City" />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="dating__item">
                  {/* Date Picker */}
                  <DatePicker
                    placeholderText="Check In"
                    selected={checkInDate}
                    onChange={(date: any) => setCheckInDate(date)}
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
                    placeholderText="Check Out"
                    selected={checkOutDate}
                    onChange={(date: any) => setCheckOutDate(date)}
                  />
                  <span className="calendaricon">
                    <i className="material-symbols-outlined">calendar_month</i>
                  </span>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="dating__item dating__inetial select__border">
                  {/* select here */}
                  <Select data={room} />
                </div>
              </div>
            </div>
          </div>
          <div className="boock__check pb__40">
            <input
              className="form-check-input"
              type="checkbox"
              id="bcheckbok1"
            />
            <label className="form-check-label" htmlFor="bcheckbok1">
              I Agree support terms & condition
            </label>
          </div>
          <div className="dating__item max-200">
            <button type="submit" className="cmn__btn">
              <span>Search Hotels</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="booktricket__thumb">
          <Image src={bookhotel} alt="img" className="img-fluid" />
          <Link href="/URL:void(0)" className="cmn__btn cmn__hotel">
            <span>Book Now</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HotelTab;
