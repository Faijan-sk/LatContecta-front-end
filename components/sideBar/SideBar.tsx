"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  { id: 1, href: "/typography", text: "Typography" },
  { id: 2, href: "/blocks-home", text: "Banners" },
  { id: 3, href: "/blocks-allblocks", text: "All Blocks" },
  { id: 4, href: "/blocks-ordersystem", text: "Order System" },
  { id: 5, href: "/blocks-about", text: "About & Refer" },
  { id: 6, href: "/blocks-list", text: "Page List" },
  { id: 7, href: "/blocks-grid", text: "Page Grid" },
  { id: 8, href: "/blocks-round", text: "Round & Oneway" },
  { id: 9, href: "/blocks-invoice", text: "Invoice & Email" },
  { id: 10, href: "/blocks-signin", text: "Sigin & Signup" },
  { id: 11, href: "/blocks-confirm-details", text: "Confirm Details" },
  { id: 12, href: "/blocks-payments", text: "Payment System" },
  { id: 13, href: "/blocks-successful", text: "Successfull" },
  { id: 14, href: "/blocks-personalinfo", text: "Personal Info" },
  { id: 15, href: "/blocks-testimonial", text: "Testimonial" },
  { id: 16, href: "/blocks-faqs", text: "Faq" },
  { id: 17, href: "/blocks-support", text: "Support" },
  { id: 18, href: "/blocks-contact", text: "Contact us" },
  { id: 19, href: "/blocks-error", text: "Error" },
];

const SideBar = () => {
  const pathName = usePathname();

  return (
    <div className="side__sticky">
      <ul className="common__sidebar__wrapper">
        {data.map(({ id, href, text }) => (
          <li key={id} className="common__sideitems">
            <Link href={href} className={`${pathName === href && "active"}`}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
