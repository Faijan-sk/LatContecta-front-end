import Image from "next/image";
import Link from "next/link";
import Select from "../select/Select";
import us from "/public/img/details/us.png";
import signup from "/public/img/signup/signup.png";

const countryCode = [
  { id: 1, name: "+1" },
  { id: 2, name: "+3" },
  { id: 3, name: "+8" },
];

const NumberToreachMain = () => {
  return (
    <section className="signup__section bluar__shape">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-6">
            <div className="signup__boxes">
              <h4>What&#39;s the best number to reach you on?</h4>
              <p className="head__pra">
                We don&#39;t send span, just important information you must know
              </p>
              <form action="#0" className="signup__form password__box pt__40">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <span className="fz-18 fw-600 lato dtext d-block mb__15">
                      Mobile Number
                    </span>
                    <div className="country__toreach d-flex align-items-center">
                      <div className="icon">
                        <Image src={us} alt="us" />
                      </div>
                      {/* select here */}
                      <Select data={countryCode} />
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input__grp mt-3">
                      <button type="submit" className="cmn__btn">
                        <span>Submit Now</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input__grp mt-2">
                      <Link href="/URL:void(0)" className="back__btn">
                        <span className="icon">
                          <i className="material-symbols-outlined">
                            keyboard_backspace
                          </i>
                        </span>
                        <span>Back</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="signup__thumb">
              <Image src={signup} alt="img" className="h-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberToreachMain;
