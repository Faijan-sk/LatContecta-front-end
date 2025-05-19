import Link from "next/link";

const Action = () => {
  return (
    <>
      <li>
        <Link
          className="droplist d-flex align-items-center gap-2"
          href="URL:void(0)"
        >
          <i className="material-symbols-outlined mat-icon">person_remove</i>
          <span>Unfollow</span>
        </Link>
      </li>
      <li>
        <Link
          className="droplist d-flex align-items-center gap-2"
          href="URL:void(0)"
        >
          <i className="material-symbols-outlined mat-icon">hide_source</i>
          <span>Hide Contact</span>
        </Link>
      </li>
    </>
  );
};

export default Action;
