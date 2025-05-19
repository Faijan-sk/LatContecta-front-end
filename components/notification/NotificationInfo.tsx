import Link from "next/link";

const NotificationInfo = () => {
  return (
    <div className="personal__favorit">
      <div className="personal__info__boxtwo">
        <div className="per__ittle d-flex align-items-center">
          <h5>Notifications</h5>
        </div>
        <div className="notification__body mb__40">
          <div className="notification__item">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkon1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="checkon1">
              <span className="announce fz-18 fw-600">Announcements</span>
              <span className="pragrah fz-16 fw-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </label>
          </div>
          <div className="notification__item">
            <input className="form-check-input" type="checkbox" id="checkof1" />
            <label className="form-check-label" htmlFor="checkof1">
              <span className="announce fz-18 fw-600">Mobile Recharge</span>
              <span className="pragrah fz-16 fw-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </label>
          </div>
          <div className="notification__item">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkon2"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="checkon2">
              <span className="announce fz-18 fw-600">Bill Payment</span>
              <span className="pragrah fz-16 fw-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </label>
          </div>
          <div className="notification__item">
            <input className="form-check-input" type="checkbox" id="checkof2" />
            <label className="form-check-label" htmlFor="checkof2">
              <span className="announce fz-18 fw-600">Booking</span>
              <span className="pragrah fz-16 fw-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </label>
          </div>
          <div className="notification__item">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkon3"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="checkon3">
              <span className="announce fz-18 fw-600">
                Have a problem with a payment
              </span>
              <span className="pragrah fz-16 fw-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </label>
          </div>
          <div className="notification__item">
            <input className="form-check-input" type="checkbox" id="checkof3" />
            <label className="form-check-label" htmlFor="checkof3">
              <span className="announce fz-18 fw-600">Special Offers</span>
              <span className="pragrah fz-16 fw-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </label>
          </div>
          <div className="notification__item">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkon4"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="checkon4">
              <span className="announce fz-18 fw-600">Reviews</span>
              <span className="pragrah fz-16 fw-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </label>
          </div>
        </div>
        <Link href="/URL:void(0)" className="cmn__btn">
          <span>Save Change</span>
        </Link>
      </div>
    </div>
  );
};

export default NotificationInfo;
