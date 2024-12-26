import Link from "next/link"
import Image from "next/image"

export function TopHeader() {
  return (
    <div className="bg-gray-100 flex justify-between items-center px-8 py-2 text-xs">
      <Link href="/">
        <Image
          src="/air-jordan-logo.svg"
          alt="Jordan"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </Link>
      <nav>
        <ul className="flex items-center space-x-4">
          <li><Link href="/store" className="hover:text-gray-600">Find a Store</Link></li>
          <li>|</li>
          <li><Link href="/help" className="hover:text-gray-600">Help</Link></li>
          <li>|</li>
          <li><Link href="/join" className="hover:text-gray-600">Join Us</Link></li>
          <li>|</li>
          <li><Link href="/signin" className="hover:text-gray-600">Sign In</Link></li>
        </ul>
      </nav>
    </div>
  )
}

