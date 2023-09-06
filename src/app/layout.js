import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'One Stop IT Platform',
  description: 'Created by Vamsi Krishna Bhagi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
