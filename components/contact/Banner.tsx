import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Contact us">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Pages", "URL:void(0)"],
          ["Contact us", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
