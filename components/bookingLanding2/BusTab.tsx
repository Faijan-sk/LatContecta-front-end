"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "../select/Select";
import bookbus from "/public/img/bookbanner/bookbus.jpg";

const clss = [
  { id: 1, name: "Class" },
  { id: 2, name: "Standard 1" },
  { id: 3, name: "Standard 2" },
];

const BusTab = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <>
      <div className="col-xl-8 col-lg-8 col-md-6">
        <div className="dating__body">
          <h5 className="bdcommontext text-center">Book Bus Tickets</h5>
          <div className="booking__radio justify-content-center mb__30">
            <div className="b__radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="bradios1s30"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="bradios1s30">
                One Way
              </label>
            </div>
            <div className="b__radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="bradios2s140"
              />
              <label className="form-check-label" htmlFor="bradios2s140">
                Round Trip
              </label>
            </div>
          </div>
          <div className="dating__body__box mb__30">
            <div className="row g-4">
              <div className="col-xl-6">
                <div className="dating__item dating__hidden">
                  <input type="text" placeholder="From" />
                  <span className="calendaricon">
                    <i className="material-symbols-outlined">location_on</i>
                  </span>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="dating__item dating__hidden">
                  <input type="text" placeholder="To" />
                  <span className="calendaricon">
                    <i className="material-symbols-outlined">location_on</i>
                  </span>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="dating__item">
                  {/* Date Picker */}
                  <DatePicker
                    placeholderText="Depart Date"
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                  />
                  <span className="calendaricon">
                    <i className="material-symbols-outlined">calendar_month</i>
                  </span>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="dating__item dating__inetial select__border">
                  {/* select here */}
                  <Select data={clss} />
                </div>
              </div>
            </div>
          </div>
          <div className="dating__item max-200">
            <button type="submit" className="cmn__btn">
              <span>Search Bus</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="booktricket__thumb">
          <Image src={bookbus} alt="img" className="img-fluid" />
          <Link href="/URL:void(0)" className="cmn__btn cmn__hotel">
            <span>Book Now</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BusTab;
