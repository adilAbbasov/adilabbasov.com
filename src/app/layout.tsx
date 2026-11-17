import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MotionProvider from '@/components/ui/MotionProvider'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://adilabbasov.com'),
  title: 'Adil Abbasov — Backend .NET Developer',
  description:
    'Adil Abbasov is a Backend .NET Developer in Baku, Azerbaijan, building secure, large-scale systems with C#, ASP.NET Core, microservices and event-driven architecture.',
  keywords: [
    'Backend Developer',
    '.NET Developer',
    'C#',
    'ASP.NET Core',
    'Microservices',
    'PostgreSQL',
    'Oracle',
    'RabbitMQ',
    'Kafka',
    'Baku',
    'Azerbaijan',
  ],
  authors: [{ name: 'Adil Abbasov' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Adil Abbasov — Backend .NET Developer',
    description:
      'Backend .NET Developer building secure, large-scale systems with C#, ASP.NET Core and modern .NET.',
    url: 'https://adilabbasov.com',
    siteName: 'Adil Abbasov',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="bg-[#111827] text-white antialiased">
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
