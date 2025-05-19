import DestinationSlider from "../slider/DestinationSlider";

const Destinations = () => {
  return (
    <section className="specilabooking__slidertwo pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__header text-center pb__60">
              <h2>Popular Destinations</h2>
              <p className="max600">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>

        {/* Destination Slider Here */}
        <DestinationSlider />
      </div>
    </section>
  );
};

export default Destinations;
