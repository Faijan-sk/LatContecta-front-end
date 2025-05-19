import Image from "next/image";
import Link from "next/link";
import ambition_shape from "/public/img/booking/ambition-shape.png";
import ambition from "/public/img/booking/ambition.png";

const Ambition = () => {
  return (
    <section className="ambition__section bgsection pt-120 pb-120">
      <div className="container">
        <div className="row flex-row-reverse g-4 align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="ambition__content">
              <div className="section__header pb__30">
                <h2>Your ally in achieving ambitions beyond borders</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable. If you are going to use...
                </p>
              </div>
              <div className="ambition__boxwrap mt__30 mb__40">
                <div
                  className="counter__items odometer-item wow fadeInDown"
                  data-wow-duration="2s"
                >
                  <div className="cont d-flex align-items-center">
                    <span className="odometer">98</span>
                    <span className="plus__icon">k</span>
                  </div>
                  <p>Customer Satisfaction</p>
                </div>
                <div
                  className="counter__items odometer-item wow fadeInDown"
                  data-wow-duration="2s"
                >
                  <div className="cont d-flex align-items-center">
                    <span className="odometer">205</span>
                    <span className="plus__icon">M</span>
                  </div>
                  <p>Monthly active users</p>
                </div>
                <div
                  className="counter__items odometer-item wow fadeInDown"
                  data-wow-duration="2s"
                >
                  <div className="cont d-flex align-items-center">
                    <span className="odometer">100</span>
                    <span className="plus__icon">k</span>
                  </div>
                  <p>New Users per week</p>
                </div>
              </div>
              <Link href="/help-support" className="cmn__btn">
                <span>Explore deals</span>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="ambition__thumb">
              <Image src={ambition} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="ambition__shape">
        <Image src={ambition_shape} alt="shape" className="img-fluid" />
      </div>
    </section>
  );
};

export default Ambition;
