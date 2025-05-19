import Image from 'next/image'
import Link from 'next/link'
import appthree from '/public/img//app/appthree.png'
import appplay from '/public/img/app/appplay.png'
import appstore from '/public/img/app/appstore.png'

const AppStore = () => {
  return (
    <section className="app__section bgsection pt-120 pb-120">
      <div className="container">
        <div className="row flex-row-reverse justify-content-center align-items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="app__content">
              <div className="section__header">
                <h2>Download Our Mobile Top-Up App Now</h2>
                <p className="apptext">
                  Download our app for the fastest, most convenient way to send
                  Recharge.
                </p>
                <p className="pb__40">
                  There are many variations of passages of Lorem Ipsum
                  available, but the have suffered alteration in some form, by
                  injected humour, or randomised words which don&#39;t look even
                  slightly believable. If you are going to use...
                </p>
                <div className="d-flex gap-3 align-items-center">
                  <Link href="/URL:void(0)" className="storyitem">
                    <Image src={appplay} alt="img" />
                  </Link>
                  <Link href="/URL:void(0)" className="storyitem">
                    <Image src={appstore} alt="img" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-10">
            <div className="app__thumb app__thumb__three">
              <Image src={appthree} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppStore
