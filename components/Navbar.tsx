'use client'
import React, { useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-red-600">DAMN</span>
          <span>GOOD DUMPLINGS</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-zinc-400 text-sm font-medium">
          <Link href="/menu" className="hover:text-white transition-colors">MENU</Link>
          <Link href="/locations" className="hover:text-white transition-colors">LOCATIONS</Link>
          <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
          <Link href="/contact" className="hover:text-white transition-colors">CONTACT</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative p-2 text-zinc-400 hover:text-white transition-colors">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-900 py-4 px-4 space-y-4 shadow-xl`}>
        <Link href="/menu" className="block text-zinc-400 hover:text-white text-lg py-2">MENU</Link>
        <Link href="/locations" className="block text-zinc-400 hover:text-white text-lg py-2">LOCATIONS</Link>
        <Link href="/about" className="block text-zinc-400 hover:text-white text-lg py-2">ABOUT</Link>
        <Link href="/contact" className="block text-zinc-400 hover:text-white text-lg py-2">CONTACT</Link>
      </div>
    </nav>
  )
}
