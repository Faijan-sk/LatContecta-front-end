import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Transaction">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Pages", "URL:void(0)"],
          ["My Profile", "URL:void(0)"],
          ["Transaction", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
