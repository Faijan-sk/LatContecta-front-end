import TestimonialSlider3 from "../slider/TestimonialSlider3";

const Testimonial = () => {
  return (
    <section className="testimonial__section__three pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header text-center pb__40">
              <h2>Our Customers says</h2>
              <p className="max600">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <div className="testimoial__wrap__three owl-theme owl-carousel">
          {/* Testimonial Slider Three here */}
          <TestimonialSlider3 />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
