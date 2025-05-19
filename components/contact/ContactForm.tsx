const ContactForm = () => {
  return (
    <section className="contact__section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center wow fadeInDown">
          <div className="col-lg-6">
            <div className="section__header section__center pb__60">
              <h2>Get in touch with us.</h2>
              <p>
                Fill up the form and our team will get back to you within 24
                hours
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6">
            <div className="signup__boxes">
              <form className="signup__form pt__40">
                <div className="row g-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="input__grp">
                      <label htmlFor="fname">Name</label>
                      <input
                        type="text"
                        id="fname"
                        placeholder="What's your name?"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input__grp">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="What's your email?"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input__grp">
                      <label htmlFor="numm">Phone</label>
                      <input
                        type="text"
                        id="numm"
                        placeholder="(123) 480 - 3540"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input__grp">
                      <label htmlFor="subtest">Service interested in</label>
                      <input
                        type="text"
                        id="subtest"
                        placeholder="Ex. Auto Loan, Home Loan"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input__grp">
                      <label htmlFor="comment">Message</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        id="comment"
                        name="text"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input__grp mt-2 text-center">
                      <button type="submit" className="cmn__btn">
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
