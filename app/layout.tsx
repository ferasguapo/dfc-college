import '../styles/globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Decentralized Free College',
  description: 'Get your degree for free, powered by ads.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
