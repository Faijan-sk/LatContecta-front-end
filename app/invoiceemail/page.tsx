import Footer from "@/components/footer/Footer";
import Banner from "@/components/invoiceemail/Banner";
import Order from "@/components/invoiceemail/Order";
import NavBar from "@/components/navBar/NavBar";

export default function Invoiceemail() {
  return (
    <>
      {/* NavBar Section Here  */}
      <NavBar />

      {/* Banner Section Here  */}
      <Banner />

      {/* Order Section Here  */}
      <Order />

      {/* Footer Section Here  */}
      <Footer />
    </>
  );
}
