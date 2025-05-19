import Link from 'next/link'

const PaymentMethodInfo = () => {
  return (
    <>
      <h4 className="mb__10">Payment Methods</h4>
      <div className="transactionid d-flex align-items-center">
        <span className="tran fz-18 fw-500">Transaction ID: 25246584</span>
        <span className="tran fz-18 fw-500">Total Payable Amount: $457</span>
      </div>
      <div className="card__text gap-3 mb__20 d-flex align-items-center justify-content-between">
        <span className="dtext xs-16 fw-400 fz-24 lato">
          Credit Card / Debit Card
        </span>
      </div>
      <div className="checkout__single-form">
        <p className="payment"></p>
        <div className="row g-3">
          <div className="col-lg-12">
            <div className="input-single">
              <label htmlFor="userCardNumber">Card number</label>
              <input
                type="number"
                name="user-card-number"
                id="userCardNumber"
                placeholder="2456 1665 5155 5151"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-single">
              <label htmlFor="userCardDate">Expiry date</label>
              <input type="text" id="userCardDate" placeholder="DD/MM/YY" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-single">
              <label htmlFor="userCvc">CVC / CVV</label>
              <input
                type="text"
                maxLength={3}
                name="user-card-cvc"
                id="userCvc"
                required
                placeholder="3 digits"
              />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="input-single">
              <label htmlFor="userCardNamecard">Nmae on card</label>
              <input
                type="text"
                name="user-card-namecard"
                id="userCardNamecard"
                placeholder="J. smith"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="input-esingl input-check payment__save">
        <input
          className="form-check-input"
          type="checkbox"
          id="saveForNextcard"
        />
        <label htmlFor="saveForNextcard">Save for my next payment</label>
      </div>
      <div className="text-center mt-4">
        <Link href="/successful" className="cmn__btn">
          <span>Payment Now</span>
        </Link>
      </div>
    </>
  )
}

export default PaymentMethodInfo
