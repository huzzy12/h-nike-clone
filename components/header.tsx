'use client'

import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingBag, Heart } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <header>
      {/* Top Strip */}
      <div className="bg-gray-100 flex justify-between items-center px-8 py-2 text-xs">
        <Link href="/">
          <Image
            src="/jordan.svg"
            alt="Jordan"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </Link>
        <nav>
          <ul className="flex items-center space-x-4">
            <li><Link href="/store" className="hover:text-gray-600">Find a Store</Link></li>
            <li>|</li>
            <li><Link href="/help" className="hover:text-gray-600">Help</Link></li>
            <li>|</li>
            <li><Link href="/join" className="hover:text-gray-600">Join Us</Link></li>
            <li>|</li>
            <li><Link href="/signin" className="hover:text-gray-600">Sign In</Link></li>
          </ul>
        </nav>
      </div>

      {/* Main Nav */}
      <div className="flex items-center justify-between px-8 py-4">
        <Link href="/" className="mr-8">
          <Image
            src="/nike.svg"
            alt="Nike"
            width={60}
            height={24}
            className="w-[60px]"
          />
        </Link>
        <nav className="flex-1">
          <ul className="flex items-center space-x-8">
            <li><Link href="/new" className="font-medium hover:text-gray-600">New & Featured</Link></li>
            <li><Link href="/men" className="font-medium hover:text-gray-600">Men</Link></li>
            <li><Link href="/women" className="font-medium hover:text-gray-600">Women</Link></li>
            <li><Link href="/kids" className="font-medium hover:text-gray-600">Kids</Link></li>
            <li><Link href="/sale" className="font-medium hover:text-gray-600">Sale</Link></li>
            <li><Link href="/snkrs" className="font-medium hover:text-gray-600">SNKRS</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
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
        </div>
      </div>

      {/* App Notification - Only show on homepage */}
      {isHomePage && (
        <div className="bg-gray-100 py-2 text-center text-sm">
          <p>
            Hello Nike App
            <br />
            <span className="text-xs">
              Download the app to access everything Nike. <Link href="#" className="underline">Get Your Great</Link>
            </span>
          </p>
        </div>
      )}
    </header>
  )
}

