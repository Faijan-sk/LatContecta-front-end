import Image from "next/image";
import bandk from "/public/img/working/bandk.png";
import workmain from "/public/img/working/workmain.png";
import workshape_main from "/public/img/working/workshape-main.png";

const Working = () => {
  return (
    <section className="working__section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center wow fadeInDown">
          <div className="col-lg-6">
            <div className="section__header section__center pb__40">
              <h2>How It&#39;s Work</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-duration="2s"
        >
          <div className="col-xl-6 col-lg-7">
            <div className="main__work__content">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tabwormain"
                    data-bs-toggle="tab"
                    data-bs-target="#homewormain"
                    type="button"
                    role="tab"
                    aria-controls="homewormain"
                    aria-selected="true"
                  >
                    <span className="list">1</span>
                    <span className="contents">
                      <span className="title">Choose what to do</span>
                      <span className="pra">
                        Lorem ipsum dolor sit amt, consectietur adipscring elit
                        Morbit in metus justo consecteture adliiscing elit.
                        morbi in metus justo.
                      </span>
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tabwormain"
                    data-bs-toggle="tab"
                    data-bs-target="#profilewormain"
                    type="button"
                    role="tab"
                    aria-controls="profilewormain"
                    aria-selected="false"
                  >
                    <span className="list">2</span>
                    <span className="contents">
                      <span className="title">Find what you want</span>
                      <span className="pra">
                        Lorem ipsum dolor sit amt, consectietur adipscring elit
                        Morbit in metus justo consecteture adliiscing elit.
                        morbi in metus justo.
                      </span>
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tabwormain"
                    data-bs-toggle="tab"
                    data-bs-target="#contactwormain"
                    type="button"
                    role="tab"
                    aria-controls="contactwormain"
                    aria-selected="false"
                  >
                    <span className="list">3</span>
                    <span className="contents">
                      <span className="title">Explore amazing code</span>
                      <span className="pra">
                        Lorem ipsum dolor sit amt, consectietur adipscring elit
                        Morbit in metus justo consecteture adliiscing elit.
                        morbi in metus justo.
                      </span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-8">
            <div className="tab-content" id="myTabContentwork">
              <div
                className="tab-pane fade show active"
                id="homewormain"
                role="tabpanel"
              >
                <div className="work__mainthumb">
                  <Image src={workmain} alt="img" />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profilewormain"
                role="tabpanel"
              >
                <div className="work__mainthumb">
                  <Image src={bandk} alt="img" />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contactwormain"
                role="tabpanel"
              >
                <div className="work__mainthumb">
                  <Image src={workmain} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="maishape__work">
        <Image src={workshape_main} alt="img" className="img-fluid" />
      </div>
    </section>
  );
};

export default Working;
