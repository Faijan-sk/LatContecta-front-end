import Image from "next/image";
import Link from "next/link";
import boxregister from "/public/img/refer/boxregister.png";
import boxspeaker from "/public/img/refer/boxspeaker.png";
import dots from "/public/img/refer/dots.png";
import earndollar from "/public/img/refer/earndollar.png";
import referball from "/public/img/refer/referball.png";

const Refer = () => {
  return (
    <section className="refer__section__three pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="section__header">
              <h2>Refer & Earn</h2>
              <p className="pb__40">
                Refer your friends and earn up to $20. There are many variations
                of passages of Lorem Ipsum available, but the have suffered
                alteration in some form, by injected humour, or randomised words
                which don&#39;t look even slightly believable. If you are going
                to use...
              </p>
              <Link href="/help-support" className="cmn__btn">
                <span>Get Started Earn</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="refer__boxes__wrap">
              <div className="row g-4 align-items-center">
                <div className="col-lg-6 col-md-6">
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
                      <p>
                        Share your referral link with friends. Thry get &10.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="refer__items__thregrid">
                    <div className="refer__item refer__item__grid">
                      <div className="icon">
                        <Image
                          src={boxregister}
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href="/help-support" className="dtext">
                            Register yor friends
                          </Link>
                        </h5>
                        <p>
                          Your friends Register with using your referral link.
                        </p>
                      </div>
                    </div>
                    <div className="refer__item refer__item__grid">
                      <div className="icon">
                        <Image src={earndollar} alt="img" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href="/help-support" className="dtext">
                            Earn You
                          </Link>
                        </h5>
                        <p>
                          Share your referral link with friends. Thry get &10.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="refer__dots1">
                <Image src={dots} alt="img" />
              </div>
              <div className="refer__dots2">
                <Image src={dots} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="refer__ball">
        <Image src={referball} alt="img" />
      </div>
    </section>
  );
};

export default Refer;
