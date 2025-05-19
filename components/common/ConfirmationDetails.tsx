"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "../select/Select";
import deltas from "/public/img/payment/deltas.jpg";
import covid19 from "/public/img/svg/covid19.svg";
import cross from "/public/img/svg/cross.svg";
import over_check from "/public/img/svg/over-check.svg";
import pbag1 from "/public/img/svg/pbag1.svg";
import pbag2 from "/public/img/svg/pbag2.svg";
import pbag3 from "/public/img/svg/pbag3.svg";

const adult = [
  { id: 1, name: "Adult" },
  { id: 2, name: "1" },
  { id: 3, name: "2" },
];

const child = [
  { id: 1, name: "Child" },
  { id: 2, name: "1" },
  { id: 3, name: "2" },
];

const gender = [
  { id: 1, name: "Gender Select" },
  { id: 2, name: "1" },
  { id: 3, name: "2" },
];

const ConfirmationDetails = ({ title }: { title?: string }) => {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="flight__oneway__confirmdetails shadow bgwhite">
      <h3 className="dtext mb__40 xs-28">{title}</h3>
      <div className="flight__oneway__item2 bdash pb__30 mb__30">
        <div className="flight__oneway__inner2">
          <div className="table__two">
            <ul className="bgwhite headline__text d-flex justify-content-between circle__input">
              <li className="fz-18 fw-500 d-block lato dtext">
                New York TO les vignes
              </li>
              <li className="fz-18 fw-500 d-block lato dtext d-flex g-2">
                22-12-23 Sat (Duration{" "}
                <span className="gratext d-block">2h 30m)</span>
              </li>
            </ul>
            <div className="tabletwo__body d-flex justify-content-between w-100">
              <div className="w-100">
                <ul className="table__conponent align-items-center tablebg d-flex justify-content-between">
                  <li>
                    <span className="delta mb__10 d-block">
                      <Image src={deltas} alt="img" />
                    </span>
                    <span className="fz-16 fw-400 lato">Delta Express</span>
                  </li>
                  <li>
                    <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                      8:10 am
                    </span>
                    <span className="fz-16 fw-400 lato">New York</span>
                  </li>
                  <li>
                    <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                      2h 10m
                    </span>
                    <span className="fz-16 fw-400 lato">(5+Stops)</span>
                  </li>
                  <li>
                    <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                      10:20 am
                    </span>
                    <span className="fz-16 fw-400 lato">les Vignes</span>
                  </li>
                  <li>
                    <span className="fz-18 mb__10 d-block fw-600 lato dtext">
                      Seat No: 1
                    </span>
                    <span className="fz-16 fw-400 lato">AC_Sleeper</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="travel__protection">
        <div className="d-flex justify-content-between mb__10 align-items-center ">
          <h5 className="dtext fw-700">Baggage Information</h5>
        </div>
        <div className="d-flex flex-wrap mb__30 align-items-center justify-content-between">
          <span className="fz-18 fw-400 lato dtext">
            Travel New York to les VVignes
          </span>
          <span className="fz-18 fw-400 dtext lato">Coach: AC_Sleeper</span>
        </div>
      </div>
      <div className="bdash pb__30">
        <div className="row g-3">
          <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
            <div className="baggage__info d-flex gap-3">
              <div className="icon d-flex align-items-center justify-content-center">
                <Image src={pbag1} alt="bag" />
              </div>
              <div className="content">
                <span className="fz-18 d-block mb-1 fw-600 lato ">
                  Personal Item
                </span>
                <span className="fz-16 d-block mb__10 fw-400 lato dtext">
                  Purse, small backpack, briefcase
                </span>
                <span className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                  <span className="sicon">
                    <Image src={over_check} alt="check-svg" />
                  </span>
                  Included
                </span>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
            <div className="baggage__info d-flex gap-3">
              <div className="icon d-flex align-items-center justify-content-center">
                <Image src={pbag2} alt="bag" />
              </div>
              <div className="content">
                <span className="fz-18 d-block mb-1 fw-600 lato ">
                  Carry-on bag
                </span>
                <span className="fz-16 d-block mb__10 fw-400 lato dtext">
                  Fits in overhead bin or under the seat
                </span>
                <span className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                  <span className="sicon">
                    <Image src={over_check} alt="check-svg" />
                  </span>
                  Included
                </span>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
            <div className="baggage__info d-flex gap-3">
              <div className="icon d-flex align-items-center justify-content-center">
                <Image src={pbag3} alt="bag" />
              </div>
              <div className="content">
                <span className="fz-18 d-block mb-1 fw-600 lato ">
                  Checked Bags
                </span>
                <span className="fz-16 d-block mb__10 fw-400 lato dtext">
                  Larges Bag Purse, small backpack
                </span>
                <span className="d-flex lato fz-16 fw-400 dtext align-items-center gap-2">
                  <span className="sicon">
                    <Image src={cross} alt="check-svg" />
                  </span>
                  Not Included
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="travel__detailstext mt-4 mb__30">
        <h5 className="dtext mb__15">Traveler Details</h5>
        <p className="dtext fz16 fw-400 lato">
          Please enter the traveler&#39;s name and date of birth exactly as
          shown on the passport (for international flights) or valid
          government-issued photo ID (for domestic flights) to be used on this
          trip. Name changes are not permitted after booking.
        </p>
      </div>
      <div className="covid__restriction mb__30 d-flex align-items-center justify-content-between">
        <div className="icons d-flex align-items-center justify-content-center">
          <Image src={covid19} alt="svg" />
        </div>
        <p className="fz-16 fw-400 dtext lato">
          Before booking your flight, please check the latest COVID-19 travel
          restrictions to world. Please continuously check all COVID-19 related
          restrictions directly with airlines...
        </p>
        <Link href="/URL:void(0)" className="cmn__btn">
          <span>See Restrictions</span>
        </Link>
      </div>
      <div className="booking__landing__body">
        <div className="dating__body">
          <div className="dating__body__box dating__flight mb__30">
            <div className="row justify-content-center g-3">
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="dating__item dating__hidden">
                  <input type="text" placeholder="First Name" />
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="dating__item dating__hidden">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
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
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="dating__item select__border">
                  {/* select here */}
                  <Select data={adult} />
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="dating__item select__border">
                  {/* select here */}
                  <Select data={child} />
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="dating__item select__border">
                  {/* select here */}
                  <Select data={gender} />
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="dating__item dating__hidden">
                  <input type="email" placeholder="Email" />
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="dating__item dating__hidden">
                  <input type="text" placeholder="Phone" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="input-esingl mt__30 input-check d-flex align-items-center gap-2 payment__save">
        <input className="form-check-input" type="checkbox" defaultChecked />
        <label className="dtext fz-18 fw-400 lato">
          I consent to receive marketing emails from Rechargio
        </label>
      </div>
    </div>
  );
};

export default ConfirmationDetails;
