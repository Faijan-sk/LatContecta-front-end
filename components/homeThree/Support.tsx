import Image from 'next/image'
import Link from 'next/link'
import dots from '/public/img/refer/dots.png'
import referball from '/public/img/refer/referball.png'
import mobilepro from '/public/img/working/mobilepro.png'
import soundpro from '/public/img/working/soundpro.png'
import supportpro from '/public/img/working/supportpro.png'
import walletpro from '/public/img/working/walletpro.png'

const Support = () => {
  return (
    <section className="refer__section__three pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="section__header">
              <h2>Enjoy our Speacial supports</h2>
              <p className="pb__40">
                There are many variations of passages of Lorem Ipsum available,
                but the have suffered alteration in some form, by injected
                humour, or randomised words which don&#39;t look even slightly
                believable. If you are going to use...
              </p>
              <Link href="/URL:void(0)" className="cmn__btn">
                <span>Contact us</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="refer__boxes__wrap refer__boxes__wrapthree">
              <div className="row g-4 align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="refer__items__thregrid">
                    <div className="refer__item refer__item__grid">
                      <div className="icon">
                        <Image src={mobilepro} alt="img" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href="/order" className="dtext">
                            Secure Payment
                          </Link>
                        </h5>
                        <p>There are many variations of passages of Lorem...</p>
                      </div>
                    </div>
                    <div className="refer__item refer__item__grid">
                      <div className="icon">
                        <Image src={walletpro} alt="img" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href="/order" className="dtext">
                            Trust pay
                          </Link>
                        </h5>
                        <p>There are many variations of passages of Lorem...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 updown__support">
                  <div className="refer__items__thregrid">
                    <div className="refer__item refer__item__grid">
                      <div className="icon">
                        <Image src={soundpro} alt="img" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href="/order" className="dtext">
                            Refer Payment
                          </Link>
                        </h5>
                        <p>There are many variations of passages of Lorem...</p>
                      </div>
                    </div>
                    <div className="refer__item refer__item__grid">
                      <div className="icon">
                        <Image src={supportpro} alt="img" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href="/order" className="dtext">
                            24X7 Support
                          </Link>
                        </h5>
                        <p>There are many variations of passages of Lorem...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="refer__dotthree1">
                <Image src={dots} alt="img" />
              </div>
              <div className="refer__dotthree2">
                <Image src={dots} alt="img" />
              </div>
              <div className="refer__dotthree3">
                <Image src={dots} alt="img" />
              </div>
              <div className="refer__dotthree4">
                <Image src={dots} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="refer__ball">
        <Image src={referball} alt="img" className="img-fluid" />
      </div>
    </section>
  )
}

export default Support
