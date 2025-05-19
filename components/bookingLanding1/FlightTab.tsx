"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "../select/Select";

const clssTpye = [
  { id: 1, name: "Class" },
  { id: 2, name: "Class Standard" },
  { id: 3, name: "Class Standard" },
];
const FlightTab = () => {
  const [startDate, setStartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  return (
    <>
      <div className="booking__radio mb__30">
        <div className="b__radio">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="bradios1s"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="bradios1s">
            One Way
          </label>
        </div>
        <div className="b__radio">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="bradios2s"
          />
          <label className="form-check-label" htmlFor="bradios2s">
            Round Trip
          </label>
        </div>
      </div>
      <div className="dating__body__box dating__flight mb__30">
        <div className="row justify-content-center g-3">
          <div className="col-xxl-2 col-xl-6 col-lg-3 col-md-6 col-sm-12">
            <div className="dating__item dating__hidden">
              <input type="text" placeholder="From" />
              <span className="calendaricon">
                <i className="material-symbols-outlined">location_on</i>
              </span>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-6 col-lg-3 col-md-6 col-sm-12">
            <div className="dating__item dating__hidden">
              <input type="text" placeholder="To" />
              <span className="calendaricon">
                <i className="material-symbols-outlined">location_on</i>
              </span>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-6 col-lg-3 col-md-6 col-sm-12">
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
          <div className="col-xxl-2 col-xl-6 col-lg-3 col-md-6 col-sm-12">
            <div className="dating__item">
              {/* Date Picker */}
              <DatePicker
                placeholderText="Depart Date"
                selected={returnDate}
                onChange={(date: any) => setReturnDate(date)}
              />
              <span className="calendaricon">
                <i className="material-symbols-outlined">calendar_month</i>
              </span>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-6 col-lg-3 col-md-6 col-sm-12">
            <div className="dating__item select__border">
              {/* select here */}
              <Select data={clssTpye} />
            </div>
          </div>
          <div className="col-xxl-2 col-xl-6 col-lg-3 col-md-6 col-sm-12">
            <div className="dating__item">
              <button type="submit" className="cmn__btn">
                <span>Search Flights</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightTab;
