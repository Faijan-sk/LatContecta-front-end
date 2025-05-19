'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import balance from '/public/img/payment/balance.png'

const PaymetOptions = () => {
  const pathName = usePathname()

  return (
    <>
      <div className="available__balance pb__40">
        {/* <div className="balance">
          <Image src={balance} alt="img" />
          <span className="title fz-24 fw-700">Availble Balance</span>
        </div> */}
        {/* <span className="fz-24 fw-700">$4531.00</span> */}
      </div>
      <ul className="order__button mb__40">
        {[
          ['Order', '/order'],
          ['Summary', '/order-summary'],
          // ['Payment', '/payment'],
          ['Done', '/successful'],
        ].map(([itm, url], i) => (
          <li key={i}>
            <Link
              href={url}
              className={`cmn__order ${pathName === url && 'active'}`}
            >
              <span>{itm}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PaymetOptions
