import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  image: string
  name: string
  price: string
  category?: string
}

export function ProductCard({ image, name, price, category }: ProductCardProps) {
  return (
    <Link href="#" className="group">
      <div className="aspect-square relative overflow-hidden bg-gray-100 mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-medium">{name}</h3>
        {category && <p className="text-gray-500 text-sm">{category}</p>}
        <p className="font-medium">{price}</p>
      </div>
    </Link>
  )
}