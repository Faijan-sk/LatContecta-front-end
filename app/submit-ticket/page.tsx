import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import Banner from "@/components/submitTicket/Banner";
import SubmitTicketMain from "@/components/submitTicket/SubmitTicketMain";

export default function SubmitTicket() {
  return (
    <>
      {/* NavBar Section Here  */}
      <NavBar />

      {/* Banner Section Here  */}
      <Banner />

      {/* Submit Ticket Main Section Here  */}
      <SubmitTicketMain />

      {/* Footer Section Here  */}
      <Footer />
    </>
  );
}
