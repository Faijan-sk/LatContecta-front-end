import Image from "next/image";
import Link from "next/link";
import over_check from "/public/img/svg/over-check.svg";
import pringting from "/public/img/svg/pringting.svg";

const EmailInvoice = () => {
  return (
    <section className="order__section pt__60 pb__60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10 col-lg-12">
            <div className="hotel__emailinvoice invoice__wrapper train__temail ">
              <div className="invoice__textwrapper mb__10">
                <div className="invoice__leftbox">
                  <h3 className="dtext xs-32">Rechargio</h3>
                </div>
                <div className="invoice__righttbox mt-2">
                  <Image src={pringting} alt="img" />
                </div>
              </div>
              <div className="reservation__contetn pb__30 mb__30">
                <span className="dtext fz-16 fw-400 lato d-block mb__10">
                  Hey Leslie Alexander,
                </span>
                <div className="input-esingl input-check d-flex align-items-center gap-2 payment__save mb__15">
                  <Image src={over_check} className="overcheck" alt="img" />
                  <label className="gratext fz-18 fw-600 lato">
                    Thank you! Your reservation has been confirmed.
                  </label>
                </div>
                <p className="fz-16 fw-400 lato dtext">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy...
                </p>
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
              <h5 className="dtext fw-700 passengertitle">Hirer&#39;s Name</h5>
              <div className="getway__wrapper getway__wrapperbus">
                <div className="getway__item">
                  <span className="trnsdate fz-18 fw-400">Name :</span>
                  <span className="subtrans">Leslie Alexander</span>
                </div>
                <div className="getway__item">
                  <span className="trnsdate fz-18 fw-400">Age :</span>
                  <span className="subtrans">21</span>
                </div>
                <div className="getway__item">
                  <span className="trnsdate fz-18 fw-400">Gender :</span>
                  <span className="subtrans">Male</span>
                </div>
                <div className="getway__item">
                  <span className="trnsdate fz-18 fw-400">Phone :</span>
                  <span className="subtrans">(654) 555-0102</span>
                </div>
                <div className="getway__item">
                  <span className="trnsdate fz-18 fw-400">Email :</span>
                  <span className="subtrans">nvt.jsst.nute@gmai.com</span>
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
                        Operrator
                      </span>
                      <span className="fz-18 fw-600 lato dtext d-block">
                        Receive amount
                      </span>
                      <span className="fz-18 fw-600 lato dtext d-block">
                        Amount
                      </span>
                    </div>
                    <div className="order__table__items bgaddtwo">
                      <span>Delta 71613 -</span>
                      <span>$980.00</span>
                      <span>0</span>
                      <span>$980.00</span>
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
                  <div className="order__table__box bgaddtwo">
                    <div className="order__graph">
                      <ul>
                        <li>
                          <span>Sub Total:</span>
                          <span className="bg">$114.00</span>
                        </li>
                        <li>
                          <span>Promotional Code:</span>
                          <span className="bg">0</span>
                        </li>
                        <li>
                          <span>Total:</span>
                          <span className="bg">$114.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <p className="note">
                Any Questions? Get in touch with our 24x7 Customer Care team
              </p>
              <div className="print__point d-flex justify-content-center align-items-center">
                <Link href="/URL:void(0)" className="cmn__btn">
                  <span className="print">Contact us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailInvoice;
