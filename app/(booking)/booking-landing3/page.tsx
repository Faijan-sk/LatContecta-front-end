import AppStore from "@/components/bookingLanding3/AppStore";
import Banner from "@/components/bookingLanding3/Banner";
import BookingOffers from "@/components/bookingLanding3/BookingOffers";
import Branch from "@/components/bookingLanding3/Branch";
import Sponsor from "@/components/bookingLanding3/Sponsor";
import Support from "@/components/bookingLanding3/Support";
import Testimonial from "@/components/bookingLanding3/Testimonial";
import Refer from "@/components/home/Refer";

export default function BookingLanding3() {
  return (
    <>
      {/* Banner Section Here  */}
      <Banner />

      {/* Booking Offers Section Here  */}
      <BookingOffers />

      {/* Refer Section Here  */}
      <Refer />

      {/* Support Section Here  */}
      <Support />

      {/* App Store Section Here  */}
      <AppStore />

      {/* Branch Section Here  */}
      <Branch />

      {/* Sponsor Section Here  */}
      <Sponsor />

      {/* Testimonial Section Here  */}
      <Testimonial />
    </>
  );
}
