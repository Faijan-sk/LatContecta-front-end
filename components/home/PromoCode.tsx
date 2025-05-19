import PromoCodeSlider from '../slider/PromoCodeSlider'

const PromoCode = () => {
  return (
    <section
      className="promor__sponsor pb-120 wow fadeInDown"
      data-wow-duration="2s"
    >
      <div className="container">
        <h4 className="promo__title mb__30">Promotions</h4>

        {/* Promo Code Slider Section */}
        <PromoCodeSlider />
      </div>
    </section>
  )
}

export default PromoCode
