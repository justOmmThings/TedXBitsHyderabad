import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./global.css"
import { config } from "@/data/config"
import Navigation from "@/components/NavigationBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = config.metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
