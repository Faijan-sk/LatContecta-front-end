import React from 'react'

import Navbar from './../../components/navBar/NavBar2'
import RefferFriend from './../../components/reffer-friend/RefferFriend'
import Footer from './../../components/footer/Footer'

function page() {
  return (
    <>
      <Navbar />

      <div
        style={{
          marginTop: '150px',
          marginBottom: '150px',
        }}
      >
        <RefferFriend />
      </div>

      <Footer />
    </>
  )
}

export default page
