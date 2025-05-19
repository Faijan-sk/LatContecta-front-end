'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import preloader from '/public/img/preloader/preloader.png'
import rechage from '/public/img/preloader/rechage.png'

const Preloader = () => {
  const [showLoader, setShowLoader] = useState(true)
  const [isLoded, setIsLoded] = useState('')

  useEffect(() => {
    window.addEventListener('load', () => {
      setIsLoded('loaded')
    })

    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showLoader && (
        <div className={`preloader__wrap ${isLoded}`}>
          <div className="preloader__box">
            <div className="circle">
              <Image src={preloader} alt="preloader" />
            </div>
            <div className="recharge text-center ms-2">
              <Image src={rechage} alt="rechage" />
            </div>
            <span className="pretext text-center">LatConecta</span>
          </div>
        </div>
      )}
    </>
  )
}

export default Preloader
