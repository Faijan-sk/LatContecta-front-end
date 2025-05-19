import Image from "next/image";
import PrivacyTab from "../common/PrivacyTab";
import BookingTab from "./BookingTab";
import MyAccountTab from "./MyAccountTab";
import PaymentTab from "./PaymentTab";
import RechargeAndBillTab from "./RechargeAndBillTab";
import TransactionTab from "./TransactionTab";
import bookmoney from "/public/img/svg/bookmoney.svg";
import checkpayment from "/public/img/svg/checkpayment.svg";
import file_transfer from "/public/img/svg/file-transfer.svg";
import log from "/public/img/svg/log.svg";
import password_change from "/public/img/svg/password-change.svg";
import recharge from "/public/img/svg/recharge.svg";

const Faqs = () => {
  return (
    <section className="personal__information pt__60 pb__60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="personal__infotabs">
              <ul className="nav nav-tabs" id="myTabinfor" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#homeinfo1"
                    type="button"
                    role="tab"
                    aria-controls="homeinfo1"
                    aria-selected="true"
                  >
                    <span className="icon">
                      <Image src={recharge} alt="login" />
                    </span>
                    <span>Recharge & Bill</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profileinfo2"
                    type="button"
                    role="tab"
                    aria-controls="profileinfo2"
                    aria-selected="false"
                  >
                    <span className="icon">
                      <Image src={checkpayment} alt="login" />
                    </span>
                    <span>Payments</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#contactinfo3"
                    type="button"
                    role="tab"
                    aria-controls="contactinfo3"
                    aria-selected="false"
                  >
                    <span className="icon">
                      <Image src={bookmoney} alt="login" />
                    </span>
                    <span>Booking</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tabre1"
                    type="button"
                    role="tab"
                    aria-controls="contact-tabre1"
                    aria-selected="false"
                  >
                    <span className="icon">
                      <Image src={file_transfer} alt="login" />
                    </span>
                    <span>Transaction</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tabre2"
                    type="button"
                    role="tab"
                    aria-controls="contact-tabre2"
                    aria-selected="false"
                  >
                    <span className="icon">
                      <Image src={password_change} alt="login" />
                    </span>
                    <span>Privacy</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tabre3"
                    type="button"
                    role="tab"
                    aria-controls="contact-tabre3"
                    aria-selected="false"
                  >
                    <span className="icon">
                      <Image src={log} alt="login" />
                    </span>
                    <span>My Account</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="personal__infobody">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="homeinfo1"
                  role="tabpanel"
                >
                  {/* Recharge And Bill Tab */}
                  <RechargeAndBillTab />
                </div>
                <div
                  className="tab-pane fade"
                  id="profileinfo2"
                  role="tabpanel"
                >
                  {/* Payment Tab*/}
                  <PaymentTab />
                </div>
                <div
                  className="tab-pane fade"
                  id="contactinfo3"
                  role="tabpanel"
                >
                  {/* Booking Tab */}
                  <BookingTab />
                </div>
                <div
                  className="tab-pane fade"
                  id="contact-tabre1"
                  role="tabpanel"
                >
                  {/* Transaction Tab */}
                  <TransactionTab />
                </div>
                <div
                  className="tab-pane fade"
                  id="contact-tabre2"
                  role="tabpanel"
                >
                  {/* Privacy Tab */}
                  <PrivacyTab />
                </div>
                <div
                  className="tab-pane fade"
                  id="contact-tabre3"
                  role="tabpanel"
                >
                  {/* My Account Tab */}
                  <MyAccountTab />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
