import Image from "next/image";
import bgcheck from "/public/img/svg/bgcheck.svg";
import file_transfer from "/public/img/svg/file-transfer.svg";

const DetailsLeft = () => {
  return (
    <div className="knowledge__left">
      <div className="head__box border__bottom d-flex">
        <Image src={file_transfer} className="file__thumb" alt="icon" />
        <div className="content">
          <h3 className="dtext">
            How do I apply to make payment by Rechargio?
          </h3>
          <span className="fz-18 fw-400 lato dtext">Created: 22/12/2022</span>
        </div>
      </div>
      <div className="made__offer border__bottom pb__30">
        <h5>Rechargio has made an offer, so choose Quick Payment or Booking</h5>
        <ul className="made__list">
          <li className="d-flex">
            <span className="icon">
              <Image src={bgcheck} alt="img" />
            </span>
            <span className="fz-18 fw400 lato">
              25% offer for every bill payment gateway
            </span>
          </li>
          <li className="d-flex">
            <span className="icon">
              <Image src={bgcheck} alt="img" />
            </span>
            <span className="fz-18 fw400 lato">
              20% offer for every Mobile recharge gateway
            </span>
          </li>
          <li className="d-flex">
            <span className="icon">
              <Image src={bgcheck} alt="img" />
            </span>
            <span className="fz-18 fw400 lato">
              15% offer for every Booking gateway system
            </span>
          </li>
        </ul>
      </div>
      <div className="made__offer">
        <h5>To remove any ambiguity:</h5>
        <ul className="made__list">
          <li className="d-flex">
            <span className="icon">
              <Image src={bgcheck} alt="img" />
            </span>
            <span className="fz-18 fw400 lato">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </span>
          </li>
          <li className="d-flex">
            <span className="icon">
              <Image src={bgcheck} alt="img" />
            </span>
            <span className="fz-18 fw400 lato">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the...
            </span>
          </li>
          <li className="d-flex">
            <span className="icon">
              <Image src={bgcheck} alt="img" />
            </span>
            <span className="fz-18 fw400 lato">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown...
            </span>
          </li>
          <li className="d-flex">
            <span className="icon">
              <Image src={bgcheck} alt="img" />
            </span>
            <span className="fz-18 fw400 lato">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsLeft;
