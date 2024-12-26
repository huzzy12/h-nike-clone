export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">GET HELP</h1>
      
      {/* Search Section */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <span className="sr-only">Search</span>
            🔍
          </button>
        </div>
      </div>

      {/* Payment Options Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
        <p className="mb-4">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
        <ul className="space-y-2 mb-6">
          <li>• Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
          <li>• If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.</li>
          <li>• Apple Pay</li>
        </ul>
        <p className="mb-6">
          Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, 
          <a href="/join" className="underline ml-1">join us today</a>.
        </p>
        <div className="flex gap-4">
          <a href="/join" className="bg-black text-white px-6 py-2 rounded-full">JOIN US</a>
          <a href="/shop" className="bg-white border border-gray-300 px-6 py-2 rounded-full">SHOP NIKE</a>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="font-bold mb-4">FAQs</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold mb-2">Does my card need international purchases enabled?</h4>
            <p className="text-gray-600">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Can I pay for my order with multiple methods?</h4>
            <p className="text-gray-600">No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">What payment method is accepted for SNKRS orders?</h4>
            <p className="text-gray-600">You can use any accepted credit card to pay for your SNKRS order.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Why don&apos;t I see Apple Pay as an option?</h4>
            <p className="text-gray-600">To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-8">
          <p className="mb-4">Was this answer helpful?</p>
          <div className="flex gap-4">
            <button className="p-2 border rounded">👍</button>
            <button className="p-2 border rounded">👎</button>
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            📱
          </div>
          <h3 className="font-bold mb-2">CONTACT US</h3>
          <p className="text-gray-600 mb-2">000 800 919 0566</p>
          <p className="text-gray-600">Products & Orders: 24 hours a day, 7 days a week</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            💬
          </div>
          <h3 className="font-bold mb-2">CHAT WITH US</h3>
          <p className="text-gray-600">24 hours a day</p>
          <p className="text-gray-600">7 days a week</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            📍
          </div>
          <h3 className="font-bold mb-2">STORE LOCATOR</h3>
          <p className="text-gray-600">Find Nike retail stores near you</p>
        </div>
      </div>
    </div>
  )
}