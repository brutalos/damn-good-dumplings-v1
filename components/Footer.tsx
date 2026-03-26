import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-red-600">DAMN</span>
              <span>GOOD DUMPLINGS</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Hand-crafted dumplings with authentic fillings and locally sourced ingredients. Made fresh in Vienna every single day.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><Link href="/menu" className="hover:text-red-500">Menu</Link></li>
              <li><Link href="/locations" className="hover:text-red-500">Locations</Link></li>
              <li><Link href="/about" className="hover:text-red-500">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Follow Us</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-red-500">Instagram</a></li>
              <li><a href="#" className="hover:text-red-500">Facebook</a></li>
              <li><a href="#" className="hover:text-red-500">TikTok</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Location</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Vienna, Austria<br />
              Wipplingerstraße 15<br />
              1010 Wien
            </p>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between text-zinc-600 text-xs gap-4">
          <p>© {new Date().getFullYear()} Damn Good Dumplings. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-zinc-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
