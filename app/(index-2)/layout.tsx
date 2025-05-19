import Footer from '@/components/footer/Footer'
import AppStore from '@/components/homeTwo/AppStore'
import Faq from '@/components/homeTwo/Faq'
import HowItWork from '@/components/homeTwo/HowItWork'
import Refer from '@/components/homeTwo/Refer'
import Sponsor from '@/components/homeTwo/Sponsor'
import Support from '@/components/homeTwo/Support'
import NavBar from '@/components/navBar/NavBar2'
import HomeTwoTestimonialSlider from '@/components/slider/HomeTwoTestimonialSlider'

export default function HomeTwoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* NavBar Section Here  */}
      <NavBar lightLogo={true} />

      {children}

      {/* Refer Section Here  */}
      {/* <Refer /> */}

      {/* Sponsor Section Here  */}
      <Sponsor />

      {/* How It Work Section Here  */}
      <HowItWork />

      {/* App Store Section Here  */}
      <AppStore />

      {/* Testimonial Section Here  */}
      <HomeTwoTestimonialSlider />

      {/* Support Section Here  */}
      <Support />

      {/* Faq Section Here  */}
      <Faq />

      {/* Footer Section Here  */}
      <Footer />
    </>
  )
}
