import Image from "next/image";
import Link from "next/link";
import boxamount from "/public/img/refer/boxamount.png";
import boxregister from "/public/img/refer/boxregister.png";
import boxspeaker from "/public/img/refer/boxspeaker.png";
import flowerrefer from "/public/img/refer/flowerrefer.png";
import referthumb from "/public/img/refer/referthumb.png";

const Refer = () => {
  return (
    <section className="refer__section bgsection">
      <div className="container">
        <div className="row gx-5 justify-content-between align-items-center">
          <div className="col-xl-5 col-lg-5">
            <div className="refer__thumb">
              <Image src={referthumb} alt="thumb" className="img-fluid" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="refer__content minusten">
              <div className="section__header wow fadeInDown">
                <h2>Refer & Earn</h2>
                <p>
                  Refer your friends and earn up to $20. There are many
                  variations of passages of Lorem Ipsum available, but the have
                  suffered alteration in some form, by injected humour, or
                  randomised words which don&#39;t look even slightly
                  believable. If you are going to use...
                </p>
              </div>
              <div className="refer__wrap pt__20">
                <div
                  className="refer__item wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  <div className="icon">
                    <Image src={boxspeaker} alt="img" />
                  </div>
                  <div className="content">
                    <h5>Refer your friends</h5>
                    <p>Share your referral link with friends. Thry get &10.</p>
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
                    <h5>Register yor friends</h5>
                    <p>Your friends Register with using your referral link.</p>
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
                    <h5>Earn You</h5>
                    <p>$20. You can use these credits to take recharge.</p>
                  </div>
                </div>
              </div>
              <Link
                href="/help-support"
                className="cmn__btn wow fadeInUp"
                data-wow-duration="1.8s"
              >
                <span>Get Started Earn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flower__refer">
        <Image src={flowerrefer} alt="img" />
      </div>
    </section>
  );
};

export default Refer;
