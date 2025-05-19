import FilterOption from "../carList/FilterOption";
import Pagination from "../pagination/Pagination";
import AllCars from "./AllCars";

const CarGridMain = () => {
  return (
    <section className="flight__onewaysection pb__60">
      <div className="container">
        <div className="cars__gridwrapper">
          <div className="row g-4 justify-content-center">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              {/* Filter Option Here */}
              <FilterOption />
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="row g-4 justify-content-center">
                {/* All Cars Section Here */}
                <AllCars />
              </div>

              {/* Pagination Section */}
              <Pagination clss="justify-content-center pt__40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarGridMain;
