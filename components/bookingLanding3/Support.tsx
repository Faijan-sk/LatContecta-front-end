import Image from 'next/image'
import Link from 'next/link'
import bb1 from '/public/img/banner/three/bb1.png'
import bb2 from '/public/img/banner/three/bb2.png'
import bb3 from '/public/img/banner/three/bb3.png'
import bb4 from '/public/img/banner/three/bb4.png'
import booksolving from '/public/img/booking/booksolving.png'

const Support = () => {
  return (
    <div>
      {/* <RequestTopUp /> */}

      {/* <GiftCard /> */}

      <section className="booksolving__section pb-120">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="booksolving__content">
                <div className="section__header mb__30 wow fadeInDown">
                  <h2>
                    **** was founded to improve people’s lives by helping those
                    with less, gain access to more
                  </h2>
                  <p>
                    Since 2006, our aim has been to build & run the safest,
                    simplest, most eﬀective & convenient top-up service, in
                    partnership with the best operators and platforms. We
                    provide more secure top-up, to more countries, through more
                    operators, than anyone else – helping people all around the
                    world to send little bytes of happiness to their loved ones,
                    in the blink of an eye. Our customers have successfully sent
                    over 500 million top-ups – sending little smiles all around
                    the world.
                  </p>
                </div>
                <ul className="explore__list explore__list__about pb__40 px-2">
                  <li>
                    <span>
                      <Image src={bb1} alt="img" />
                    </span>
                    <span>5 billion Phones reached</span>
                  </li>
                  <li>
                    <span>
                      <Image src={bb2} alt="img" />
                    </span>
                    <span>150+ Countries</span>
                  </li>
                  <li>
                    <span>
                      <Image src={bb3} alt="img" />
                    </span>
                    <span>700+ Operators</span>
                  </li>
                  <li>
                    <span>
                      <Image src={bb4} alt="img" />
                    </span>
                    <span>600K+ Retail partners</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="booksolving__thumb">
                <Image src={booksolving} alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*     
    // <section className="booksolving__section pt-120 pb-120">
    //   <div className="container">
    //     <div className="row g-4 align-items-center">
    //       <div className="col-xl-6 col-lg-6 col-md-7">
    //         <div className="booksolving__content">
    //           <div className="section__header mb__30 wow fadeInDown">
    //             <h2>
    //               We are solving booking problems in a creative way with
    //               techniques
    //             </h2>
    //             <p>
    //               There are many variations of passages of Lorem Ipsum
    //               available, but the have suffered alteration in some form, by
    //               injected humour, or randomised words which don&#39;t look even
    //               slightly believable. If you are going to use...
    //             </p>
    //           </div>
    //           <ul className="explore__list explore__list__about pb__40">
    //             <li>
    //               <span>
    //                 <Image src={bb1} alt="img" />
    //               </span>
    //               <span>100% Secure</span>
    //             </li>
    //             <li>
    //               <span>
    //                 <Image src={bb2} alt="img" />
    //               </span>
    //               <span>Trust pay</span>
    //             </li>
    //             <li>
    //               <span>
    //                 <Image src={bb3} alt="img" />
    //               </span>
    //               <span>Refer & Earn</span>
    //             </li>
    //             <li>
    //               <span>
    //                 <Image src={bb4} alt="img" />
    //               </span>
    //               <span>24X7 Support</span>
    //             </li>
    //           </ul>
    //           <Link href="/help-support" className="cmn__btn">
    //             <span>Explore deals</span>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="col-xl-5 col-lg-5 col-md-5">
    //         <div className="booksolving__thumb">
    //           <Image src={booksolving} alt="img" className="img-fluid" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section> */}
    </div>
  )
}

export default Support
