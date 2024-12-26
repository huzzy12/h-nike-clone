'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ProductDetailPage() {
  const [selectedSize, setSelectedSize] = useState('')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Images */}
        <div className="flex-1">
          <div className="aspect-square relative bg-gray-100 mb-4">
            <Image
              src="/nike-air-force-1.jpg"
              alt="Nike Air Force 1 PLT.AF.ORM"
              fill
              className="object-cover"
            />
          </div>
          {/* Additional product images would go here */}
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-96">
          <h1 className="text-3xl font-bold mb-2">Nike Air Force 1 PLT.AF.ORM</h1>
          <p className="mb-4">₹8,695.00</p>

          <p className="text-gray-600 mb-6">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
          </p>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-4">Select Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border rounded-md py-3 text-center ${
                    selectedSize === size
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
          <button className="w-full bg-black text-white py-4 rounded-full mb-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
