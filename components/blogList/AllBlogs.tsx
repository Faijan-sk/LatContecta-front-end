import blogData from "@/data/blogData";
import Image from "next/image";
import Link from "next/link";
import comments from "/public/img/svg/comments.svg";
import person from "/public/img/svg/person.svg";

const AllBlogs = () => {
  return (
    <>
      {blogData.map((itm, i, arr) => {
        const { id, author, comment_number, desc, img, title } = itm;

        return (
          <div
            key={id}
            className={`blog__list__item ${
              arr.length - 1 !== i ? "mb__30" : ""
            }`}
          >
            <Link href="/blog/details" className="thumb">
              <Image src={img} alt="img" />
              <span className="date-item">
                <span className="fz-18 fw-600 dtext lato d-block">17 Dec</span>
                <span className="fz-18 fw-600 dtext lato">2023</span>
              </span>
            </Link>
            <div className="content">
              <h5 className="mb__15">
                <Link href="/blog/details">{title}</Link>
              </h5>
              <ul className="admin__commments mb__15">
                <li>
                  <span className="icon">
                    <Image src={person} alt="icon" />
                  </span>
                  <span className="text">{author}</span>
                </li>
                <li>
                  <span className="icon">
                    <Image src={comments} alt="icon" />
                  </span>
                  <span className="text">{comment_number}</span>
                </li>
              </ul>
              <p className="mb__30">{desc}</p>
              <Link href="/blog/details" className="cmn__btn">
                <span>Read more</span>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AllBlogs;
