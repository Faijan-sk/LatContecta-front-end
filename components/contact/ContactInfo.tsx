import Image from "next/image";
import Link from "next/link";
import email from "/public/img/signup/email.png";
import map from "/public/img/signup/map.png";
import phone from "/public/img/signup/phone.png";

const contactData = [
  {
    id: 1,
    className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6",
    icon: phone,
    title: "Call Now",
    links: ["(907) 555-0101", "(252) 555-0126"],
  },
  {
    id: 2,
    className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6",
    icon: email,
    title: "Email Address",
    links: ["sara.cruz@example.com", "bill.sanders@example.com"],
  },
  {
    id: 3,
    className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6",
    icon: map,
    title: "Location",
    links: [
      "Royal Ln. Mesa, New Jersey 45463",
      "Thornridge Cir. Shiloh, Hawaii 81063",
    ],
  },
];

const ContactInfo = () => {
  return (
    <section className="contact__need pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center wow fadeInDown">
          <div className="col-lg-6">
            <div className="section__header section__center pb__60">
              <h2>Need More Help?</h2>
              <p>
                Queries, complaints and feedback. We will be happy to serve you
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {contactData.map((itm) => {
            const { icon, id, links, title } = itm;
            return (
              <div
                key={id}
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6"
              >
                <div className="contact__need__item">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Image src={icon} alt="img" />
                  </div>
                  <h5>{title}</h5>
                  <Link href="/URL:void(0)">
                    {links.map((link, i) => (
                      <span
                        key={i}
                        className="fz-18 mb-1 fw-400 lato dtext d-block"
                      >
                        {link}
                      </span>
                    ))}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
