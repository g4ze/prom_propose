"use client"
import Head from 'next/head'
import Link from 'next/link'
import { CountdownTimer } from '@/components/CountdownTimer'
import FloatingElements from '@/components/FloatingElements'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react'

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8">
      
      <Head>
        <title>Prom 2.0: The Sequel | Will You Go With Me Again?</title>
        <meta name="description" content="Making great memories even better" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!showMainContent ? (
        <Swiper onSlideChange={(swiper) => {
          if (swiper.isEnd) setShowMainContent(true);
        }}>
          <SwiperSlide className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Welcome to Prom 2.0!
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700">
              Because the first time was amazing, we're doing it again!
            </p>
          </SwiperSlide>
          
          <SwiperSlide className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              New Surprises Await!
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700">
              More magic, more fun, and even better memories.
            </p>
          </SwiperSlide>
          
          <SwiperSlide className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent animate-pulse">
              Ready?
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700">
              Swipe one last time to enter the experience.
            </p>
          </SwiperSlide>
        </Swiper>
      ):(
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <FloatingElements />
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
          Prom 2.0: The Sequel
        </h1>
        
        <p className="mt-4 text-xl text-center text-indigo-700">
          Because the first time was so good, we're doing an encore!
        </p>

        <CountdownTimer targetDate="2023-05-15T18:00:00" />

        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Prom Sequel Upgrades</h2>
          
          <div className="grid md:grid-cols-3 gap-4 items-center mb-6">
            <div className="bg-purple-100 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800">Last Time</h3>
              <p>Regular corsage</p>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-2xl font-bold text-indigo-500">VS</span>
            </div>
            <div className="bg-indigo-100 p-4 rounded-lg">
              <h3 className="font-bold text-indigo-800">This Time</h3>
              <p>Corsage that never wilts (just like our connection)</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 items-center mb-6">
            <div className="bg-purple-100 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800">Last Time</h3>
              <p>Regular dance moves</p>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-2xl font-bold text-indigo-500">VS</span>
            </div>
            <div className="bg-indigo-100 p-4 rounded-lg">
              <h3 className="font-bold text-indigo-800">This Time</h3>
              <p>Dance moves that will go viral (for good reasons)</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 items-center">
            <div className="bg-purple-100 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800">Last Time</h3>
              <p>Standard memories</p>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-2xl font-bold text-indigo-500">VS</span>
            </div>
            <div className="bg-indigo-100 p-4 rounded-lg">
              <h3 className="font-bold text-indigo-800">This Time</h3>
              <p>Ultra HD, slow-motion worthy memories</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Link href="/memories" className="transform transition-all duration-300 hover:scale-105">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-2">Our Best Moments &rarr;</h2>
                <p className="text-gray-600">A highlight reel of our greatest hits</p>
              </div>
            </div>
          </Link>

          <Link href="/quiz" className="transform transition-all duration-300 hover:scale-105">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-2">Compatibility Quiz 2.0 &rarr;</h2>
                <p className="text-gray-600">Spoiler: We're 100% perfect for another prom</p>
              </div>
            </div>
          </Link>

          <Link href="/proposal" className="transform transition-all duration-300 hover:scale-105">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-2">The Epic Proposal &rarr;</h2>
                <p className="text-gray-600">Because saying yes once wasn't enough...</p>
              </div>
            </div>
          </Link>
        </div>
      </main>

      )}
      )
    </div>
  )
}