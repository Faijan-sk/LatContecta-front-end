import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Car - Email Template">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Booking", "URL:void(0)"],
          ["Car", "URL:void(0)"],
          ["Email Template", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
