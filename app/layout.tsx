import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import './globals.css'
 
export const metadata: Metadata = {
  title: 'Hellō NEXT.js Starter',
  description: 'Auth in seconds',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><link href="https://cdn.hello.coop/css/hello-btn.css" rel="stylesheet" /></head>
      <body>{children}</body>
    </html>
  )
}