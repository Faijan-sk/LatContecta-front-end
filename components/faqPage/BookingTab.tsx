const BookingTab = () => {
  return (
    <div className="qustion__content">
      <div className="accordion__wrap">
        <div className="accordion" id="accordionExample3">
          {/* Accordion items */}
          <div className="accordion-item wow fadeInUp" data-wow-duration="1.6s">
            <h2 className="accordion-header" id="headingThreemta">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThreemta"
                aria-expanded="false"
                aria-controls="collapseThreemta"
              >
                What is recharge application?
              </button>
            </h2>
            <div
              id="collapseThreemta"
              className="accordion-collapse collapse"
              aria-labelledby="headingThreemta"
              data-bs-parent="#accordionExample3"
            >
              <div className="accordion-body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when
                </p>
              </div>
            </div>
          </div>
          {/* Accordion items */}
          <div className="accordion-item wow fadeInUp" data-wow-duration="1.8s">
            <h2 className="accordion-header" id="headingThreemmta">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThreemmta"
                aria-expanded="false"
                aria-controls="collapseThreemmta"
              >
                How do I recharge a phone number?
              </button>
            </h2>
            <div
              id="collapseThreemmta"
              className="accordion-collapse collapse"
              aria-labelledby="headingThreemmta"
              data-bs-parent="#accordionExample3"
            >
              <div className="accordion-body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when
                </p>
              </div>
            </div>
          </div>
          {/* Accordion items */}
          <div className="accordion-item wow fadeInUp" data-wow-duration="1.9s">
            <h2 className="accordion-header" id="headingThreemmmta">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThreemmmta"
                aria-expanded="false"
                aria-controls="collapseThreemmmta"
              >
                What is the primary function of the recharge payment
                application?
              </button>
            </h2>
            <div
              id="collapseThreemmmta"
              className="accordion-collapse collapse"
              aria-labelledby="headingThreemmmta"
              data-bs-parent="#accordionExample3"
            >
              <div className="accordion-body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when
                </p>
              </div>
            </div>
          </div>
          {/* Accordion items */}
        </div>
      </div>
    </div>
  );
};

export default BookingTab;
