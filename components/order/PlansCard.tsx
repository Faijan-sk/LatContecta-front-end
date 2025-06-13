'use client'
import React, { Fragment, useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import axiosInstance from '@/lib/axiosInstance'
import Telcel from '@/public/img/operators/finaltelcel.jpg'
import Att from '@/public/img/operators/finalAtt.jpg'
import ThirdLogo from '@/public/img/operators/finalthird.jpg'

import AltanLogo from '@/public/img/operators/Altan.jpg'
import axios, { AxiosError } from 'axios'
import oxxo from '@/public/img/operators/oxxo.jpeg'
import seven from '@/public/img/operators/seven-11.jpeg'
import Soriana from '@/public/img/operators/Soriana.webp'
import { handleSelectPlan } from '@/redux/plans'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
type ProductKey = 'TFEMXN_Q' | 'MBB' | 'TFESV'

const prImage: Record<ProductKey, StaticImageData> = {
  TFEMXN_Q: ThirdLogo,
  MBB: AltanLogo,
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
  liveTwo: {
    username: 'sagar',
    password: 'B!N@ry10240569',

    user_uid: '27441322',
    dist_api:
      '50bf27e4a9cf6cab27e5d7015ce8b35646cb1ea888324270fb1b48d1a9d4fc40',
  },
}

const storeOptions = [
  { src: oxxo, alt: 'oxxo_logo', value: 'oxxo_mx', name: 'OXXO' },
  { src: seven, alt: 'seven_logo', value: 'sipe_mx', name: '7-Eleven' },
  { src: Soriana, alt: 'soriana_logo', value: 'mx', name: 'Soriana' },
]

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
  const [currentStep, setCurrentStep] = useState<'store' | 'amount'>('store')

  // PDN Modal states (copied from first code)
  const [showPDNModal, setShowPDNModal] = useState(false)
  const [fullPDNText, setFullPDNText] = useState<string | null>(null)

  // ** Redux Hook
  const dispatch = useDispatch()
  const router = useRouter()
  const [errorResponse, setErrorResponse] = useState('')
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
    setErrorResponse('')

    setCurrentStep('store')

    setTmid('')

    setAmount(0)

    setLocalError('')

    setPaymentType('')
  }

  const openPaymentModal = (pType: 'barcod' | 'card') => {
    setPaymentType(pType)

    setShowPaymentModal(true)
    setErrorResponse('')

    setCurrentStep('store')

    setLocalError('')
  }

  const handleStoreSelection = (storeValue: string) => {
    setTmid(storeValue)
    setLocalError('')
  }

  const proceedToAmount = () => {
    if (!tmid) {
      setLocalError('Please select a store')
      return
    }
    setCurrentStep('amount')
    setLocalError('')
  }

  const goBackToStore = () => {
    setCurrentStep('store')
    setLocalError('')
  }
  async function logingUser() {
    try {
      const requestBody = distributerDetails.liveTwo
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
    let newTab
    setGenerateBarcodeLoader(true)
    try {
      // Validate Store selection
      if (!tmid) {
        setLocalError('Please select store')
        return
      }
      if (plansDetails.Skuid === '0' && amount <= 0) {
        setLocalError('Please enter amount')
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
        setShowPaymentModal(false)
        setErrorResponse('')
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
        setShowPaymentModal(false)
        setErrorResponse('')
      } else {
        alert('No se pudo generar la URL del código de barras.')
        newTab.close()
      }
    } catch (error) {
      debugger
      if (axios.isAxiosError(error)) {
        const errorMsg = error.response?.data?.error || error.message
        setErrorResponse(errorMsg)
      } else {
        console.log('An unknown error occurred', error)
      }
      // console.log(error.response.data.error)

      alert('Error generating barcode')
      if (newTab) newTab.close()
    } finally {
      setGenerateBarcodeLoader(false)
    }
  }
  async function makePayment(data: { amount: number }) {
    try {
      setShowPaymentModal(false)
      setErrorResponse('')
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
  const handleConfirmPayment = () => {
    if (plansDetails.Skuid === '0' && amount <= 0) {
      setLocalError('Please enter a valid amount')
      return
    }
    if (paymentType === 'barcod' || paymentType === 'card') {
      generateBarcode(paymentType)
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
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          <div style={{ width: '20%' }}>
            <Image
              src={prImage[product]}
              alt="img"
              width={isMobile ? 40 : 50}
              height={isMobile ? 40 : 50}
              style={{
                maxWidth: isMobile ? '40px' : '50px',
                height: 'auto',
                borderRadius: '3px',
              }}
            />
          </div>
          <div style={{ width: '80%' }}>
            <span
              className="fz-18 fw-500"
              style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'block',
              }}
            >
              {plansDetails?.pdn ?? 'N/A'}
            </span>
            {plansDetails?.pdn && plansDetails.pdn.length > 30 && (
              <span
                onClick={() => {
                  setFullPDNText(plansDetails.pdn)
                  setShowPDNModal(true)
                }}
                style={{
                  color: '#007bff',
                  fontSize: '12px',
                  cursor: 'pointer',
                  marginTop: '4px',
                  display: 'inline-block',
                }}
              >
                View more
              </span>
            )}
          </div>
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
              onClick={() => openPaymentModal('card')}
            >
              Make Payment
            </button>
            <button
              type="button"
              className="btn btn-primary w-50"
              onClick={() => openPaymentModal('barcod')}
              disabled={generateBarcodeLoader}
            >
              {generateBarcodeLoader ? 'Generating...' : 'Generate Barcode'}
            </button>
          </div>
        </div>
      </div>
      {/* Payment Modal with Store Selection and Amount */}
      <div
        className={`modal fade ${showPaymentModal ? 'show d-block' : ''}`}
        tabIndex={-1}
        role="dialog"
        style={{ background: showPaymentModal ? 'rgba(0,0,0,0.5)' : 'none' }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {currentStep === 'store' ? 'Choose Store' : 'Enter Amount'}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={closePaymentModal}
              ></button>
            </div>
            <div className="modal-body">
              {currentStep === 'store' ? (
                // Store Selection Step
                <div>
                  <p className="mb-3">Please select a store to proceed:</p>
                  <div className="row g-3">
                    {storeOptions.map((store, index) => (
                      <div key={index} className="col-4">
                        <div
                          className={`text-center p-3 border rounded cursor-pointer ${
                            tmid === store.value
                              ? 'border-primary bg-light'
                              : 'border-light'
                          }`}
                          style={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                          }}
                          onClick={() => handleStoreSelection(store.value)}
                        >
                          <Image
                            src={store.src}
                            alt={store.alt}
                            width={60}
                            height={60}
                            style={{
                              borderRadius: '8px',
                              objectFit: 'contain',
                              marginBottom: '8px',
                            }}
                          />
                          <div className="small fw-medium">{store.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {localError && (
                    <p className="text-danger mt-2 mb-0">{localError}</p>
                  )}
                </div>
              ) : (
                // Amount Input Step
                <div>
                  <div className="mb-3">
                    <strong>Selected Store:</strong>{' '}
                    {storeOptions.find((store) => store.value === tmid)?.name}
                  </div>

                  {plansDetails.Skuid === '0' && (
                    <div className="form-group mb-3">
                      <label className="form-label fw-medium mb-2">
                        Amount (USD)
                      </label>
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
                  )}
                  {errorResponse && (
                    <div className="m-2 text-danger"> {errorResponse}</div>
                  )}

                  <div className="alert alert-info">
                    <strong>Plan:</strong> {plansDetails.pdn}
                    <br />
                    <strong>Amount:</strong> USD{' '}
                    {plansDetails.Skuid === '0'
                      ? amount || 0
                      : plansDetails.amt}
                  </div>

                  {localError && (
                    <p className="text-danger">
                      <p className="text-danger">Fixed Plan Top-Up</p>{' '}
                      {localError}
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="modal-footer">
              {currentStep === 'store' ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={proceedToAmount}
                >
                  Next
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={goBackToStore}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleConfirmPayment}
                    disabled={generateBarcodeLoader}
                  >
                    {generateBarcodeLoader
                      ? 'Processing...'
                      : 'Confirm Payment'}
                  </button>
                </>
              )}
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

      {/* Full PDN Modal (copied from first code) */}
      {showPDNModal && fullPDNText && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={() => {
            setShowPDNModal(false)
            setFullPDNText(null)
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              maxWidth: '90%',
              maxHeight: '80%',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h5 style={{ marginBottom: '10px' }}>Plan details</h5>
            <p style={{ fontSize: '16px', margin: '10px' }}>{fullPDNText}</p>
            <button
              className="btn btn-primary"
              type="button"
              style={{
                minWidth: isMobile ? '80px' : '100px',
                textAlign: 'center',
                padding: isMobile ? '6px' : '8px',
                display: 'block',
                fontSize: isMobile ? '0.875rem' : '1rem',
              }}
              onClick={() => {
                setShowPDNModal(false)
                setFullPDNText(null)
              }}
            >
              <span>Cancel</span>
            </button>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default PlansCard
