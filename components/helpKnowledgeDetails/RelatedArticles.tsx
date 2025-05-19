import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "How do I apply to make payment by Rechargio?",
    href: "URL:void(0)",
    icon: "chevron_right",
  },
  {
    id: 2,
    title: "Terms and Conditions for user",
    href: "URL:void(0)",
    icon: "chevron_right",
  },
  {
    id: 3,
    title: "How does rechargio commission work?",
    href: "URL:void(0)",
    icon: "chevron_right",
  },
  {
    id: 4,
    title: "How do I recharge my mobile by Rechargio?",
    href: "URL:void(0)",
    icon: "chevron_right",
  },
  {
    id: 5,
    title: "How to make Booking in Rechargio?",
    href: "URL:void(0)",
    icon: "chevron_right",
  },
  {
    id: 6,
    title: "How to make bill payment in Rechargio?",
    href: "URL:void(0)",
    icon: "chevron_right",
  },
];

const RelatedArticles = () => {
  return (
    <ul className="knowledge__articles__recharge">
      {articles.map(({ id, title, href, icon }) => (
        <li key={id}>
          <Link
            href={href}
            className="articles__items__recharge d-flex align-items-center"
          >
            <span className="icon d-flex align-items-center justify-content-center">
              <i className="material-symbols-outlined">{icon}</i>
            </span>
            <span className="ftext fz-18 fw-400 lato dtext">{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RelatedArticles;
