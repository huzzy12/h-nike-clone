'use client'

import Link from 'next/link';
import Image from 'next/image';
import { client, urlFor } from '@/sanity/lib/client';
import { useCart } from '@/app/context/CartContext';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface Product {
  _id: string;
  productName: string;
  description: string;
  price: number;
  category: string;
  status: string;
  isNewArrival: boolean;
  image: string;
}

function ProductsContent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const categoryFilter = searchParams.get('category') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "product"]{
            _id,
            productName,
            description,
            price,
            category,
            status,
            isNewArrival,
            "image": image.asset._ref
          }
        `);
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Your existing filter logic...
    if (categoryFilter) {
      filtered = filtered.filter((product) => {
        const categoryLower = product.category?.toLowerCase() || '';
        
        switch (categoryFilter.toLowerCase()) {
          case 'new':
            return product.isNewArrival;
          case 'men':
            return categoryLower.includes('men') && !categoryLower.includes('women');
          case 'women':
            return categoryLower.includes('women');
          case 'kids':
            return categoryLower.includes('kids');
          case 'sale':
            return product.status?.toLowerCase() === 'sale';
          case 'snkrs':
            return categoryLower.includes('shoes') || 
                   categoryLower.includes('sneakers');
          default:
            return true;
        }
      });
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  }, [searchQuery, categoryFilter, products]);
 
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {categoryFilter 
            ? `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Products` 
            : 'All Products'}
        </h1>
        {filteredProducts.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No products found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product._id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link href={`/products/${product._id}`}>
                  <div className="relative aspect-square">
                    <Image
                      src={urlFor(product.image).width(400).height(400).url()}
                      alt={product.productName}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h2 className="text-lg font-medium text-gray-900 mb-1">
                        {product.productName}
                      </h2>
                      <span className="text-sm font-medium text-gray-500">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">
                        ${product.price}
                      </span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        product.status === 'In Stock' 
                          ? 'bg-green-100 text-green-800'
                          : product.status === 'Sale'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-4 pt-0">
                  <button
                    onClick={() => addToCart({
                      _id: product._id,
                      productName: product.productName,
                      price: product.price,
                      image: product.image,
                      quantity: 1
                    })}
                    className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading products...</div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
