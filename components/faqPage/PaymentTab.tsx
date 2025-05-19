const PaymentTab = () => {
  return (
    <div className="qustion__content">
      <div className="accordion__wrap">
        <div className="accordion" id="accordionExample2">
          {/* Accordion items */}
          <div className="accordion-item wow fadeInUp" data-wow-duration="0.9s">
            <h2 className="accordion-header" id="headingOnes">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOnes"
                aria-expanded="true"
                aria-controls="collapseOnes"
              >
                What is e recharge?
              </button>
            </h2>
            <div
              id="collapseOnes"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOnes"
              data-bs-parent="#accordionExample2"
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
          <div className="accordion-item wow fadeInUp" data-wow-duration="1s">
            <h2 className="accordion-header" id="headingTwos">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwos"
                aria-expanded="false"
                aria-controls="collapseTwos"
              >
                What is recharge credit?
              </button>
            </h2>
            <div
              id="collapseTwos"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwos"
              data-bs-parent="#accordionExample2"
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
  )
}

export default PaymentTab
