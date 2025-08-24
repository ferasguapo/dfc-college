import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <Link href="/" className="font-bold text-xl">DFC</Link>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/signin">Current Students</Link>
      </div>
    </nav>
  )
}
