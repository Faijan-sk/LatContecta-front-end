import Image from "next/image";
import Link from "next/link";
import deals from "/public/img/booking/deals.png";
import boxamount from "/public/img/refer/boxamount.png";
import boxregister from "/public/img/refer/boxregister.png";
import boxspeaker from "/public/img/refer/boxspeaker.png";

const OurService = () => {
  return (
    <section className="refer__section booking__referone bgsection">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="refer__content minusten">
              <div className="section__header wow fadeInDown">
                <h2>We provide our best service in this category</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable. If you are going to use...
                </p>
              </div>
              <div className="refer__wrap pt__20">
                <div
                  className="refer__item wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  <div className="icon">
                    <Image src={boxspeaker} alt="img" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h5>Over 10M+ Happy Customers</h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available...
                    </p>
                  </div>
                </div>
                <div
                  className="refer__item wow fadeInUp"
                  data-wow-duration="1.4s"
                >
                  <div className="icon">
                    <Image src={boxregister} alt="img" />
                  </div>
                  <div className="content">
                    <h5>Lowest Price Guarantee</h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available...
                    </p>
                  </div>
                </div>
                <div
                  className="refer__item wow fadeInUp"
                  data-wow-duration="1.6s"
                >
                  <div className="icon">
                    <Image src={boxamount} alt="img" />
                  </div>
                  <div className="content">
                    <h5>24X7 Customer Support</h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available...
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/help-support"
                className="cmn__btn wow fadeInUp"
                data-wow-duration="1.8s"
              >
                <span>Explore deals</span>
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="refer__thumb">
              <Image src={deals} alt="thumb" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
