'use client'
import HomeFilterOptions from '../common/HomeFilterOptions'
import RechargePaymentbox from '../common/RechargePaymentbox'
import RechargePaymentboxTwo from '../common/RechargePaymentboxTwo'
import NavBar from '../navBar/NavBar2'
import SearchBar from '@/components/phones/SearchOption'
import PaymentSponsorSlider from '../slider/PaymentSponsorSlider'
import electricity from '/public/img/banner/electricity.jpg'
import PhonePage from '@/components/phones/PhonePage'
import Footer from '../footer/Footer'

// import
import Link from 'next/link'

const Banner = () => {
  return (
    <section className="banner__section">
      {/* Container */}

      <NavBar />
      <div className="container">
        <Link href="/phones/phone2" className="cmn__btn">
          <span>&larr; </span>
          <span className="ms-2"> Back</span>
        </Link>

        <div>
          <PhonePage />
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default Banner
