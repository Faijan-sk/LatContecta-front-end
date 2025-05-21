import Breadcumnd from '../breadcumnd/Breadcumnd'
import SmallBanner from '../common/SmallBanner'
const Banner = () => {
  return (
    <SmallBanner title="Order Summary">
      {/* Breadcumnd Section  */}
      <Breadcumnd
        breadcrumbs={[
          ['Home', '/'],
          ['Recharge & Bill Payment', '/'],
          ['Order Summary', '/'],
        ]}
      />
    </SmallBanner>
  )
}

export default Banner
