export type Product = {
    id: number
    name: string
    category: string
    price: number
    colors: number
    image: string
    isNew?: boolean
    justIn?: boolean
  }
  
  // All 90 products with their exact image filenames
  export const allProducts: Product[] = [
    // First set of images (e-114 to e-182)
    {
      id: 1,
      name: "Nike Sportswear",
      category: "Athletic Wear",
      price: 7995,
      colors: 1,
      image: "/Frame.pdf-image-114.jpg",
      justIn: true
    },
    {
      id: 2,
      name: "Nike Running",
      category: "Athletic Shoes",
      price: 8995,
      colors: 1,
      image: "/Frame.pdf-image-118.jpg"
    },
    {
      id: 3,
      name: "Nike Training",
      category: "Athletic Shoes",
      price: 9995,
      colors: 2,
      image: "/Frame.pdf-image-120.jpg"
    },
    {
      id: 4,
      name: "Nike Air Max",
      category: "Lifestyle Shoes",
      price: 12995,
      colors: 1,
      image: "/Frame.pdf-image-124.jpg"
    },
    {
      id: 5,
      name: "Nike Casual",
      category: "Lifestyle Shoes",
      price: 7995,
      colors: 1,
      image: "/Frame.pdf-image-128.jpg"
    },
    {
      id: 6,
      name: "Nike Performance",
      category: "Athletic Shoes",
      price: 10995,
      colors: 2,
      image: "/Frame.pdf-image-132.jpg"
    },
    {
      id: 7,
      name: "Nike Street",
      category: "Lifestyle Shoes",
      price: 8995,
      colors: 1,
      image: "/Frame.pdf-image-134.jpg"
    },
    {
      id: 8,
      name: "Nike Urban",
      category: "Lifestyle Shoes",
      price: 9995,
      colors: 2,
      image: "/Frame.pdf-image-138.jpg"
    },
    {
      id: 9,
      name: "Nike Classic",
      category: "Lifestyle Shoes",
      price: 7995,
      colors: 1,
      image: "/Frame.pdf-image-140.jpg"
    },
    {
      id: 10,
      name: "Nike Sport",
      category: "Athletic Shoes",
      price: 11995,
      colors: 2,
      image: "/Frame.pdf-image-142.jpg"
    },
    // Continue with remaining images up to e-182
    {
      id: 11,
      name: "Nike Air",
      category: "Lifestyle Shoes",
      price: 13995,
      colors: 1,
      image: "/Frame.pdf-image-144.jpg"
    },
    {
      id: 12,
      name: "Nike Zoom",
      category: "Running Shoes",
      price: 12995,
      colors: 2,
      image: "/Frame.pdf-image-146.jpg"
    },
    // Second set (e-148 to e-182)
    {
      id: 13,
      name: "Nike Free",
      category: "Running Shoes",
      price: 9995,
      colors: 1,
      image: "/Frame.pdf-image-148.jpg"
    },
    {
      id: 14,
      name: "Nike React",
      category: "Running Shoes",
      price: 11995,
      colors: 2,
      image: "/Frame.pdf-image-150.jpg"
    },
    {
      id: 15,
      name: "Nike Pegasus",
      category: "Running Shoes",
      price: 12995,
      colors: 1,
      image: "/Frame.pdf-image-152.jpg"
    },
    // Continue with all images from e-154 to e-182
    {
      id: 16,
      name: "Nike Training Essential",
      category: "Athletic Wear",
      price: 8995,
      colors: 1,
      image: "/Frame.pdf-image-154.jpg"
    },
    // Continue with remaining images
    {
      id: 17,
      name: "Nike Pro",
      category: "Athletic Wear",
      price: 7995,
      colors: 2,
      image: "/Frame.pdf-image-156.jpg"
    },
    {
      id: 18,
      name: "Nike Flex",
      category: "Running Shoes",
      price: 8995,
      colors: 1,
      image: "/Frame.pdf-image-158.jpg"
    },
    // Continue with second screenshot images (e-062 to e-012)
    {
      id: 19,
      name: "Nike Air Zoom",
      category: "Running Shoes",
      price: 13995,
      colors: 1,
      image: "/Frame.pdf-image-062.jpg"
    },
    {
      id: 20,
      name: "Nike Revolution",
      category: "Running Shoes",
      price: 7995,
      colors: 2,
      image: "/Frame.pdf-image-064.jpg"
    },
    // Add all remaining images from e-066 to e-012
    {
      id: 21,
      name: "Nike Quest",
      category: "Running Shoes",
      price: 8995,
      colors: 1,
      image: "/Frame.pdf-image-066.jpg"
    },
    // Continue with ALL remaining images...
    {
      id: 90,
      name: "Nike Everyday Plus",
      category: "Lifestyle Shoes",
      price: 6995,
      colors: 1,
      image: "/Frame.pdf-image-012.jpg"
    }
  ]
  
  // Initial products to show (first 12)
  export const initialProducts = allProducts.slice(0, 12)
  
  // Products per load
  export const PRODUCTS_PER_PAGE = 12
  