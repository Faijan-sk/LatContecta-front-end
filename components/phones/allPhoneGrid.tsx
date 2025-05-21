'use client'
import Image from 'next/image'
import one from './../../public/img/phone/two.png'
import Link from 'next/link'
import { StaticImageData } from 'next/image'
import React from 'react'

interface Filters {
  priceRange: number[]
  priceCategories: string[]
  customerRatings: string[]
  internalStorage: string[]
}

interface Mobile {
  id: number
  modelName: string
  rating: number
  storage: string
  price: number
  originalPrice: number
  imgSrc: StaticImageData
}

interface AllPhoneGridProps {
  filters: Filters
}

// StarRating component (unchanged)
const StarRating = ({
  rating,
  maxStars = 5,
  size = 20,
}: {
  rating: number
  maxStars?: number
  size?: number
}) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating - fullStars >= 0.5
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="gold"
          stroke="goldenrod"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15 10 23 10 17 15 19 23 12 18 5 23 7 15 1 10 9 10" />
        </svg>
      ))}

      {hasHalfStar && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          stroke="goldenrod"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="gold" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <polygon
            points="12 2 15 10 23 10 17 15 19 23 12 18 5 23 7 15 1 10 9 10"
            fill="url(#halfGrad)"
          />
          <polygon
            points="12 2 15 10 23 10 17 15 19 23 12 18 5 23 7 15 1 10 9 10"
            fill="none"
            stroke="goldenrod"
            strokeWidth="1"
          />
        </svg>
      )}

      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="goldenrod"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15 10 23 10 17 15 19 23 12 18 5 23 7 15 1 10 9 10" />
        </svg>
      ))}
    </span>
  )
}

const dummyMobiles: Mobile[] = [
  {
    id: 1,
    modelName: 'Alpha One',
    rating: 4.3,
    storage: '128 GB',
    price: 799,
    originalPrice: 899,
    imgSrc: one,
  },
  {
    id: 2,
    modelName: 'Beta Max',
    rating: 3.7,
    storage: '256 GB',
    price: 699,
    originalPrice: 749,
    imgSrc: one,
  },
  {
    id: 3,
    modelName: 'Gamma Pro',
    rating: 4.8,
    storage: '512 GB',
    price: 999,
    originalPrice: 1099,
    imgSrc: one,
  },
  {
    id: 4,
    modelName: 'Delta S',
    rating: 2.9,
    storage: '64 GB',
    price: 499,
    originalPrice: 549,
    imgSrc: one,
  },
  {
    id: 5,
    modelName: 'Epsilon X',
    rating: 4.5,
    storage: '128 GB',
    price: 850,
    originalPrice: 900,
    imgSrc: one,
  },
  {
    id: 6,
    modelName: 'Zeta Prime',
    rating: 3.2,
    storage: '256 GB',
    price: 650,
    originalPrice: 700,
    imgSrc: one,
  },
]

const AllPhoneGrid = ({ filters }: AllPhoneGridProps) => {
  const { priceRange, priceCategories, customerRatings, internalStorage } =
    filters

  // Check if rating passes filter (assumes rating strings like "4 and above")
  const passesRatingFilter = (rating: number) => {
    if (customerRatings.length === 0) return true
    return customerRatings.some((cr) => {
      const minRating = parseInt(cr)
      return rating >= minRating
    })
  }

  // Check storage filter (like "128 -256 GB", "256 GB and above")
  const passesStorageFilter = (storage: string) => {
    if (internalStorage.length === 0) return true
    const storageValue = parseInt(storage)
    return internalStorage.some((storageFilter) => {
      if (storageFilter === '128 -256 GB') {
        return storageValue >= 128 && storageValue <= 256
      }
      if (storageFilter === '256 GB and above') {
        return storageValue >= 256
      }
      if (storageFilter === '64 GB') {
        return storageValue === 64
      }
      return false
    })
  }

  // Properly implement price category filtering
  const passesPriceCategoryFilter = (price: number) => {
    if (priceCategories.length === 0) return true

    return priceCategories.some((category) => {
      switch (category) {
        case 'Under $500':
          return price < 500
        case '$500 - $700':
          return price >= 500 && price <= 700
        case '$700 - $900':
          return price > 700 && price <= 900
        case 'Above $900':
          return price > 900
        default:
          return false
      }
    })
  }

  // Filter mobiles based on all filters
  const filteredMobiles = dummyMobiles.filter((mobile) => {
    const inPriceRange =
      mobile.price >= priceRange[0] && mobile.price <= priceRange[1]
    const ratingOk = passesRatingFilter(mobile.rating)
    const storageOk = passesStorageFilter(mobile.storage)
    const priceCategoryOk = passesPriceCategoryFilter(mobile.price)

    return inPriceRange && ratingOk && storageOk && priceCategoryOk
  })

  return (
    <div className="mt-5 flight__oneway__wrapper flight__grid__waywrapper">
      <div className="row g-4">
        {filteredMobiles.length === 0 && (
          <p className="text-center w-100">No phones match your filters.</p>
        )}
        {filteredMobiles.map((mobile) => (
          <div key={mobile.id} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="flight__oneway__item2">
              <div className="flight__oneway__inner2">
                <div className="table__two">
                  <ul className="bgwhite headline__text d-flex justify-content-center circle__input">
                    <li className="fz-24 fw-400 lato dtext">
                      {mobile.modelName}
                    </li>
                  </ul>
                  <div className="tabletwo__body  justify-content-between w-100">
                    <div className="w-100 tablebg">
                      <span className="d-grid dadhes pt__30 pb__20 justify-content-center">
                        <span className="d-flex align-items-center gap-2 mb__10">
                          Customer rating:
                          <StarRating rating={mobile.rating} size={18} />
                        </span>
                        <span className="delta mb__10 d-block">
                          <Image
                            style={{ width: '30vh', height: 'auto' }}
                            src={mobile.imgSrc}
                            alt={mobile.modelName}
                          />
                        </span>
                        <span className="fz-16 fw-400 lato">
                          Storage: {mobile.storage}
                        </span>
                      </span>
                    </div>
                    <div className="right__tableprice d-flex justify-content-center w-100 tablebg">
                      <div className="boxes">
                        <span className="dollartext mb-1 fz-18 fw-500 lato d-flex align-items-center gap-2">
                          ${mobile.price}{' '}
                          <span className="troth fz-16 fw-400 lato">
                            ${mobile.originalPrice}
                          </span>
                        </span>

                        <Link href="/order-summary" className="cmn__btn">
                          <span>Buy Now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flight__wayfooter circle__input d-flex align-items-center justify-content-between">
                  <span className="fz-16 fw-400 lato dtext">
                    Bank Offers{' '}
                    <span className="gratext lato">Available Offers </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllPhoneGrid
