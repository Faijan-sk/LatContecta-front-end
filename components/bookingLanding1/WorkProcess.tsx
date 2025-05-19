import Image from "next/image";
import Link from "next/link";
import bookingworkin_shape from "/public/img/booking/bookingworkin-shape.png";
import bookworking from "/public/img/booking/bookworking.png";

const WorkProcess = () => {
  return (
    <section className="booking__working bgsection pb-120 pt-120">
      <div className="container">
        <div className="row  flex-row-reverse align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-6">
            <div className="bookingone__workingcontent">
              <div className="section__header mb__40 wow fadeInDown">
                <h2>How to complete our work process</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable. If you are going to use...
                </p>
              </div>
              <ul className="book__workinglist mb-5">
                <li>
                  <span className="list">1</span>
                  <span>Choose what to do</span>
                </li>
                <li>
                  <span className="list">2</span>
                  <span>Find what you want</span>
                </li>
                <li>
                  <span className="list">3</span>
                  <span>Explore amazing code</span>
                </li>
              </ul>
              <Link href="/contact" className="cmn__btn">
                <span>Contact us</span>
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="bokking__workingthumb">
              <Image src={bookworking} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="bworking__shape">
        <Image src={bookingworkin_shape} alt="img" className="img-fluid" />
      </div>
    </section>
  );
};

export default WorkProcess;
