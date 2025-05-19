import Image from 'next/image'
import one from './../../public/img/phone/two.png'
import Link from 'next/link'
import bbel from '/public/img/payment/bbel.jpg'
import deltas from '/public/img/payment/deltas.jpg'
import nortex from '/public/img/payment/nortex.jpg'
import southzoon from '/public/img/payment/southzoon.jpg'

const AllTrainGrid = () => {
  return (
    <div className="flight__oneway__wrapper flight__grid__waywrapper">
      <div className="row g-4">
        {[bbel, deltas, nortex, southzoon].map((img, i) => (
          <div key={i} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="flight__oneway__item2">
              <div className="flight__oneway__inner2">
                <div className="table__two">
                  <ul className="bgwhite headline__text d-flex justify-content-center circle__input">
                    <li className="fz-24 fw-400 lato dtext">Model Name</li>
                  </ul>
                  <div className="tabletwo__body  justify-content-between w-100">
                    <div className="w-100 tablebg">
                      <span className="d-grid dadhes pt__30 pb__20 justify-content-center">
                        <span className="delta mb__10 d-block">
                          <Image
                            style={{
                              width: '30vh',
                              height: 'auto',
                            }}
                            src={one}
                            alt="img"
                          />
                        </span>
                        <span className="fz-16 fw-400 lato">Model Details</span>
                      </span>
                    </div>
                    <div className="right__tableprice d-flex justify-content-center w-100 tablebg">
                      <div className="boxes">
                        <span className="dollartext mb-1 fz-18 fw-500 lato d-flex align-items-center gap-2">
                          $99{' '}
                          <span className="troth fz-16 fw-400 lato">$111</span>
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

export default AllTrainGrid
