import Image from "next/image";
import Link from "next/link";
import BusTab from "./BusTab";
import CarTab from "./CarTab";
import FlightTab from "./FlightTab";
import HotelTab from "./HotelTab";
import TrainTab from "./TrainTab";
import bus from "/public/img/banner/three/bus.png";
import cars from "/public/img/banner/three/cars.png";
import flight from "/public/img/banner/three/flight.png";
import hotel from "/public/img/banner/three/hotel.png";
import trains from "/public/img/banner/three/trains.png";
import searchwhite from "/public/img/bookbanner/searchwhite.png";

const Banner = () => {
  return (
    <section className="booking__landingsection__three">
      <div className="booking__landing__headthree">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xxl-7 col-xl-7">
              <div className="booking__landing__head">
                <ul
                  className="nav nav-tabs fasilities__inner fasilities__innertwo"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <Link
                      href="URL:void(0)"
                      className="nav-link active"
                      id="home-tabb1"
                      data-bs-toggle="tab"
                      data-bs-target="#homeb1"
                      role="tab"
                      aria-controls="homeb1"
                      aria-selected="true"
                    >
                      <span className="fasilities__item align-items-center d-flex">
                        <span className="icon">
                          <Image src={hotel} alt="icon" />
                        </span>
                        <span className="fz-18 pratext d-block">Hotels</span>
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link
                      href="URL:void(0)"
                      className="nav-link"
                      id="profile-tabb1"
                      data-bs-toggle="tab"
                      data-bs-target="#profileb1"
                      role="tab"
                      aria-controls="profileb1"
                      aria-selected="false"
                    >
                      <span className="fasilities__item align-items-center d-flex">
                        <span className="icon">
                          <Image src={flight} alt="icon" />
                        </span>
                        <span className="fz-18 pratext d-block">Flights</span>
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link
                      href="URL:void(0)"
                      className="nav-link"
                      id="contact-tabb1"
                      data-bs-toggle="tab"
                      data-bs-target="#contactb1"
                      role="tab"
                      aria-controls="contactb1"
                      aria-selected="false"
                    >
                      <span className="fasilities__item align-items-center d-flex">
                        <span className="icon">
                          <Image src={trains} alt="icon" />
                        </span>
                        <span className="fz-18 pratext d-block">Trains</span>
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link
                      href="URL:void(0)"
                      className="nav-link"
                      id="contact-tabb11"
                      data-bs-toggle="tab"
                      data-bs-target="#contactb11"
                      role="tab"
                      aria-controls="contactb11"
                      aria-selected="false"
                    >
                      <span className="fasilities__item align-items-center d-flex">
                        <span className="icon">
                          <Image src={bus} alt="icon" />
                        </span>
                        <span className="fz-18 pratext d-block">Bus</span>
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link
                      href="URL:void(0)"
                      className="nav-link"
                      id="contact-tabb111"
                      data-bs-toggle="tab"
                      data-bs-target="#contactb111"
                      role="tab"
                      aria-controls="contactb111"
                      aria-selected="false"
                    >
                      <span className="fasilities__item align-items-center d-flex">
                        <span className="icon">
                          <Image src={cars} alt="icon" />
                        </span>
                        <span className="fz-18 pratext d-block">Cars</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5">
              <div className="search__contact">
                <form action="URL:void(0)">
                  <input type="text" placeholder="Search here" />
                  <button type="submit">
                    <Image src={searchwhite} alt="img" />
                  </button>
                </form>
                <Link href="/contact" className="cmn__btn">
                  <span>Contact us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="booking__landing__wrap3">
          <div className="booking__landing__body booking__landing__bodytwo">
            <div className="tab-content" id="myTabContentbookin1">
              <div
                className="tab-pane fade show active"
                id="homeb1"
                role="tabpanel"
                aria-labelledby="home-tabb1"
              >
                {/* Hotel Tab Here */}
                <HotelTab />
              </div>
              <div
                className="tab-pane fade"
                id="profileb1"
                role="tabpanel"
                aria-labelledby="profile-tabb1"
              >
                {/* Flight Tab Here */}
                <FlightTab />
              </div>
              <div
                className="tab-pane fade"
                id="contactb1"
                role="tabpanel"
                aria-labelledby="contact-tabb1"
              >
                {/* Train Tab Here */}
                <TrainTab />
              </div>
              <div
                className="tab-pane fade"
                id="contactb11"
                role="tabpanel"
                aria-labelledby="contact-tabb11"
              >
                {/* Bus Tab Here */}
                <BusTab />
              </div>
              <div
                className="tab-pane fade"
                id="contactb111"
                role="tabpanel"
                aria-labelledby="contact-tabb111"
              >
                {/* Car Tab Here */}
                <CarTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
