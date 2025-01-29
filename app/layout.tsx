import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "./context/CartContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nike Clone",
  description: "Nike Clone for Hackathon",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="flex flex-col min-h-screen"> {/* Add this wrapper div */}
            <Header />
            <main className="flex-grow"> {/* Add flex-grow to push footer down */}
              {children}
              <Analytics />
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
