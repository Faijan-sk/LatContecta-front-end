"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "../select/Select";

const time = [
  { id: 1, name: "Time" },
  { id: 2, name: "in Time 8:10 am" },
  { id: 3, name: "in Time 8:10 am" },
];

const CarsTab = () => {
  const [pickUpDate, setPickUpDate] = useState(null);
  const [dropOffDate, setDropOffDate] = useState(null);

  return (
    <>
      <div className="dating__body__box  mb__30">
        <div className="dating__item dating__hidden">
          <input type="text" placeholder="From" />
          <span className="calendaricon">
            <i className="material-symbols-outlined">location_on</i>
          </span>
        </div>
        <div className="dating__item select__border">
          {/* select here */}
          <Select data={time} />
        </div>
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
        <div className="dating__item">
          {/* Date Picker */}
          <DatePicker
            placeholderText="Drop-off Date"
            selected={dropOffDate}
            onChange={(date: any) => setDropOffDate(date)}
          />
          <span className="calendaricon">
            <i className="material-symbols-outlined">calendar_month</i>
          </span>
        </div>
        <div className="dating__item">
          <button type="submit" className="cmn__btn">
            <span>Search Cars</span>
          </button>
        </div>
      </div>
      <div className="boock__check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="bcheckbokttt"
        />
        <label className="form-check-label" htmlFor="bcheckbokttt">
          Driver aged 25 - 70
        </label>
      </div>
    </>
  );
};

export default CarsTab;
