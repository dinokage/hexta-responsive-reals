import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/carousel/blockchain.jpg"
          alt="Technology background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-[500px] flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 max-w-2xl">
            Innovative IT & Engineering Solutions
          </h1>
          <p className="text-lg md:text-xl text-black dark:text-white mb-8 max-w-xl">
            HextaSphere delivers cutting-edge technology solutions to help businesses thrive 
            in today&apos;s digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/services" 
              className="px-8 py-3 bg-primary text-black dark:text-white rounded font-semibold hover:bg-opacity-90 transition"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-white text-primary rounded font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Connecting Lines (Abstract design element) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 flex justify-between px-8 opacity-60">
        {[1, 2, 3, 4, 5, 6].map((line) => (
          <div key={line} className="w-px h-full bg-white"></div>
        ))}
      </div>
    </section>
  )
}