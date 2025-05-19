import Image from 'next/image'
import Link from 'next/link'
import boxamount from '/public/img/refer/boxamount.png'
import boxregister from '/public/img/refer/boxregister.png'
import boxspeaker from '/public/img/refer/boxspeaker.png'
import spealsupport from '/public/img/refer/spealsupport.png'

const Support = () => {
  return (
    <section className="speacial__support bgsection pt-120 pb-120">
      <div className="container">
        <div className="row gx-5 justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="refer__content">
              <div className="section__header wow fadeInDown">
                <h2>Enjoy our Speacial supports</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable. If you are going to use...
                </p>
              </div>
              <div className="refer__wrap pt__20">
                <div
                  className="refer__item wow fadeInUp"
                  data-wow-duration="0.9s"
                >
                  <div className="icon">
                    <Image src={boxspeaker} alt="img" />
                  </div>
                  <div className="content">
                    <h5>Secure Payment</h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available...
                    </p>
                  </div>
                </div>
                <div
                  className="refer__item wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <div className="icon">
                    <Image src={boxregister} alt="img" />
                  </div>
                  <div className="content">
                    <h5>Refer & Earn</h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available...
                    </p>
                  </div>
                </div>
                <div
                  className="refer__item wow fadeInUp"
                  data-wow-duration="1.4s"
                >
                  <div className="icon">
                    <Image src={boxamount} alt="img" />
                  </div>
                  <div className="content">
                    <h5>Trust pay</h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available...
                    </p>
                  </div>
                </div>
                <div
                  className="refer__item wow fadeInUp"
                  data-wow-duration="1.6s"
                >
                  <div className="icon">
                    <Image src={boxamount} alt="img" />
                  </div>
                  <div className="content">
                    <h5>24X7 Support</h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available...
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="cmn__btn wow fadeInUp"
                data-wow-duration="1.9s"
              >
                <span>Contact us</span>
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 wow fadeInUp">
            <div className="speacial__refer__thumb">
              <Image src={spealsupport} alt="thumb" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support
