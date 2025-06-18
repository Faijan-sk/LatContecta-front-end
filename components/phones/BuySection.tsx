'use client'
import Image from 'next/image'
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'
import dropdown from '/public/img/svg/dropdown.svg'
// import
import Link from 'next/link'

const BuyOption = () => {
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

  return (
    <div className="common__filter__wrapper">
      <div className="borderb text-start">
        <h3 className="filltertext  text-start pb__20 mb__20">
          Name of the Phone
        </h3>
        <p className="text-start">Ratings: ★★★★☆</p>
        <p>Special price:</p>
        <h5 className="text-success">$999</h5>
        <p style={{ textDecoration: 'line-through' }}>$1499</p>
      </div>

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
            Offers
            <Image src={dropdown} alt="svg" />
          </button>
        </div>
        <div className="common__sidebar__content show" id="pricing">
          <div className="range__barcustom my-3">
            <div id="slider-range" className="range-bar text-start  p-4">
              <p className="text-sm text-gray-800 cursor-pointer hover:text-blue-600 transition">
                🏦 Get 10% Instant Discount on{' '}
                <span className="font-medium">HDFC Bank</span> Credit Card EMI
                transactions.
              </p>

              <p className="text-sm text-gray-800">
                💳 Flat <span className="font-semibold">₹500 Cashback</span> on{' '}
                <span className="font-medium">ICICI Bank</span> Debit Card
                payments above ₹5,000.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOMER RATINGS */}
      <div className="search__item mb-2">
        <div className="common__sidebar__head"></div>
        <div className="common__sidebar__content show " id="customerRatings">
          <Link href="/phones/phone2" className="cmn__btn">
            <span className="ms-2 "> Buy Now</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BuyOption
