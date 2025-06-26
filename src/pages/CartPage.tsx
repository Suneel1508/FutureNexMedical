import React from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice, getTotalItems } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-8" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any services to your cart yet.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Browse Our Services
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">
            {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Cart Items</h2>
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                        <p className="text-sm text-gray-500 mt-2">Category: {item.category}</p>
                      </div>
                      <div className="ml-6 text-right">
                        <p className="text-lg font-semibold text-gray-900">
                          {formatPrice(item.price)}
                        </p>
                        <p className="text-sm text-gray-500">per session</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-700">Quantity:</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-md border border-gray-300 hover:bg-gray-50"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-md border border-gray-300 hover:bg-gray-50"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-semibold text-gray-900">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-700 p-1"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/services"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">{formatPrice(getTotalPrice() * 0.08)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-gray-900">
                      {formatPrice(getTotalPrice() * 1.08)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors mb-3">
                Proceed to Checkout
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                Secure checkout powered by industry-leading encryption
              </p>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Have questions about our services? Our team is here to help.
                </p>
                <Link
                  to="/contact"
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Contact Support →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage