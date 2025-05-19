import Banner from "@/components/faqPage/Banner";
import Faqs from "@/components/faqPage/Faqs";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";

export default function FaqPage() {
  return (
    <>
      {/* NavBar Here */}
      <NavBar />

      {/* Banner Section Here */}
      <Banner />

      {/* All Faqs Here */}
      <Faqs />

      {/* Footer Section Here */}
      <Footer />
    </>
  );
}
