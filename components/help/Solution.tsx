import Image from "next/image";
import Link from "next/link";
import addcomment from "/public/img/svg/addcomment.svg";
import portalsetup from "/public/img/svg/portalsetup.svg";

const Solution = () => {
  return (
    <section className="help__solution pt-120 pb-120">
      <div className="no__knowledge">
        <div className="container">
          <div className="row justify-content-center wow fadeInDown">
            <div className="col-lg-6">
              <div className="section__header section__center pb__60">
                <h2>No solution found?</h2>
                <p>
                  Unlike other Frameworks which try to cover everything, It has
                  been built specifically for All websites
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInDown"
              data-wow-duration="2.1s"
            >
              <div className="help__items">
                <div className="icons">
                  <Image src={portalsetup} alt="img" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/URL:void(0)">Knowledge Base</Link>
                  </h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&#39;t look even slightly believable.
                  </p>
                  <Link
                    href="URL:void(0)"
                    className="d-flex align-items-center gap-2"
                  >
                    <span>Go to live chat</span>
                    <span className="icon">
                      <i className="material-symbols-outlined">east</i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-duration="2.8s"
            >
              <div className="help__items">
                <div className="icons">
                  <Image src={addcomment} alt="img" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="/URL:void(0)">Live Chat</Link>
                  </h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&#39;t look even slightly believable.
                  </p>
                  <Link
                    href="URL:void(0)"
                    className="d-flex align-items-center gap-2"
                  >
                    <span>Go to live chat</span>
                    <span className="icon">
                      <i className="material-symbols-outlined">east</i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
