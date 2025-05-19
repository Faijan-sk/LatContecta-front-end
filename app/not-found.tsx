import Image from 'next/image'
import Link from 'next/link'
import error from '/public/img/signup/error.png'

export default function NotFound() {
  return (
    <section className="error__section d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-7">
            <div className="error__content">
              <Image
                src={error}
                className="error__thumb img-fluid"
                alt="error"
              />
              <h2>Oops! Page Not Found</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/" className="cmn__btn">
                <span>Back to home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
