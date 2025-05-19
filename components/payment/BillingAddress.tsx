import Select from "../select/Select";

const country = [
  { id: 1, name: "USA" },
  { id: 2, name: "Aus" },
  { id: 3, name: "UK" },
  { id: 4, name: "NED" },
];

const BillingAddress = () => {
  return (
    <>
      <h4 className="billing fw-400">Billing address</h4>
      <div className="transactionid d-flex align-items-center">
        <span className="tran fz-18 fw-500">Transaction ID: 25246584</span>
        <span className="tran fz-18 fw-500">Total Payable Amount: $457</span>
      </div>
      <div className="checkout__single-form">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="input-single">
              <input
                type="text"
                name="user-first-name"
                id="userFirstName"
                required
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-single">
              <input
                type="text"
                name="user-last-name"
                id="userLastName"
                required
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-single">
              <input
                type="email"
                name="user-check-email"
                id="userCheckEmail"
                required
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-single">
              {/* select here */}
              <Select data={country} />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="input-single">
              <textarea
                name="user-address"
                rows={5}
                id="userAddress"
                placeholder="Address"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingAddress;
