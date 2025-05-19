import Footer from '@/components/footer/Footer'
import NavBar from '@/components/navBar/NavBar2'

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* NavBar Section Here  */}
      <NavBar />

      {children}

      {/* Footer Section Here  */}
      <Footer />
    </>
  )
}
