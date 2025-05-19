import Breadcumnd from '../breadcumnd/Breadcumnd'
import SearchOption from './SearchOption'

const Banner = () => {
  return (
    <section className="breadcumnd__banner">
      {/* Container */}
      <div className="container">
        <div className="breadcumnd__wrapper">
          <h2 className="bread__title">Phones</h2>
        </div>
      </div>
      {/* Search Option Here  */}
      <SearchOption />
      {/* Search Option End  */}
    </section>
  )
}

export default Banner
