import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Forgebase - Documentation-First Backend Reference System',
  description: 'A documentation-first backend reference system and starter kit for building serious backend systems correctly. Validated in production via EduBro.',
  keywords: ['backend', 'documentation', 'architecture', 'starter kit', 'reference system', 'system design'],
  authors: [{ name: 'Forgebase' }],
  openGraph: {
    title: 'Forgebase',
    description: 'Documentation-first backend reference system',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
