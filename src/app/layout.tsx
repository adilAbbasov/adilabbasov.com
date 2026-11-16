import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Adil Abbasov — Full-Stack .NET Developer',
  description:
    'Portfolio of Adil Abbasov, Full-Stack .NET Developer based in Baku, Azerbaijan. Specializing in ASP.NET Core, microservices, and enterprise systems.',
  keywords: ['.NET', 'ASP.NET Core', 'Full-Stack Developer', 'Baku', 'Azerbaijan', 'React', 'Angular'],
  authors: [{ name: 'Adil Abbasov' }],
  openGraph: {
    title: 'Adil Abbasov — Full-Stack .NET Developer',
    description: 'Portfolio of Adil Abbasov, Full-Stack .NET Developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#111827] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
