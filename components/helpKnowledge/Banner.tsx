import Breadcumnd from "../breadcumnd/Breadcumnd";
import HelpSearch from "../common/HelpSearch";

const Banner = () => {
  return (
    <>
      <section className="breadcumnd__banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="help__banner">
                {/* Help Search Here */}
                <HelpSearch />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="new__breadcumd">
        <div className="container text-black">
          {/* Breadcumnd Here  */}
          <Breadcumnd
            clss="dtext"
            breadcrumbs={[
              ["Home", "/"],
              ["Support", "URL:void(0)"],
              [" Knowledge Base", "URL:void(0)"],
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
