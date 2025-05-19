import Image from "next/image";
import Link from "next/link";
import Social from "../social/Social";
import detailsb1 from "/public/img/blog/detailsb1.jpg";
import wman3 from "/public/img/blog/wman3.jpg";
import woman1 from "/public/img/blog/woman1.jpg";
import woman2 from "/public/img/blog/woman2.jpg";
import calen from "/public/img/svg/calen.svg";
import comments from "/public/img/svg/comments.svg";
import facebook from "/public/img/svg/facebook.svg";
import instagram from "/public/img/svg/instagram.svg";
import linkedin from "/public/img/svg/linkedin.svg";
import person from "/public/img/svg/person.svg";
import twitter from "/public/img/svg/twitter.svg";
import jenlia from "/public/img/testimonial/jenlia.png";
import star from "/public/img/testimonial/star.png";

const Details = () => {
  return (
    <div className="blog__list__item">
      <Link href="/URL:void(0)" className="thumb">
        <Image src={detailsb1} alt="img" />
      </Link>
      <div className="content">
        <h3 className="pb__20">
          <Link href="/URL:void(0)">
            Why you should think twice before booking the Maldives...
          </Link>
        </h3>
        <ul className="admin__commments pb__20">
          <li>
            <span className="icon">
              <Image src={person} alt="icon" />
            </span>
            <span className="text">Admin</span>
          </li>
          <li>
            <span className="icon">
              <Image src={comments} alt="icon" />
            </span>
            <span className="text">15</span>
          </li>
          <li>
            <span className="icon calen">
              <Image src={calen} alt="icon" />
            </span>
            <span className="text">15-12-23</span>
          </li>
        </ul>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&#39;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn&#39;t anything embarrassing hidden in the middle
          of text. All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
      </div>
      <div className="row g-2">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="woman__gallery">
            <Image src={woman1} alt="img" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="woman__gallery mb-2">
            <Image src={woman2} alt="img" />
          </div>
          <div className="woman__gallery">
            <Image src={wman3} alt="img" />
          </div>
        </div>
      </div>
      <div className="content">
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&#39;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn&#39;t anything embarrassing hidden in the middle
          of text. All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
        <div className="comment__client mt__30 mb__30">
          <div className="testimonial__item">
            <div className="star__wrap pb__20 d-flex align-items-center gap-2 justify-content-center">
              <span>
                <Image src={star} alt="icon" />
              </span>
              <span>
                <Image src={star} alt="icon" />
              </span>
              <span>
                <Image src={star} alt="icon" />
              </span>
              <span>
                <Image src={star} alt="icon" />
              </span>
              <span>
                <Image src={star} alt="icon" />
              </span>
            </div>
            <p className="fz-18 fw-600">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&#39;t look even
              slightly believable. If you are going to use a passage
            </p>
            <div className="client">
              <div className="thumb">
                <Image src={jenlia} alt="img" />
              </div>
              <div className="content">
                <h6 className="name">Jenelia d&#39;suza</h6>
                <span className="desination">Student</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#39;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem...
        </p>
      </div>
      <div className="tags__social mb__20">
        <div className="tags">
          <Link href="/URL:void(0)">Recharge</Link>
          <Link href="/URL:void(0)">Booking</Link>
          <Link href="/URL:void(0)">Payment</Link>
          <Link href="/URL:void(0)">Offers</Link>
        </div>

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
    </div>
  );
};

export default Details;
