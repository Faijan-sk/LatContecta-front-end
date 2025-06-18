'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PhoneSlider from '@/components/slider/HotelDetailSlider'
// Import image
import PhoneImage from '@/public/img/slider/hqustion1.jpg'

const AllPhoneGrid = () => {
  return (
    <div className="mt-5 flight__oneway__wrapper flight__grid__waywrapper rounded shadow">
      <div className="row g-4 text-black p-4 h-500"></div>
      <div style={{ height: '500px' }} className="text-center mx-5 mb-2">
        <PhoneSlider />
      </div>
      <div className="m-5 mt-2">
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos
          laudantium adipisci voluptatum reiciendis voluptate. Culpa voluptatum
          laborum laboriosam nam repudiandae optio a maxime iure cupiditate!
          Dignissimos voluptate velit accusantium! At molestiae esse voluptas
          quibusdam quod quidem minus delectus sapiente optio vero laborum ad,
          earum laboriosam debitis iusto. Cumque adipisci inventore, sapiente
          dolorum omnis quaerat alias quod quae vitae quo! Doloremqu quos id,
          modi cum facere et numquam deserunt! Nulla dolorum cum quis
          praesentium. Voluptates beatae unde in tempora at, cupiditate facere
          labore consequatur quas impedit, pariatur veritatis mollitia official
          ? Quia sequi molestias laboriosam iste iure, ut laborum explicabo
          earum aspernatur repellat accusantium, in excepturi ad, corporis totam
          sint? Libero unde quae, quas exercitationem totam temporibus quaerat
          earum non at! Eos, vero explicabo pariatur velit cumque tempore
          consequatur hic sapiente architecto illo maiores quidem corporis.
          Doloremque deserunt, laborum ea eum cumque, incidunt totam dolor ab
          illum provident reiciendis nulla mollitia. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Asperiores odit ea repellendus quod?
          Debitis iusto sunt hic tempore facere magni porro unde qui? Quas optio
          quod nesciunt amet et fugit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Doloremque, consectetur! Odio obcaecati fugit rerum
          nostrum, unde delectus vitae. Aspernatur magnam aut eligendi mollitia
          eos pariatur culpa temporibus cum blanditiis aperiam.
        </p>
      </div>
    </div>
  )
}

export default AllPhoneGrid
