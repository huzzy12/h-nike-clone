import Link from 'next/link'
import Image from 'next/image'

export default function SignInPage() {
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
        <h1 className="text-2xl font-bold mb-2">YOUR ACCOUNT</h1>
        <h2 className="text-2xl font-bold mb-8">FOR EVERYTHING NIKE</h2>

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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Keep me signed in</span>
            </label>
            <Link href="/forgot-password" className="text-gray-600 hover:text-black">
              Forgotten your password?
            </Link>
          </div>

          <p className="text-sm text-gray-600 text-left">
            By logging in, you agree to Nike&apos;s{' '}
            <Link href="/privacy" className="underline">Privacy Policy</Link>
            {' '}and{' '}
            <Link href="/terms" className="underline">Terms of Use</Link>.
          </p>

          <button className="w-full bg-black text-white py-3">
            SIGN IN
          </button>
        </form>

        <p className="mt-8 text-sm">
          Not a Member?{' '}
          <Link href="/join" className="underline">
            Join Us
          </Link>
        </p>
      </div>
    </div>
  )
}
