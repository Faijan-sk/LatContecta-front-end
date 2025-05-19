'use client'
import Link from 'next/link'
import { useRef, RefObject, useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const SuccessfulContent = () => {
  // Explicitly type the ref as HTMLDivElement
  const receiptRef = useRef<HTMLDivElement>(null)
  const [showSmsModal, setShowSmsModal] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [smsStatus, setSmsStatus] = useState<{
    success?: boolean
    message: string
  } | null>(null)

  const handleDownload = async () => {
    if (!receiptRef.current) return

    try {
      // Create canvas from the receipt element
      const canvas = await html2canvas(receiptRef.current, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
      })

      // Initialize PDF document
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      })

      // Calculate PDF dimensions
      const imgWidth = 210 // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      // Add image to PDF
      const imgData = canvas.toDataURL('image/png')
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)

      // Download the PDF
      pdf.save('payment_receipt_CDFF123476359.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Failed to generate PDF. Please try again.')
    }
  }

  const handlePrint = () => {
    if (!receiptRef.current) return

    // Create a new window for printing
    const printWindow = window.open('', '_blank')

    if (!printWindow) {
      alert('Please allow popups to print the receipt')
      return
    }

    // Get styles from the current document
    const styles = Array.from(document.styleSheets)
      .map((styleSheet) => {
        try {
          return Array.from(styleSheet.cssRules)
            .map((rule) => rule.cssText)
            .join('\n')
        } catch (e) {
          // Ignore security errors for external stylesheets
          return ''
        }
      })
      .join('\n')

    // Clone the receipt content - now TypeScript knows this is an HTMLDivElement
    const receiptContent = receiptRef.current.innerHTML

    // Create the print document
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Payment Receipt - CDFF123476359</title>
          <style>${styles}</style>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
              max-width: 800px;
              margin: 0 auto;
            }
            .print-only-header {
              text-align: center;
              margin-bottom: 20px;
              padding-bottom: 20px;
              border-bottom: 1px solid #eee;
            }
            .print-only-footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #eee;
              font-size: 12px;
              color: #666;
            }
            @media print {
              .payment__success__footer {
                display: none !important;
              }
            }
          </style>
        </head>
        <body>
          <div class="print-only-header">
            <h2>Payment Receipt</h2>
            <p>Transaction ID: CDFF123476359</p>
          </div>
          <div>${receiptContent}</div>
          <div class="print-only-footer">
            <p>Thank you for your business !</p>
            <p>For any queries, please contact customer support.</p>
            <h5>LatConecta</h5>
          </div>
          <script>
            window.onload = function() {
              setTimeout(function() {
                window.print();
                setTimeout(function() {
                  window.close();
                }, 500);
              }, 500);
            }
          </script>
        </body>
      </html>
    `)

    printWindow.document.close()
  }

  const handleEmailReceipt = () => {
    // Create email body with transaction details
    const subject = 'Your Payment Receipt - CDFF123476359'
    const body = `
Transaction ID: CDFF123476359
Date: 22-12-2022
Payment Amount: $235.00
Transaction Status: Success
Customer Name: Wade Warren

Thank you for your business!
For any queries, please contact customer support.
LatConecta
`
    // Open email client with pre-filled details
    window.location.href = `mailto:example@email.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  const handleSendSms = () => {
    setShowSmsModal(true)
  }

  const handleSubmitSms = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!phoneNumber.trim()) {
      setSmsStatus({
        success: false,
        message: 'Please enter a valid phone number',
      })
      return
    }

    setIsSending(true)
    setSmsStatus(null)

    try {
      // Here you would integrate with your SMS service provider API
      // This is a mock implementation

      // Prepare the message text
      const message = `
Payment Receipt - LatConecta
Transaction ID: CDFF123476359
Date: 22-12-2022
Amount: $235.00
Status: Success
Thank you for your business!
`

      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate successful API response
      console.log(`SMS sent to ${phoneNumber} with message: ${message}`)

      setSmsStatus({
        success: true,
        message: `Receipt sent successfully to ${phoneNumber}`,
      })

      // Auto close modal after success
      setTimeout(() => {
        setShowSmsModal(false)
        setSmsStatus(null)
        setPhoneNumber('')
      }, 2000)
    } catch (error) {
      console.error('Error sending SMS:', error)
      setSmsStatus({
        success: false,
        message: 'Failed to send SMS. Please try again.',
      })
    } finally {
      setIsSending(false)
    }
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
              <span>Transactions ID</span>
              <span className="textbo">CDFF123476359</span>
            </li>
            <li>
              <span>Date</span>
              <span className="textbo">22-12-2022</span>
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
              <span>Customer Name</span>
              <span className="textbo">Wade Warren</span>
            </li>
            <li>
              <span>Mobile No</span>
              <span className="textbo">(406) 555-0120</span>
            </li>
            <li>
              <span>Subject</span>
              <span className="textbo">Mobile Top Up</span>
            </li>
            <li>
              <span>Payment Amount</span>
              <span className="textbo">$235.00</span>
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
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handleSendSms()
            }}
          >
            <span className="icon">
              <i className="material-symbols-outlined">sms</i>
            </span>
            <span>Send SMS</span>
          </a>
        </div>
        <div className="dbutton">
          <Link href="/" className="cmn__btn">
            <span> Make another Booking</span>
          </Link>
        </div>
      </div>

      {/* SMS Modal */}
      {showSmsModal && (
        <div
          // className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              width: '100%',
              maxWidth: '400px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h4 style={{ marginTop: 0 }}>Send Receipt via SMS</h4>
            <form onSubmit={handleSubmitSms}>
              <div
                style={{
                  marginBottom: '15px',
                  padding: '5px',
                }}
              >
                <label htmlFor="phoneNumber" style={{ marginBottom: '5px' }}>
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter phone number"
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginTop: '10px',
                    height: '6vh',
                    marginRight: '5px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                  }}
                  required
                />
              </div>
              <br></br>
              {/* {smsStatus && (
                <div
                  style={{
                    padding: '10px',
                    marginBottom: '15px',
                    backgroundColor: smsStatus.success ? '#d4edda' : '#f8d7da',
                    color: smsStatus.success ? '#155724' : '#721c24',
                    borderRadius: '4px',
                  }}
                >
                  {smsStatus.message}
                </div>
              )} */}

              <div
                className="dbutton"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setShowSmsModal(false)
                    setSmsStatus(null)
                    setPhoneNumber('')
                  }}
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #ddd',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '20px',
                    height: '6vh',
                    marginRight: '5px',
                  }}
                >
                  Cancel
                </button>

                <div className="dbutton mx-1">
                  <button
                    type="submit"
                    disabled={isSending}
                    style={{
                      cursor: isSending ? 'default' : 'pointer',
                      opacity: isSending ? 0.7 : 1,
                      marginTop: '20px',
                      height: '6vh',
                      marginRight: '5px',
                      borderRadius: '5px',
                    }}
                    className="cmn__btn"
                  >
                    <span>{isSending ? 'Sending...' : 'Send'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default SuccessfulContent
