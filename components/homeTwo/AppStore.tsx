import Image from "next/image";
import Link from "next/link";
import appplay from "/public/img/app/appplay.png";
import appstore from "/public/img/app/appstore.png";
import apptwo from "/public/img/app/apptwo.png";
import appwoman from "/public/img/app/appwoman.png";

const AppStore = () => {
  return (
    <section className="app__section bgsection pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div
            className="col-xl-7 col-lg-7 wow fadeInDown"
            data-wow-duration="1.5s"
          >
            <div className="app__content">
              <div className="section__header">
                <h2>The Fastest Way to Pay In-store & Online.</h2>
                <p className="apptext">
                  Download our app for the fastest, most convenient way to send
                  Recharge.
                </p>
                <p className="pb__40">
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable. If you are going to use...
                </p>
                <div className="d-flex gap-3 align-items-center">
                  <Link href="/URL:void(0)" className="storyitem">
                    <Image src={appplay} alt="img" />
                  </Link>
                  <Link href="/URL:void(0)" className="storyitem">
                    <Image src={appstore} alt="img" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-5 wow fadeInUp"
            data-wow-duration="2.5s"
          >
            <div className="app__thumb app__thumb__two">
              <Image src={apptwo} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="app__woman">
        <Image src={appwoman} alt="img" />
      </div>
    </section>
  );
};

export default AppStore;
