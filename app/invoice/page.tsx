import Footer from "@/components/footer/Footer";
import Banner from "@/components/invoice/Banner";
import Order from "@/components/invoice/Order";
import NavBar from "@/components/navBar/NavBar";

export default function Invoice() {
  return (
    <>
      {/* NavBar Here */}
      <NavBar />

      {/* Banner Section Here */}
      <Banner />

      {/* Order Section Here */}
      <Order />

      {/* Footer Section Here */}
      <Footer />
    </>
  );
}
