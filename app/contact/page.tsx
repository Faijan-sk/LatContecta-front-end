import Banner from '@/components/contact/Banner'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import Footer from '@/components/footer/Footer'
import NavBar from '@/components/navBar/NavBar2'

export default function Contact() {
  return (
    <>
      {/* NavBar Section Here  */}
      <NavBar />

      {/* Banner Section */}
      <Banner />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Contact Info Section */}
      <ContactInfo />

      {/* Footer Section Here  */}
      <Footer />
    </>
  )
}
