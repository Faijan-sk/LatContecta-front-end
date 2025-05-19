'use client'

import { useState } from 'react'

const SearchOption = () => {
  return (
    <div className="flight__roundtrip pt-80 ">
      <div className="container">
        <div className="booking__landing__wrap1  text-primary">
          <div className="booking__landing__body ">
            <div className="dating__body">
              {/* Input Fields */}
              <div className="dating__body__box mb__30">
                <div
                  className="dating__item dating__hidden"
                  style={{ width: '70%' }}
                >
                  <input type="text" placeholder="Enter Model Name" />
                  <span className="calendaricon"></span>
                </div>

                {/* Search Button */}
                <div className="dating__item" style={{ width: '30%' }}>
                  <button type="submit" className="cmn__btn">
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchOption
