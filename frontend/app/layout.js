
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: 'SkillSphere - Enterprise Learning Platform',
  description: 'The complete enterprise learning platform for employee onboarding, AI-powered training, and measurable skill development.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gradient-to-br from-violet-100 via-fuchsia-50 to-amber-50">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production'}
      </body>
    </html>
  )
}
