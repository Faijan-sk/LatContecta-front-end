import Breadcumnd from "../breadcumnd/Breadcumnd";
import CarSearch from "../common/CarSearch";

const Banner = () => {
  return (
    <section className="breadcumnd__banner">
      {/* Container */}
      <div className="container">
        <div className="breadcumnd__wrapper">
          <h2 className="bread__title">Car - List Page</h2>

          {/* Breadcumnd Section  */}
          <Breadcumnd
            breadcrumbs={[
              ["Home", "/"],
              ["Booking", "URL:void(0)"],
              ["Car", "URL:void(0)"],
              ["List Page", "/"],
            ]}
          />
        </div>
      </div>
      {/* Container */}

      <div className="flight__roundtrip pt-80">
        <div className="container">
          <div className="booking__landing__wrap1">
            <div className="booking__landing__body">
              {/* Car Search */}
              <CarSearch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
