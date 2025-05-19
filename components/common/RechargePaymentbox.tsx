import Link from 'next/link'
import Select from '../select/Select'

const operator = [
  { id: 1, name: 'Select Your Operator' },
  { id: 2, name: 'Telcel' },
  { id: 3, name: 'AT & T' },
  { id: 4, name: 'Movistara' },
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
          <div className="col-lg-12">
            <input type="number" placeholder="Enter Your Mobile Number ..." />
          </div>
          <div className="col-lg-6">
            {/* select here */}
            <Select data={operator} />
          </div>

          <div className="col-lg-6">
            <input type="text" placeholder="Enter Ammount" />
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
