import Banner from '@/components/about/Banner'
import Sponsor from '@/components/about/Sponsor'
import Support from '@/components/bookingLanding3/Support'
import Testimonial from '@/components/bookingLanding3/Testimonial'
import Footer from '@/components/footer/Footer'
import Faq from '@/components/home/Faq'
import AppStore from '@/components/homeTwo/AppStore'
import NavBar2 from '@/components/navBar/NavBar2'

export default function About() {
  return (
    <>
      {/* NavBar Section Here  */}
      <NavBar2 />

      {/* Banner Section Here  */}
      <Banner />

      {/* Support Section Here  */}
      <div
        style={{
          marginTop: '150px',
        }}
      >
        {' '}
        <Support />
      </div>
      {/* Faq Section Here  */}
      <Faq />

      {/* Sponsor Section Here  */}
      <Sponsor />

      {/* App Store Section Here  */}
      <AppStore />

      {/* Testimonial Section Here  */}
      <Testimonial />

      {/* Footer Section Here  */}
      <Footer />
    </>
  )
}
