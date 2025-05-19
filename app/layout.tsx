import Bootstrap from '@/components/bootstrap/Bootstrap'
import Preloader from '@/components/preloader/Preloader'
import HomeFilterOptions from '@/components/common/HomeFilterOptions'
// modal video
import 'node_modules/react-modal-video/scss/modal-video.scss'

// slick css
import 'slick-carousel/slick/slick.css'

// react-datepicker css
import 'react-datepicker/dist/react-datepicker.css'

// react range slider css
import 'react-range-slider-input/dist/style.css'

//main css
import '../styles/main.scss'

export const metadata = {
  title: 'Latcontecta - Recharge & Bill Payment',
  description: 'Recharge & Bill Payment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <>
          <Bootstrap>
            {/* Preloader */}
            <Preloader />
            {children}
          </Bootstrap>
        </>
      </body>
    </html>
  )
}
