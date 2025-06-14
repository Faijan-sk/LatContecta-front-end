'use client'

import { useState, ChangeEvent, useEffect, Key } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Select from '../select/Select'

import Att from './../../public/img/operators/finalAtt.jpg'
import Telcel from './../../public/img/operators/TelcelforEdit.png'
import Movistar from './../../public/img/operators/movistar-logo-marcas-1.webp'
import EditIcon from './../../public/img/pngFiles/edit_pencil.png'
import Mexico from './../../public/img/operators/Mexico_png.png'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/rootReducer'

import PlansCard from './PlansCard'

// Define operator type
interface Operator {
  id: number
  name: string
  image: any // Use StaticImageData type if you import your images properly
}

// Sample list of operators for the dropdown
const operators: Operator[] = [
  { id: 1, name: 'AT&T', image: Att },
  { id: 2, name: 'Telcel', image: Telcel },
  { id: 3, name: 'Movistar', image: Movistar },
]

const Packages = () => {
  const [filterType, setFilterType] = useState<number>(2)
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const [productType, setProductType] = useState<string>('')

  const plans = useSelector((store: RootState) => store.plans)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (filterType === 1) {
      setProductType('Plans')
    } else setProductType('Top-Up')
  }, [filterType])

  const handleFitert = (type: 1 | 2) => setFilterType(type)

  const plansList =
    plans?.plansDetails?.products?.filter(
      ({ pt }: { pt: number }) => pt === filterType
    ) ?? []

  if (isMobile === null) return null

  return (
    <>
      <div
        className="valu__btn"
        style={{ margin: '10px', padding: '10px', textAlign: 'center' }}
      >
        <div
          className="top-buttons"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '20px',
          }}
        >
          <button
            style={{
              flex: '1',
              minWidth: '120px',
              maxWidth: '200px',
              margin: '5px',
            }}
            onClick={() => handleFitert(2)}
            className="cmn__btn"
          >
            <span>Top-Up</span>
          </button>


          <button
            style={{
              flex: '1',
              minWidth: '120px',
              maxWidth: '200px',
              margin: '5px',
            }}
            className="cmn__btn"
            onClick={() => handleFitert(1)}
          >
            <span>Plans</span>
          </button>
        </div>
      </div>

      <div className="row g-4">
        <h4>{productType}</h4>
        {plansList.map((plansDetail: any, index: Key | null | undefined) => (
          <div key={index} className="col-md-6 col-12">
            <PlansCard
              plansDetails={plansDetail}
              msisdn_info={plans?.plansDetails?.msisdn_info}
            />
          </div>
        ))}
      </div>



    </>
  )
}

export default Packages
