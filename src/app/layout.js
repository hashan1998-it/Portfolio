import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Cursor from '@/components/layout/Cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hashan Sooriyage - Full Stack Developer',
  description: 'Portfolio of Hashan Sooriyage - BSc in Computing & Information Systems student, passionate about building innovative web applications.',
  keywords: 'Hashan Sooriyage, Full Stack Developer, React, Flutter, Laravel, Next.js',
  authors: [{ name: 'Hashan Sooriyage' }],
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen`}>
        <Providers>
          <Cursor />
          {children}
        </Providers>
      </body>
    </html>
  )
}