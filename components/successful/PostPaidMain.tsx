import PaymetOptions from '../common/PaymetOptions'
import SuccessfulContent from './PostPaidSuccess'

const SuccessfulMain = () => {
  return (
    <section className="order__section successful__section pb__60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10 col-lg-12">
            <div className="payment__success__inner">
              {/* Paymet Options Here */}
              <PaymetOptions />

              {/* Successful Content Section */}
              <SuccessfulContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessfulMain
