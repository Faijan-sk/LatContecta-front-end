import Link from 'next/link'
import Select from '../select/Select'

const operator = [
  { id: 1, name: 'Select Your Operator' },
  { id: 2, name: '1st Operator' },
  { id: 3, name: '2nd Operator' },
  { id: 4, name: '3rd Operator' },
]

const state = [
  { id: 1, name: 'Select Your State' },
  { id: 2, name: '1st State' },
  { id: 3, name: '2nd State' },
  { id: 4, name: '3rd State' },
]

const RechargePaymentboxTwo = ({ title }: { title: string }) => {
  return (
    <div className="mobile__recharge text-center">
      <h5 className="mb-4">{title}</h5>
      <form action="URL:void(0)" className="mb-3">
        <div className="row g-4">
          <div className="col-lg-6">
            <input type="number" placeholder="Credit Card Number" />
          </div>
          <div className="col-lg-6">
            {/* select here */}
            <Select data={operator} />
          </div>
          <div className="col-lg-6">
            {/* select here */}
            <Select data={state} />
          </div>
          <div className="col-lg-6">
            <input type="number" placeholder="Enter Bill Amount" />
          </div>
        </div>
      </form>
      <div className="payment__check d-flex justify-content-start">
        <input
          className="form-check-input"
          type="checkbox"
          id="paycheckon1"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="paycheckon1">
          I Agree this payment system
        </label>
      </div>
      <Link href="/order-summary" className="cmn__btn mt-5">
        <span>Continue Payment</span>
      </Link>
    </div>
  )
}

export default RechargePaymentboxTwo
