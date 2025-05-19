import Image from "next/image";
import submit_ticket from "/public/img/signup/submit-ticket.png";

const SubmitTicketMain = () => {
  return (
    <section className="submit__ticket pt-80 pb-80">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-6">
            <div className="signup__boxes">
              <h4>Submit a ticket</h4>
              <p className="head__pra">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <form action="#0" className="signup__form pt__40">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="input__grp">
                      <label htmlFor="fname">Your Name</label>
                      <input
                        type="text"
                        id="fname"
                        placeholder="Your name..."
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
                        placeholder="Your email..."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input__grp">
                      <label htmlFor="subtest">Subject</label>
                      <input
                        type="text"
                        id="subtest"
                        placeholder="Subject..."
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
                    <div className="input__grp mt-2">
                      <button type="submit" className="cmn__btn">
                        <span>Submit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="signup__thumb">
              <Image src={submit_ticket} alt="img" className="h-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitTicketMain;
