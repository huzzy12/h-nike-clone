'use client'

import { useCart } from '@/app/context/CartContext';
import { client, urlFor } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Product {
  _id: string;
  productName: string;
  description: string;
  price: number;
  category: string;
  inventory: number;
  colors: string[];
  status: string;
  image: string;
}

interface CartItem {
  _id: string;
  productName: string;
  price: number;
  image: string;
  quantity: number;
}

type ProductClientProps = {
  id: string;
};

export default function ProductClient({ id }: ProductClientProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product" && _id == $id][0]{
          _id,
          productName,
          description,
          price,
          category,
          inventory,
          colors,
          status,
          "image": image.asset._ref
        }`;

        const data: Product = await client.fetch(query, { id });
        
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setIsLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);

  if (isLoading) return <div className="container mx-auto px-4 py-8">Loading...</div>;
  if (!product) return <div className="container mx-auto px-4 py-8">Product not found</div>;

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      _id: product._id,
      productName: product.productName,
      price: product.price,
      image: product.image,
      quantity: quantity
    };
    addToCart(cartItem);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/products" className="text-blue-500 hover:underline mb-8 inline-block">
        ← Back to Products
      </Link>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={urlFor(product.image).width(500).height(500).url()}
            alt={product.productName}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
          <p className="text-xl font-bold mb-4">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="space-y-4 mb-6">
            {product.category && (
              <div>
                <h3 className="font-semibold">Category:</h3>
                <p>{product.category}</p>
              </div>
            )}
            
            {product.status && (
              <div>
                <h3 className="font-semibold">Status:</h3>
                <p>{product.status}</p>
              </div>
            )}
            
            {product.inventory > 0 && (
              <div>
                <h3 className="font-semibold">Inventory:</h3>
                <p>{product.inventory} units available</p>
              </div>
            )}
            
            {product.colors?.length > 0 && (
              <div>
                <h3 className="font-semibold">Available Colors:</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <span key={color} className="px-3 py-1 bg-gray-100 rounded">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="font-medium">Quantity:</label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border rounded-md px-2 py-1"
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}