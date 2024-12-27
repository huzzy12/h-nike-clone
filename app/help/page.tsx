export default function HelpPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Main Content and Right Column Layout */}
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <div className="flex-1 max-w-[700px]">
          <h1 className="text-2xl font-medium mb-12 text-center lg:text-left">GET HELP</h1>
          
          {/* Search Section */}
          <div className="mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="What can we help you with?"
                className="w-full border border-gray-300 rounded-lg px-4 py-3.5 placeholder:text-gray-500 focus:outline-none focus:border-gray-500"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <span className="sr-only">Search</span>
                🔍
              </button>
            </div>
          </div>

          {/* Payment Options Section */}
          <div className="mb-12">
            <h2 className="text-xl font-medium mb-6">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
            <p className="mb-4 text-gray-600">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
            <ul className="space-y-2 mb-6 text-gray-600">
              <li>• Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
              <li>• If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.</li>
              <li>• Apple Pay</li>
            </ul>
            <p className="mb-6 text-gray-600">
              Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, 
              <a href="/join" className="text-black underline hover:no-underline ml-1">join us today</a>.
            </p>
            <div className="flex gap-4">
              <a href="/join" className="bg-black text-white px-8 py-2.5 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium">JOIN US</a>
              <a href="/shop" className="bg-white border border-gray-300 px-8 py-2.5 rounded-full hover:border-gray-400 transition-colors text-sm font-medium">SHOP NIKE</a>
            </div>
          </div>

          {/* FAQs Section */}
          <div>
            <h3 className="font-medium mb-6">FAQs</h3>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium mb-2">Does my card need international purchases enabled?</h4>
                <p className="text-gray-600">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Can I pay for my order with multiple methods?</h4>
                <p className="text-gray-600">No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">What payment method is accepted for SNKRS orders?</h4>
                <p className="text-gray-600">You can use any accepted credit card to pay for your SNKRS order.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Why don&apos;t I see Apple Pay as an option?</h4>
                <p className="text-gray-600">To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p>
              </div>
            </div>

            {/* Feedback Section */}
            <div className="mt-8">
              <p className="mb-4">Was this answer helpful?</p>
              <div className="flex gap-4">
                <button className="p-2.5 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">👍</button>
                <button className="p-2.5 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">👎</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Options */}
        <div className="w-full lg:w-[400px] space-y-12">
          <div>
            <div className="text-center lg:text-left">
              <h3 className="font-medium mb-3">CONTACT US</h3>
              <p className="text-gray-600 mb-1">000 800 919 0566</p>
              <p className="text-gray-600">Products & Orders: 24 hours a day, 7 days a week</p>
            </div>
          </div>
          <div>
            <div className="text-center lg:text-left">
              <h3 className="font-medium mb-3">CHAT WITH US</h3>
              <p className="text-gray-600">24 hours a day</p>
              <p className="text-gray-600">7 days a week</p>
            </div>
          </div>
          <div>
            <div className="text-center lg:text-left">
              <h3 className="font-medium mb-3">STORE LOCATOR</h3>
              <p className="text-gray-600">Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}