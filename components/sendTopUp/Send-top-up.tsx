'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import earth from './../../public/img/pngFiles/earth.png'
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Telcel from '@/public/img/operators/finaltelcel.jpg'
import AltanLogo from '@/public/img/operators/Altan.jpg'
import Att from '@/public/img/operators/finalAtt.jpg'
import ThirdLogo from '@/public/img/operators/finalthird.jpg'

// ** Axios
import axiosInstance from '../../lib/axiosInstance'

// ** Routes Hook
import { useRouter } from 'next/navigation'

// ** Redux Action
import { addPlans } from '@/redux/plans'

// ** Reduxt Hook
import { useDispatch } from 'react-redux'
import parsePhoneNumberFromString, { CountryCode } from 'libphonenumber-js'

import axios, { AxiosError } from 'axios'

interface Country {
  name: string
  code: string
}
interface CustomErrorResponse {
  error: string
}
const getCountryCode = (
  phoneNumber: string,
  defaultCountry: CountryCode = 'MX' // Default to 'MX' for Mexico
): string | null => {
  if (!phoneNumber) return null // Ensure phoneNumber is not empty

  const parsedNumber = parsePhoneNumberFromString(phoneNumber, defaultCountry)

  return parsedNumber ? parsedNumber.countryCallingCode : null
}

const SendTopUp: React.FC = () => {
  const [msisdn, setMsisdn] = useState<string>('')
  const [cuy, setCuy] = useState<string>('MX') // Set Mexico as default country
  const [opr, setOpr] = useState<string | null>(null)
  const [fetchPlanLoader, setFetchPlanLoader] = useState<string>('Send Top-up')

  const [errors, setErrors] = useState({
    msisdn: '',
    opr: '',
    cuy: '',
  })

  // ** dispatch
  const dispatch = useDispatch()
  const router = useRouter()

  const countries: Country[] = [
    { name: 'El Salvador', code: 'SV' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Peru', code: 'PE' },
    { name: 'United States', code: 'US' },
  ].sort((a, b) => a.name.localeCompare(b.name))

  const handlePhoneChange = (value: string) => {
    setMsisdn(value)
    setErrors((prev) => ({ ...prev, msisdn: '' })) // Remove error
  }

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCuy(event.target.value)
    setErrors((prev) => ({ ...prev, cuy: '' })) // Remove error
  }

  const handleOperatorClick = (operator: string) => {
    setOpr(operator)
    setErrors((prev) => ({ ...prev, opr: '' })) // Remove error
  }

  const handleSend = async () => {
    const countryCode = getCountryCode(msisdn, cuy as CountryCode)

    // Reset all errors first
    setErrors({
      msisdn: '',
      opr: '',
      cuy: '',
    })

    // Validate phone number
    if (!msisdn) {
      setErrors((prev) => ({
        ...prev,
        msisdn: 'Phone number is required',
      }))
      return
    }

    if (!countryCode) {
      setErrors((prev) => ({
        ...prev,
        msisdn: 'Invalid phone number',
      }))
      return
    }

    // Validate country selection
    if (!cuy) {
      setErrors((prev) => ({
        ...prev,
        cuy: 'Please select a country',
      }))
      return
    }

    // Validate operator selection
    if (!opr) {
      setErrors((prev) => ({
        ...prev,
        opr: 'Please select an operator',
      }))
      return
    }

    // Form data is valid, proceed with API call
    const body = {
      msisdn: msisdn.replace(new RegExp(`^${countryCode}`), ''), // Remove country code
      cuy,
      opr,
    }

    setFetchPlanLoader('Searching Plans...')
    try {
      const params = `/get_prod/`
      const res = await axiosInstance.post(params, body)

      const { data } = res
      const { msisdn_info, products } = data

      setFetchPlanLoader('Fetching plans...')

      setTimeout(() => {
        dispatch(
          addPlans({
            msisdn_info: {
              ...msisdn_info,
              msisdn: msisdn.replace(new RegExp(`^${countryCode}`), ''),
            },
            products,
          })
        )
        router.push('/order/')
      }, 2000)
    } catch (error: unknown) {
      const axiosError = error as AxiosError<CustomErrorResponse>
      console.error('Error fetching product:', error)
      if (axiosError?.response?.status === 400) {
        // Set the server error directly in the msisdn error field
        setErrors((prev) => ({
          ...prev,
          msisdn: 'Invalid Number',
        }))
      }
    } finally {
      setFetchPlanLoader('Send Top-up')
    }
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
              value={cuy}
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
          {errors.cuy && (
            <div className="text-danger mt-1" style={{ fontSize: '18px' }}>
              {errors.cuy}
            </div>
          )}

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
                border: errors.msisdn ? '1px solid #dc3545' : '1px solid #ccc',
                position: 'relative',
                outline: 'none',
                boxShadow: 'none',
              }}
            >
              <ReactPhoneInput
                country={cuy.toLowerCase()}
                value={msisdn}
                onChange={handlePhoneChange}
                inputClass="custom-phone-input-box"
                containerClass="custom-phone-container"
                disableDropdown={true}
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
            {errors.msisdn && (
              <div
                className="text-danger mt-1"
                style={{ fontSize: '18px', fontWeight: 'bold' }}
              >
                {errors.msisdn}
              </div>
            )}

            <div
              className="operator__texts d-flex flex-column align-items-center text-center mt-3"
              style={{ width: '100%' }}
            >
              <p className="fw-bold fs-5">Select your operator</p>
              <div className="d-flex justify-content-center gap-3">
                {[
                  // { src: Telcel, alt: 'TFESV' },
                  { src: AltanLogo, alt: 'MVNO' },
                  { src: ThirdLogo, alt: 'TFEMXN_Q' },
                ].map((operator, index) => (
                  <Image
                    key={index}
                    style={{
                      borderRadius: '10px',
                      padding: '5px',
                      width: '20%',
                      height: 'auto',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                      border: opr === operator.alt ? '3px solid black' : 'none',
                      cursor: 'pointer',
                    }}
                    src={operator.src}
                    alt={operator.alt}
                    onClick={() => handleOperatorClick(operator.alt)}
                  />
                ))}
              </div>
              {errors.opr && (
                <div
                  className="text-danger mt-1"
                  style={{ fontSize: '18px', fontWeight: 'bold' }}
                >
                  {errors.opr}
                </div>
              )}
            </div>

            <div className="mt-3 sigin__grp d-flex justify-content-center">
              <button
                className="cmn__btn no-underline"
                onClick={handleSend}
                style={{ outline: 'none', border: 'none' }}
              >
                <span>{fetchPlanLoader}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SendTopUp
