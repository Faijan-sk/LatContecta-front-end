'use client'
import React, { Fragment, useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import axiosInstance from '@/lib/axiosInstance'

import Telcel from '@/public/img/operators/finaltelcel.jpg'
import Att from '@/public/img/operators/finalAtt.jpg'
import ThirdLogo from '@/public/img/operators/finalthird.jpg'
import oxxo from '@/public/img/operators/oxxo.jpeg'
import seven from '@/public/img/operators/seven-11.jpeg'
import Soriana from '@/public/img/operators/Soriana.webp'

import { handleSelectPlan } from '@/redux/plans'

import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
type ProductKey = 'TFEMXN_Q' | 'MVNO' | 'TFESV'

const prImage: Record<ProductKey, StaticImageData> = {
  TFEMXN_Q: Telcel,
  MVNO: Att,
  TFESV: ThirdLogo,
}

export interface Product {
  Skuid: string
  pdn: string
  vn: string
  amt: number
  crn: string
  pt?: 1 | 2
  min_range?: number
  max_range?: number
  gb?: number
  dp?: number
  nos?: number
  ic?: number
  oc?: number
}

export interface MsisdnInfo {
  msisdn: string
  product: string
}

const distributerDetails = {
  local: {
    username: 'gulam000',
    password: 'B!N@ry1024',
    user_uid: '44505337',
    dist_api:
      '095b105359b0bceec998dd0f002707ae0e64f191f6550ef1f246d33b605039ce',
  },
  live: {
    username: 'gulam000',
    password: 'gulam000',
    user_uid: '22894830',
    dist_api:
      'dbf9ad8a65d441ef8212d31d89389548a30182e123e957f90e49a167ecfe2c13',
  },
}

const PlansCard = ({
  plansDetails,
  msisdn_info,
}: {
  plansDetails: Product
  msisdn_info: MsisdnInfo
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false)
  const [tmid, setTmid] = useState<string>('')
  const [localError, setLocalError] = useState<string>('')
  const [generateBarcodeLoader, setGenerateBarcodeLoader] =
    useState<boolean>(false)
  const [paymentType, setPaymentType] = useState<string>('')

  // ** Redux Hook
  const dispatch = useDispatch()
  const router = useRouter()

  const [amount, setAmount] = useState<number>(0)

  const { msisdn, product } = msisdn_info as {
    msisdn: string
    product: ProductKey
  }

  const toggle = (type: 'open' | 'close') => {
    if (type == 'open') {
      setShowModal(true)
    } else {
      setShowModal(false)
    }
  }

  // Add a function to close the payment modal
  const closePaymentModal = () => {
    setShowPaymentModal(false)
  }

  async function logingUser() {
    try {
      const requestBody = distributerDetails.live
      const { data } = await axiosInstance.post('/dislogin', {
        ...requestBody,
      })

      const { access } = data as { access: string }
      localStorage.setItem('access', access)
    } catch (error) {
      throw error
    }
  }

  async function generateBarcode(pType: 'barcod' | 'card') {
    if (paymentType) {
      setPaymentType('')
    }
    let newTab
    setGenerateBarcodeLoader(true)

    try {
      // Validate Store selection
      if (!tmid) {
        setLocalError('Please select store')
        return
      }

      if (plansDetails.Skuid === '0' && amount <= 0 && !paymentType) {
        setShowPaymentModal(true)
        setPaymentType(pType)
        return
      }

      // Ensure user is logged in
      const access = localStorage.getItem('access')
      if (!access) {
        await logingUser()
      }
      if (pType == 'card') {
        dispatch(
          handleSelectPlan({
            ...plansDetails,
            ...(plansDetails.Skuid == '0' ? { amt: amount } : {}),
          })
        )
        router.push('/order-summary')
        return
      }
      // Open new tab for barcode
      newTab = window.open('', '_blank')
      if (!newTab) {
        alert(
          'El bloqueador de ventanas emergentes impidió abrir una nueva pestaña. Por favor, permite las ventanas emergentes para este sitio.'
        )
        return
      }

      // Make API call to generate barcode
      const res = await axiosInstance.post('/generate-barcode/', {
        msisdn,
        Skuid: plansDetails.Skuid,
        pdn: plansDetails.pdn,
        tmid: tmid === 'mx' ? 'sipe_mx' : tmid,
        ...(plansDetails?.Skuid == '0' ? { amount } : {}),
      })

      const url = res?.data?.payment_response?.url

      if (url) {
        newTab.location.href = url
      } else {
        alert('No se pudo generar la URL del código de barras.')
        newTab.close()
      }

      if (amount && showPaymentModal) {
        setAmount(0)
        setShowPaymentModal(false)
      }
    } catch (error) {
      console.error('Error generating barcode:', error)
      alert('Error generating barcode')
      if (newTab) newTab.close()
    } finally {
      setGenerateBarcodeLoader(false)
    }
  }

  function handleMakePaymentClick() {
    if (!tmid) {
      setLocalError('Please select store')
      return
    }
  }

  async function makePayment(data: { amount: number }) {
    try {
      setShowPaymentModal(false)
      alert(`Processing payment of USD ${data.amount} for ${plansDetails.pdn}`)
      // TODO: Add real payment API call here
    } catch (error) {
      console.error('Payment error:', error)
    }
  }

  // Handle amount change with parseFloat instead of parseInt
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Allow empty string (to clear the input) or valid numbers including decimals
    if (value === '' || !isNaN(parseFloat(value))) {
      setAmount(value === '' ? 0 : parseFloat(value))
    }
  }

  return (
    <Fragment>
      <div
        className="valu__items"
        style={{
          padding: isMobile ? '10px' : '15px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          className="valu__usd"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '10px',
          }}
        >
          <Image
            src={prImage[product]}
            alt="img"
            width={isMobile ? 40 : 50}
            height={isMobile ? 40 : 50}
            style={{
              maxWidth: isMobile ? '40px' : '50px',
              height: 'auto',
            }}
          />
          <span
            className="fz-18 fw-500"
            style={{
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: '500',
            }}
          >
            {plansDetails.pdn}
          </span>
        </div>
        <span
          className="usd fz-16"
          style={{
            margin: '10px 0',
            fontWeight: 'bold',
            fontSize: isMobile ? '14px' : '16px',
          }}
        >
          USD {plansDetails.amt}
        </span>
        <label className="mt-2">
          Choose Store <span className="text-danger">*</span>
        </label>
        <div className="d-flex  gap-3 my-2">
          {[
            { src: oxxo, alt: 'telcel_logo', value: 'oxxo_mx' },
            { src: seven, alt: 'att_logo', value: 'sipe_mx' },
            { src: Soriana, alt: 'moviestar', value: 'mx' },
          ].map((operator, index) => (
            <Image
              key={index}
              style={{
                borderRadius: '10px',
                padding: '5px',
                width: '15%',
                height: 'auto',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                border: tmid === operator.value ? '3px solid black' : 'none',
                cursor: 'pointer',
              }}
              src={operator.src}
              alt={operator.alt}
              onClick={() => setTmid(operator.value)}
            />
          ))}
        </div>
        {localError ? <p className="text-danger">{localError}</p> : null}
        <div
          className="valu__btn"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: isMobile ? '5px' : '10px',
            marginTop: 'auto',
            flexWrap: 'wrap',
          }}
        >
          <div className="d-flex w-100 gap-1">
            <button
              type="button"
              className="btn btn-primary w-50"
              onClick={() => generateBarcode('card')}
            >
              Make Payment
            </button>
            <button
              type="button"
              className="btn btn-primary w-50"
              onClick={() => generateBarcode('barcod')}
            >
              {generateBarcodeLoader ? 'Generating...' : 'Generate Barcode'}
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <div
        className={`modal fade ${showPaymentModal ? 'show d-block' : ''}`}
        tabIndex={-1}
        role="dialog"
        style={{ background: showPaymentModal ? 'rgba(0,0,0,0.5)' : 'none' }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Enter Amount</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closePaymentModal}
              ></button>
            </div>
            <div className="modal-body">
              {/* Amount Input */}
              <div className="form-group mb-3">
                <label className="form-label fw-medium mb-2">Amount</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control bg-light border-0 py-3"
                  placeholder="Enter Amount"
                  value={amount === 0 ? '' : amount}
                  onChange={handleAmountChange}
                  style={{
                    borderRadius: '8px',
                    fontSize: '16px',
                    color: '#6c757d',
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow =
                      '0 0 0 4px rgba(67, 115, 222, 0.2)'
                    e.target.style.border = '1px solid #4373de'
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = 'none'
                    e.target.style.border = '0'
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  {
                    {
                      debugger
                    }
                  }
                  if (paymentType === 'barcod' || paymentType === 'card') {
                    generateBarcode(paymentType)
                  } else {
                    console.log('NA')
                  }
                }}
              >
                Confirm Payment
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closePaymentModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PlansCard
