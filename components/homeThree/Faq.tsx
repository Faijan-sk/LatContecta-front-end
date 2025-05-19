import Image from "next/image";
import Link from "next/link";
import referball from "/public/img/refer/referball.png";

const Faq = () => {
  return (
    <section className="question__section__three pt-120 pb-120">
      <div className="container">
        <div className="row  justify-content-between">
          <div className="col-xl-5 col-lg-5">
            <div className="qustion__content qustion__three__content">
              <div className="accordion__wrap">
                <div className="accordion" id="accordionExample">
                  {/* Accordion items */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is e recharge?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s, when
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Accordion items */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How reliable is recharge com?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s, when
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Accordion items */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What is recharge credit?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s, when
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Accordion items */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="qustion__three__header">
              <div className="section__header">
                <h2>A better way to recharge and trade gift cards</h2>
                <p className="pb__20">
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable. If you are going to use...
                </p>
                <Link href="/order" className="cmn__btn">
                  <span>Continue</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="qustion__ball">
        <Image src={referball} alt="img" className="img-fluid" />
      </div>
    </section>
  );
};

export default Faq;
