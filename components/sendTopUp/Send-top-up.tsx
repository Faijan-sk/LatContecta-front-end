'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import earth from './../../public/img/pngFiles/earth.png'
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Telcel from '@/public/img/operators/finaltelcel.jpg'
import Att from '@/public/img/operators/finalAtt.jpg'
import ThirdLogo from '@/public/img/operators/finalthird.jpg'

interface Country {
  name: string
  code: string
}

const SendTopUp: React.FC = () => {
  const [phone, setPhone] = useState<string>('')
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [selectedOperator, setSelectedOperator] = useState<string | null>(null)

  const countries: Country[] = [
    { name: 'El Salvador', code: 'SV' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Peru', code: 'PE' },
    { name: 'United States', code: 'US' },
  ].sort((a, b) => a.name.localeCompare(b.name))

  const handlePhoneChange = (value: string) => {
    setPhone(value)
  }

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value)
  }

  const handleOperatorClick = (operator: string) => {
    setSelectedOperator(operator)
  }

  return (
    <div>
      <section className="top-up-section mt-0">
        <div
          className="container col-lg-9 text-center mt-4"
          style={{ height: '50vh', marginTop: '500px' }}
        >
          <div
            className="d-flex col-lg-9 align-items-center border rounded-pill px-3 py-2 bg-white mx-auto"
            style={{ width: '100%', height: '8vh' }}
          >
            <Image
              style={{ height: '40px', width: '40px', marginRight: '5px' }}
              src={earth}
              alt="Earth"
            />
            <select
              className="border-0 bg-transparent fw-bold w-100"
              value={selectedCountry}
              onChange={handleCountryChange}
              style={{ outline: 'none', cursor: 'pointer' }}
            >
              <option value="">Where are you sending to?</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div
            className="border rounded-3 bg-light text-center p-4 mt-3 mx-auto"
            style={{
              maxWidth: '600px',
              background: 'rgba(255, 255, 255, 0.75)',
            }}
          >
            <p className="fw-bold fs-5">Ready to send a top-up?</p>
            <div
              className="custom-phone-input"
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(240, 242, 255, 1)',
                borderRadius: '15px',
                padding: '8px',
                border: '1px solid #ccc',
                position: 'relative',
                outline: 'none',
                boxShadow: 'none',
              }}
            >
              <ReactPhoneInput
                country={selectedCountry.toLowerCase() || 'us'}
                value={phone}
                onChange={handlePhoneChange}
                inputClass="custom-phone-input-box"
                containerClass="custom-phone-container"
                buttonStyle={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  border: 'none',
                  background: 'transparent',
                }}
                inputStyle={{
                  paddingLeft: '50px',
                  border: 'none',
                  borderRadius: '1px',
                  backgroundColor: 'rgba(240, 242, 255, 1)',
                  fontSize: '16px',
                  color: '#6c757d',
                  width: '100%',
                  outline: 'none',
                  boxShadow: 'none',
                }}
                placeholder="Enter phone number here"
              />
            </div>

            <div
              className="operator__texts d-flex flex-column align-items-center text-center mt-3"
              style={{ width: '100%' }}
            >
              <p className="fw-bold fs-5">Select your operator</p>
              <div className="d-flex justify-content-center gap-3">
                {[
                  { src: Telcel, alt: 'telcel_logo' },
                  { src: Att, alt: 'att_logo' },
                  { src: ThirdLogo, alt: 'third_logo' },
                ].map((operator, index) => (
                  <Image
                    key={index}
                    style={{
                      borderRadius: '10px',
                      padding: '5px',
                      width: '20%',
                      height: 'auto',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                      border:
                        selectedOperator === operator.alt
                          ? '3px solid black'
                          : 'none',
                      cursor: 'pointer',
                    }}
                    src={operator.src}
                    alt={operator.alt}
                    onClick={() => handleOperatorClick(operator.alt)}
                  />
                ))}
              </div>
            </div>

            <div className="mt-3 sigin__grp d-flex justify-content-center">
              <Link href="/order" className="cmn__btn no-underline">
                <span>Start Top-up</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SendTopUp
