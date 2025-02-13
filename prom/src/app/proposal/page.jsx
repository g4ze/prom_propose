// src/app/proposal/page.jsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import FloatingElements from '@/components/FloatingElements'
export default function Proposal() {
  const [answered, setAnswered] = useState(false)
  
  const handleYes = () => {
    setAnswered(true)
    // Trigger confetti effect
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    })
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 px-4 py-8 relative overflow-hidden">
      <Script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js" />
      
      {/* Add the floating elements */}
      <FloatingElements />
      
      <main className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Will You Go To Prom With Me...
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-indigo-600 mb-10">
          One More Time?
        </h2>
        
        {!answered ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <div className="relative w-full h-64 sm:h-80 md:h-96 mb-6 rounded-xl overflow-hidden">
              <Image 
                src="/images/us-at-prom.jpg"
                alt="Us at our first prom"
                fill
                className="object-cover"
              />
            </div>
            
            <p className="text-xl text-center text-gray-700 max-w-2xl mb-8">
              They say lightning doesn't strike twice - but they clearly haven't seen us on the dance floor.
              Let's show them how a sequel can be even better than the original!
            </p>
            
            <button 
              onClick={handleYes} 
              className="text-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              YES! Let's do it again!
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">AWESOME! ROUND TWO IS ON!</h2>
            <p className="text-xl text-center text-gray-700 mb-8">
              Get ready for Prom: The Sequel - with 100% more inside jokes, 
              50% better dance moves, and 200% more fun!
            </p>
            <div className="max-w-xl mx-auto bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">My Prom 2.0 Promises:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>To be on time (or at least fashionably late)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>To remember which wrist the corsage goes on</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>To request at least one embarrassingly cheesy slow song</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>To make sure we get even better photos than last time</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>
      
      <footer className="mt-16 text-center text-gray-500 relative z-10">
        <p>The best sequels always have better special effects and more heart</p>
        <Link href="/" className="block mt-4 text-indigo-500 hover:text-indigo-700 transition-colors">
          &larr; Back to Home
        </Link>
      </footer>
    </div>
  )
}