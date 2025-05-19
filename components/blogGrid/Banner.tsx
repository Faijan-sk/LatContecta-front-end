import Breadcumnd from "../breadcumnd/Breadcumnd";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Blog - Grid">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ["Home", "/"],
          ["Blog", "URL:void(0)"],
          ["List", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
