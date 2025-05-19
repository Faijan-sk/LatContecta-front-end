import Image from "next/image";
import Link from "next/link";
import comm from "/public/img/blog/comm.png";
import comm1 from "/public/img/blog/comm1.png";
import comm2 from "/public/img/blog/comm3.png";
import replay_man from "/public/img/blog/replay-man.png";
import comments from "/public/img/svg/comments.svg";
import flike from "/public/img/svg/flike.svg";
import sshare from "/public/img/svg/sshare.svg";

const Comments = () => {
  return (
    <>
      <div className="comment__box__inner mb__15 nlfbottom pb__20">
        <div className="man">
          <Image src={comm} alt="img" />
        </div>
        <div className="comment__content">
          <h5>
            Annette Black <span>2 days ago</span>
          </h5>
          <p className="pb__20">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&#39;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be...
          </p>
          <div className="admin__commments mb__30">
            <Link href="/URL:void(0)">
              <span className="icon">
                <Image src={flike} alt="icon" />
              </span>
              <span className="text">18</span>
            </Link>
            <Link href="/URL:void(0)">
              <span className="icon">
                <Image src={comments} alt="icon" />
              </span>
              <span className="text">Reply</span>
            </Link>
            <Link href="/URL:void(0)">
              <span className="icon">
                <Image src={sshare} alt="icon" />
              </span>
              <span className="text">Share</span>
            </Link>
          </div>
          <div className="reply__man">
            <div className="user">
              <Image src={replay_man} alt="img" />
            </div>
            <form action="#0">
              <input type="text" placeholder="Join the discussion..." />
              <button type="submit" className="cmn__btn">
                <span>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="comment__box__inner mt__15 nlfbottom pb__20">
        <div className="man">
          <Image src={comm1} alt="img" />
        </div>
        <div className="comment__content">
          <h5>
            Devon Lane <span>2 days ago</span>
          </h5>
          <p className="pb__20">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&#39;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be...
          </p>
          <div className="admin__commments mb__15">
            <Link href="/URL:void(0)">
              <span className="icon">
                <Image src={flike} alt="icon" />
              </span>
              <span className="text">18</span>
            </Link>
            <Link href="/URL:void(0)">
              <span className="icon">
                <Image src={comments} alt="icon" />
              </span>
              <span className="text">Reply</span>
            </Link>
            <Link href="/URL:void(0)">
              <span className="icon">
                <Image src={sshare} alt="icon" />
              </span>
              <span className="text">Share</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="comment__box__inner mt__20">
        <div className="man">
          <Image src={comm2} alt="img" />
        </div>
        <div className="comment__content">
          <h5>
            Dianne Reussell <span>2 days ago</span>
          </h5>
          <p className="pb__20">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&#39;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be...
          </p>
          <div className="admin__commments mb__15">
            <Link href="/URL:void(0)">
              <span className="icon">
                <Image src={flike} alt="icon" />
              </span>
              <span className="text">18</span>
            </Link>
            <Link href="/URL:void(0)">
              <span className="icon">
                <Image src={comments} alt="icon" />
              </span>
              <span className="text">Reply</span>
            </Link>
            <Link href="/URL:void(0)">
              <span className="icon">
                <Image src={sshare} alt="icon" />
              </span>
              <span className="text">Share</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
