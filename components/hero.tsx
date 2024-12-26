import Image from "next/image"

export function Hero() {
  return (
    <div className="relative">
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src="/nike-air-max-pulse.jpg"
          alt="Nike Air Max Pulse"
          width={1600}
          height={900}
          className="object-cover w-full"
          priority
        />
      </div>
      <div className="text-center mt-8 mb-16">
        <div className="text-sm mb-2">First Look</div>
        <h1 className="text-6xl font-medium">Nike Air Max Pulse</h1>
      </div>
    </div>
  )
}

