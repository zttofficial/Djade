import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DJade - Decentralized Jade Asset Platform",
  description: "A decentralized platform for tokenizing jade assets on the blockchain",
  icons: {
    icon: [
      {
        url: "/images/djade-logo.png",
        href: "/images/djade-logo.png",
      },
    ],
    shortcut: "/images/djade-logo.png",
    apple: "/images/djade-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

