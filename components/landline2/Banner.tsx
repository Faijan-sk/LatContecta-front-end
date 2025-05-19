import Image from 'next/image'
import HomeTwoFilterOptions from '../common/HomeTwoFilterOptions'
import RechargePaymentboxTwo from '../common/RechargePaymentboxTwo'
import PromoSponsorSliderTwo from '../slider/PromoSponsorSliderTwo'
import landline2 from '/public/img/banner/landline2.jpg'

const Banner = () => {
  return (
    <section className="banner__section__two">
      <div className="banner__wrapper__two">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 wow fadeInUp"
              data-wow-duration="1.5s"
            >
              <div className="fasilities__wrapper pb__40">
                {/* Home Two Filter Options */}
                <HomeTwoFilterOptions />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="recharge__paymentbox mb__30">
                {/* Recharge Paymentbox */}
                <RechargePaymentboxTwo title="Pay your Postpaid Bill" />
              </div>

              <h4 className="promo__title mb__30">Promo </h4>
              <div className="promo__sponsor__wrappertwo owl-theme owl-carousel">
                {/* Promo Sponsor Slider Two */}
                <PromoSponsorSliderTwo />
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="pay__sponsor__thumbtwo">
                <Image src={landline2} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
