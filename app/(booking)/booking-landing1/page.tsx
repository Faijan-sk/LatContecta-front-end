import Banner from "@/components/bookingLanding1/Banner";
import BookingOffers from "@/components/bookingLanding1/BookingOffers";
import Branchs from "@/components/bookingLanding1/Branchs";
import OurService from "@/components/bookingLanding1/OurService";
import Sponsor from "@/components/bookingLanding1/Sponsor";
import WorkProcess from "@/components/bookingLanding1/WorkProcess";
import AppStore from "@/components/homeTwo/AppStore";
import HomeTwoTestimonialSlider from "@/components/slider/HomeTwoTestimonialSlider";

export default function BookingLanding1() {
  return (
    <>
      {/* Banner Section Here  */}
      <Banner />

      {/* Banner Section Here  */}
      <BookingOffers />

      {/* OurService Section Here  */}
      <OurService />

      {/* Branchs Section Here  */}
      <Branchs />

      {/* Work Process Section Here  */}
      <WorkProcess />

      {/* Testimonial Section Here  */}
      <HomeTwoTestimonialSlider />

      {/* App Store Section Here  */}
      <AppStore />

      {/* Sponsor Section Here  */}
      <Sponsor />
    </>
  );
}
