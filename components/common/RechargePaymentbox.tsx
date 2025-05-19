import Link from 'next/link'
import Select from '../select/Select'

const operator = [
  { id: 1, name: 'Select Your Operator' },
  { id: 2, name: '1st Operator' },
  { id: 3, name: '2nd Operator' },
  { id: 4, name: '3rd Operator' },
]

const offers = [
  { id: 1, name: 'Select offers' },
  { id: 2, name: '1st Offers' },
  { id: 3, name: '2nd Offers' },
  { id: 4, name: '3rd Offers' },
]

const RechargePaymentbox = ({ title }: { title: string }) => {
  return (
    <div className="mobile__recharge text-center">
      <h5>{title}</h5>
      {/* <div className="prepaid__option">
        <div className="prepaid__check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="pyradio2"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="pyradio2">
            Prepaid
          </label>
        </div>
        <div className="prepaid__check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="pyradio1"
          />{' '}
          <label className="form-check-label" htmlFor="pyradio1">
            Postpaid
          </label>
        </div>
      </div> */}

      <form action="URL:void(0)" className="pb__40">
        <div className="row g-4">
          <div className="col-lg-8">
            <input type="text" placeholder="Enter Your Account Number ..." />
          </div>
          <div className="col-lg-4">
            <input type="text" placeholder="Enter Ammount" />
          </div>
          <div className="col-lg-4">
            {/* select here */}
            <Select data={operator} />
          </div>
          <div className="col-lg-8">
            {/* select here */}
            <input type="number" placeholder="Enter Mobile" />
          </div>
        </div>
      </form>
      <Link href="/order" className="cmn__btn no-underline">
        <span>Continue recharge</span>
      </Link>
    </div>
  )
}

export default RechargePaymentbox
