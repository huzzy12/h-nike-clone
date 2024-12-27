import Image from "next/image";
import { ProductCard } from "@/components/product-card";

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
</main>
  );
}      