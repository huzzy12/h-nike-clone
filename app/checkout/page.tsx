'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function CheckoutPage() {
  const [saveAddress, setSaveAddress] = useState(false)
  const [preferredAddress, setPreferredAddress] = useState(false)
  const [savePan, setSavePan] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Form */}
        <div className="flex-1">
          <h1 className="text-2xl mb-6">How would you like to get your order?</h1>
          <p className="text-sm text-gray-600 mb-6">
            Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.{' '}
            <Link href="#" className="underline">Learn More</Link>
          </p>

          <button className="w-full border rounded-lg py-4 px-6 mb-8 flex items-center justify-center gap-2">
            <span className="text-xl">📦</span>
            Deliver It
          </button>

          <h2 className="text-xl mb-4">Enter your name and address:</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border rounded-lg px-4 py-3"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border rounded-lg px-4 py-3"
            />
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full border rounded-lg px-4 py-3"
            />
            <p className="text-sm text-gray-600">We do not ship to P.O. boxes</p>
            <input
              type="text"
              placeholder="Address Line 2"
              className="w-full border rounded-lg px-4 py-3"
            />
            <input
              type="text"
              placeholder="Address Line 3"
              className="w-full border rounded-lg px-4 py-3"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="border rounded-lg px-4 py-3"
              />
              <input
                type="text"
                placeholder="Locality"
                className="border rounded-lg px-4 py-3"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <select className="border rounded-lg px-4 py-3">
                <option>State/Territory</option>
              </select>
              <select className="border rounded-lg px-4 py-3">
                <option>India</option>
              </select>
            </div>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={saveAddress}
                onChange={(e) => setSaveAddress(e.target.checked)}
                className="rounded"
              />
              <span>Save this address to my profile</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={preferredAddress}
                onChange={(e) => setPreferredAddress(e.target.checked)}
                className="rounded"
              />
              <span>Make this my preferred address</span>
            </label>

            <h2 className="text-xl pt-4">What&apos;s your contact information?</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-3"
            />
            <p className="text-sm text-gray-600">A confirmation email will be sent after checkout.</p>
            
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-3"
            />
            <p className="text-sm text-gray-600">A carrier might contact you to confirm delivery.</p>

            <h2 className="text-xl pt-4">What&apos;s your PAN?</h2>
            <input
              type="text"
              placeholder="PAN"
              className="w-full border rounded-lg px-4 py-3"
            />
            <p className="text-sm text-gray-600">Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={savePan}
                onChange={(e) => setSavePan(e.target.checked)}
                className="rounded"
              />
              <span>Save PAN details to Nike Profile</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="rounded"
              />
              <span>I have read and consent to eShopWorld processing my information in accordance with the <Link href="#" className="underline">Privacy Statement</Link> and <Link href="#" className="underline">Cookie Policy</Link>. eShopWorld is a trusted Nike partner.</span>
            </label>

            <button className="w-full bg-black text-white py-4 rounded-full">
              Continue
            </button>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className="w-full lg:w-96">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>₹20,890.00</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery/Shipping</p>
              <p>Free</p>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold">
                <p>Total</p>
                <p>₹20,890.00</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">(This total reflects the price of your order, including all duties and taxes)</p>
            </div>

            {/* Order Items */}
            <div className="border-t pt-4">
              <p className="mb-4">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-100 relative">
                    <Image
                      src="/product-1.jpg"
                      alt="Nike Dri-FIT"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</p>
                    <p className="text-sm text-gray-600">Qty: 1</p>
                    <p className="text-sm text-gray-600">Size: L</p>
                    <p className="font-medium">₹3,895.00</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-100 relative">
                    <Image
                      src="/product-2.jpg"
                      alt="Nike Air Max"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Nike Air Max 97 SE Men&apos;s Shoes</p>
                    <p className="text-sm text-gray-600">Qty: 1</p>
                    <p className="text-sm text-gray-600">Size: UK 8</p>
                    <p className="font-medium">₹16,995.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

