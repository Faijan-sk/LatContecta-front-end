import HelpCard from '../cards/HelpCard'
import HelpSearch from '../common/HelpSearch'
import documentetion from '/public/img/svg/documentetion.svg'
import forums from '/public/img/svg/forums.svg'
import setting from '/public/img/svg/setting.svg'
import support from '/public/img/svg/support.svg'

const helpItems = [
  {
    id: 1,
    icon: setting,
    title: 'How to use Ding',
    link: 'URL:void(0)',
    description: 'Helpful information on how to use rechargio',
  },
  {
    id: 2,
    icon: forums,
    title: 'Community Forums',
    link: 'URL:void(0)',
    description: 'Helpful information on how to use rechargio',
  },
  {
    id: 3,
    icon: support,
    title: 'Support',
    link: 'URL:void(0)',
    description: 'Helpful information on how to use rechargio',
  },
  {
    id: 4,
    icon: documentetion,
    title: 'Documentation',
    link: 'URL:void(0)',
    description: 'Helpful information on how to use rechargio',
  },
]

const Banner = () => {
  return (
    <section className="breadcumnd__banner">
      {/* Container */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="help__banner pb-80">
              {/* Help Search Here */}
              <HelpSearch />
            </div>
          </div>
        </div>
        <div className="help__wrapper">
          <div className="row g-4">
            {helpItems.map((itm) => (
              //    Help Card here
              <HelpCard key={itm.id} data={itm} />
            ))}
          </div>
        </div>
      </div>
      {/* Container */}
    </section>
  )
}

export default Banner
