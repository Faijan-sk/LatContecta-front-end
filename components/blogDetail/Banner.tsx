import Breadcumnd from '../breadcumnd/Breadcumnd'
import SmallBanner from '../common/SmallBanner'

const Banner = () => {
  return (
    <SmallBanner title="Blog - Details">
      {/* Breadcumnd here */}
      <Breadcumnd
        breadcrumbs={[
          ['Home', '/'],
          ['Blog', 'URL:void(0)'],
          ['Details', '/'],
        ]}
      />
    </SmallBanner>
  )
}

export default Banner
