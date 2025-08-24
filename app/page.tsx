import Image from 'next/image'

export default function HomePage() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white">
      <Image 
        src="/hero.jpg" 
        alt="Students in computer lab" 
        fill 
        className="object-cover opacity-40" 
      />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Decentralized Free College</h1>
        <p className="mt-4 text-lg md:text-2xl">Get your degree for free 🚀</p>
      </div>
    </section>
  )
}
