import Electricity2 from '@/app/(index-2)/electricity2/page'
import HomeFilterOptions from '../common/HomeFilterOptions'
import RechargePaymentbox from '../common/RechargePaymentbox'
import Footer from '../footer/Footer'
import NavBar from '../navBar/NavBar2'
import PaymentSponsorSlider from '../slider/PaymentSponsorSlider'
import water from '/public/img/banner/water.jpg'
import Electricity from '@/components/otherBillPayments/electricity/electricity'
import Water from '@/app/(index)/water/page'
import Water2 from '@/app/(index-2)/water2/page'

const sliderData = [
  { id: 1, img: water },
  { id: 2, img: water },
  { id: 3, img: water },
]

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
          <Electricity />
        </div>

        {/* <div className="fasilities__body wow fadeInUp" data-wow-duration="3s">
          <div className="row g-4 justify-content-center">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-8">
              <div className="recharge__paymentbox">
                Recharge Payment box

                <RechargePaymentbox title=" Pay Your Water Bill" />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              Payment Sponsor Slider
              <PaymentSponsorSlider sliderData={sliderData} />
            </div>
          </div>
        </div> */}
      </div>
      {/* Container */}
      <Footer />
    </section>
  )
}

export default Banner
