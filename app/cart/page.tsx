'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Trash2 } from 'lucide-react'

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Free Delivery Banner */}
      <div className="bg-gray-100 p-4 mb-8 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Free Delivery</p>
            <p className="text-sm text-gray-600">Applies to orders of ₹14,000.00 or more.</p>
          </div>
          <Link href="#" className="text-sm underline">View details</Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Bag</h1>
          
          {/* Product 1 */}
          <div className="border-b pb-6 mb-6">
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-gray-100 relative flex-shrink-0">
                <Image
                  src="/product-1.jpg"
                  alt="Nike Dri-FIT ADV TechKnit Ultra"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</h3>
                    <p className="text-gray-600">Men&apos;s Short-Sleeve Running Top</p>
                    <p className="text-gray-600">Ashen Slate/Cobalt Bliss</p>
                    <div className="flex gap-4 mt-2">
                      <p>Size: L</p>
                      <p>Quantity: 1</p>
                    </div>
                  </div>
                  <p className="font-medium">₹3,895.00</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <button className="flex items-center gap-2 text-gray-600">
                    <Heart size={20} />
                    <span>Favourite</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600">
                    <Trash2 size={20} />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="border-b pb-6 mb-6">
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-gray-100 relative flex-shrink-0">
                <Image
                  src="/product-2.jpg"
                  alt="Nike Air Max 97 SE"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">Nike Air Max 97 SE</h3>
                    <p className="text-gray-600">Men&apos;s Shoes</p>
                    <p className="text-gray-600">Flat Pewter/Light Bone/Black/White</p>
                    <div className="flex gap-4 mt-2">
                      <p>Size: 8</p>
                      <p>Quantity: 1</p>
                    </div>
                  </div>
                  <p className="font-medium">₹16,995.00</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <button className="flex items-center gap-2 text-gray-600">
                    <Heart size={20} />
                    <span>Favourite</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600">
                    <Trash2 size={20} />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="w-full lg:w-96">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>₹20,890.00</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold">
                <p>Total</p>
                <p>₹20,890.00</p>
              </div>
            </div>
            <button className="w-full bg-black text-white py-4 rounded-full font-medium">
              Member Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Favourites Section */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Favourites</h2>
        <p className="text-gray-600">There are no items saved to your favourites.</p>
      </div>
    </div>
  )
}