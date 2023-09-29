import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
 
export const metadata: Metadata = {
  title: 'Hellō Next.js Starter',
  description: 'Login and registration in seconds',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><link href="https://cdn.hello.coop/css/hello-btn.css" rel="stylesheet" /></head>
      <body>
        <Header/>
          <main className="py-10 px-4 text-center flex-1 overflow-auto">
              <div className="max-w-3xl mx-auto">
                  {children}
              </div>
          </main>
          <Footer/>
      </body>
    </html>
  )
}