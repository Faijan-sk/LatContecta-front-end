'use client'

import homeFacilitiesData from '@/data/homeFacilitiesData'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Select from '../select/Select'
import manElement from '/public/img/banner/man-element.png'
import amount from '/public/img/banner/three/amount.png'
import call from '/public/img/banner/three/call.png'
import country from '/public/img/banner/three/country.png'
import institute from '/public/img/banner/three/institute.png'
import payment from '/public/img/banner/three/payment.png'
import touchElement from '/public/img/banner/touch-element.png'
import watch from '/public/img/banner/wtach.png'
import aritel from '/public/img/payment/aritel.png'
import mqn from '/public/img/payment/mqn.png'
import paypal from '/public/img/payment/paypal.png'
import visa from '/public/img/payment/visa.png'
import ballElement from '/public/img/refer/referball.png'

const countrySelect = [
  { id: 1, name: ' Select country' },
  { id: 2, name: 'Us' },
  { id: 3, name: 'Uk' },
]

const instituteSelect = [
  { id: 1, name: 'Institute' },
  { id: 2, name: 'Brand Limited' },
  { id: 3, name: 'Brand Limited' },
]

const paymentSelect = [
  { id: 1, name: 'Payment option' },
  { id: 2, name: 'Visa' },
  { id: 3, name: 'Pyapal' },
  { id: 4, name: 'Bank' },
]

const Banner = () => {
  const pathName = usePathname()

  return (
    <section className="banner__three pt-80 bgsection">
      <div className="banner__wrapper__two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12">
              <div className="fasilities__wrapper pb__40">
                <div className="fasilities__inner fasilities__innertwo pt-4 pb-4">
                  {homeFacilitiesData.map(({ id, icon, href, text }) => (
                    <Link
                      key={id}
                      href={href}
                      className={`fasilities__item align-items-center d-flex ${
                        href === pathName ? 'active' : ''
                      }`}
                    >
                      <span className="icon">
                        <Image src={icon} alt="icon" />
                      </span>
                      <span className="fz-18 pratext d-block">{text}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-6">
              <div className="recharge__paymentbox recharge__pymentboxthree mb__30">
                <div className="mobile__recharge text-center">
                  <h4 className="mb__30 fz-30 fw-700">
                    Pay your Electricity Bill
                  </h4>
                  <form
                    action="URL:void(0)"
                    className="mb-3 form__thumb__added"
                  >
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="payment__iconaddeds relative">
                          <div className="icon">
                            <Image src={country} alt="img" />
                          </div>
                          {/* select here */}
                          <Select data={countrySelect} />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="payment__iconaddeds">
                          <div className="icon">
                            <Image src={institute} alt="img" />
                          </div>
                          {/* select here */}
                          <Select data={instituteSelect} />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="payment__iconaddeds">
                          <div className="icon">
                            <Image src={payment} alt="img" />
                          </div>
                          {/* select here */}
                          <Select data={paymentSelect} />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="payment__iconaddeds">
                          <div className="icon">
                            <Image src={call} alt="img" />
                          </div>
                          <input type="text" placeholder="Number" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="payment__iconaddeds">
                          <div className="icon">
                            <Image src={amount} alt="img" />
                          </div>
                          <input type="number" placeholder="Amount" />
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="payment__check d-flex justify-content-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="paycheckon2"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="paycheckon2">
                      Save account number
                    </label>
                  </div>
                  <Link href="/order" className="cmn__btn mt-5">
                    <span>Continue recharge</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
              <div className="pay__sponsor__grid">
                <Link href="/URL:void(0)" className="morehead">
                  Promo
                </Link>
                <div className="promo__box">
                  <div className="thumb">
                    <Image src={aritel} alt="img" />
                  </div>
                  <div className="content">
                    <span className="fz-16 link">SWyro5ruq2Eu</span>
                    <Link href="/help-support">
                      <span>Apply</span>
                      <span className="icon">
                        <i className="material-symbols-outlined">east</i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="promo__box">
                  <div className="thumb">
                    <Image src={paypal} alt="img" />
                  </div>
                  <div className="content">
                    <span className="fz-16 link">OayKsH7Xmr0O</span>
                    <Link href="/help-support">
                      <span>Apply</span>
                      <span className="icon">
                        <i className="material-symbols-outlined">east</i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="promo__box">
                  <div className="thumb">
                    <Image src={mqn} alt="img" />
                  </div>
                  <div className="content">
                    <span className="fz-16 link">olZUIdJcjTPG</span>
                    <Link href="/help-support">
                      <span>Apply</span>
                      <span className="icon">
                        <i className="material-symbols-outlined">east</i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="promo__box">
                  <div className="thumb">
                    <Image src={visa} alt="img" />
                  </div>
                  <div className="content">
                    <span className="fz-16 link">76VpS7e59FWP</span>
                    <Link href="/help-support">
                      <span>Apply</span>
                      <span className="icon">
                        <i className="material-symbols-outlined">east</i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="more text-center">
                  <Link href="/help-support" className="morebtn">
                    More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* shape */}
      <div className="element__man">
        <Image src={manElement} alt="img" className="img-fluid" />
      </div>
      <div className="watch__element">
        <Image src={watch} alt="element" className="img-fluid" />
      </div>
      <div className="touch__element">
        <Image src={touchElement} alt="element" className="img-fluid" />
      </div>
      <div className="ball__element">
        <Image src={ballElement} alt="img" className="img-fluid" />
      </div>
      {/* shape */}
    </section>
  )
}

export default Banner
