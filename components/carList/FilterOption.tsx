"use client";

import Image from "next/image";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import dropdown from "/public/img/svg/dropdown.svg";

const FilterOption = () => {
  const [value, setValue] = useState([200, 700]);

  return (
    <div className="common__filter__wrapper">
      <h3 className="filltertext borderb text-start pb__20 mb__20">Filter</h3>
      <div className="search__item borderb pb__10 mb__20">
        <div className="common__sidebar__head">
          <button
            className="w-100 fw-400 lato dtext fz-24 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#busName"
            aria-expanded="false"
            aria-controls="busName"
          >
            Car Name
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content collapse show" id="busName">
          <form className="d-flex align-items-center justify-content-between my-3">
            <input type="text" placeholder="Search by Flight name" required />
            <button type={"submit"} className="search">
              <i className="material-symbols-outlined">search</i>
            </button>
          </form>
        </div>
      </div>
      <div className="search__item borderb pb__10 mb__20">
        <div className="common__sidebar__head">
          <button
            className="w-100 fw-400 lato dtext fz-24 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#busType"
            aria-expanded="false"
            aria-controls="busType"
          >
            Car type
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="busType">
          <div className="common__typeproperty my-3">
            {[
              "Economy",
              "Compact",
              "Midsize",
              "Standard",
              "Minivan",
              "Full-size",
              "SUV",
              "Van",
            ].map((itm, i) => (
              <div
                key={i}
                className="type__radio mb__10 d-flex align-items-center justify-content-between"
              >
                <div className="radio__left d-flex align-items-center gap-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`proper1${i}`}
                  />
                  <label className="form-check-label" htmlFor={`proper1${i}`}>
                    <span className="fz-16 lato fw-400 dtext">{itm}</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="search__item borderb pb__10 mb__20">
        <div className="common__sidebar__head">
          <button
            className="w-100 fw-400 lato dtext fz-24 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#departureTime"
            aria-expanded="false"
            aria-controls="departureTime"
          >
            Departure Time
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="departureTime">
          <div className="common__typeproperty my-3">
            {[
              ["Early Morning", "12am - 8am"],
              ["Morning", "8am - 12pm"],
              ["Mid-Day", "12pm - 4pm"],
              ["Evening", "4pm - 12pm"],
              ["Night", "8pm - 12pm"],
            ].map(([period, time], i) => (
              <div
                key={i}
                className="type__radio mb__10 d-flex align-items-center justify-content-between"
              >
                <div className="radio__left d-flex align-items-center gap-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`propers1s13${i}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`propers1s13${i}`}
                  >
                    <span className="fz-16 lato fw-400 dtext">{period}</span>
                  </label>
                </div>
                <span className="radio__right fz-16 fw-400 dtext lato">
                  {time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="search__item borderb pb__10 mb__20">
        <div className="common__sidebar__head">
          <button
            className="w-100 fw-400 lato dtext fz-24 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#pricing"
            aria-expanded="false"
            aria-controls="pricing"
          >
            Pricing scale
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="pricing">
          <div className="range__barcustom my-3">
            <div id="slider-range" className="range-bar">
              <RangeSlider
                value={value}
                onInput={setValue}
                min={0}
                max={1000}
                ariaValuemax
              />
            </div>

            <div className="price-input">
              <div className="field">
                <span>$</span>
                <input
                  type="number"
                  className="input-min"
                  value={value[0]}
                  readOnly
                />
              </div>
              <div className="separator">-</div>
              <div className="field">
                <span>$</span>
                <input
                  type="number"
                  className="input-max"
                  value={value[1]}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search__item borderb pb__10 mb__20">
        <div className="common__sidebar__head">
          <button
            className="w-100 fw-400 lato dtext fz-24 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#bags"
            aria-expanded="false"
            aria-controls="bags"
          >
            Bags
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="bags">
          <div className="common__typeproperty my-3">
            {[
              ["1 to 2 bags", "122"],
              ["3 to 4 bags", "63"],
              ["5 or more", "25"],
            ].map(([bag, itm], i) => (
              <div
                key={i}
                className="type__radio mb__10 d-flex align-items-center justify-content-between"
              >
                <div className="radio__left d-flex align-items-center gap-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`propesr1s13${i}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`propesr1s13${i}`}
                  >
                    <span className="fz-16 lato fw-400 dtext">{bag}</span>
                  </label>
                </div>
                <span className="radio__right fz-16 fw-400 dtext lato">
                  {itm}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="search__item borderb pb__10 mb__20">
        <div className="common__sidebar__head">
          <button
            className="w-100 fw-400 lato dtext fz-24 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#transmission"
            aria-expanded="false"
            aria-controls="transmission"
          >
            Transmission
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="transmission">
          <div className="common__typeproperty my-3">
            {[
              ["Automatic", "122"],
              ["Manual", "63"],
            ].map(([transmission, itm], i) => (
              <div
                key={i}
                className="type__radio mb__10 d-flex align-items-center justify-content-between"
              >
                <div className="radio__left d-flex align-items-center gap-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`proper1s13${i}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`proper1s13${i}`}
                  >
                    <span className="fz-16 lato fw-400 dtext">
                      {transmission}
                    </span>
                  </label>
                </div>
                <span className="radio__right fz-16 fw-400 dtext lato">
                  {itm}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="search__item">
        <div className="common__sidebar__head">
          <button
            className="w-100 fw-400 lato dtext fz-24 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#busTravels"
            aria-expanded="false"
            aria-controls="busTravels"
          >
            Payment type
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="busTravels">
          <div className="common__typeproperty mt-3 pb-3">
            {["Pay now", "Pay at counter"].map((itm, i) => (
              <div
                key={i}
                className="type__radio mb__10 d-flex align-items-center justify-content-between"
              >
                <div className="radio__left d-flex align-items-center gap-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`proper1s${i}`}
                  />
                  <label className="form-check-label" htmlFor={`proper1s${i}`}>
                    <span className="fz-16 lato fw-400 dtext">{itm}</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOption;
