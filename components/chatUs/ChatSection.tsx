import ChatBox from "./ChatBox";
import ChatUser from "./ChatUser";

const ChatSection = () => {
  return (
    <section className="chat__section pt-80 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-4">
            <div className="chat__user__wrapper">
              {/* Chat User Section */}
              <ChatUser />
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="chat__box__view">
              {/* Chat Box Section */}
              <ChatBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
