import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Kasa | homePage',
  description: 'Kasa Home page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
          <Navbar />
          <main className='w-full mx-auto px-4 lg:w-[1240px] '>
            {children}
          </main>
          <Footer />
      </body>
    </html>
  )
}
