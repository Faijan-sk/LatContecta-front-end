import faqData from "@/data/faqData";
import Image from "next/image";
import qustion_shape from "/public/img/refer/qustion-shape.png";
import qustion from "/public/img/refer/qustion.png";

const Faq = () => {
  return (
    <section className="question__section bgsection pt-120 pb-120">
      <div className="container">
        <div className="row flex-row-reverse  justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="qustion__content relative">
              <div className="section__header pb__40 wow fadeInDown">
                <h2>If you got questions we have answer</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable. If you are going to use... have suffered
                  alteration in some form, by injected humour, or randomised
                  words which don&#39;t look even slightly believable. If you
                  are going to use...
                </p>
              </div>
              <div className="accordion__wrap">
                <div className="accordion" id="accordionExample">
                  {/* Accordion items */}
                  {faqData.slice(0, 3).map((itm, i) => {
                    const { answer, id, question } = itm;

                    return (
                      <div
                        key={id}
                        className="accordion-item wow fadeInUp"
                        data-wow-duration="0.9s"
                      >
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${id}`}
                            aria-expanded="true"
                            aria-controls={id}
                          >
                            {question}
                          </button>
                        </h2>
                        <div
                          id={id}
                          className={`accordion-collapse collapse ${
                            i === 0 ? "show" : ""
                          }`}
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-5 wow fadeInDown"
            data-wow-duration="0.9"
          >
            <div className="qustion__thumb">
              <Image src={qustion} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="qustion__shape">
        <Image src={qustion_shape} alt="img" className="img-fluid" />
      </div>
    </section>
  );
};

export default Faq;
