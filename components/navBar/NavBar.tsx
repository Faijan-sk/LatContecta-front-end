'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import favicon from '/public/img/logo/favicon.png'
import light_logo from '/public/img/logo/light-logo.png'
import logo from '/public/img/logo/logo.png'

const NavBar = ({
  clss,
  lightLogo,
}: {
  clss?: string
  lightLogo?: boolean
}) => {
  const [windowHeight, setWindowHeight] = useState(0)
  const [active, setActive] = useState(false)

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY
      setWindowHeight(height)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navBarTop)
    return () => {
      window.removeEventListener('scroll', navBarTop)
    }
  }, [])

  return (
    <header
      className={`header-section ${clss} ${
        windowHeight > 50 && 'menu-fixed animated fadeInDown'
      }`}
    >
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-menu">
            <Link href="/" className="logo">
              {lightLogo ? (
                <Image src={light_logo} alt="logo" />
              ) : (
                <Image src={logo} alt="logo" />
              )}
            </Link>
            <Link href="/" className="small__logo d-xl-none">
              <Image src={favicon} alt="logo" />
            </Link>
          </div>
          <div className="menu__right__components d-flex align-items-center">
            <div className="sigup__grp d-flex d-lg-none gap-2">
              <Link href="/signin" className="cmn__btn outline__btn">
                <span>Signin</span>
              </Link>
              <Link href="/signup" className="cmn__btn">
                <span>Signup</span>
              </Link>
            </div>
            <div className="header-bar d-lg-none">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <ul className="main-menu">
            <li className="grid__style">
              <Link href="/URL:void(0)" className="d-flex">
                <span>Home</span>
                <span className="icons">
                  <i className="material-symbols-outlined">expand_more</i>
                </span>
              </Link>
              <ul className="sub-menu">
                <li className="subtwohober">
                  <Link
                    href="URL:void(0)"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span className="text">Recharge & Bill Payment</span>
                    <span className="icon">
                      <i className="material-symbols-outlined">add</i>
                    </span>
                  </Link>
                  <ul className="sub-two">
                    <li className="subtwohober">
                      <Link href="//">Recharge & Bill Payment [1]</Link>
                    </li>
                    <li>
                      <Link href="/index-2">Recharge & Bill Payment [2]</Link>
                    </li>
                    <li>
                      <Link href="/index-3">Recharge & Bill Payment [3]</Link>
                    </li>
                  </ul>
                </li>
                <li className="subtwohober">
                  <Link
                    href="URL:void(0)"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span className="text">Booking Landing</span>
                    <span className="icon">
                      <i className="material-symbols-outlined">add</i>
                    </span>
                  </Link>
                  <ul className="sub-two">
                    <li>
                      <Link href="/booking-landing1">Booking Landing [1]</Link>
                    </li>
                    <li>
                      <Link href="/booking-landing2">Booking Landing [2]</Link>
                    </li>
                    <li>
                      <Link href="/booking-landing3">Booking Landing [3]</Link>
                    </li>
                  </ul>
                </li>
                <li className="subtwohober">
                  <Link href="/hotel-book">Hotel Booking</Link>
                </li>
                <li>
                  <Link href="/flight-book">Flight Booking</Link>
                </li>
                <li>
                  <Link href="/train-book">Train Booking</Link>
                </li>
                <li>
                  <Link href="/bus-book">Bus Booking</Link>
                </li>
                <li>
                  <Link href="/cars-book">Car Booking</Link>
                </li>
              </ul>
            </li>
            <li className="grid__style">
              <Link href="/URL:void(0)" className="d-flex">
                <span>Recharge & Bill Payment</span>
                <span className="icons">
                  <i className="material-symbols-outlined">expand_more</i>
                </span>
              </Link>
              <ul className="sub-menu submenu__recharge">
                <li className="subtwohober">
                  <Link href="//">Recharge & Bill Payment [1]</Link>
                </li>
                <li>
                  <Link href="/index-2">Recharge & Bill Payment [2]</Link>
                </li>
                <li>
                  <Link href="/index-3">Recharge & Bill Payment [3]</Link>
                </li>
                <li>
                  <Link href="/card">Card</Link>
                </li>
                <li>
                  <Link href="/broadband">Broadband</Link>
                </li>
                <li>
                  <Link href="/landline">Landline</Link>
                </li>
                <li>
                  <Link href="/cabletv">Cable Tv</Link>
                </li>
                <li>
                  <Link href="/electricity">Electricity</Link>
                </li>
                <li>
                  <Link href="/gas">Gas</Link>
                </li>
                <li>
                  <Link href="/water">Water</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/URL:void(0)" className="d-flex">
                <span>Booking</span>
                <span className="icons">
                  <i className="material-symbols-outlined">expand_more</i>
                </span>
              </Link>
              <ul className="sub-menu submenu__booking">
                <li className="d subtwohober">
                  <Link href="/URL:void(0)">
                    <span className="fz-18 dtext d-block fw-700 lato">
                      Hotel
                    </span>
                  </Link>
                  <Link href="/hotel-book">Hotel Booking</Link>
                  <Link href="/hotel-list">Hotel List</Link>
                  <Link href="/hotel-grid">Hotel Grid</Link>
                  <Link href="/hotel-details">Hotel Details</Link>
                  <Link href="/hotel-details-confirm">Confirm Details</Link>
                  <Link href="/hotel-payment">Payment</Link>
                  <Link href="/hotel-invoice">Invoice</Link>
                  <Link href="/hotel-email">Email Template</Link>
                </li>
                <li className="d">
                  <Link href="/URL:void(0)">
                    <span className="fz-18 dtext d-block fw-700 lato">
                      Flight
                    </span>
                  </Link>
                  <Link href="/flight-book">Flights Booking</Link>
                  <Link href="/flight-round">Flights One Way</Link>
                  <Link href="/flight-oneway">Flights Round Trip</Link>
                  <Link href="/flight-confirm-details">Confirm Details</Link>
                  <Link href="/flight-payment">Flight Payment</Link>
                  <Link href="/flight-invoice">Flight Invoice</Link>
                  <Link href="/flight-email">Flight Email Template</Link>
                </li>
                <li className="d">
                  <Link href="/URL:void(0)">
                    <span className="fz-18 dtext d-block fw-700 lato">
                      Train
                    </span>
                  </Link>
                  <Link href="/train-book">Train Booking</Link>
                  <Link href="/train-list">Train List</Link>
                  <Link href="/train-grid">Train Grid</Link>
                  <Link href="/train-oneway">Train Round Trip</Link>
                  <Link href="/train-bookingsystem">Booking System</Link>
                  <Link href="/train-confirm-details">Confirm Details</Link>
                  <Link href="/train-payment">Train Payment</Link>
                  <Link href="/train-invocie">Train Invoice</Link>
                  <Link href="/train-email">Train Email Template</Link>
                </li>
                <li className="d">
                  <Link href="/URL:void(0)">
                    <span className="fz-18 dtext d-block fw-700 lato">Bus</span>
                  </Link>
                  <Link href="/bus-book">Bus Booking</Link>
                  <Link href="/bus-list">Bus List</Link>
                  <Link href="/bus-oneway">Round Trip</Link>
                  <Link href="/bus-bookingsystem">Bus Booking System</Link>
                  <Link href="/bus-confirm-details">Confirm Details</Link>
                  <Link href="/bus-payment">Bus Payment</Link>
                  <Link href="/bus-invocie">Bus Invoice</Link>
                  <Link href="/bus-email">Bus Email Template</Link>
                </li>
                <li className="d">
                  <Link href="/URL:void(0)">
                    <span className="fz-18 dtext d-block fw-700 lato">Car</span>
                  </Link>
                  <Link href="/cars-book">Car Booking</Link>
                  <Link href="/car-list">Car List</Link>
                  <Link href="/car-grid">Car Grid</Link>
                  <Link href="/car-confirm-details">Confirm Details</Link>
                  <Link href="/car-payment">Car Payment</Link>
                  <Link href="/car-invocie">Car Invoice</Link>
                  <Link href="/car-email">Car Email Template</Link>
                </li>
              </ul>
            </li>
            <li className="grid__style">
              <Link href="/URL:void(0)" className="d-flex">
                <span>Blog</span>
                <span className="icons">
                  <i className="material-symbols-outlined">expand_more</i>
                </span>
              </Link>
              <ul className="sub-menu">
                <li className="subtwohober">
                  <Link href="/blog/list">Blog List</Link>
                </li>
                <li>
                  <Link href="/blog/grid">Blog Grid</Link>
                </li>
                <li>
                  <Link href="/blog/details">Blog Details</Link>
                </li>
              </ul>
            </li>
            <li className="grid__style">
              <Link href="/URL:void(0)" className="d-flex">
                <span>Pages</span>
                <span className="icons">
                  <i className="material-symbols-outlined">expand_more</i>
                </span>
              </Link>
              <ul className="sub-menu">
                <li className="subtwohober">
                  <Link
                    href="URL:void(0)"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span className="text">About</span>
                    <span className="icon">
                      <i className="material-symbols-outlined">add</i>
                    </span>
                  </Link>
                  <ul className="sub-two">
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="/chat-us">Chat us</Link>
                    </li>
                    <li>
                      <Link href="/favourites">Favorites</Link>
                    </li>
                    <li>
                      <Link href="/help">Help page</Link>
                    </li>
                  </ul>
                </li>
                <li className="subtwohober">
                  <Link
                    href="URL:void(0)"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span className="text">Support</span>
                    <span className="icon">
                      <i className="material-symbols-outlined">add</i>
                    </span>
                  </Link>
                  <ul className="sub-two">
                    <li>
                      <Link href="/help-support">Support</Link>
                    </li>
                    <li>
                      <Link href="/help-knowledge">Support Knowledge</Link>
                    </li>
                    <li>
                      <Link href="/help-knowledge-details">
                        Support Details
                      </Link>
                    </li>
                    <li>
                      <Link href="/video-tutorial">Support Tutorial</Link>
                    </li>
                    <li>
                      <Link href="/submit-ticket">Submit Ticket</Link>
                    </li>
                  </ul>
                </li>
                <li className="subtwohober">
                  <Link
                    href="URL:void(0)"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span className="text">My Profile</span>
                    <span className="icon">
                      <i className="material-symbols-outlined">add</i>
                    </span>
                  </Link>
                  <ul className="sub-two">
                    <li>
                      <Link href="/personal-information">Personal info</Link>
                    </li>
                    <li>
                      <Link href="/login-security">Login Security</Link>
                    </li>
                    <li>
                      <Link href="/favourites">Favourites</Link>
                    </li>
                    <li>
                      <Link href="/transaction">Transaction</Link>
                    </li>
                    <li>
                      <Link href="/password-change">Change Password</Link>
                    </li>
                    <li>
                      <Link href="/notification">Notification</Link>
                    </li>
                  </ul>
                </li>
                <li className="subtwohober">
                  <Link
                    href="URL:void(0)"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span className="text">Signup & Register</span>
                    <span className="icon">
                      <i className="material-symbols-outlined">add</i>
                    </span>
                  </Link>
                  <ul className="sub-two">
                    <li>
                      <Link href="/signup">Signup Register</Link>
                    </li>
                    <li>
                      <Link href="/password">Password Change</Link>
                    </li>
                    <li>
                      <Link href="/number-toreach">Signup Number</Link>
                    </li>
                    <li>
                      <Link href="/varified-number">Varified Number</Link>
                    </li>
                    <li>
                      <Link href="/signin">Sign in</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/faq">Faq Page</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/error">404</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/URL:void(0)" className="d-flex">
                <span>Elements</span>
                <span className="icons">
                  <i className="material-symbols-outlined">expand_more</i>
                </span>
              </Link>
              <ul className="sub-menu submenu__element">
                <li className="subtwohober">
                  <Link href="/typography" className="d-lg-none">
                    Typography
                  </Link>
                  <Link href="/typography" className="mh__img">
                    Typography
                  </Link>
                </li>
                <li>
                  <Link href="/blocks-home" className="d-lg-none">
                    Banner
                  </Link>
                  <Link href="/blocks-home" className="mh__img">
                    Banner
                  </Link>
                </li>
                <li>
                  <Link href="/blocks-allblocks" className="d-lg-none">
                    All Blocks
                  </Link>
                  <Link href="/blocks-allblocks" className="mh__img">
                    All Blocks
                  </Link>
                </li>
                <li>
                  <Link href="/blocks-ordersystem" className="d-lg-none">
                    Order System
                  </Link>
                  <Link href="/blocks-ordersystem" className="mh__img">
                    Order System
                  </Link>
                </li>
                <li>
                  <Link href="/blocks-about" className="d-lg-none">
                    About & Refer
                  </Link>
                  <Link href="/blocks-about" className="mh__img">
                    About & Refer
                  </Link>
                </li>
                <li>
                  <Link href="/blocks-list" className="d-lg-none">
                    Page List
                  </Link>
                  <Link href="/blocks-list" className="mh__img">
                    Page List
                  </Link>
                </li>
                <li className="subtwohober">
                  <Link href="/blocks-grid" className="d-lg-none">
                    Page Grid
                  </Link>
                  <Link href="/blocks-grid" className="mh__img">
                    Page Grid
                  </Link>
                </li>
                <li>
                  <Link href="/blocks-invoice" className="d-lg-none">
                    Invoice/Email
                  </Link>
                  <Link href="/blocks-invoice" className="mh__img">
                    Invoice/Email
                  </Link>
                </li>
                <li>
                  <Link href="/blocks-signin" className="d-lg-none">
                    Sigin/sigup
                  </Link>
                  <Link href="/blocks-signin" className="mh__img">
                    Sigin/sigup
                  </Link>
                </li>
                <li>
                  <Link href="/blocks-confirm-details" className="d-lg-none">
                    Confirm Details
                  </Link>
                  <Link href="/blocks-confirm-details" className="mh__img">
                    Confirm Details
                  </Link>
                </li>
                <li>
                  <Link href="/blocks-payments" className="d-lg-none">
                    Payment System
                  </Link>
                  <Link href="/blocks-payments" className="mh__img">
                    Payment System
                  </Link>
                </li>
                <li>
                  <Link href="/successful" className="d-lg-none">
                    Successful
                  </Link>
                  <Link href="/successful" className="mh__img">
                    Successful
                  </Link>
                </li>
                <li>
                  <Link href="/blocks-personalinfo" className="d-lg-none">
                    Personal Info
                  </Link>
                  <Link href="/blocks-personalinfo" className="mh__img">
                    Personal Info
                  </Link>
                </li>
                <li>
                  <Link href="/blocks-testimonial" className="d-lg-none">
                    Testimonial
                  </Link>
                  <Link href="/blocks-testimonial" className="mh__img">
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link href="/blocks-faqs" className="d-lg-none">
                    Faq
                  </Link>
                  <Link href="/blocks-faqs" className="mh__img">
                    Faq
                  </Link>
                </li>
                <li>
                  <Link href="/blocks-support" className="d-lg-none">
                    Support
                  </Link>
                  <Link href="/blocks-support" className="mh__img">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/blocks-contact" className="d-lg-none">
                    Contact Us
                  </Link>
                  <Link href="/blocks-contact" className="mh__img">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/blocks-error" className="d-lg-none">
                    Error
                  </Link>
                  <Link href="/blocks-error" className="mh__img">
                    Error
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sigup__grp d-lg-none d-flex align-items-center">
              <Link href="/signin" className="cmn__btn outline__btn">
                <span>Signin</span>
              </Link>
              <Link href="/signup" className="cmn__btn">
                <span>Signup</span>
              </Link>
            </li>
          </ul>
          <div className="sigin__grp d-flex align-items-center">
            <Link href="/signin" className="cmn__btn outline__btn">
              <span>Signin</span>
            </Link>
            <Link href="/signup" className="cmn__btn">
              <span>Signup</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
