import PaymentMethodInfo from '../common/PaymentMethodInfo'
import PaymetOptions from '../common/PaymetOptions'
import SelectCard from '../common/SelectCard'
import BillingAddress from './BillingAddress'

const PaymentMain = () => {
  return (
    <section className="payment__section pt__60 pb-120">
      <div className="container">
        <form action="#" method="post">
          <div className="row g-4">
            <div className="col-md-12 col-lg-4 col-xl-3">
              <div className="checkout__radio">
                {/* Select Card Here */}
                <SelectCard />
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              <div className="checkout__single-wrapper">
                <div className="checkout__single">
                  {/* Paymet Options Here */}
                  <PaymetOptions />

                  {/* Billing Address Section */}
                  <BillingAddress />
                </div>
                <div className="checkout__single checkout__single__bg">
                  {/* Payment Methods Section */}
                  <PaymentMethodInfo />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default PaymentMain
