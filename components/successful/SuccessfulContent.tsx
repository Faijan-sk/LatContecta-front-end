'use client'

import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import Link from 'next/link'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const SuccessfulContent = () => {
  const receiptRef = useRef<HTMLDivElement>(null)

  // Get plan details from redux
  const { selectedPlan, plansDetails } = useSelector(
    (state: RootState) => state.plans
  )
  const { Skuid, amt, pdn } = selectedPlan
  const { msisdn, product } = plansDetails.msisdn_info || {}

  const handleDownload = async () => {
    if (!receiptRef.current) return
    try {
      const canvas = await html2canvas(receiptRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      })
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      })
      const imgWidth = 210
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      const imgData = canvas.toDataURL('image/png')
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
      pdf.save(`payment_receipt_${Skuid || 'receipt'}.pdf`)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Failed to generate PDF. Please try again.')
    }
  }

  const handlePrint = () => {
    if (!receiptRef.current) return
    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      alert('Please allow popups to print the receipt')
      return
    }
    const styles = Array.from(document.styleSheets)
      .map((styleSheet) => {
        try {
          return Array.from(styleSheet.cssRules)
            .map((rule) => rule.cssText)
            .join('\n')
        } catch (e) {
          return ''
        }
      })
      .join('\n')
    const receiptContent = receiptRef.current.innerHTML

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Payment Receipt - ${Skuid || ''}</title>
          <style>${styles}</style>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; }
            .print-only-header { text-align: center; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #eee; }
            .print-only-footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
            @media print { .payment__success__footer { display: none !important; } }
          </style>
        </head>
        <body>
          <div class="print-only-header">
            <h2>Payment Receipt</h2>
            <p>Transaction ID: ${Skuid || ''}</p>
          </div>
          <div>${receiptContent}</div>
          <div class="print-only-footer">
            <p>Thank you for your business !</p>
            <p>For any queries, please contact customer support.</p>
            <h5>LatConecta</h5>
          </div>
          <script>
            window.onload = function() {
              setTimeout(() => {
                window.print();
                setTimeout(() => window.close(), 500);
              }, 500);
            }
          </script>
        </body>
      </html>
    `)
    printWindow.document.close()
  }

  // Updated handleEmailReceipt to send receipt's plain text content in email body
  const handleEmailReceipt = () => {
    if (!receiptRef.current) return

    const receiptText = receiptRef.current.innerText

    const subject = `Your Payment Receipt - ${Skuid || ''}`
    const body = `
${receiptText}

Thank you for your business!
For any queries, please contact customer support.
LatConecta
    `

    window.location.href = `mailto:example@email.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <div ref={receiptRef}>
        <div className="payment__success__header">
          <div className="icon">
            <i className="material-symbols-outlined">done</i>
          </div>
          <h3>Payment Successful</h3>
          <p className="primary-text">
            We are processing the same and you will be notified via email.
          </p>
        </div>
        <div className="payment__success__body">
          <ul>
            <li>
              <span>Date</span>
              <span className="textbo">{new Date().toLocaleDateString()}</span>
            </li>
            <li>
              <span>Mode of Payment</span>
              <span className="textbo">Cash</span>
            </li>
            <li>
              <span>Transaction Status</span>
              <span className="textbo">Success</span>
            </li>
            <li>
              <span>SkuId</span>
              <span className="textbo">{Skuid || '-'}</span>
            </li>
            <li>
              <span>PDN</span>
              <span className="textbo">{pdn || '-'}</span>
            </li>
            <li>
              <span>Mobile No</span>
              <span className="textbo">{msisdn || '-'}</span>
            </li>
            <li>
              <span>Product Type</span>
              <span className="textbo">{product || '-'}</span>
            </li>
            <li>
              <span>Payment Amount</span>
              <span className="textbo">${amt || '0.00'}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="payment__success__footer">
        <div className="payment-success__footer-inner">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handleDownload()
            }}
          >
            <span className="icon">
              <i className="material-symbols-outlined">download</i>
            </span>
            <span>Download</span>
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handlePrint()
            }}
          >
            <span className="icon">
              <i className="material-symbols-outlined">print</i>
            </span>
            <span>Print Receipt</span>
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handleEmailReceipt()
            }}
          >
            <span className="icon">
              <i className="material-symbols-outlined">drafts</i>
            </span>
            <span>Email Receipt</span>
          </a>
        </div>
        <div className="dbutton">
          <Link href="/" className="cmn__btn">
            <span> Make another Booking</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SuccessfulContent
