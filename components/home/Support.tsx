import Image from "next/image";
import Link from "next/link";
import flowerrefer from "/public/img/refer/flowerrefer.png";
import payicon from "/public/img/refer/payicon.png";
import payment from "/public/img/refer/payment.png";
import redericon from "/public/img/refer/redericon.png";
import support from "/public/img/refer/support.png";
import suppoticon from "/public/img/refer/suppoticon.png";

const Support = () => {
  return (
    <section className="support__section pt-120 pb-120">
      <div className="container">
        <div className="row flex-row-reverse justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="support__content">
              <div className="section__header pb__40 wow fadeInDown">
                <h2>Enjoy our Speacial supports</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable. If you are going to use...
                </p>
              </div>
              <div className="row g-4">
                <div
                  className="col-lg-6 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-duration="0.8s"
                >
                  <div className="support__contentbox">
                    <div className="thumb">
                      <Image src={payment} alt="img" />
                    </div>
                    <h5>
                      <Link href="/help-support">Secure Payment</Link>
                    </h5>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <div className="support__contentbox">
                    <div className="thumb">
                      <Image src={redericon} alt="img" />
                    </div>
                    <h5>
                      <Link href="/help-support">Refer & Earn</Link>
                    </h5>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-duration="1.4s"
                >
                  <div className="support__contentbox">
                    <div className="thumb">
                      <Image src={payicon} alt="img" />
                    </div>
                    <h5>
                      <Link href="/help-support">Trust pay</Link>
                    </h5>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-duration="1.6s"
                >
                  <div className="support__contentbox">
                    <div className="thumb">
                      <Image src={suppoticon} alt="img" />
                    </div>
                    <h5>
                      <Link href="/help-support">24X7 Support</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="support__thumb wow fadeInUp">
              <Image src={support} alt="img" className="h-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="flower__shape">
        <Image src={flowerrefer} alt="img" className="h-100" />
      </div>
    </section>
  );
};

export default Support;
