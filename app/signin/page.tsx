import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Student Sign In</h1>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <input type="text" placeholder="Email" className="w-full p-2 border mb-4" />
        <input type="password" placeholder="Password" className="w-full p-2 border mb-4" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Sign In</button>
      </form>
      <Link href="/my-college" className="mt-4 text-blue-500">Continue to My College</Link>
    </div>
  )
}
