'use client'
import React, { useState } from 'react'
import { ShoppingCart, Check } from 'lucide-react'

interface AddToCartButtonProps {
  productId: string
  productName: string
  price: number
}

export default function AddToCartButton({ productId, productName, price }: AddToCartButtonProps) {
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    // In a real app, this would use a cart context/store
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`w-full flex items-center justify-center gap-3 py-4 rounded-full font-bold text-lg transition-all transform active:scale-95 ${
        added 
          ? 'bg-green-600 text-white cursor-default' 
          : 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-900/40'
      }`}
    >
      {added ? (
        <>
          <Check className="w-6 h-6" />
          ADDED TO CART
        </>
      ) : (
        <>
          <ShoppingCart className="w-6 h-6" />
          ADD TO CART — €{price.toFixed(2)}
        </>
      )}
    </button>
  )
}
