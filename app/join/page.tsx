import Link from 'next/link'
import Image from 'next/image'

export default function JoinPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-sm mx-auto text-center">
        <Image
          src="/nike.svg"
          alt="Nike"
          width={60}
          height={24}
          className="mx-auto mb-8"
        />
        <h1 className="text-2xl font-bold mb-8">BECOME A NIKE MEMBER</h1>
        <p className="text-gray-600 mb-8">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded-lg px-4 py-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full border rounded-lg px-4 py-3"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="date"
            placeholder="Date of Birth"
            className="w-full border rounded-lg px-4 py-3"
          />
          <p className="text-sm text-gray-600 text-left">
            Get a Nike Member Reward every year on your Birthday.
          </p>

          <select className="w-full border rounded-lg px-4 py-3">
            <option value="">India</option>
          </select>

          <div className="flex gap-4">
            <button className="flex-1 border rounded-lg px-4 py-3">Male</button>
            <button className="flex-1 border rounded-lg px-4 py-3">Female</button>
          </div>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span className="text-sm text-left">
              Sign up for emails to get updates from Nike on products, offers and your Member benefits
            </span>
          </label>

          <p className="text-sm text-gray-600 text-left">
            By creating an account, you agree to Nike&apos;s{' '}
            <Link href="/privacy" className="underline">Privacy Policy</Link>
            {' '}and{' '}
            <Link href="/terms" className="underline">Terms of Use</Link>.
          </p>

          <button className="w-full bg-black text-white py-3 rounded-full">
            JOIN US
          </button>
        </form>

        <p className="mt-8 text-sm">
          Already a Member?{' '}
          <Link href="/signin" className="underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}