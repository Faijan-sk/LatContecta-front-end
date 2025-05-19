import HelpSearch from "../common/HelpSearch";

const Banner = () => {
  return (
    <section className="breadcumnd__banner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="help__banner pb-80">
              {/* Help Search Here */}
              <HelpSearch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
