import Image from 'next/image'
import HomeTwoFilterOptions from '@/components/common/HomeTwoFilterOptions'
import RechargePaymentboxTwo from '@/components/common/RechargePaymentboxTwo'
import PromoSponsorSliderTwo from '@/components/slider/PromoSponsorSliderTwo'
import eletronic2 from '/public/img/banner/eletronic2.jpg'
import AddTwo from '@/public/img/banner/DALL·E 2025-03-11 12.02.26 - A vibrant advertisement for a healthy snacks brand. The image features an assortment of colorful and fresh snacks, such as granola bars, dried fruit, .webp'

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
                <RechargePaymentboxTwo title="Pay your Electricity Bill" />
              </div>

              <h4 className="promo__title mb__30">Promotions </h4>
              <div className="promo__sponsor__wrappertwo owl-theme owl-carousel">
                {/* Promo Sponsor Slider Two */}
                <PromoSponsorSliderTwo />
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="pay__sponsor__thumbtwo">
                <Image
                  style={{
                    height: '55vh',
                    borderRadius: '5px',
                  }}
                  src={AddTwo}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
