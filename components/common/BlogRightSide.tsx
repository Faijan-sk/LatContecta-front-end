import Image from "next/image";
import Link from "next/link";
import Social from "../social/Social";
import liss1 from "/public/img/blog/liss1.jpg";
import lists2 from "/public/img/blog/lists2.jpg";
import lists3 from "/public/img/blog/lists3.jpg";
import facebook from "/public/img/svg/facebook.svg";
import instagram from "/public/img/svg/instagram.svg";
import linkedin from "/public/img/svg/linkedin.svg";
import twitter from "/public/img/svg/twitter.svg";

const BlogRightSide = () => {
  return (
    <div className="blog__right__wrapper">
      <div className="blog__right__commonbox mb__30">
        <h5 className="common__tile">Search</h5>
        <form>
          <input type="text" placeholder="Search" required />
          <button type="submit">
            <i className="material-symbols-outlined">search</i>
          </button>
        </form>
      </div>
      <div className="blog__right__commonbox mb__30">
        <h5 className="common__tile">Follow Our Journey</h5>

        {/* Social Items Here */}
        <Social
          items={[
            [facebook, "URL:void(0)"],
            [twitter, "URL:void(0)"],
            [linkedin, "URL:void(0)"],
            [instagram, "URL:void(0)"],
          ]}
        />
      </div>
      <div className="blog__right__commonbox mb__30">
        <h5 className="common__tile">Popular Blog Posts</h5>
        <div className="recent__post">
          <Link href="/blog/details" className="recent__item">
            <span className="thumb">
              <Image src={liss1} alt="img" />
            </span>
            <span className="content">
              <span className="title">Recharge to enable card payments...</span>
              <span className="date">December 19, 2022</span>
            </span>
          </Link>
          <Link href="/blog/details" className="recent__item">
            <span className="thumb">
              <Image src={lists2} alt="img" />
            </span>
            <span className="content">
              <span className="title">
                Stop auto payment in Paytm, turn off this...
              </span>
              <span className="date">December 19, 2022</span>
            </span>
          </Link>
          <Link href="/blog/details" className="recent__item">
            <span className="thumb">
              <Image src={lists3} alt="img" />
            </span>
            <span className="content">
              <span className="title">Paytm KYC- How to Complete Paytm...</span>
              <span className="date">December 19, 2022</span>
            </span>
          </Link>
        </div>
      </div>
      <div className="blog__right__commonbox">
        <h5 className="common__tile">Popular Tags</h5>
        <div className="popular__tags">
          <Link href="/URL:void(0)">Recharge</Link>
          <Link href="/URL:void(0)">Tips</Link>
          <Link href="/URL:void(0)">2023</Link>
          <Link href="/URL:void(0)">Booking</Link>
          <Link href="/URL:void(0)">Payment</Link>
          <Link href="/URL:void(0)">Offer</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogRightSide;
