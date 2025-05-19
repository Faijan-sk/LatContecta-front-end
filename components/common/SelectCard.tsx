const SelectCard = () => {
  return (
    <>
      <p className="primary-text fz-24 fw-400">Select any one</p>
      <div className="checkout__radio-wrapper">
        <div className="checkout__radio-single">
          <input
            type="radio"
            className="form-check-input"
            id="cCard"
            name="pay-method"
            value="Credit/Debit Cards"
          />
          <label htmlFor="cCard">Credit/Debit Cards</label>
        </div>
        <div className="checkout__radio-single">
          <input
            type="radio"
            className="form-check-input"
            id="paypal"
            name="pay-method"
            value="PayPal"
          />
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div className="checkout__radio-single">
          <input
            type="radio"
            className="form-check-input"
            id="payoneer"
            name="pay-method"
            value="Payoneer"
          />
          <label htmlFor="payoneer">Payoneer</label>
        </div>
        <div className="checkout__radio-single">
          <input
            type="radio"
            className="form-check-input"
            id="visa"
            name="pay-method"
            value="Visa"
          />
          <label htmlFor="visa">Visa</label>
        </div>
        <div className="checkout__radio-single">
          <input
            type="radio"
            className="form-check-input"
            id="mastercard"
            name="pay-method"
            value="Mastercard"
          />
          <label htmlFor="mastercard">Mastercard</label>
        </div>
        <div className="checkout__radio-single">
          <input
            type="radio"
            className="form-check-input"
            id="fastPay"
            name="pay-method"
            value="Fastpay"
          />
          <label htmlFor="fastPay">Fastpay</label>
        </div>
      </div>
    </>
  );
};

export default SelectCard;
