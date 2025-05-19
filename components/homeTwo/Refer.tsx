import Image from "next/image";
import Link from "next/link";
import boxamount from "/public/img/refer/boxamount.png";
import boxregister from "/public/img/refer/boxregister.png";
import boxspeaker from "/public/img/refer/boxspeaker.png";
import boxwithdrow from "/public/img/refer/boxwithdrow.png";
import redercards from "/public/img/refer/redercards.png";
import referman from "/public/img/refer/referman.png";

const Refer = () => {
  return (
    <section className="refer__section__two pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__header section__center pb__40 wow fadeInDown">
              <h2>Refer & Earn</h2>
              <p>
                Refer your friends and earn up to $20. There are many variations
                of passages of Lorem Ipsum available, but the have suffered
                alteration in some form...
              </p>
            </div>
          </div>
        </div>
        <div className="row pb__40 g-4 align-items-center">
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow fadeInDown"
            data-wow-duration="0.5s"
          >
            <div className="refer__item refer__item__grid">
              <div className="icon">
                <Image src={boxspeaker} alt="img" className="img-fluid" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/help-support" className="dtext">
                    Refer your friends
                  </Link>
                </h5>
                <p>Share your referral link with friends. Thry get &10.</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow fadeInDown"
            data-wow-duration="0.9s"
          >
            <div className="refer__item refer__item__grid">
              <div className="icon">
                <Image src={boxregister} alt="img" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/help-support" className="dtext">
                    Register yor friends
                  </Link>
                </h5>
                <p>Your friends Register with using your referral link.</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow fadeInDown"
            data-wow-duration="1s"
          >
            <div className="refer__item refer__item__grid">
              <div className="icon">
                <Image src={boxamount} alt="img" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/help-support" className="dtext">
                    Earn You
                  </Link>
                </h5>
                <p>$20. You can use these credits to take recharge.</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow fadeInDown"
            data-wow-duration="1.5s"
          >
            <div className="refer__item refer__item__grid">
              <div className="icon">
                <Image src={boxwithdrow} alt="img" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/help-support" className="dtext">
                    Withdrow
                  </Link>
                </h5>
                <p>$20. You can use these credits to take recharge.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="more text-center wow fadeInDown"
          data-wow-duration="1.9s"
        >
          <Link href="/help-support" className="cmn__btn">
            <span>Get Started Earn</span>
          </Link>
        </div>
      </div>
      <div className="refercard">
        <Image src={redercards} alt="img" className="img-fluid" />
      </div>
      <div className="referman">
        <Image src={referman} alt="img" className="img-fluid" />
      </div>
    </section>
  );
};

export default Refer;
