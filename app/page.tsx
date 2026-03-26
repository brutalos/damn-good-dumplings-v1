import Link from 'next/link'

const PRODUCTS = [
  {
    id: 'classic-pork',
    name: 'Classic Pork & Chive',
    description: 'Traditional dumplings with juicy pork and fresh chives.',
    price: 9.90,
    image: '/images/classic-pork.png',
  },
  {
    id: 'spicy-beef',
    name: 'Spicy Beef & Ginger',
    description: 'Hearty beef with a kick of ginger and chili.',
    price: 10.90,
    image: '/images/spicy-beef.png',
  },
  {
    id: 'chicken-teriyaki',
    name: 'Chicken Teriyaki',
    description: 'Tender chicken with sweet teriyaki sauce and spring onion.',
    price: 9.90,
    image: '/images/chicken-teriyaki.png',
  },
  {
    id: 'green-veggie',
    name: 'Green Veggie',
    description: 'Fresh spinach, tofu, and assorted vegetables.',
    price: 8.90,
    image: '/images/green-veggie.png',
  },
  {
    id: 'vegan-delight',
    name: 'Vegan Delight',
    description: 'Shiitake mushrooms and glass noodles in a savory vegan blend.',
    price: 8.90,
    image: '/images/vegan-delight.png',
  },
  {
    id: 'wakame-salad',
    name: 'Wakame Salad',
    description: 'Seaweed salad with sesame and rice vinegar.',
    price: 4.50,
    image: '/images/wakame.png',
  },
]

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/images/hero-dumplings.png" 
          alt="Damn Good Dumplings" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            <span className="text-red-600 italic">DAMN</span> GOOD<br />DUMPLINGS
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-10 font-medium">
            Hand-crafted soul food made fresh in Vienna every single day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#menu" 
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105"
            >
              ORDER NOW
            </Link>
            <Link 
              href="/locations" 
              className="bg-zinc-900/50 backdrop-blur-md border border-zinc-700 hover:bg-zinc-800 text-white px-10 py-4 rounded-full text-lg font-bold transition-all"
            >
              FIND US
            </Link>
          </div>
        </div>
      </section>

      {/* Product Listing */}
      <section id="menu" className="max-w-7xl mx-auto py-24 px-4">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR DUMPLINGS</h2>
            <p className="text-zinc-500 max-w-lg">
              Each dumpling is hand-folded with love and the best ingredients we can find.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/products/${product.id}`} className="block overflow-hidden rounded-2xl mb-6 aspect-square bg-zinc-900">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <span className="text-xl font-bold text-red-600">€{product.price.toFixed(2)}</span>
              </div>
              <p className="text-zinc-500 text-sm mb-6 line-clamp-2">
                {product.description}
              </p>
              <Link 
                href={`/products/${product.id}`}
                className="inline-block w-full text-center bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-white py-3 rounded-xl font-bold transition-all"
              >
                VIEW DETAILS
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-zinc-900 py-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <img 
              src="/images/logo.png" 
              alt="Ballroom" 
              className="w-48 h-48 object-contain mb-8 opacity-20 grayscale brightness-200"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">SOUL FOOD FROM VIENNA</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              We started with a simple idea: make the best dumplings in the world, right here in the heart of Vienna. No shortcuts, just authentic recipes and fresh local produce.
            </p>
            <Link 
              href="/about" 
              className="text-red-600 font-bold hover:text-red-500 transition-colors flex items-center gap-2"
            >
              LEARN OUR STORY <span>→</span>
            </Link>
          </div>
          <div className="flex-1 w-full h-[500px] rounded-3xl overflow-hidden">
            <img 
              src="/images/rice-bowl.png" 
              alt="Rice Bowl" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
