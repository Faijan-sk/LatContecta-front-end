import blogData from "@/data/blogData";
import Image from "next/image";
import Link from "next/link";
import comments from "/public/img/svg/comments.svg";
import person from "/public/img/svg/person.svg";

const AllBlogs = () => {
  return (
    <div className="row g-4">
      {blogData.map((itm) => {
        const { id, author, comment_number, desc, img, title } = itm;

        return (
          <div key={id} className="col-xl-6 col-md-6">
            <div className="blog__list__item">
              <Link href="/blog/details" className="thumb">
                <Image src={img} alt="img" className="img-fluid" />
                <span className="date__box">
                  <span>
                    17 dec
                    <span className="dat">2023</span>
                  </span>
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
          </div>
        );
      })}
    </div>
  );
};

export default AllBlogs;
