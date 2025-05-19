import Image from "next/image";
import Link from "next/link";
import branch from "/public/img/booking/branch.jpg";
import branch2 from "/public/img/booking/branch2.jpg";
import branch3 from "/public/img/booking/branch3.jpg";
import branch4 from "/public/img/booking/branch4.jpg";
import branchmiddle from "/public/img/booking/branchmiddle.jpg";
import locate from "/public/img/booking/locate.png";
import dots from "/public/img/refer/dots.png";

const Branchs = () => {
  return (
    <section className="branch__section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section__header section__center pb__60 wow fadeInDown">
              <h2>Our top branch in the world</h2>
              <p className="max600">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <div className="branch__wrapper">
          <div className="row g-4">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
              <div className="branch__left__innner">
                <Link href="/video-tutorial" className="branch__item">
                  <Image src={branch} alt="img" className="img-fluid" />
                  <span className="location">
                    <span className="icon">
                      <Image src={locate} alt="img" />
                    </span>
                    <span className="text">England</span>
                  </span>
                </Link>
                <Link href="/video-tutorial" className="branch__item">
                  <Image src={branch2} alt="img" className="img-fluid" />
                  <span className="location">
                    <span className="icon">
                      <Image src={locate} alt="img" />
                    </span>
                    <span className="text">Mumbai</span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
              <Link href="/video-tutorial" className="branch__item">
                <Image src={branchmiddle} alt="img" className="img-fluid" />
                <span className="location">
                  <span className="icon">
                    <Image src={locate} alt="img" />
                  </span>
                  <span className="text">Paris, France</span>
                </span>
              </Link>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
              <div className="branch__left__innner">
                <Link href="/video-tutorial" className="branch__item">
                  <Image src={branch3} alt="img" className="img-fluid" />
                  <span className="location">
                    <span className="icon">
                      <Image src={locate} alt="img" />
                    </span>
                    <span className="text">Sydney</span>
                  </span>
                </Link>
                <Link href="/video-tutorial" className="branch__item">
                  <Image src={branch4} alt="img" className="img-fluid" />
                  <span className="location">
                    <span className="icon">
                      <Image src={locate} alt="img" />
                    </span>
                    <span className="text">Dubai</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* Shape dots */}
          <div className="dotsbox1">
            <Image src={dots} alt="img" />
          </div>
          <div className="dotsbox2">
            <Image src={dots} alt="img" />
          </div>
          <div className="dotsbox3">
            <Image src={dots} alt="img" />
          </div>
          <div className="dotsbox4">
            <Image src={dots} alt="img" />
          </div>
          {/* Shape dots */}
        </div>
        <div className="more__btn pt__40 text-center">
          <Link href="/video-tutorial" className="cmn__btn">
            <span>View All</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Branchs;
