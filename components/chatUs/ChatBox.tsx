import Image from "next/image";
import Link from "next/link";
import Action from "../common/Action";
import karlene from "/public/img/blog/karlene.png";
import king from "/public/img/blog/king.png";
import s_darlene from "/public/img/blog/s-darlene.png";
import adfile from "/public/img/svg/adfile.svg";
import dphone from "/public/img/svg/dphone.svg";
import rocket from "/public/img/svg/rocket.svg";
import s_speker from "/public/img/svg/s-speker.svg";
import small_icon from "/public/img/svg/small-icon.svg";
import three_dots from "/public/img/svg/three-dots.svg";

const ChatBox = () => {
  return (
    <>
      <div className="chat__person">
        <div className="cheat__user d-flex align-items-center justify-content-between">
          <div className="user__avatar gactive">
            <Image src={karlene} className="uericon" alt="icon" />
          </div>
          <div className="edit__user d-flex align-items-center gap-3">
            <Link href="/URL:void(0)">
              <Image src={dphone} alt="icon" />
            </Link>
            <div className="dropend">
              <button
                type="button"
                className="dropdown-btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image src={three_dots} alt="img" />
              </button>
              <ul className="dropdown-menu">
                {/* Action Here */}
                <Action />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="chat__body">
        <div className="chat__body__inner d-flex justify-content-between">
          <ul className="left__side__chtat">
            <li className="pb-80">
              <span className="man mb__24">
                <Image src={s_darlene} alt="darlene" />
              </span>
              <span className="textbg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </li>
            <li className="pb-80">
              <span className="man mb__24">
                <Image src={s_darlene} alt="darlene" />
              </span>
              <span className="textbg">How to make payment?</span>
            </li>
            <li className="pb-80">
              <span className="man mb__24">
                <Image src={s_darlene} alt="darlene" />
              </span>
              <span className="textbg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </li>
            <li>
              <span className="man mb__24">
                <Image src={s_darlene} alt="darlene" />
              </span>
              <span className="textbg">How to make payment?</span>
            </li>
          </ul>
          <ul className="left__side__chtat pt-120 right__side__chats">
            <li>
              <span className="man">
                <Image src={king} alt="darlene" />
              </span>
              <span className="textbg mt__24">I play Stronghold Kingdoms</span>
            </li>
            <li className="pt-80">
              <span className="man">
                <Image src={king} alt="darlene" />
              </span>
              <span className="textbg mt__24">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </li>
            <li className="pt-80">
              <span className="man">
                <Image src={king} alt="darlene" />
              </span>
              <span className="textbg mt__24">I play Stronghold Kingdoms</span>
            </li>
            <li className="pt-80">
              <span className="man">
                <Image src={king} alt="darlene" />
              </span>
              <span className="textbg mt__24">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="chat__view__footer d-flex align-items-center gap-4 mt-4">
        <div className="addfile__left d-flex align-items-center gap-3">
          <Link href="/URL:void(0)">
            <Image src={small_icon} alt="svg" />
          </Link>
          <span className="file__choose">
            <Image src={adfile} alt="svg" />
            <input type="file" />
          </span>
          <Link href="/URL:void(0)">
            <Image src={s_speker} alt="svg" />
          </Link>
        </div>
        <form action="#">
          <input type="text" placeholder="Type a message..." />
          <button type="submit" className="cmn__btn">
            <span>
              <Image src={rocket} alt="svg" />
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatBox;
