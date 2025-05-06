import { Roboto } from 'next/font/google'
import './globals.css'
import Nav from '@/components/About/Navbar/Nav'

const inter = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ['latin'] })

export const metadata = {
  title: 'Story of Better',
  description: 'The details of Better EMart',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
