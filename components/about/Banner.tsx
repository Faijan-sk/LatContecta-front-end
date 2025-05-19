import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="About us">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Page", "URL:void(0)"],
          ["About us", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
