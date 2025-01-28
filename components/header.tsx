"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingBag, Heart, Menu } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useState, FormEvent } from "react"
import { useCart } from "@/app/context/CartContext"

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { cart } = useCart()

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      router.push('/products')
    }
    setIsMenuOpen(false)
  }

  const handleCategoryClick = (category: string) => {
    router.push(`/products?category=${category.toLowerCase()}`)
    setIsMenuOpen(false)
  }

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
        <Link href="/products" className="hover:text-gray-600">
               Shop All
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
              <button
                onClick={() => handleCategoryClick('new')}
                className="font-medium hover:text-gray-600"
              >
                New & Featured
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick('men')}
                className="font-medium hover:text-gray-600"
              >
                Men
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick('women')}
                className="font-medium hover:text-gray-600"
              >
                Women
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick('kids')}
                className="font-medium hover:text-gray-600"
              >
                Kids
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick('sale')}
                className="font-medium hover:text-gray-600"
              >
                Sale
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick('snkrs')}
                className="font-medium hover:text-gray-600"
              >
                SNKRS
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 w-40 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </form>
          </div>
          <button className="hover:text-gray-600">
            <Heart className="w-6 h-6" />
            <span className="sr-only">Favorites</span>
          </button>
          
          <Link href="/cart" className="hover:text-gray-600 relative">
            <ShoppingBag className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
            <span className="sr-only">Bag Items</span>
          </Link>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
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
                <button
                  onClick={() => handleCategoryClick('new')}
                  className="block w-full text-left py-2 hover:bg-gray-100"
                >
                  New & Featured
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('men')}
                  className="block w-full text-left py-2 hover:bg-gray-100"
                >
                  Men
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('women')}
                  className="block w-full text-left py-2 hover:bg-gray-100"
                >
                  Women
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('kids')}
                  className="block w-full text-left py-2 hover:bg-gray-100"
                >
                  Kids
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('sale')}
                  className="block w-full text-left py-2 hover:bg-gray-100"
                >
                  Sale
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('snkrs')}
                  className="block w-full text-left py-2 hover:bg-gray-100"
                >
                  SNKRS
                </button>
              </li>
            </ul>
          </nav>
          <div className="px-4 py-2">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </form>
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
