import Link from "next/link";

const Pagination = ({ clss = "justify-content-end" }) => {
  return (
    <ul className={`pagination ${clss}`}>
      <li>
        <Link href="/URL:void(0)">
          <span className="icon">
            <i className="material-symbols-outlined">chevron_left</i>
          </span>
        </Link>
      </li>
      <li>
        <Link href="/URL:void(0)">1</Link>
      </li>
      <li>
        <Link href="/URL:void(0)">2</Link>
      </li>
      <li>
        <Link href="/URL:void(0)">3</Link>
      </li>
      <li>
        <Link href="/URL:void(0)">...</Link>
      </li>
      <li>
        <Link href="/URL:void(0)">30</Link>
      </li>
      <li>
        <Link href="/URL:void(0)">
          <span className="icon">
            <i className="material-symbols-outlined">chevron_right</i>
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
