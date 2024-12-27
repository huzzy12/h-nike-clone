'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ProductDetailPage() {
  const [selectedSize, setSelectedSize] = useState('')

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Product Images */}
      <div className="flex-1">
        <div className="relative aspect-square w-full max-w-xl bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src="/nike-air-force.jpg"
            alt="Nike Air Force 1 PLT.AF.ORM"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 space-y-6">
        <h1 className="text-3xl font-medium">Nike Air Force 1 PLT.AF.ORM</h1>
        <p className="text-2xl">₹8,695.00</p>
        
        <p className="text-gray-600 leading-relaxed">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid. 
          Its &ldquo;inside out&rdquo;-inspired construction, including unique layering and 
          exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. 
          Details like the deco stitching on the Swoosh add coveted appeal, while 
          the unexpected shading, rich mixture of materials and aged midsole 
          aesthetic give this release an artisan finish.
        </p>

        {/* Size Selection */}
        <div className="space-y-4">
          <h2 className="font-medium">Select Size</h2>
          <div className="grid grid-cols-3 gap-2">
            {['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border rounded-md py-3 text-center transition-colors
                  ${selectedSize === size
                    ? 'border-black'
                    : 'border-gray-300 hover:border-gray-400'
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  )
}