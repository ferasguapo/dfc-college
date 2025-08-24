import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative w-full">
      {/* Hero section */}
      <div className="relative w-full h-[70vh]">
        {/* IMPORTANT: file is served from /public as /hero.jpg */}
        <Image
          src="/hero.jpg"
          alt="College students in a computer lab"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text on top of the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Welcome to Decentralized Free College
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Get your degree for free — powered by ads 🚀
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/about"
              className="px-5 py-2 rounded-lg bg-white/90 text-gray-900 font-semibold hover:bg-white"
            >
              About Us
            </Link>
            <Link
              href="/signin"
              className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
            >
              Current Students (Sign In)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
