import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import AppStore from "./AppStore";
import Banner from "./Banner";
import Faq from "./Faq";
import HowItWork from "./HowItWork";
import Refer from "./Refer";
import Support from "./Support";
import Testimonial from "./Testimonial";

const HomeThreeMain = () => {
  return (
    <>
      {/* NavBar Section Here  */}
      <NavBar clss="header__threestyle" />

      {/* Banner Section Here  */}
      <Banner />

      {/* Refer Section Here  */}
      <Refer />

      {/* How It Work Section Here  */}
      <HowItWork />

      {/* Faq Section Here  */}
      <Faq />

      {/* Testimonial Section Here  */}
      <Testimonial />

      {/* App Store Section Here  */}
      <AppStore />

      {/* Support Section Here  */}
      <Support />

      {/* Footer Section Here  */}
      <Footer />
    </>
  );
};

export default HomeThreeMain;
