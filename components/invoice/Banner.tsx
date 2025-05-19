import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Invoice">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Recharge & Bill Payment", "URL:void(0)"],
          ["Invoice", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
