import Image from "next/image";
import Link from "next/link";
import ru1 from "/public/img/blog/ru1.jpg";
import ru2 from "/public/img/blog/ru2.jpg";
import ru3 from "/public/img/blog/ru3.jpg";
import ru4 from "/public/img/blog/ru4.jpg";
import bgcheck from "/public/img/svg/bgcheck.svg";
import file_transfer from "/public/img/svg/file-transfer.svg";

const HelpSupportMain = () => {
  return (
    <section className="help__support pt-80 pb-80">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="help__support__item">
              <h5>Knowledge Base Articles</h5>
              <ul className="help__supporlist">
                <li className="d-flex">
                  <span className="icon">
                    <Image src={file_transfer} alt="icon" />
                  </span>
                  <span className="fz-16 fw-400">
                    Energy Bills Support Scheme: People could cash out £600
                    payment
                  </span>
                </li>
                <li className="d-flex">
                  <span className="icon">
                    <Image src={file_transfer} alt="icon" />
                  </span>
                  <span className="fz-16 fw-400">
                    Rechargio.com - latest news, breaking stories and comment..
                  </span>
                </li>
                <li className="d-flex">
                  <span className="icon">
                    <Image src={file_transfer} alt="icon" />
                  </span>
                  <span className="fz-16 fw-400">
                    Backstage News On AEW Talent Questioning Recent Booking ...
                  </span>
                </li>
                <li className="d-flex">
                  <span className="icon">
                    <Image src={file_transfer} alt="icon" />
                  </span>
                  <span className="fz-16 fw-400">
                    Banks asked for payment of import bill in time..
                  </span>
                </li>
                <li className="d-flex">
                  <span className="icon">
                    <Image src={file_transfer} alt="icon" />
                  </span>
                  <span className="fz-16 fw-400">
                    Lack of facilities hinder virtual queue booking in
                    Sabarimala, say police
                  </span>
                </li>
                <li className="d-flex">
                  <span className="icon">
                    <Image src={file_transfer} alt="icon" />
                  </span>
                  <span className="fz-16 fw-400">
                    Sky-high demand breaks Royal Caribbean single day booking ..
                  </span>
                </li>
              </ul>
              <Link href="/URL:void(0)" className="cmn__btn mt__30">
                <span>See All Articles</span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="help__support__item">
              <h5>Frequently Asked Questions</h5>
              <ul className="help__supporlist">
                <li className="d-flex">
                  <span className="icon">
                    <Image src={bgcheck} alt="icon" />
                  </span>
                  <span className="fz-16 fw-400">What bill payment means?</span>
                </li>
                <li className="d-flex">
                  <span className="icon">
                    <Image src={bgcheck} alt="icon" />
                  </span>
                  <span className="fz-16 fw-400">
                    How do bill payments work?
                  </span>
                </li>
                <li className="d-flex">
                  <span className="icon">
                    <Image src={bgcheck} alt="icon" />
                  </span>
                  <span className="fz-16 fw-400">
                    What type of payment is bill pay?
                  </span>
                </li>
                <li className="d-flex">
                  <span className="icon">
                    <Image src={bgcheck} alt="icon" />
                  </span>
                  <span className="fz-16 fw-400">
                    What is bill payment debit?
                  </span>
                </li>
                <li className="d-flex">
                  <span className="icon">
                    <Image src={bgcheck} alt="icon" />
                  </span>
                  <span className="fz-16 fw-400">
                    What is the best booking site to use?
                  </span>
                </li>
                <li className="d-flex">
                  <span className="icon">
                    <Image src={bgcheck} alt="icon" />
                  </span>
                  <span className="fz-16 fw-400">Is booking com gone?</span>
                </li>
                <li className="d-flex">
                  <span className="icon">
                    <Image src={bgcheck} alt="icon" />
                  </span>
                  <span className="fz-16 fw-400">
                    Where is booking located?
                  </span>
                </li>
                <li className="d-flex">
                  <span className="icon">
                    <Image src={bgcheck} alt="icon" />
                  </span>
                  <span className="fz-16 fw-400">
                    What is booking engine to booking?
                  </span>
                </li>
                <li className="d-flex">
                  <span className="icon">
                    <Image src={bgcheck} alt="icon" />
                  </span>
                  <span className="fz-16 fw-400">
                    What is bill payment creadit?
                  </span>
                </li>
              </ul>
              <Link href="/faq" className="cmn__btn mt__30">
                <span>See All Faq</span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-10">
            <div className="help__support__update">
              <h5>Recent Update</h5>
              <div className="update__item d-flex align-items-center">
                <Image src={ru1} className="thumg" alt="img" />
                <div className="content">
                  <span className="fz-18 fw-500">
                    Rechargio.com - latest news, breaking stories and comment..
                  </span>
                  <span className="date fz-16 fw-400">22-12-2023</span>
                </div>
              </div>
              <div className="update__item d-flex align-items-center">
                <Image src={ru2} className="thumg" alt="img" />
                <div className="content">
                  <span className="fz-18 fw-500">
                    Tirumala Tirupati Devasthanams (Official Website)...
                  </span>
                  <span className="date fz-16 fw-400">22-12-2023</span>
                </div>
              </div>
              <div className="update__item d-flex align-items-center">
                <Image src={ru3} className="thumg" alt="img" />
                <div className="content">
                  <span className="fz-18 fw-500">
                    BTN&#39;s Online Booking Tool Guide 2022..
                  </span>
                  <span className="date fz-16 fw-400">22-12-2023</span>
                </div>
              </div>
              <div className="update__item d-flex align-items-center">
                <Image src={ru4} className="thumg" alt="img" />
                <div className="content">
                  <span className="fz-18 fw-500">
                    Banks asked for payment of import bill in time...
                  </span>
                  <span className="date fz-16 fw-400">22-12-2023</span>
                </div>
              </div>
              <Link href="/blog/details" className="cmn__btn mt-3">
                <span>See All</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSupportMain;
