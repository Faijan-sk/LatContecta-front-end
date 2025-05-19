import Image from "next/image";
import Link from "next/link";
import file_transfer from "/public/img/svg/file-transfer.svg";

const HelpKnowledgeMain = () => {
  return (
    <section className="help__support__knowledge pt-80 pb-80">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInDown"
            data-wow-duration="1.5s"
          >
            <div className="help__support__item">
              <div className="title__box d-flex align-items-center flex-wrap justify-content-between">
                <h5>Mobile Recharge</h5>
                <span className="fz-16 fw-400 lato dtext d-block">
                  62 Articles
                </span>
              </div>
              <ul className="help__supporlist">
                {[...Array(6)].map((_, i) => (
                  <li key={i} className="d-flex">
                    <span className="icon">
                      <Image src={file_transfer} alt="icon" />
                    </span>
                    <span className="fz-16 fw-400">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/URL:void(0)" className="cmn__btn mt__30">
                <span>See All Articles</span>
              </Link>
            </div>
          </div>
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInDown"
            data-wow-duration="1.9s"
          >
            <div className="help__support__item">
              <div className="title__box d-flex align-items-center flex-wrap justify-content-between">
                <h5>Bill Payment</h5>
                <span className="fz-16 fw-400 lato dtext d-block">
                  112 Articles
                </span>
              </div>
              <ul className="help__supporlist">
                {[...Array(6)].map((_, i) => (
                  <li key={i} className="d-flex">
                    <span className="icon">
                      <Image src={file_transfer} alt="icon" />
                    </span>
                    <span className="fz-16 fw-400">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/URL:void(0)" className="cmn__btn mt__30">
                <span>See All Articles</span>
              </Link>
            </div>
          </div>
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInDown"
            data-wow-duration="2.1s"
          >
            <div className="help__support__item">
              <div className="title__box d-flex align-items-center flex-wrap justify-content-between">
                <h5>Booking</h5>
                <span className="fz-16 fw-400 lato dtext d-block">
                  322 Articles
                </span>
              </div>
              <ul className="help__supporlist">
                {[...Array(6)].map((_, i) => (
                  <li key={i} className="d-flex">
                    <span className="icon">
                      <Image src={file_transfer} alt="icon" />
                    </span>
                    <span className="fz-16 fw-400">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/URL:void(0)" className="cmn__btn mt__30">
                <span>See All Articles</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpKnowledgeMain;
