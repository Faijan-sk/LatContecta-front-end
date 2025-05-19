import Image from "next/image";
import Link from "next/link";
import Action from "../common/Action";
import barry from "/public/img/blog/barry.png";
import gwillam from "/public/img/blog/gwillam.png";
import martin from "/public/img/blog/martin.png";
import oliviamark from "/public/img/blog/oliviamark.png";
import pjohn from "/public/img/blog/pjohn.png";
import profile_edit from "/public/img/blog/profile-edit.png";
import sofia from "/public/img/blog/sofia.png";
import stone from "/public/img/blog/stone.png";
import pen_edit from "/public/img/svg/pen-edit.svg";
import three_dots from "/public/img/svg/three-dots.svg";
import user_search from "/public/img/svg/user-search.svg";

const chatUserData = [
  {
    id: 1,
    name: "Lester Barry",
    avatar: barry,
    message: "Let's play now!",
    time: "4m",
    unseen: true,
  },
  {
    id: 2,
    name: "Emma Stone",
    avatar: stone,
    message: "Are you here?",
    time: "9m",
    unseen: true,
  },
  {
    id: 3,
    name: "Sofia Dior",
    avatar: sofia,
    message: "You? Good, I will wait for you in...",
    time: "1h",
    unseen: false,
  },
  {
    id: 4,
    name: "Phillip Martin",
    avatar: martin,
    message: "I will go to sleep",
    time: "2h",
    unseen: false,
  },
  {
    id: 5,
    name: "Christin Jhn",
    avatar: pjohn,
    message: "Am waiting for this new game...",
    time: "3h",
    unseen: false,
  },
  {
    id: 6,
    name: "Guzman Williams",
    avatar: gwillam,
    message: "You: I will go AFK",
    time: "4h",
    unseen: false,
  },
  {
    id: 7,
    name: "Olivia Mark",
    avatar: oliviamark,
    message: "I will go AFK",
    time: "1d",
    unseen: false,
  },
];

const ChatUser = () => {
  return (
    <>
      <div className="cheat__user d-flex align-items-center justify-content-between">
        <Image src={profile_edit} className="uericon" alt="icon" />
        <div className="edit__user d-flex align-items-center gap-3">
          <Link href="/URL:void(0)">
            <Image src={pen_edit} alt="icon" />
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
      <div className="chat__search mb__15 d-flex">
        <div className="search__icon">
          <Image src={user_search} alt="img" />
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="chat__llist">
        {chatUserData.map((user) => {
          const { avatar, id, message, name, time, unseen } = user;
          return (
            <Link
              key={id}
              href="URL:void(0)"
              className="text-start d-flex align-items-center justify-content-between chat__single"
            >
              <span className="d-flex gap-3 align-items-center">
                <span className="avatar red">
                  <Image className="avatar-img" src={avatar} alt="avatar" />
                </span>
                <span className="text-area">
                  <span className="m-0 fz-18 dtext fw-700 mb-1">{name}</span>
                  <span className="mdtxt fz-16 lato fw-400">{message}</span>
                </span>
              </span>
              <span className="date__time">
                {unseen ? (
                  <>
                    <span className="bg d-flex align-items-center justify-content-center">
                      2
                    </span>
                    <span className="mnutes mactive fz-16 lato fw-400">
                      {time}
                    </span>
                  </>
                ) : (
                  <span className="mnutes fz-16 lato fw-400">1h</span>
                )}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ChatUser;
