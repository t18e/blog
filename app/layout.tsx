import './globals.css'
import { JetBrains_Mono, Inter } from 'next/font/google'

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Guillermo Rauch Blog',
  description: 'Personal blog of Guillermo Rauch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${mono.variable}`}>{children}</body>
    </html>
  )
}

