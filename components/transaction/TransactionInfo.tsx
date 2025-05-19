import Pagination from "@/components/pagination/Pagination";
import Image from "next/image";
import Link from "next/link";
import g_check from "/public/img/payment/g-check.png";
import g_cross from "/public/img/payment/g-cross.png";
import g_worning from "/public/img/payment/g-worning.png";

const TransactionInfo = () => {
  return (
    <div className="personal__favorites">
      <div className="personal__info__box">
        <div className="per__ittle d-flex align-items-center">
          <h5>All History</h5>
          <Link
            href="URL:void(0)"
            className="edit d-flex align-items-center gap-2"
          >
            <span className="icon delete">
              <i className="material-symbols-outlined">delete</i>
            </span>
            <span className="fz-18 fw-600">Clear Data</span>
          </Link>
        </div>
        <div className="calender__date">
          <input
            type="text"
            id="datepicker2"
            placeholder="01/01/2022 - 01/06/2023"
          />
          <i className="material-symbols-outlined">calendar_month</i>
        </div>
        <div className="table__system pb__24">
          <table className="table1">
            <thead>
              <tr>
                <th>Date</th>
                <th>Transaction</th>
                <th>Amount</th>
                <th>Fee</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01 Jan</td>
                <td>Mobile Recharge</td>
                <td>$750.00</td>
                <td>-$50.00</td>
                <td>
                  <Link href="/URL:void(0)" className="edi">
                    <Image src={g_check} alt="img" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>27 Jan</td>
                <td>Electric Bill</td>
                <td>$320.00</td>
                <td>-$15.00</td>
                <td>
                  <Link href="/URL:void(0)" className="edi">
                    <Image src={g_cross} alt="img" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>24 Feb</td>
                <td>Cable TV Bill</td>
                <td>$410.00</td>
                <td>-$30.00</td>
                <td>
                  <Link href="/URL:void(0)" className="edi">
                    <Image src={g_check} alt="img" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>7 Mar</td>
                <td>Flight Booking</td>
                <td>$777.00</td>
                <td>-$20.00</td>
                <td>
                  <Link href="/URL:void(0)" className="edi">
                    <Image src={g_check} alt="img" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>27 Apr</td>
                <td>Gas Bill</td>
                <td>$450.00</td>
                <td>-$5.00</td>
                <td>
                  <Link href="/URL:void(0)" className="edi">
                    <Image src={g_cross} alt="img" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>01 Jun</td>
                <td>Flight Booking</td>
                <td>$440.00</td>
                <td>-$10.00</td>
                <td>
                  <Link href="/URL:void(0)" className="edi">
                    <Image src={g_worning} alt="img" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination section here */}
        <Pagination />
      </div>
    </div>
  );
};

export default TransactionInfo;
