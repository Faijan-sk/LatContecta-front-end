import Image from "next/image";
import chossetouch from "/public/img/working/chossetouch.png";
import code from "/public/img/working/code.png";
import find from "/public/img/working/find.png";

const HowItWork = () => {
  return (
    <section className="working__section__two pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__header section__center minusten pb__40 wow fadeInUp">
              <h2>How It’s Work</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-duration="1.2s"
          >
            <div className="working__itemstwo">
              <span className="list">01</span>
              <div className="icon">
                <Image src={chossetouch} alt="img" className="img-fluid" />
              </div>
              <div className="content">
                <h5>Choose what to do</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-duration="1.5s"
          >
            <div className="working__itemstwo">
              <span className="list">02</span>
              <div className="icon">
                <Image src={find} alt="img" className="img-fluid" />
              </div>
              <div className="content">
                <h5>Find what you want</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-duration="1.9s"
          >
            <div className="working__itemstwo">
              <span className="list">03</span>
              <div className="icon">
                <Image src={code} alt="img" className="img-fluid" />
              </div>
              <div className="content">
                <h5>Explore amazing code</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
