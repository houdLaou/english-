import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'ESI QuizAI - AI-Powered Quiz Generation',
  description: 'An AI-powered quiz generation prototype showcasing how artificial intelligence can support education. A project by ESI students.',
}

export const viewport: Viewport = {
  themeColor: '#1a6fb5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${_inter.variable} ${_spaceGrotesk.variable} font-sans antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  )
}
