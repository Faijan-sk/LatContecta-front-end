'use client'
import React, { useState } from 'react'
import RefferFriendImage from './../../public/img/pngFiles/RefferFriend.png'
import Link from 'next/link'
import RefferFrndImg from './../../public/img/pngFiles/RefferFriend.png'

function RefferFriend() {
  const [buttonClicked, setButtonClicked] = useState(false)

  const handleButtonClick = () => {
    setButtonClicked(true)
    setTimeout(() => setButtonClicked(false), 1500) // Reset animation after 1.5 seconds
  }

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.75)',

        height: '54vh',
        backgroundImage: `url(${RefferFrndImg.src})`, // Use AutoPayImg in the background

        backgroundSize: '100%', // Adjusted size of the background image
        backgroundRepeat: 'no-repeat', // Ensures the image does not repeat
        backgroundPosition: 'center',
      }}
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <h2
        style={{
          color: '#2E5090',
          marginTop: '50px',
        }}
        className="fw-bold mb-0"
      >
        Refer a Friend
      </h2>

      <br />
      <br />
      {/* Card Container */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.75)',
        }}
        className="card shadow-lg p-4 text-center border-0 rounded-3 w-50"
      >
        {/* Phone Number */}
        <h3 className=" fw-bold">Tell friends about Ding and get discounts</h3>

        {/* Airtel Logo */}
        <p>
          Invite friends to join Ding and when they top-up, not only will they
          get a discount, but you will too!
        </p>

        <div
          className="mt-3 sigin__grp d-flex justify-content-center ${
            buttonClicked ? 'animate-bounce' : ''
          }"
          onClick={handleButtonClick}
        >
          <Link href="/homePage" className="cmn__btn no-underline">
            <span>{buttonClicked ? 'Copied!' : 'Copy Your Link'}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RefferFriend
