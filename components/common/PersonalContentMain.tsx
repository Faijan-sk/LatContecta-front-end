import PersonalInfOptions from "./PersonalInfOptions";

const PersonalContentMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="personal__information pt__60 pb__60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="personal__infotabs">
              {/* Personal Inf Options */}
              <PersonalInfOptions />
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            {/* Main Content Section */}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalContentMain;
