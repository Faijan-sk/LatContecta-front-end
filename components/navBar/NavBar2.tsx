'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const NavBar = ({
  clss,
  lightLogo,
}: {
  clss?: string
  lightLogo?: boolean
}) => {
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`header-section ${clss} ${
        windowHeight > 30 ? 'menu-fixed animated fadeInDown' : ''
      }`}
    >
      <div className="container">
        <div className="header-wrapper p-2">
          <div className="logo-menu no-underline">
            <Link href="/" className="no-underline hover:no-underline">
              <h3 className="text-dark no-underline hover:no-underline">
                LatConecta
              </h3>
            </Link>
          </div>
          <div className="menu__right__components d-flex align-items-center">
            {/* Mobile Login Button - Visible only on small screens */}
            {/* <div className="d-flex d-lg-none me-3">
              <Link href="/login" className="cmn__btn no-underline">
                <span>Login</span>
              </Link>
            </div>
            <div className="sigin__grp d-flex align-items-center">
              <Link href="/login" className="cmn__btn no-underline">
                <span>Login</span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
