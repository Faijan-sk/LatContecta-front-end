import Image from 'next/image'
import Link from 'next/link'
import Social from '../social/Social'
import ball from '/public/img/svg/ball.svg'
import facebook from '/public/img/svg/facebook.svg'
import instagram from '/public/img/svg/instagram.svg'
import twitter from '/public/img/svg/twitter.svg'
import heart from '/public/img/svg/heart.png'

const Footer = () => {
  return (
    <footer className="footer__section bgsection pt-120">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top pb-120">
            <div className="row gy-5 gx-5">
              <div
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="footer__widget">
                  <div className="widget__head mb__20">
                    {/* <Link href="/" className="footer__logo">
                        <Image src={logo} alt="logo" />
                      </Link> */}
                    <a style={{ color: 'black' }} href="/">
                      {' '}
                      <h3>LatConecta</h3>
                    </a>
                  </div>
                  <p className="pratext mb__20 fz-18">
                    Recharge Your World, One Tap Away
                    <Image
                      src={heart}
                      alt="icon"
                      width={20}
                      height={20}
                      className="mx-2"
                    />
                    !
                  </p>

                  {/* Social Items Here */}
                  <Social
                    items={[
                      [facebook, ''],
                      [instagram, ''],
                      [twitter, ''],
                      [ball, ''],
                    ]}
                  />
                </div>
              </div>
              <div
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="footer__widget">
                  <div className="widget__head mb__20">
                    <h4 className="fz-24 pratext">Quick Links</h4>
                  </div>
                  <div className="widget__link">
                    <Link href="/" className="link fz-18 pratext">
                      Home
                    </Link>
                    <Link href="/about" className="link fz-18 pratext">
                      About
                    </Link>
                    <Link href="/" className="link fz-18 pratext">
                      Mobile Top Up
                    </Link>
                    <Link href="/phones" className="link fz-18 pratext">
                      Buy Phones
                    </Link>
                    <Link
                      href="/otherBillPayment"
                      className="link fz-18 pratext"
                    >
                      Bill Payments
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="mr-20 col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-duration="1.9s"
              >
                <div className="footer__widget">
                  <div className="widget__head mb__20">
                    <h4 className="fz-24 pratext">Newsletter</h4>
                  </div>
                  <div className="widget__link">
                    <p className="fz-18 pratext mb__30">
                      Subscribe our newsletter to get our latest update & news
                    </p>
                    <form
                      action="javacript:void(0)"
                      className="d-flex justify-content-between"
                    >
                      <input type="email" placeholder="Your mail address" />
                      <button type="submit" className="cmn__btn">
                        <span>
                          <i className="material-symbols-outlined">
                            rocket_launch
                          </i>
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-duration="1.7s"
              >
                <div className="footer__widget ml-10">
                  <div className="widget__head mb__20">
                    <h4 className="fz-24 pratext">Help</h4>
                  </div>
                  <div className="widget__link ">
                    <Link href="" className="link fz-18 pratext">
                      <span className="d-block">Support Center</span>
                    </Link>
                    <Link href="" className="link fz-18 pratext">
                      <span className="d-block">Sitemap</span>
                    </Link>
                    <Link href="" className="link fz-18 pratext">
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom d-flex">
            <p className="fz-18 pratext">
              Copyright &copy;2025{' '}
              <Link href="/" className="base">
                LatConecta.
              </Link>
              All Rights Reserved
            </p>
            <ul className="footer__bottom__link">
              <li>
                <Link href="/">Support</Link>
              </li>
              <li>
                <Link href="/">Terms of Use</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
