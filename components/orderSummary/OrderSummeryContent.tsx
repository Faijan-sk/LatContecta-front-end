import Link from 'next/link'

const OrderSummeryContent = () => {
  return (
    <>
      <div className="order__summary__wrapper mb__30">
        <div className="over__responsive">
          <h5 className="summary__title">Order Summary</h5>
          <div className="order__table__fluid">
            <div className="order__table__items bg__add">
              <span>Recipient No</span>
              <span>Operrator</span>
              <span>Receive amount</span>
              <span>Amount</span>
            </div>
            <div className="order__table__items">
              <span>(406) 555-0120</span>
              <span>AT & T</span>
              <span>$4531.00</span>
              <span>$4531.00</span>
            </div>
          </div>
          <div className="order__table__box">
            <div className="order__graph">
              <ul>
                <li>
                  <span>Sub Total:</span>
                  <span className="bg">$4531.00</span>
                </li>
                <li>
                  <span>Promotional Code:</span>
                  <span className="bg">0</span>
                </li>
                <li>
                  <span>Total:</span>
                  <span className="bg">$4531.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="recharge__numberbtn">
        <Link href="/order-summary" className="addanother">
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
        </Link>
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
