import Image from 'next/image'
import Select from '../select/Select'
import ata5g from '/public/img/payment/ata5g.png'
import bang from '/public/img/payment/bang.png'
import bsnl from '/public/img/payment/bsnl.png'
import easygo from '/public/img/payment/easygo.png'
import met from '/public/img/payment/met.png'
import sprint from '/public/img/payment/sprint.png'
import verizon from '/public/img/payment/verizon.png'

const countryCode = [
  { id: 1, name: '+88' },
  { id: 2, name: '+99' },
  { id: 3, name: '+159' },
]

const operator = [
  { id: 1, name: 'Operator Detected' },
  { id: 2, name: 'Grameenphone' },
  { id: 3, name: 'Robi' },
  { id: 4, name: 'Banglalink' },
  { id: 5, name: 'Artel' },
]

const OrderContent = () => {
  return (
    <>
      {/* <span className="mobiletext fz-18 fw-500 pb__20">
        Enter the receiver mobile number
      </span> */}
      <form className="mb__40">
        <div className="flag__select">
          {/* <span className="flag">
            <Image src={bang} alt="img" />
          </span> */}
          {/* select here */}
          {/* <Select data={countryCode} /> */}
        </div>
        {/* <input type="text" placeholder="Enter the receiver mobile number" />
        <button type="submit" className="cmn__btn">
          <span>
            <i className="material-symbols-outlined">rocket_launch</i>
          </span>
        </button> */}
      </form>

      <div className="oparator__texts">
        {/* select here */}
        <Select data={operator} />
      </div>
      <ul className="main__operator">
        <li>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="opa1"
          />
          <label className="form-check-label" htmlFor="opa1">
            <Image src={met} alt="card" />
          </label>
        </li>
        <li>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="opa2"
          />
          <label className="form-check-label" htmlFor="opa2">
            <Image src={verizon} alt="card" />
          </label>
        </li>
        <li>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="opa3"
          />
          <label className="form-check-label" htmlFor="opa3">
            <Image src={ata5g} alt="card" />
          </label>
        </li>
        <li>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="opa4"
          />
          <label className="form-check-label" htmlFor="opa4">
            <Image src={bsnl} alt="card" />
          </label>
        </li>
        <li>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="opa5"
          />
          <label className="form-check-label" htmlFor="opa5">
            <Image src={easygo} alt="card" />
          </label>
        </li>
        <li>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="opa6"
          />
          <label className="form-check-label" htmlFor="opa6">
            <Image src={sprint} alt="card" />
          </label>
        </li>
      </ul>
    </>
  )
}

export default OrderContent
