'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ChevronUp, Sliders } from 'lucide-react'
import { Product, allProducts, initialProducts, PRODUCTS_PER_PAGE } from './data'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isGenderOpen, setIsGenderOpen] = useState(false)
  const [isPriceOpen, setIsPriceOpen] = useState(false)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true)
  const [page, setPage] = useState(1)

  const handleLoadMore = () => {
    const nextPage = page + 1
    const nextProducts = allProducts.slice(0, nextPage * PRODUCTS_PER_PAGE)
    setProducts(nextProducts)
    setPage(nextPage)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const hasMore = products.length < allProducts.length

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          {/* New Section */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">New (30)</h2>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 mb-6">
            <Link href="#" className="block text-gray-600 hover:text-black">Swimming</Link>
            <Link href="#" className="block text-gray-600 hover:text-black">Socks</Link>
            <Link href="#" className="block text-gray-600 hover:text-black">Accessories & Equipment</Link>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <button 
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="w-full font-bold mb-2 flex items-center justify-between"
            >
              Categories
              {isCategoriesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isCategoriesOpen && (
              <div className="space-y-2">
                {[
                  "Men's Shoes",
                  "Women's Shoes",
                  "Men's Shorts",
                  "Women's Shorts",
                  "Men's Top",
                  "Women's Top",
                  "Kids"
                ].map((category) => (
                  <label key={category} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="rounded border-gray-300 cursor-pointer"
                    />
                    <span className="select-none">{category}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Gender */}
          <div className="mb-6">
            <button 
              onClick={() => setIsGenderOpen(!isGenderOpen)}
              className="w-full font-bold mb-2 flex items-center justify-between"
            >
              Gender
              {isGenderOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isGenderOpen && (
              <div className="space-y-2">
                {["Men", "Women", "Unisex"].map((gender) => (
                  <label key={gender} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 cursor-pointer"
                    />
                    <span className="select-none">{gender}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Shop By Price */}
          <div className="mb-6">
            <button 
              onClick={() => setIsPriceOpen(!isPriceOpen)}
              className="w-full font-bold mb-2 flex items-center justify-between"
            >
              Shop By Price
              {isPriceOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isPriceOpen && (
              <div className="space-y-2">
                {[
                  "Under ₹2,500",
                  "₹2,500-₹7,500",
                  "₹7,500-₹15,000",
                  "Over ₹15,000"
                ].map((range) => (
                  <label key={range} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 cursor-pointer"
                    />
                    <span className="select-none">{range}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1">
          {/* Filters and Sort */}
          <div className="flex justify-between items-center mb-6">
            <button className="flex items-center space-x-2 text-sm font-medium">
              <Sliders size={20} />
              <span>Filter</span>
            </button>
            <div className="flex items-center space-x-2 text-sm">
              <span>Sort By</span>
              <button className="flex items-center space-x-1 font-medium">
                <span>Featured</span>
                <ChevronDown size={20} />
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article key={product.id} className="space-y-2">
                <div className="aspect-square relative bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={product.id <= 4}
                  />
                  {product.justIn && (
                    <div className="absolute top-3 left-3 bg-white px-2 py-1 text-sm">
                      Just In
                    </div>
                  )}
                </div>
                <div className="flex justify-between">
                  <h3 className="font-medium">{product.name}</h3>
                  <span>₹{product.price.toLocaleString()}</span>
                </div>
                <p className="text-gray-600">{product.category}</p>
                <p className="text-gray-600">{product.colors} {product.colors === 1 ? 'Color' : 'Colors'}</p>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <button 
                onClick={handleLoadMore}
                className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-800"
              >
                Load More
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}