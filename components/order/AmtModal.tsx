'use client'
import React, { SetStateAction, useState } from 'react'
import Input from 'react-select/dist/declarations/src/components/Input'
import oxxo from '@/public/img/operators/oxxo.jpeg'
import seven from '@/public/img/operators/seven-11.jpeg'
import Soriana from '@/public/img/operators/Soriana.webp'

import Image from 'next/image'
import axiosInstance from '@/lib/axiosInstance'

const images = [
  {
    image: oxxo,
    value: 'oxxo_mx',
  },
  {
    image: seven,
    value: 'sipe_mx',
  },
  {
    image: Soriana,
    value: '',
  },
]

interface AmtModalProps {
  showModal: boolean
  handleClose: () => void
  title: string
  selectedPlan: object
  sendToServer: Function
}

const AmtModal: React.FC<AmtModalProps> = ({
  showModal,
  handleClose,
  title,
  selectedPlan,
  sendToServer,
}) => {
  const [amount, setAmount] = useState<any>() // Specify number type explicitly

  const handleSend = () => {
    if (!amount) {
      alert('Please Enter Amount')
      return
    }
    const data = {
      ...selectedPlan,
      amount,
    }
    handleClose()
    sendToServer(data)
  }

  const handleGenerateBarcode = async (tmid: string) => {
    const newTab = window.open('', '_blank')

    if (!newTab) {
      alert(
        'El bloqueador de ventanas emergentes impidió abrir una nueva pestaña. Por favor, permite las ventanas emergentes para este sitio.'
        //'Popup blocker prevented opening a new tab. Please allow pop-ups for this site.'
      )
      return
    }
    try {
      const res = await axiosInstance.post('/generate-barcode/', {
        ...selectedPlan,
        tmid,
      })
      const { data } = res

      if (data.payment_response.url) {
        newTab.location.href = data.payment_response.url
      } else {
        alert('No se pudo generar la URL del código de barras.')
        newTab.close()
      }
    } catch (error) {
      alert('Error generating barcode:')
      console.error('Error generating barcode:', error)
      newTab.close()
    } finally {
    }
  }

  return (
    <div
      className={`modal fade ${showModal ? 'show d-block' : ''}`}
      tabIndex={-1}
      role="dialog"
      style={{ background: showModal ? 'rgba(0,0,0,0.5)' : 'none' }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex justify-content-center gap-3">
              {[
                { src: oxxo, alt: 'telcel_logo', value: 'oxxo_mx' },
                { src: seven, alt: 'att_logo', value: 'sipe_mx' },
                { src: Soriana, alt: 'moviestar', value: 'sipe_mx' },
              ].map((operator, index) => (
                <Image
                  key={index}
                  style={{
                    borderRadius: '10px',
                    padding: '5px',
                    width: '20%',
                    height: 'auto',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    // border: opr === operator.value ? "3px solid black" : "none",
                    cursor: 'pointer',
                  }}
                  src={operator.src}
                  alt={operator.alt}
                  onClick={() => handleGenerateBarcode(operator.value)}
                />
              ))}
            </div>
            {/* Input  */}
          </div>
          <div className="modal-footer">
            {/* <button
              type="button"
              className="btn btn-primary"
              // onClick={() => }
            >
              Generate Barcode
            </button> */}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AmtModal
