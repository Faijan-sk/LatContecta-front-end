import Image from "next/image";
import Link from "next/link";
import croom1 from "/public/img/details/croom1.jpg";
import singlebess from "/public/img/svg/singlebess.svg";
import zoominnout from "/public/img/svg/zoominnout.svg";

const RoomCard = () => {
  return (
    <div className="bits__hotel bits__hotels__details d-grid align-items-center gap-3">
      <div className="thumb thumb2">
        <Link href="/URL:void(0)">
          <Image src={croom1} className="w-100" alt="img" />
        </Link>
      </div>
      <div className="content content__space">
        <div className="title gap-3 d-flex justify-content-between mb__10">
          <h5>Bitast Hotel</h5>
        </div>
        <div className="d-flex flex-wrap mb__15 align-items-center gap-4">
          <span className="dubay gap-2 d-flex align-items-center fz-16 fw-400 lato dtext">
            <span className="singlebed">
              <Image src={singlebess} alt="img" />
            </span>
            Single size bed
          </span>
          <span className="dubay gap-2 d-flex align-items-center fz-16 fw-400 lato dtext">
            <span className="singlebed">
              <Image src={zoominnout} alt="img" />
            </span>
            4.66x4.66 sq.mtr
          </span>
        </div>
        <div className="d-flex flex-wrap align-items-center gap-4">
          <div className="price__off mb__10 d-flex gap-3">
            <span className="fz-18 fw-500 lato dtext">$312</span>
            <span className="linetrogh fz-16 mt-1 fw-500 lato">$332</span>
            <span className="fz-16 fw-500 lato base d-block">20% OFF</span>
          </div>
          <span className="fz-18 d-block fw400 mb__20 lato textfive">
            1 Room/night
          </span>
        </div>
        <div className="d-grid mt-3 justify-content-start">
          <Link href="/hotel-details-confirm" className="cmn__btn">
            <span>Select Room</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
