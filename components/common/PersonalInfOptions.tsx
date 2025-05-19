"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import badge from "/public/img/svg/badge.svg";
import creadits from "/public/img/svg/creadits.svg";
import file_transfer from "/public/img/svg/file-transfer.svg";
import log from "/public/img/svg/log.svg";
import notifications from "/public/img/svg/notifications.svg";
import password_change from "/public/img/svg/password-change.svg";

const PersonalInfOptions = () => {
  const path = usePathname();

  return (
    <ul className="nav">
      {[
        ["Personal Information", "/personal-information", log],
        ["Login and security", "/login-security", log],
        ["Favourites", "/favourites", badge],
        ["Credit or Debit Cards", "/debit-creadit", creadits],
        ["Transaction", "/transaction", file_transfer],
        ["Change Password", "/password-change", password_change],
        ["Notifications", "/notification", notifications],
      ].map(([itm, url, icon], i) => (
        <li key={i} className="nav-item">
          <Link
            href={url}
            className={`nav-link  ${path === url ? "active" : ""}`}
          >
            <span className="icon">
              <Image src={icon} alt="login" />
            </span>
            <span>{itm}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfOptions;
