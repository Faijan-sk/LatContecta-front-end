"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "../select/Select";
import ballhome3 from "/public/img/bookbanner/3ballhome.png";
import shapebus from "/public/img/bookbanner/shapebus.png";
import dots from "/public/img/refer/dots.png";

const clss = [
  { id: 1, name: "Class" },
  { id: 2, name: "Standard 1" },
  { id: 3, name: "Standard 2" },
];

const BusTab = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <>
      <div className="row g-4 align-items-center justify-content-between">
        <div className="col-xxl-6 col-xl-7 col-lg-7">
          <div className="booklanding__threecontent">
            <div className="threeball">
              <Image src={ballhome3} alt="img" className="img-fluid" />
            </div>
            <h2>World&#39;s best booking system with discounts</h2>
            <p>
              A booking is a system for travels in the form of service. A vibe
              and explore the top destinations in worlds...
            </p>
            <div className="cmn__grp">
              <Link href="/about" className="cmn__btn">
                <span>About us</span>
              </Link>
              <div className="video__grp d-flex align-items-center">
                <Link href="/URL:void(0)" className="video">
                  <i className="material-symbols-outlined">play_arrow</i>
                </Link>
                <span>See out booking system</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-5 col-xl-5 col-lg-5">
          <div className="dating__body">
            <h5 className="bdcommontext text-center mb__20">
              Book Bus Tickets
            </h5>
            <div className="booking__radio justify-content-center mb__30">
              <div className="b__radio">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="bradious1s4"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="bradious1s4">
                  One Way
                </label>
              </div>
              <div className="b__radio">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="bradios2s1400"
                />
                <label className="form-check-label" htmlFor="bradios2s1400">
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
                      <i className="material-symbols-outlined">
                        calendar_month
                      </i>
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
            <div className="dots__shape1">
              <Image src={dots} alt="img" />
            </div>
            <div className="dots__shape2">
              <Image src={dots} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="hoelmainshape3">
        <Image src={shapebus} alt="img" />
      </div>
    </>
  );
};

export default BusTab;
