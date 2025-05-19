import Image from 'next/image'
import Link from 'next/link'
import signup from '/public/img/signup/signup.png'

const SigninMain = () => {
  return (
    <section className="signup__section bluar__shape">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-6">
            <div className="signup__boxes">
              <h4>Sign in to Rechargio</h4>
              <p className="head__pra mb__30">
                Sign in to your account and make recharges. payments and
                bookings faster
              </p>
              <form className="signup__form">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="input__grp">
                      <label>Enter Your Email ID</label>
                      <input
                        type="email"
                        placeholder="Your email ID here"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input__grp">
                      <label>Enter Your Password</label>
                      <input type="text" placeholder="Your Password" required />
                    </div>
                  </div>
                  <Link href="/URL:void(0)" className="forgot">
                    Forgot Password?
                  </Link>
                  <div className="col-lg-12">
                    <div className="input__grp">
                      <button type="submit" className="cmn__btn">
                        <span>Sign In</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="signup__thumb">
              <Image src={signup} alt="img" className="h-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SigninMain
