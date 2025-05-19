import PaymetOptions from "../common/PaymetOptions";
import OrderSummeryContent from "./OrderSummeryContent";

const OrderSummeryMain = () => {
  return (
    <section className="order__section pt__60 pb__60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10 col-lg-12">
            <div className="order__wrappers">
              <div className="order__boxes order__boxestwo">
                {/* Paymet Options Section */}
                <PaymetOptions />

                {/* Order Summery Content Here */}
                <OrderSummeryContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummeryMain;
