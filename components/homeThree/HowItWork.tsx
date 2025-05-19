import Image from "next/image";
import chossetouch from "/public/img/working/chossetouch.png";
import code from "/public/img/working/code.png";
import find from "/public/img/working/find.png";
import working3shape from "/public/img/working/working3shape.png";

const HowItWork = () => {
  return (
    <section className="working__section__three bgsection pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__header section__center pb__40">
              <h2>How It’s Work</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center align-items-center">
          <div className="col-lg-5 col-md-5">
            <div className="working__wrapitems__three">
              <div className="row justify-content-between">
                <div className="col-xl-12 working__space">
                  <div className="working__itemstwo affter__one">
                    <span className="list">01</span>
                    <div className="icon">
                      <Image
                        src={chossetouch}
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="content">
                      <h5>Choose what to do</h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="working__itemstwo affter__three">
                    <span className="list">03</span>
                    <div className="icon">
                      <Image src={find} alt="img" className="img-fluid" />
                    </div>
                    <div className="content">
                      <h5>Find what you want</h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2">
            <div className="borders"></div>
          </div>
          <div className="col-xl-5 col-md-5">
            <div className="working__itemstwo affter__two">
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
      <div className="working__3shape">
        <Image src={working3shape} alt="img" className="img-fluid" />
      </div>
    </section>
  );
};

export default HowItWork;
