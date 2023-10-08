import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
  style: 'normal', // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ['latin']
 })

export const metadata = {
  title: 'SMIT Admin Portal',
  description: 'Designed and developed by Saqib Raza.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
