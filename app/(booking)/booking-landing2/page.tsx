import Ambition from "@/components/bookingLanding2/Ambition";
import AppStore from "@/components/bookingLanding2/AppStore";
import Banner from "@/components/bookingLanding2/Banner";
import Destinations from "@/components/bookingLanding2/Destinations";
import Sponsor from "@/components/bookingLanding2/Sponsor";
import Faq from "@/components/homeTwo/Faq";
import HowItWork from "@/components/homeTwo/HowItWork";

export default function BookingLanding2() {
  return (
    <>
      {/* Banner Section Here  */}
      <Banner />

      {/* Sponsor Section Here  */}
      <Sponsor />

      {/* Destinations Section Here  */}
      <Destinations />

      {/* Ambition Section Here  */}
      <Ambition />

      {/* How It Work Section Here  */}
      <HowItWork />

      {/* App Store Section Here  */}
      <AppStore />

      {/* Faq Section Here  */}
      <Faq clss="booklanding__qustiontwo" />
    </>
  );
}
