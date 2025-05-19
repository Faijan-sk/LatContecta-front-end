import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Notifications">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Pages", "URL:void(0)"],
          ["My Profile", "URL:void(0)"],
          ["Notifications", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
