'use client'
import FilterOption from './filterOption'
import Pagination from '../pagination/Pagination'
import AllPhoneGrid from './allPhoneGrid'
import { useEffect, useState } from 'react'
interface Filters {
  priceRange: number[]
  priceCategories: string[]
  customerRatings: string[]
  internalStorage: string[]
}

const TrainGridMain = () => {
  const [filters, setFilters] = useState<Filters>({
    priceRange: [0, 1000],
    priceCategories: [],
    customerRatings: [],
    internalStorage: [],
  })
  useEffect(() => {
    console.table(filters)
  }, [filters])
  return (
    <section className="flight__onewaysection pb__60">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            {/* Filter Option Here */}
            <FilterOption id="train_grid" onFilterChange={setFilters} />
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            {/* All Train Here */}
            <AllPhoneGrid filters={filters} />

            {/* Pagination Here */}
            {/* <Pagination clss="justify-content-center pt__40" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrainGridMain
