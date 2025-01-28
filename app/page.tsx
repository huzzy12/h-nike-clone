'use client'

import { useState, useEffect } from 'react';
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from 'lucide-react';

// Assuming ProductCard component is defined elsewhere
const ProductCard = ({ image, name, price, category }: { image: string; name: string; price: string; category?: string }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <Image src={image || "/placeholder.svg"} alt={name} width={200} height={200} className="w-full object-contain" />
    <h3 className="text-lg font-medium mt-2">{name}</h3>
    {category && <p className="text-sm text-gray-500">{category}</p>}
    <p className="text-lg font-bold mt-1">{price}</p>
  </div>
)

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex flex-col min-h-screen relative">
      {/* Hero Section */}
      <section className="relative mb-8 sm:mb-16">
        <div className="aspect-[4/3] sm:aspect-[16/9] relative overflow-hidden">
          <Image src="/hero.jpg" alt="Nike Air Max Pulse" fill priority className="object-cover object-center" />
        </div>
        <div className="text-center mt-4 sm:mt-8 px-4 sm:px-8">
          <p className="text-sm mb-2">First Look</p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4">NIKE AIR MAX PULSE</h1>
          <p className="text-black/600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse - designed to push you past your
            limits and help you go to the max.
          </p>
          <div className="flex justify-center gap-2 sm:gap-4">
            <button className="bg-black text-white px-4 sm:px-6 py-2 rounded-full hover:bg-gray-800 text-sm sm:text-base">
              Notify Me
            </button>
            <button className="bg-black text-white px-4 sm:px-6 py-2 rounded-full hover:bg-gray-800 text-sm sm:text-base">
              Shop Air Max
            </button>
          </div>
        </div>
      </section>

      {/* Best of Air Max Section */}
      <section className="mb-8 sm:mb-16 px-4 sm:px-8">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">Best of Air Max</h2>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="text-sm font-medium">Shop</button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <span className="sr-only">View all</span>→
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
          <ProductCard image="/air-max-pulse.png" name="Nike Air Max Pulse" price="₹ 13,995" />
          <ProductCard image="/air-max-pulse-2.png" name="Nike Air Max Pulse" price="₹ 13,995" />
          <ProductCard image="/air-max-pulse-97.png" name="Nike Air Max 97" price="₹ 16,995" />
        </div>
      </section>

      {/* Featured Section */}
      <section className="mb-8 sm:mb-16 px-4 sm:px-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Featured</h2>
        <div className="aspect-[4/3] sm:aspect-[16/9] relative overflow-hidden">
          <Image src="/featured.png" alt="Step into what feels good" fill className="object-cover" />
        </div>
        <div className="text-center mt-4 sm:mt-8 px-4">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">STEP INTO WHAT FEELS GOOD</h2>
          <p className="text-gray-900 mb-4 sm:mb-6 text-sm sm:text-base">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <Link href="/products">
            <button className="bg-black text-white px-4 sm:px-6 py-2 rounded-full hover:bg-gray-800 text-sm sm:text-base">
              Shop All Products
            </button>
          </Link>
        </div>
      </section>

      {/* Gear Up Section */}
      <section className="mb-8 sm:mb-16 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">Gear Up</h2>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full sm:max-w-2xl gap-2 sm:gap-4">
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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
      <section className="mb-8 sm:mb-16 px-4 sm:px-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Don&apos;t Miss</h2>
        <div className="aspect-[4/3] sm:aspect-[16/9] relative overflow-hidden">
          <Image src="/dmiss-section.png" alt="Flight Essentials" fill className="object-cover" />
        </div>
      </section>

      {/* The Essentials Section */}
      <section className="mb-8 sm:mb-16 px-4 sm:px-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">The Essentials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="relative overflow-hidden group">
            <Image
              src="/essentials-1.png"
              alt="Men's Essentials"
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
              alt="Women's Essentials"
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
              alt="Kids' Essentials"
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

      {/* Floating Shop All Button */}
      {showButton && (
        <Link href="/products">
          <button 
            className="fixed bottom-6 right-6 bg-black text-white px-4 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-all z-50 flex items-center gap-2 animate-fade-in"
            style={{
              animation: 'fadeIn 0.3s ease-in-out',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="font-medium">Shop All</span>
          </button>
        </Link>
      )}
    </main>
  )
}
