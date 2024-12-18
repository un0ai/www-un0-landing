import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'un0.ai - MLOps implementations for AI workers',
  description: 'Easy MLOps pipelines for AI agents and bots. Streamline your machine learning lifecycle with automated deployments, monitoring, and observability.',
  keywords: 'MLOps, AI, Machine Learning, CI/CD, Monitoring, Observability, Telemetry',
  authors: [{ name: 'un0.ai team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'un0.ai - MLOps implementations for AI workers',
    description: 'Easy MLOps pipelines for AI agents and bots',
    url: 'https://un0.ai',
    siteName: 'un0.ai',
    images: [
      {
        url: '/imgs/og-image.png',
        width: 1200,
        height: 630,
        alt: 'un0.ai platform preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'un0.ai - MLOps implementations for AI workers',
    description: 'Easy MLOps pipelines for AI agents and bots',
    images: ['/imgs/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-black min-h-screen antialiased`}>
        <div className="mx-auto max-w-[1920px] px-4">
          {children}
        </div>
      </body>
    </html>
  )
}
