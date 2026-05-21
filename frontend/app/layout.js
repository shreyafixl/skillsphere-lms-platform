
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/providers/ThemeProvider"

const geist = Geist({ subsets: ["latin"], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' });

export const metadata = {
  title: 'SkillSphere - Enterprise Learning Platform',
  description: 'The complete enterprise learning platform for employee onboarding, AI-powered training, and measurable skill development.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%237c3aed;stop-opacity:1' /><stop offset='100%' style='stop-color:%23a855f7;stop-opacity:1' /></linearGradient></defs><rect width='192' height='192' rx='48' fill='url(%23grad)'/><text x='96' y='132' font-size='110' font-weight='700' fill='white' text-anchor='middle' font-family='system-ui, -apple-system, sans-serif' letter-spacing='-2'>S</text></svg>",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    apple: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%237c3aed;stop-opacity:1' /><stop offset='100%' style='stop-color:%23a855f7;stop-opacity:1' /></linearGradient></defs><rect width='192' height='192' rx='48' fill='url(%23grad)'/><text x='96' y='132' font-size='110' font-weight='700' fill='white' text-anchor='middle' font-family='system-ui, -apple-system, sans-serif' letter-spacing='-2'>S</text></svg>",
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased transition-colors duration-300">
        <ThemeProvider>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
