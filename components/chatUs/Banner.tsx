import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Chat us">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Pages", "URL:void(0)"],
          ["Chat us", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
