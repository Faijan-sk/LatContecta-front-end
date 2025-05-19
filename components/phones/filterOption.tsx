'use client'

import Image from 'next/image'
import { useState } from 'react'
import RangeSlider from 'react-range-slider-input'
import dropdown from '/public/img/svg/dropdown.svg'

const FilterOption = ({ id = '' }) => {
  const [value, setValue] = useState([200, 700])

  return (
    <div className="common__filter__wrapper">
      <h3 className="filltertext borderb text-start pb__20 mb__20">Filter</h3>

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
            Price
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="departureTime">
          <div className="common__typeproperty my-3">
            {[
              ['$ 30000 and below'],
              ['$ 30000 - $ 50000'],
              ['$ 50000 - $ 75000'],
              ['$ 75000 - $ 100000'],
              ['$ 100000 and Above'],
            ].map(([period, time], i) => (
              <div
                key={i}
                className="type__radio mb__10 d-flex align-items-center justify-content-between"
              >
                <div className="radio__left d-flex align-items-center gap-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`proper1s13${id}${i}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`proper1s13${id}${i}`}
                  >
                    <span className="fz-16 lato fw-400 dtext">{period}</span>
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
            Customer Rating
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="busTravels">
          <div className="common__typeproperty mt-3 pb-3">
            {['5 above', '4 above', '3 above', '2 above ', '1 above '].map(
              (itm, i) => (
                <div
                  key={i}
                  className="type__radio mb__10 d-flex align-items-center justify-content-between"
                >
                  <div className="radio__left d-flex align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`proper1s${id}${i}`}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`proper1s${id}${i}`}
                    >
                      <span className="fz-16 lato fw-400 dtext">{itm}</span>
                    </label>
                  </div>
                </div>
              )
            )}
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
            Internal Storage
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="busTravels">
          <div className="common__typeproperty mt-3 pb-3">
            {['128 -256 GB', '256 GB and above'].map((itm, i) => (
              <div
                key={i}
                className="type__radio mb__10 d-flex align-items-center justify-content-between"
              >
                <div className="radio__left d-flex align-items-center gap-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`proper1s${id}${i}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`proper1s${id}${i}`}
                  >
                    <span className="fz-16 lato fw-400 dtext">{itm}</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterOption
