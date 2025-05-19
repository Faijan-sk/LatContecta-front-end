'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import signup from '/public/img/signup/signup.png'

const LoginPage = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [otp, setOtp] = useState(['', '', '', ''])
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return // Prevent multiple digits

    const newOtp = [...otp]
    newOtp[index] = value

    setOtp(newOtp)

    // Auto-focus next input
    if (value !== '' && index < 3) {
      inputRefs[index + 1].current?.focus()
    }
  }

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus()
    }
  }

  const handleOtpFocus = () => {
    // Always focus on the first OTP input when clicking any OTP box
    inputRefs[0].current?.focus()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(username)

    // Redirect to home page after login
    router.push('/')
  }

  return (
    <section className="signup__section bluar__shape">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-6">
            <div className="signup__boxes">
              <h4>Login in to LatConecta</h4>
              <p className="head__pra mb__30">
                Log in to your account and make recharges and Bill payments
                faster
              </p>
              <form className="signup__form" onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="input__grp">
                      <label>Enter your email or mobile</label>
                      <input
                        type="text"
                        placeholder="Enter your email or mobile here"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="input__grp">
                      <label>Password</label>
                      <input
                        type="Password"
                        placeholder="Enter your Passsword here"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input__grp">
                      <label>Enter Your OTP</label>
                      <div
                        style={{ display: 'flex' }}
                        className="flex gap-2"
                        onClick={handleOtpFocus} // Clicking any box focuses the first input
                      >
                        {[0, 1, 2, 3].map((index: number) => (
                          <input
                            key={index}
                            ref={inputRefs[index]}
                            type="text"
                            maxLength={1}
                            className="w-[25px] h-[25px] text-center border rounded"
                            placeholder="-"
                            value={otp[index]}
                            onChange={(e) =>
                              handleOtpChange(index, e.target.value)
                            }
                            onKeyDown={(e) => handleKeyDown(index, e)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Link href="/login/forgetPassword" className="forgot">
                    Forgot Password?
                  </Link>
                  <div className="col-lg-12">
                    <div className="input__grp">
                      <button type="submit" className="cmn__btn">
                        <span>Login In</span>
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

export default LoginPage
