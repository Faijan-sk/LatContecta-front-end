import Image from "next/image";
import Link from "next/link";
import edits from "/public/img/svg/edits.svg";

const LoginSecurityInfo = () => {
  return (
    <div className="personal__infobody">
      <div className="personal__info__box">
        <div className="per__ittle d-flex align-items-center">
          <h5>Login and security</h5>
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
            <span className="namebold fz-18 fw-600">Language</span>
            <span>English (United States)</span>
          </li>
          <li>
            <span className="namebold fz-18 fw-600">Time Zone</span>
            <span>(GMT-06:00) US</span>
          </li>
          <li>
            <span className="namebold fz-18 fw-600">Password</span>
            <span className="actbe">********</span>
          </li>
          <li>
            <span className="namebold fz-18 fw-600">2-step verification</span>
            <span>
              Add an extra layer of security to your account by using a one-time
              security code in adLinkition to your password each time you log
              in. <Link href="/URL:void(0)">Setup</Link>
            </span>
          </li>
          <li>
            <span className="namebold fz-18 fw-600">
              Stay logged in for faster purcheses
            </span>
            <span>
              Add an extra layer of security to your account by using a one-time
              security code in addition to your password each time you log in.
              Update
            </span>
          </li>
          <li>
            <span className="namebold fz-18 fw-600">Security qustion</span>
            <span className="actbe">********</span>
          </li>
          <li>
            <span className="namebold fz-18 fw-600">Address</span>
            <span>3605 Perker Rd.</span>
          </li>
          <li>
            <span className="namebold fz-18 fw-600">Account type</span>
            <span>Business</span>
          </li>
        </ul>
        <Link
          href="URL:void(0)"
          className="closeaccount d-flex align-items-center"
        >
          <span className="icon">
            <i className="material-symbols-outlined">close</i>
          </span>
          <span className="fz-18 fw-600">Close Account</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginSecurityInfo;
