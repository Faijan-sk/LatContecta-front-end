import Image from "next/image";
import Link from "next/link";
import edits from "/public/img/svg/edits.svg";

const PersonalInfo = () => {
  return (
    <div className="personal__infobody">
      <div className="personal__info__box">
        <div className="per__ittle d-flex align-items-center">
          <h5>Personal information</h5>
          <Link
            href="URL:void(0)"
            className="edit d-flex align-items-center gap-2"
          >
            <span className="icon">
              <Image src={edits} alt="img" />
            </span>
            <span className="fz-18 fw-600">Edit</span>
          </Link>
        </div>
        <ul className="personal__details__name">
          <li>
            <span className="namebold fz-18 fw-600">Name</span>
            <span>Leslie Alexander</span>
          </li>
          <li>
            <span className="namebold fz-18 fw-600">Date of Birth</span>
            <span>12/07/1993</span>
          </li>
          <li>
            <span className="namebold fz-18 fw-600">Account Status</span>
            <span className="actbe">Active</span>
          </li>
          <li>
            <span className="namebold fz-18 fw-600">Email</span>
            <span>example.example@gamil.com</span>
          </li>
          <li>
            <span className="namebold fz-18 fw-600">Mobile</span>
            <span>(205) 555-0100</span>
          </li>
          <li>
            <span className="namebold fz-18 fw-600">Country</span>
            <span>US</span>
          </li>
          <li>
            <span className="namebold fz-18 fw-600">Address</span>
            <span>3605 Perker Rd.</span>
          </li>
          <li>
            <span className="namebold fz-18 fw-600">Customer Service ID</span>
            <span>cust_FXFlIvl8h1TA7o</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalInfo;
