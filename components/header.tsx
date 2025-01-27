"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingBag, Heart, Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative">
      {/* Top Strip */}
      <div className="bg-gray-100 flex justify-between items-center px-4 sm:px-8 py-2 text-xs">
        <Link href="/">
          <Image src="/jordan.svg" alt="Jordan" width={24} height={24} className="w-6 h-6" />
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/store" className="hover:text-gray-600">
                Find a Store
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link href="/help" className="hover:text-gray-600">
                Help
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link href="/join" className="hover:text-gray-600">
                Join Us
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link href="/signin" className="hover:text-gray-600">
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Nav */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
        <Link href="/" className="mr-4 sm:mr-8">
          <Image src="/nike.svg" alt="Nike" width={60} height={24} className="w-[60px]" />
        </Link>
        <nav className="hidden md:block flex-1">
          <ul className="flex items-center space-x-4 sm:space-x-8">
            <li>
              <Link href="/new" className="font-medium hover:text-gray-600">
                New & Featured
              </Link>
            </li>
            <li>
              <Link href="/men" className="font-medium hover:text-gray-600">
                Men
              </Link>
            </li>
            <li>
              <Link href="/women" className="font-medium hover:text-gray-600">
                Women
              </Link>
            </li>
            <li>
              <Link href="/kids" className="font-medium hover:text-gray-600">
                Kids
              </Link>
            </li>
            <li>
              <Link href="/sale" className="font-medium hover:text-gray-600">
                Sale
              </Link>
            </li>
            <li>
              <Link href="/snkrs" className="font-medium hover:text-gray-600">
                SNKRS
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="search"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 w-40 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
          <button className="hover:text-gray-600">
            <Heart className="w-6 h-6" />
            <span className="sr-only">Favorites</span>
          </button>
          <button className="hover:text-gray-600">
            <ShoppingBag className="w-6 h-6" />
            <span className="sr-only">Bag Items</span>
          </button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white z-50 border-t border-gray-200">
          <nav className="px-4 py-2">
            <ul className="space-y-2">
              <li>
                <Link href="/new" className="block py-2 hover:bg-gray-100">
                  New & Featured
                </Link>
              </li>
              <li>
                <Link href="/men" className="block py-2 hover:bg-gray-100">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/women" className="block py-2 hover:bg-gray-100">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/kids" className="block py-2 hover:bg-gray-100">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/sale" className="block py-2 hover:bg-gray-100">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/snkrs" className="block py-2 hover:bg-gray-100">
                  SNKRS
                </Link>
              </li>
            </ul>
          </nav>
          <div className="px-4 py-2">
            <input
              type="search"
              placeholder="Search"
              className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
        </div>
      )}

      {/* App Notification - Only show on homepage */}
      {isHomePage && (
        <div className="bg-gray-100 py-2 text-center text-sm">
          <p>
            Hello Nike App
            <br />
            <span className="text-xs">
              Download the app to access everything Nike.{" "}
              <Link href="#" className="underline">
                Get Your Great
              </Link>
            </span>
          </p>
        </div>
      )}
    </header>
  )
}

