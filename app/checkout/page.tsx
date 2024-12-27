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
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left Column - Form */}
        <div className="flex-1 max-w-[700px]">
          <h1 className="text-2xl font-medium mb-6">How would you like to get your order?</h1>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.{' '}
            <Link href="#" className="text-black underline hover:no-underline">Learn More</Link>
          </p>

          <button className="w-full border border-gray-300 rounded-xl py-4 px-6 mb-10 flex items-center justify-center gap-3 hover:border-gray-400 transition-colors">
            <span className="text-xl">📦</span>
            <span className="font-medium">Deliver It</span>
          </button>

          <h2 className="text-xl font-medium mb-6">Enter your name and address:</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3.5 placeholder:text-gray-500 focus:outline-none focus:border-gray-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3.5 placeholder:text-gray-500 focus:outline-none focus:border-gray-500"
              />
            </div>
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full border border-gray-300 rounded-lg px-4 py-3.5 placeholder:text-gray-500 focus:outline-none focus:border-gray-500"
            />
            <p className="text-sm text-gray-500 -mt-2">We do not ship to P.O. boxes</p>
            <input
              type="text"
              placeholder="Address Line 2"
              className="w-full border border-gray-300 rounded-lg px-4 py-3.5 placeholder:text-gray-500 focus:outline-none focus:border-gray-500"
            />
            <input
              type="text"
              placeholder="Address Line 3"
              className="w-full border border-gray-300 rounded-lg px-4 py-3.5 placeholder:text-gray-500 focus:outline-none focus:border-gray-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="border border-gray-300 rounded-lg px-4 py-3.5 placeholder:text-gray-500 focus:outline-none focus:border-gray-500"
              />
              <input
                type="text"
                placeholder="Locality"
                className="border border-gray-300 rounded-lg px-4 py-3.5 placeholder:text-gray-500 focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <select className="border border-gray-300 rounded-lg px-4 py-3.5 text-gray-500 focus:outline-none focus:border-gray-500 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgNkw4IDEwTDEyIDYiIHN0cm9rZT0iIzZCNzI4MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+')] bg-no-repeat bg-[center_right_1rem]">
                <option>State/Territory</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-4 py-3.5 text-gray-500 focus:outline-none focus:border-gray-500 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgNkw4IDEwTDEyIDYiIHN0cm9rZT0iIzZCNzI4MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+')] bg-no-repeat bg-[center_right_1rem]">
                <option>India</option>
              </select>
            </div>

            <div className="space-y-3 pt-2">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={saveAddress}
                  onChange={(e) => setSaveAddress(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black"
                />
                <span className="text-sm">Save this address to my profile</span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferredAddress}
                  onChange={(e) => setPreferredAddress(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black"
                />
                <span className="text-sm">Make this my preferred address</span>
              </label>
            </div>

            <h2 className="text-xl font-medium pt-6 pb-4">What&apos;s your contact information?</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3.5 placeholder:text-gray-500 focus:outline-none focus:border-gray-500"
            />
            <p className="text-sm text-gray-500 -mt-2">A confirmation email will be sent after checkout.</p>
            
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3.5 placeholder:text-gray-500 focus:outline-none focus:border-gray-500"
            />
            <p className="text-sm text-gray-500 -mt-2">A carrier might contact you to confirm delivery.</p>

            <h2 className="text-xl font-medium pt-6 pb-4">What&apos;s your PAN?</h2>
            <input
              type="text"
              placeholder="PAN"
              className="w-full border border-gray-300 rounded-lg px-4 py-3.5 placeholder:text-gray-500 focus:outline-none focus:border-gray-500"
            />
            <p className="text-sm text-gray-500 -mt-2">Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>

            <label className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                checked={savePan}
                onChange={(e) => setSavePan(e.target.checked)}
                className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black"
              />
              <span className="text-sm">Save PAN details to Nike Profile</span>
            </label>

            <label className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded border-gray-300 text-black focus:ring-black"
              />
              <span className="text-sm leading-relaxed">I have read and consent to eShopWorld processing my information in accordance with the <Link href="#" className="text-black underline hover:no-underline">Privacy Statement</Link> and <Link href="#" className="text-black underline hover:no-underline">Cookie Policy</Link>. eShopWorld is a trusted Nike partner.</span>
            </label>

            <button className="w-full bg-black text-white text-lg font-medium py-4 rounded-full mt-8 hover:bg-gray-800 transition-colors">
              Continue
            </button>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className="w-full lg:w-[400px] bg-gray-50 p-8 rounded-xl h-fit">
          <h2 className="text-xl font-medium mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <p>Subtotal</p>
              <p>₹20,890.00</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Delivery/Shipping</p>
              <p>Free</p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between font-medium">
                <p>Total</p>
                <p>₹20,890.00</p>
              </div>
              <p className="text-xs text-gray-500 mt-2">(This total reflects the price of your order, including all duties and taxes)</p>
            </div>

            {/* Order Items */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm mb-6">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg relative">
                    <Image
                      src="/product-1.jpg"
                      alt="Nike Dri-FIT"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</p>
                    <p className="text-sm text-gray-500 mt-1">Qty: 1</p>
                    <p className="text-sm text-gray-500">Size: L</p>
                    <p className="font-medium text-sm mt-1">₹3,895.00</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg relative">
                    <Image
                      src="/product-2.jpg"
                      alt="Nike Air Max"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Nike Air Max 97 SE Men&apos;s Shoes</p>
                    <p className="text-sm text-gray-500 mt-1">Qty: 1</p>
                    <p className="text-sm text-gray-500">Size: UK 8</p>
                    <p className="font-medium text-sm mt-1">₹16,995.00</p>
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

