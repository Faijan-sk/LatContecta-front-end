"use client";

import BookingOfferSlider from "../slider/BookingOfferSlider";

const BookingOffers = () => {
  return (
    <section className="specilabooking__slider pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__header text-center pb__60">
              <h2>Special Booking offers for you</h2>
              <p className="max600">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <div className="hurray__booking owl-theme owl-carousel">
          {/* Booking Offer Slider */}
          <BookingOfferSlider />
        </div>
      </div>
    </section>
  );
};

export default BookingOffers;
