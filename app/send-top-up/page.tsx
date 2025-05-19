import React from 'react'
import NavBar from './../../components/navBar/NavBar2'
import Footer from './../../components/footer/Footer'
import HomePage from '../../components/sendTopUp/Send-top-up'

function page() {
  return (
    <>
      {/* NavBar Section Here  */}
      <NavBar />

      {/* Add contact  Main Section Here  */}
      <div
        style={{
          marginTop: '150px',
          padding: '0',
        }}
      >
        {' '}
        <HomePage />
      </div>

      {/* Footer Section Here  */}
      <Footer />
    </>
  )
}

export default page
