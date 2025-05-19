import faqData from "@/data/faqData";

const Faq = ({ clss = "" }) => {
  return (
    <section className={`question__section ${clss} pt-120 pb-120`}>
      <div className="container">
        <div className="row justify-content-center wow fadeInDown">
          <div className="col-lg-6">
            <div className="section__header section__center pb__40">
              <h2>If you got questions we have answer</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form,
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="qustion__content">
              <div className="accordion__wrap">
                <div className="accordion" id="accordionExample">
                  {/* Accordion items */}
                  {faqData.map((itm, i) => {
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
        </div>
      </div>
    </section>
  );
};

export default Faq;
