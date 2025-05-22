'use client'
import { RootState } from '@/redux/store'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import Telcel from '@/public/img/operators/finaltelcel.jpg'
import Att from '@/public/img/operators/finalAtt.jpg'
import ThirdLogo from '@/public/img/operators/finalthird.jpg'

const opratorImage = {
  TFEMXN_Q: Telcel,
  MVNO: Att,
  TFESV: ThirdLogo,
}

const OrderSummeryContent = () => {
  const { selectedPlan, plansDetails } = useSelector(
    (state: RootState) => state.plans
  )

  const { Skuid, amt, pdn } = selectedPlan
  const { product, msisdn } = plansDetails.msisdn_info

  return (
    <>
      <div className="order__summary__wrapper mb__30">
        <div className="over__responsive">
          <h5 className="summary__title">Order Summary</h5>
          <div className="order__table__fluid text-start">
            <div className="text-start order__table__items bg__add ">
              <span>Skuid</span>
              <span>Operrator</span>
              <span>PDN</span>
              <span>Mobile Number</span>
            </div>
            <div className="order__table__items">
              <span>{Skuid}</span>
              <span>{product}</span>
              <span>{pdn}</span>
              <span>{msisdn}</span>
            </div>
          </div>
          <div className="order__table__box">
            <div className="order__graph">
              <ul>
                <li>
                  <span>Sub Total:</span>
                  <span className="bg">{amt}</span>
                </li>
                <li>
                  <span>Promotional Code:</span>
                  <span className="bg">0</span>
                </li>
                <li>
                  <span>Total:</span>
                  <span className="bg">{amt}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="recharge__numberbtn">
        {/* <Link href="/order-summary" className="addanother">
          <span className="plus">
            <i className="material-symbols-outlined">add</i>
          </span>
          <span className="text fz-18 fw-600">Add another number Recharge</span>
        </Link>
        <Link href="/order-summary" className="addanother">
          <span className="plus">
            <i className="material-symbols-outlined">add</i>
          </span>
          <span className="text fz-18 fw-600">Add Promo Code</span>
        </Link> */}
      </div>
      <div className="probtn text-center pt__40">
        <Link href="/successful" className="cmn__btn">
          <span>Make Payment</span>
        </Link>
      </div>
    </>
  )
}

export default OrderSummeryContent
