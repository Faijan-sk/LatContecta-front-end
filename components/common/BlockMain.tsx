import SideBar from "../sideBar/SideBar";

const BlockMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="common__section">
      <div className="container-fluid">
        <div className="divided__common__body">
          {/* Side Bar */}
          <SideBar />

          {/* main */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default BlockMain;
