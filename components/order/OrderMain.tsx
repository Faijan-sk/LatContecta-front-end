'use client'
import Link from 'next/link'
import PaymetOptions from '../common/PaymetOptions'
import Pagination from '../pagination/Pagination'
import OrderContent from './OrderContent'
import Packages from './Packages'

const OrderMain = () => {
  return (
    <section className="order__section pt__60 pb__60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10 col-lg-12">
            <div className="order__wrappers">
              {/* <div className="order__boxes"> */}

              <div>
                {/* Paymet Options Section  */}
                {/* <PaymetOptions /> */}

                {/* Order Content Section */}
                {/* <OrderContent /> */}
              </div>

              <div className="choose__valu">
                {/* All Packages Here  */}
                <Packages />

                {/* Pagination Here */}
                {/* <Pagination clss="justify-content-center pt__40" /> */}
              </div>

              {/* <div className="probtn text-center pt__40">
                <Link href="/order-summary" className="cmn__btn">
                  <span>Proceesd to checkout</span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderMain
