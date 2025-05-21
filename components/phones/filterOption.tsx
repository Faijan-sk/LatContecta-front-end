'use client'

import Image from 'next/image'
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'
import dropdown from '/public/img/svg/dropdown.svg'

interface Filters {
  priceRange: number[]
  priceCategories: string[]
  customerRatings: string[]
  internalStorage: string[]
}

interface FilterOptionProps {
  id?: string
  onFilterChange: Dispatch<SetStateAction<Filters>>
}

const FilterOption = ({ id = '', onFilterChange }: FilterOptionProps) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([200, 700])
  const [priceCategories, setPriceCategories] = useState<string[]>([])
  const [customerRatings, setCustomerRatings] = useState<string[]>([])
  const [internalStorage, setInternalStorage] = useState<string[]>([])

  const handleCheckboxChange = (
    value: string,
    checked: boolean,
    setter: Dispatch<SetStateAction<string[]>>
  ) => {
    setter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    )
  }

  useEffect(() => {
    onFilterChange({
      priceRange,
      priceCategories,
      customerRatings,
      internalStorage,
    })
  }, [
    priceRange,
    priceCategories,
    customerRatings,
    internalStorage,
    onFilterChange,
  ])

  return (
    <div className="common__filter__wrapper">
      <h3 className="filltertext borderb text-start pb__20 mb__20">Filter</h3>

      {/* PRICE CATEGORIES */}
      {/* <div className="search__item borderb pb__10 mb__20">
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
          <div className="common__typeproperty my-3 text-start">
            {[
              '$ 300 and below',
              '$ 300 - $ 500',
              '$ 500 - $ 750',
              '$ 750 - $ 1000',
              '$ 1000 and Above',
            ].map((label, i) => (
              <div key={i} className="type__radio mb__10">
                <input
                  type="checkbox"
                  id={`priceCat${id}${i}`}
                  onChange={(e) =>
                    handleCheckboxChange(
                      label,
                      e.target.checked,
                      setPriceCategories
                    )
                  }
                />
                <label htmlFor={`priceCat${id}${i}`}>
                  <span className="fz-16 lato fw-400 dtext">{label}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* PRICE RANGE SLIDER */}
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
                value={priceRange}
                onInput={setPriceRange}
                min={0}
                max={1000}
              />
            </div>

            <div className="price-input">
              <div className="field">
                <span>$</span>
                <input
                  type="number"
                  className="input-min"
                  value={priceRange[0]}
                  readOnly
                />
              </div>
              <div className="separator">-</div>
              <div className="field">
                <span>$</span>
                <input
                  type="number"
                  className="input-max"
                  value={priceRange[1]}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOMER RATINGS */}
      <div className="search__item">
        <div className="common__sidebar__head">
          <button
            className="w-100 fw-400 lato dtext fz-24 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#customerRatings"
            aria-expanded="false"
            aria-controls="customerRatings"
          >
            Customer Rating
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="customerRatings">
          <div className="common__typeproperty mt-3 pb-3">
            {['4 above', '3 above', '2 above', '1 above'].map((label, i) => (
              <div key={i} className="type__radio mb__10">
                <input
                  type="checkbox"
                  id={`rating${id}${i}`}
                  onChange={(e) =>
                    handleCheckboxChange(
                      label,
                      e.target.checked,
                      setCustomerRatings
                    )
                  }
                />
                <label htmlFor={`rating${id}${i}`}>
                  <span className="fz-16 lato fw-400 dtext">{label}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INTERNAL STORAGE */}
      <div className="search__item">
        <div className="common__sidebar__head">
          <button
            className="w-100 fw-400 lato dtext fz-24 d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#internalStorage"
            aria-expanded="false"
            aria-controls="internalStorage"
          >
            Internal Storage
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="internalStorage">
          <div className="common__typeproperty mt-3 pb-3">
            {['128 -256 GB', '256 GB and above'].map((label, i) => (
              <div key={i} className="type__radio mb__10">
                <input
                  type="checkbox"
                  id={`storage${id}${i}`}
                  onChange={(e) =>
                    handleCheckboxChange(
                      label,
                      e.target.checked,
                      setInternalStorage
                    )
                  }
                />
                <label htmlFor={`storage${id}${i}`}>
                  <span className="fz-16 lato fw-400 dtext">{label}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterOption
