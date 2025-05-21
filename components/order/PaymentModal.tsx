'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import axiosInstance from '@/lib/axiosInstance'
import { Product } from './PlansCard' // <-- Make sure this path is correct

interface PaymentModalProps {
  show: boolean
  onClose: () => void
  amount: number
  setAmount: Function
  generateBarcode: Function
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  show,
  onClose,
  amount,
  setAmount,
  generateBarcode,
}) => {
  const handleSend =  () => {
    debugger
    if (!amount || isNaN(amount)) {
      alert('Please enter a valid amount')
      return
    }
     generateBarcode()
  
    // onConfirmPayment(data)
  }

  return (
    <div
      className={`modal fade ${show ? 'show d-block' : ''}`}
      tabIndex={-1}
      role="dialog"
      style={{ background: show ? 'rgba(0,0,0,0.5)' : 'none' }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Enter Amount</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {/* Amount Input */}
            <div className="form-group mb-3">
              <label className="form-label fw-medium mb-2">Amount</label>
              <input
                type="number"
                className="form-control bg-light border-0 py-3"
                placeholder="Enter Ammount"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                style={{
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#6c757d',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = '0 0 0 4px rgba(67, 115, 222, 0.2)'
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
              onClick={handleSend}
            >
              Confirm Payment
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentModal
