import Link from "next/link";

const InvoiceMain = () => {
  return (
    <section className="order__section pt__60 pb__60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10 col-lg-12">
            <div className="order__wrappers invoice__wrapper">
              <div className="invoice__textwrapper mb__30">
                <div className="invoice__leftbox">
                  <h3>Invoice</h3>
                  <div className="invoice__leftnumber">
                    <span className="bage">Account number</span>
                    <span className="counting">325 546 744</span>
                  </div>
                  <div className="invoice__leftnumber">
                    <span className="bage">Booking Date</span>
                    <span className="counting">07/11/2023</span>
                  </div>
                  <div className="invoice__leftnumber">
                    <span className="bage">Payment Method</span>
                    <span className="counting">Credit Card</span>
                  </div>
                </div>
                <div className="invoice__righttbox">
                  <span className="hirename">Fire&#39;s Name</span>
                  <h5 className="name">Leslie Alexander</h5>
                  <div className="invoice__leftnumber">
                    <span className="bage">Age</span>
                    <span className="counting">31</span>
                  </div>
                  <div className="invoice__leftnumber">
                    <span className="bage">Phone</span>
                    <span className="counting">(684) 555-0102</span>
                  </div>
                  <div className="invoice__leftnumber">
                    <span className="bage">Email</span>
                    <span className="counting">nvt.isst.nute@gmail.com</span>
                  </div>
                  <div className="invoice__leftnumber">
                    <span className="bage">Addres</span>
                    <span className="counting">Royal Ln. Mesa, New Jersey</span>
                  </div>
                </div>
              </div>
              <div className="invoice__journey mb__30">
                <h5 className="dtext border__bottom">Details</h5>
                <div className="d-flex journey__invoicedata">
                  <ul className="jou__data">
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Build the model
                      </span>
                      <span className="fz-18 fw-600 lato dtext">
                        Creta - MBW
                      </span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Car category
                      </span>
                      <span className="fz-18 fw-600 lato dtext">
                        Delta Enterprise
                      </span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">Special</span>
                      <span className="fz-18 fw-600 lato dtext">
                        Car on Self Drive
                      </span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Rent start Date
                      </span>
                      <span className="fz-18 fw-600 lato dtext">22-12-23</span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Rent End Date
                      </span>
                      <span className="fz-18 fw-600 lato dtext">23-12-23</span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Total Days
                      </span>
                      <span className="fz-18 fw-600 lato dtext">1</span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Car Regn. No
                      </span>
                      <span className="fz-18 fw-600 lato dtext">6651 EY9F</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">Out KM(S)</span>
                      <span className="fz-18 fw-600 lato dtext">1012</span>
                    </li>
                  </ul>
                  <ul className="jou__data jou__tadatwo">
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">In KM(S)</span>
                      <span className="fz-18 fw-600 lato dtext">2123</span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Ttal km(s)
                      </span>
                      <span className="fz-18 fw-600 lato dtext">356</span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Mode of Payment
                      </span>
                      <span className="fz-18 fw-600 lato dtext">
                        Credit Card
                      </span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Transaction
                      </span>
                      <span className="fz-18 fw-600 lato dtext">Success</span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Security deposit
                      </span>
                      <span className="fz-18 fw-600 lato dtext">$7413</span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Licence Issued
                      </span>
                      <span className="fz-18 fw-600 lato dtext">New York</span>
                    </li>
                    <li className="d-flex border__bottom align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Passport No
                      </span>
                      <span className="fz-18 fw-600 lato dtext">A4455444</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between">
                      <span className="fz-18 fw-400 lato dtext">
                        Id Issuing City
                      </span>
                      <span className="fz-18 fw-600 lato dtext">New York</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order__summary__wrapper mb__40">
                <div className="over__responsive">
                  <h5 className="summary__title">Booking Summary</h5>
                  <div className="order__table__fluid order__table__flight">
                    <div className="order__table__items bg__add">
                      <span className="fz-18 fw-600 lato dtext d-block">
                        Car Details
                      </span>
                      <span className="fz-18 fw-600 lato dtext d-block">
                        Base Fare
                      </span>
                      <span className="fz-18 fw-600 lato dtext d-block">
                        Taxes & Fee
                      </span>
                      <span className="fz-18 fw-600 lato dtext d-block">
                        Amount
                      </span>
                    </div>
                    <div className="order__table__items">
                      <span>Delta 71613 -</span>
                      <span>$99.00</span>
                      <span>$13</span>
                      <span>$114.00</span>
                    </div>
                    <div className="order__table__itemsflight pb__15">
                      <span className="fz-16 d-block fw-400 lato dtext">
                        Dubai To New York
                      </span>
                      <span className="fz-16 d-block fw-400 lato dtext">
                        Travel Date - Sun,
                      </span>
                      <span className="fz-16 d-block fw-400 lato dtext">
                        22 dec 22, 02:50
                      </span>
                      <span className="fz-16 d-block fw-400 lato dtext">
                        hrs
                      </span>
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
              <p className="note">
                Note : This is computer generated receipt and does not require
                physical signature.
              </p>
              <div className="print__point__btn d-flex align-items-center gap-3">
                <Link href="/URL:void(0)" className="cmn__btn">
                  <span>
                    <i className="material-symbols-outlined">print</i>
                  </span>
                  <span className="print">Print</span>
                </Link>
                <Link href="/URL:void(0)" className="cmn__btn">
                  <span>
                    <i className="material-symbols-outlined">download</i>
                  </span>
                  <span className="print">Download</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceMain;
