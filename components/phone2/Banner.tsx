'use client'
import HomeFilterOptions from '../common/HomeFilterOptions'
import RechargePaymentbox from '../common/RechargePaymentbox'
import RechargePaymentboxTwo from '../common/RechargePaymentboxTwo'
import NavBar from '../navBar/NavBar2'
import SearchBar from '@/components/phones/SearchOption'
import PaymentSponsorSlider from '../slider/PaymentSponsorSlider'
import electricity from '/public/img/banner/electricity.jpg'
import PhonePage from '@/components/phones/phoneGridMain'
import Footer from '../footer/Footer'

const Banner = () => {
  return (
    <section className="banner__section">
      {/* Container */}
      <NavBar />
      <div className="container">
        <div
          className="fasilities__wrapper pb__40 wow fadeInUp"
          data-wow-duration="2s"
        >
          {/* Home Filter Options */}
          <HomeFilterOptions />

          <div
            style={{
              marginBottom: '50px',
            }}
          >
            <SearchBar />
          </div>

          <PhonePage />
        </div>
      </div>
      {/* Container */}

      <Footer />
    </section>
  )
}

export default Banner
