'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import broadband from '/public/img/svg/broadband.svg'
import card from '/public/img/svg/card.svg'
import eletricity from '/public/img/svg/eletricity.svg'
import gas from '/public/img/svg/gas.svg'
import landphone from '/public/img/svg/landphone.svg'
import phone from '/public/img/svg/phone.svg'
import tv from '/public/img/svg/tv.svg'
import water from '/public/img/svg/water.svg'

const data = [
  // {
  //   id: 1,
  //   href: "/index-2",
  //   iconSrc: phone,
  //   iconAlt: "icon",
  //   text: "Mobile",
  // },
  // {
  //   id: 2,
  //   href: "/card2",
  //   iconSrc: card,
  //   iconAlt: "icon",
  //   text: "Card",
  // },
  // {
  //   id: 3,
  //   href: '/broadband2',
  //   iconSrc: broadband,
  //   iconAlt: 'icon',
  //   text: 'Broadband',
  // },
  // {
  //   id: 4,
  //   href: '/landline2',
  //   iconSrc: landphone,
  //   iconAlt: 'icon',
  //   text: 'Landline',
  // },
  // {
  //   id: 5,
  //   href: '/cabletv2',
  //   iconSrc: tv,
  //   iconAlt: 'icon',
  //   text: 'CableTv',
  // },
  //
  {
    id: 6,
    href: '/otherBillPayment',
    iconSrc: eletricity,
    iconAlt: 'icon',
    text: 'Electricity',
  },
  // {
  //   id: 7,
  //   href: '/gas2',
  //   iconSrc: gas,
  //   iconAlt: 'icon',
  //   text: 'Gas',
  // },
  {
    id: 8,
    href: '/otherBillPayment/water',
    iconSrc: water,
    iconAlt: 'icon',
    text: 'Water',
  },
]

const HomeTwoFilterOptions = () => {
  const pathName = usePathname()

  return (
    <div className="fasilities__inner fasilities__innertwo">
      {data.map(({ id, href, iconSrc, iconAlt, text }) => (
        <Link
          key={id}
          href={href}
          className={`fasilities__item align-items-center d-flex ${
            href === pathName && 'active'
          }`}
        >
          <span className="icon">
            <Image src={iconSrc} alt={iconAlt} />
          </span>
          <span className="fz-18 pratext d-block">{text}</span>
        </Link>
      ))}
    </div>
  )
}

export default HomeTwoFilterOptions
