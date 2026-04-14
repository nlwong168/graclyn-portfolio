import type { Metadata } from 'next'
import { ThemeProvider } from '@/context/ThemeContext'
import { BlobProvider } from '@/context/BlobContext'
import BlobBackground from '@/components/BlobBackground'
import Nav from '@/components/Nav'
import './globals.css'

export const metadata: Metadata = {
  title: 'Graclyn — Graphic Designer',
  description: 'Portfolio of Graclyn, graphic designer specializing in branding, identity, and visual systems.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <BlobProvider>
            <BlobBackground />
            <Nav />
            {children}
          </BlobProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
