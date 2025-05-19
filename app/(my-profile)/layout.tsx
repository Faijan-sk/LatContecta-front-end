import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";

export default function MyProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* NavBar Section Here  */}
      <NavBar />

      {children}

      {/* Footer Section Here  */}
      <Footer />
    </>
  );
}
