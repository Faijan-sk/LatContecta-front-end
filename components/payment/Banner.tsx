import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Payment">
      {/* Breadcumnd Section  */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Recharge & Bill Payment", "/"],
          ["Payment", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
