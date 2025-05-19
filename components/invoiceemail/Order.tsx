import Link from "next/link";

const Order = () => {
  return (
    <section className="order__section pt__60 pb__60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10 col-lg-12">
            <div className="order__wrappers invoice__wrapper">
              <div className="invoice__email">
                <div className="emailrecharge__head d-flex align-items-center justify-content-between">
                  <h3>Rechargio</h3>
                  <Link href="/URL:void(0)">
                    <i className="material-symbols-outlined">print</i>
                  </Link>
                </div>
                <span className="leslie">Hey Leslie Alexander,</span>
                <div className="confirmed">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="confired"
                  />
                  <label className="form-check-label" htmlFor="confired">
                    Thank you! Your reservation has been confirmed.
                  </label>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy...
                </p>
              </div>
              <div className="invoice__textwrapper mb__30">
                <div className="invoice__leftbox">
                  <div className="invoice__leftnumber">
                    <span className="bage">Invoice number</span>
                    <span className="counting">325546744</span>
                  </div>
                  <div className="invoice__leftnumber">
                    <span className="bage">Order Date</span>
                    <span className="counting">07/11/2023</span>
                  </div>
                  <div className="invoice__leftnumber">
                    <span className="bage">Payment Method</span>
                    <span className="counting">Credit Card</span>
                  </div>
                </div>
                <div className="invoice__righttbox">
                  <span className="hirename">Hire&#39;s Nmae:</span>
                  <h5 className="name">Leslie Alexander</h5>
                  <div className="invoice__leftnumber">
                    <span className="bage">Age</span>
                    <span className="counting">21</span>
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
                    <span className="bage">Address</span>
                    <span className="counting">Royal Ln. Mesa, New Jersey</span>
                  </div>
                </div>
              </div>
              <div className="order__summary__wrapper mb__40">
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
              <div className="getway__wrapper">
                <div className="getway__item">
                  <span className="trnsdate fz-18 fw-400">
                    Transaction Date :
                  </span>
                  <span className="subtrans">05/12/2020</span>
                </div>
                <div className="getway__item">
                  <span className="trnsdate fz-18 fw-400">Gateway :</span>
                  <span className="subtrans">Credit Card</span>
                </div>
                <div className="getway__item">
                  <span className="trnsdate fz-18 fw-400">
                    Transaction ID :
                  </span>
                  <span className="subtrans">321 565 954</span>
                </div>
                <div className="getway__item">
                  <span className="trnsdate fz-18 fw-400">Amount :</span>
                  <span className="subtrans">$362.00</span>
                </div>
              </div>
              <p className="note">
                Any Questions? Get in touch with our 24x7 Customer Care team
              </p>
              <div className="print__point justify-content-center d-flex align-items-center gap-3">
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

export default Order;
