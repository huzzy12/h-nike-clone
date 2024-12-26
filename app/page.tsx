import Image from "next/image";
import { ProductCard } from "@/components/product-card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative mb-16 px-8">
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="Nike Air Max Pulse"
            fill
            priority
            className="object-cover object-center scale-125"
          />
        </div>
        <div className="text-center mt-8 px-4">
          <p className="text-sm mb-2">First Look</p>
          <h1 className="text-5xl font-bold mb-4">NIKE AIR MAX PULSE</h1>
          <p className="text-black/600 mb-6 max-w-2xl mx-auto">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            - designed to push you past your limits and help you go to the max.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
              Notify Me
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
              Shop Air Max
            </button>
          </div>
        </div>
      </section>

      {/* Best of Air Max Section */}
      <section className="mb-16 px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best of Air Max</h2>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium">Shop</button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <span className="sr-only">View all</span>
              →
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ProductCard
            image="/air-max-pulse.png"
            name="Nike Air Max Pulse"
            price="₹ 13,995"
          />
          <ProductCard
            image="/air-max-pulse-2.png"
            name="Nike Air Max Pulse"
            price="₹ 13,995"
          />
          <ProductCard
            image="/air-max-pulse-97.png"
            name="Nike Air Max 97"
            price="₹ 16,995"
          />
        </div>
      </section>

      {/* Featured Section */}
      <section className="mb-16 px-8">
        <h2 className="text-2xl font-bold mb-6 px-8">Featured</h2>
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src="/featured.png"
            alt="Step into what feels good"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center mt-8 px-4">
          <h2 className="text-4xl font-bold mb-4">STEP INTO WHAT FEELS GOOD</h2>
          <p className="text-gray-900 mb-6">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
            Find Your Shoe
          </button>
        </div>
      </section>

      {/* Gear Up Section */}
      <section className="mb-16 px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Gear Up</h2>
          <div className="flex justify-between items-center w-full max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Shop Men&apos;s</span>
              <div className="flex gap-1">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <span className="sr-only">Previous</span>
                  &lt;
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <span className="sr-only">Next</span>
                  &gt;
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Shop Women&apos;s</span>
              <div className="flex gap-1">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <span className="sr-only">Previous</span>
                  &lt;
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <span className="sr-only">Next</span>
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <ProductCard
            image="/tshirt.png"
            name="Nike Dri-FIT ADV TechKnit Ultra"
            category="Men&apos;s Short-Sleeve Running Top"
            price="₹ 3,895"
          />
          <ProductCard
            image="/shorts.png"
            name="Nike Dri-FIT Challenger"
            category="Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts"
            price="₹ 2,495"
          />
          <ProductCard
            image="/jacket.png"
            name="Nike Dri-FIT ADV Run Division"
            category="Women&apos;s Long-Sleeve Running Top"
            price="₹ 5,295"
          />
          <ProductCard
            image="/pants.png"
            name="Nike Fast"
            category="Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets"
            price="₹ 3,795"
          />
        </div>
      </section>

      {/* Don't Miss Section */}
      <section className="mb-16 px-8">
        <h2 className="text-2xl font-bold mb-6">Don&apos;t Miss</h2>
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src="/dmiss-section.png"
            alt="Flight Essentials"
            width={1800}
            height={1600}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* The Essentials Section */}
      <section className="mb-16 px-8">
        <h2 className="text-2xl font-bold mb-6">The Essentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="relative overflow-hidden group">
            <Image
              src="/essentials-1.png"
              alt="Men&apos;s Essentials"
              width={400}
              height={400}
              className="w-full aspect-square object-cover"
            />
            <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 z-10 shadow-md">
              Men&apos;s
            </button>
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src="/essentials-2.png"
              alt="Women&apos;s Essentials"
              width={400}
              height={400}
              className="w-full aspect-square object-cover"
            />
            <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 z-10 shadow-md">
              Women&apos;s
            </button>
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src="/essentials-3.png"
              alt="Kids&apos; Essentials"
              width={400}
              height={400}
              className="w-full aspect-square object-cover"
            />
            <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 z-10 shadow-md">
              Kids&apos;
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Icons Column */}
          <div>
            <h3 className="text-sm font-medium mb-4">Icons</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><Link href="#" className="hover:text-black">Air Force 1</Link></li>
              <li><Link href="#" className="hover:text-black">Huarache</Link></li>
              <li><Link href="#" className="hover:text-black">Air Max 90</Link></li>
              <li><Link href="#" className="hover:text-black">Air Max 95</Link></li>
            </ul>
          </div>

          {/* Shoes Column */}
          <div>
            <h3 className="text-sm font-medium mb-4">Shoes</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><Link href="#" className="hover:text-black">All Shoes</Link></li>
              <li><Link href="#" className="hover:text-black">Custom Shoes</Link></li>
              <li><Link href="#" className="hover:text-black">Jordan Shoes</Link></li>
              <li><Link href="#" className="hover:text-black">Running Shoes</Link></li>
            </ul>
          </div>

          {/* Clothing Column */}
          <div>
            <h3 className="text-sm font-medium mb-4">Clothing</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><Link href="#" className="hover:text-black">All Clothing</Link></li>
              <li><Link href="#" className="hover:text-black">Modest Wear</Link></li>
              <li><Link href="#" className="hover:text-black">Hoodies & Pullovers</Link></li>
              <li><Link href="#" className="hover:text-black">Shirts & Tops</Link></li>
            </ul>
          </div>

          {/* Kids Column */}
          <div>
            <h3 className="text-sm font-medium mb-4">Kids&apos;</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><Link href="#" className="hover:text-black">Infant & Toddler Shoes</Link></li>
              <li><Link href="#" className="hover:text-black">Kids&apos; Shoes</Link></li>
              <li><Link href="#" className="hover:text-black">Kids&apos; Jordan Shoes</Link></li>
              <li><Link href="#" className="hover:text-black">Kids&apos; Basketball Shoes</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white">
        <div className="px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Help and About Sections */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <Link href="#" className="text-sm font-medium">FIND A STORE</Link>
                </div>
                <div>
                  <Link href="#" className="text-sm font-medium">BECOME A MEMBER</Link>
                </div>
                <div>
                  <Link href="#" className="text-sm font-medium">SIGN UP FOR EMAIL</Link>
                </div>
                <div>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">Send Us Feedback</Link>
                </div>
                <div>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">STUDENT DISCOUNTS</Link>
                </div>
              </div>

              {/* Middle Column */}
              <div>
                <h3 className="text-sm font-medium mb-4">GET HELP</h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li><Link href="#" className="hover:text-white">Order Status</Link></li>
                  <li><Link href="#" className="hover:text-white">Delivery</Link></li>
                  <li><Link href="#" className="hover:text-white">Returns</Link></li>
                  <li><Link href="#" className="hover:text-white">Payment Options</Link></li>
                  <li><Link href="#" className="hover:text-white">Contact Us On Nike.com Inquiries</Link></li>
                  <li><Link href="#" className="hover:text-white">Contact Us On All Other Inquiries</Link></li>
                </ul>
              </div>

              {/* Right Column */}
              <div>
                <h3 className="text-sm font-medium mb-4">ABOUT NIKE</h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li><Link href="#" className="hover:text-white">News</Link></li>
                  <li><Link href="#" className="hover:text-white">Careers</Link></li>
                  <li><Link href="#" className="hover:text-white">Investors</Link></li>
                  <li><Link href="#" className="hover:text-white">Sustainability</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="px-8 pb-8">
          <div className="flex justify-end gap-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415"/>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
