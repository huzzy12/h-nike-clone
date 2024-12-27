'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Trash2 } from 'lucide-react'

export default function CartPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Free Delivery Banner */}
      <div className="bg-gray-50 p-6 mb-10 rounded-xl">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-lg mb-1">Free Delivery</p>
            <p className="text-gray-600">Applies to orders of ₹14,000.00 or more.</p>
          </div>
          <Link href="#" className="text-black underline hover:no-underline">View details</Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Cart Items */}
        <div className="flex-1 max-w-[700px]">
          <h1 className="text-2xl font-medium mb-8">Bag</h1>
          
          {/* Product 1 */}
          <div className="border-b border-gray-200 pb-8 mb-8">
            <div className="flex gap-6">
              <div className="w-28 h-28 bg-gray-100 rounded-lg relative flex-shrink-0">
                <Image
                  src="/product-1.jpg"
                  alt="Nike Dri-FIT ADV TechKnit Ultra"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium mb-1">Nike Dri-FIT ADV TechKnit Ultra</h3>
                    <p className="text-gray-600 mb-1">Men&apos;s Short-Sleeve Running Top</p>
                    <p className="text-gray-600 mb-2">Ashen Slate/Cobalt Bliss</p>
                    <div className="flex gap-6">
                      <p className="text-sm">Size: L</p>
                      <p className="text-sm">Quantity: 1</p>
                    </div>
                  </div>
                  <p className="font-medium">₹3,895.00</p>
                </div>
                <div className="flex gap-6 mt-6">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                    <Heart size={20} strokeWidth={1.5} />
                    <span className="text-sm">Favourite</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                    <Trash2 size={20} strokeWidth={1.5} />
                    <span className="text-sm">Remove</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="border-b border-gray-200 pb-8 mb-8">
            <div className="flex gap-6">
              <div className="w-28 h-28 bg-gray-100 rounded-lg relative flex-shrink-0">
                <Image
                  src="/product-2.jpg"
                  alt="Nike Air Max 97 SE"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium mb-1">Nike Air Max 97 SE</h3>
                    <p className="text-gray-600 mb-1">Men&apos;s Shoes</p>
                    <p className="text-gray-600 mb-2">Flat Pewter/Light Bone/Black/White</p>
                    <div className="flex gap-6">
                      <p className="text-sm">Size: 8</p>
                      <p className="text-sm">Quantity: 1</p>
                    </div>
                  </div>
                  <p className="font-medium">₹16,995.00</p>
                </div>
                <div className="flex gap-6 mt-6">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                    <Heart size={20} strokeWidth={1.5} />
                    <span className="text-sm">Favourite</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                    <Trash2 size={20} strokeWidth={1.5} />
                    <span className="text-sm">Remove</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="w-full lg:w-[400px] bg-gray-50 p-8 rounded-xl h-fit">
          <h2 className="text-xl font-medium mb-6">Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <p>Subtotal</p>
              <p>₹20,890.00</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between font-medium">
                <p>Total</p>
                <p>₹20,890.00</p>
              </div>
            </div>
            <button className="w-full bg-black text-white font-medium text-lg py-4 rounded-full mt-4 hover:bg-gray-800 transition-colors">
              Member Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Favourites Section */}
      <div className="mt-16 mb-8">
        <h2 className="text-xl font-medium mb-4">Favourites</h2>
        <p className="text-gray-600">There are no items saved to your favourites.</p>
      </div>
    </div>
  )
}