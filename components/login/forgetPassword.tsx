import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import forgetImage from '/public/img/refer/qustion.png'
function forgetPassword() {
  return (
    <>
      <div>
        <section className="signup__section bluar__shape">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-6 col-lg-6">
                <div className="signup__boxes">
                  <h4 className="text-center">Forget Password</h4>
                  <p className="head__pra mb__30 fs-5">Trouble logging in?</p>
                  <p className="fs-6 mt-0">
                    Enter your email, phone, or username and we will send you a
                    link to get back into your account.
                  </p>
                  <form className="signup__form">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="input__grp">
                          <input
                            type="email"
                            placeholder="Your email, phone, or username here"
                            required
                          />
                        </div>
                      </div>

                      <Link href="/login/forgetPassword" className="forgot">
                        Create New Account
                      </Link>
                      <div className="col-lg-12">
                        <div className="input__grp">
                          <button type="submit" className="cmn__btn">
                            <span>Send Login In Link</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="signup__thumb">
                  <Image src={forgetImage} alt="img" className="h-100" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default forgetPassword
