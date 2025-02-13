"use client"
import Head from 'next/head'
import Link from 'next/link'
import { CountdownTimer } from '@/components/CountdownTimer'
import FloatingElements from '@/components/FloatingElements'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react'
import { Heart, Moon } from 'lucide-react'

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [isValentinesTheme, setIsValentinesTheme] = useState(false);
  const [targetDate, setTargetDate] = useState("2024-02-14T00:00:00");

  const toggleTheme = () => {
    setIsValentinesTheme(!isValentinesTheme);
    setTargetDate(isValentinesTheme ? "2024-02-14T00:00:00" : "2024-02-15T00:00:00");
  };

  // Theme-based style classes
  const bgClass = isValentinesTheme 
    ? "min-h-screen bg-gradient-to-br from-pink-50 to-red-50 py-8" 
    : "min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8";
  
  const headingGradient = isValentinesTheme
    ? "bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent"
    : "bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent";
  
  const subtitleColor = isValentinesTheme
    ? "text-rose-700"
    : "text-indigo-700";

  return (
    <div className={bgClass}>
      <div className="absolute top-4 right-4 z-10">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
          aria-label="Toggle theme"
        >
          {isValentinesTheme ? (
            <Moon className="w-6 h-6 text-indigo-600" />
          ) : (
            <Heart className="w-6 h-6 text-rose-600" />
          )}
        </button>
      </div>
      
      <Head>
        <title>{isValentinesTheme ? "Valentine's Proposal | Be Mine Again?" : "Prom 2.0: The Sequel | Will You Go With Me Again?"}</title>
        <meta name="description" content="Making great memories even better" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!showMainContent ? (
        <Swiper onSlideChange={(swiper) => {
          if (swiper.isEnd) setShowMainContent(true);
        }}>
          <SwiperSlide className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className={`text-4xl md:text-5xl font-bold ${headingGradient}`}>
              {isValentinesTheme ? "Will You Be My Valentine?" : "Welcome to Prom 2.0!"}
            </h1>
            <p className={`mt-6 text-lg md:text-xl text-gray-700`}>
              {isValentinesTheme 
                ? "Because one day of love is never enough..." 
                : "Because the first time was amazing, we're doing it again!"}
            </p>
          </SwiperSlide>
          
          <SwiperSlide className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className={`text-4xl md:text-5xl font-bold ${isValentinesTheme ? "bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent" : "bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent"}`}>
              {isValentinesTheme ? "Heart-Racing Moments Ahead!" : "New Surprises Await!"}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700">
              {isValentinesTheme
                ? "More romance, more love, and unforgettable moments together."
                : "More magic, more fun, and even better memories."}
            </p>
          </SwiperSlide>
          
          <SwiperSlide className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className={`text-4xl md:text-5xl font-bold ${isValentinesTheme ? "bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent" : "bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent"} animate-pulse`}>
              Ready?
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700">
              Swipe one last time to enter the experience.
            </p>
          </SwiperSlide>
        </Swiper>
      ) : (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FloatingElements />
        <h1 className={`text-5xl font-extrabold text-center ${headingGradient}`}>
          {isValentinesTheme ? "Be My Valentine Again" : "Prom 2.0: The Sequel"}
        </h1>
        
        <p className={`mt-4 text-xl text-center ${subtitleColor}`}>
          {isValentinesTheme
            ? "Because our hearts beat as one, let's celebrate our love again!"
            : "Because the first time was so good, we're doing an encore!"}
        </p>

        <CountdownTimer key={targetDate} targetDate={targetDate} />

        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className={`text-2xl font-bold text-center ${isValentinesTheme ? "text-rose-700" : "text-purple-700"} mb-6`}>
            {isValentinesTheme ? "Valentine's Day Upgrades" : "Prom Sequel Upgrades"}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4 items-center mb-6">
            <div className={`${isValentinesTheme ? "bg-red-100" : "bg-purple-100"} p-4 rounded-lg`}>
              <h3 className={`font-bold ${isValentinesTheme ? "text-red-800" : "text-purple-800"}`}>Last Time</h3>
              <p>Regular planning required</p>
            </div>
            <div className="flex justify-center items-center">
              <span className={`text-2xl font-bold ${isValentinesTheme ? "text-rose-500" : "text-indigo-500"}`}>VS</span>
            </div>
            <div className={`${isValentinesTheme ? "bg-pink-100" : "bg-indigo-100"} p-4 rounded-lg`}>
              <h3 className={`font-bold ${isValentinesTheme ? "text-pink-800" : "text-indigo-800"}`}>This Time</h3>
              <p>No planning, highly optimised (it's a feature)</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 items-center mb-6">
            <div className={`${isValentinesTheme ? "bg-red-100" : "bg-purple-100"} p-4 rounded-lg`}>
              <h3 className={`font-bold ${isValentinesTheme ? "text-red-800" : "text-purple-800"}`}>Last Time</h3>
              <p>{isValentinesTheme ? "Regular romance" : "Regular dance moves"}</p>
            </div>
            <div className="flex justify-center items-center">
              <span className={`text-2xl font-bold ${isValentinesTheme ? "text-rose-500" : "text-indigo-500"}`}>VS</span>
            </div>
            <div className={`${isValentinesTheme ? "bg-pink-100" : "bg-indigo-100"} p-4 rounded-lg`}>
              <h3 className={`font-bold ${isValentinesTheme ? "text-pink-800" : "text-indigo-800"}`}>This Time</h3>
              <p>{isValentinesTheme 
                ? "Romance that will make Hollywood jealous" 
                : "Dance moves that will go viral (for good reasons, we'll make a reel ;) )"}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 items-center">
            <div className={`${isValentinesTheme ? "bg-red-100" : "bg-purple-100"} p-4 rounded-lg`}>
              <h3 className={`font-bold ${isValentinesTheme ? "text-red-800" : "text-purple-800"}`}>Last Time</h3>
              <p>Standard memories</p>
            </div>
            <div className="flex justify-center items-center">
              <span className={`text-2xl font-bold ${isValentinesTheme ? "text-rose-500" : "text-indigo-500"}`}>VS</span>
            </div>
            <div className={`${isValentinesTheme ? "bg-pink-100" : "bg-indigo-100"} p-4 rounded-lg`}>
              <h3 className={`font-bold ${isValentinesTheme ? "text-pink-800" : "text-indigo-800"}`}>This Time</h3>
              <p>Ultra HD, slow-motion worthy memories</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Link href="/presentation" className="transform transition-all duration-300 hover:scale-105">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-6">
                <h2 className={`text-xl font-semibold ${isValentinesTheme ? "text-rose-700" : "text-purple-700"} mb-2`}>
                  Why me? &rarr;
                </h2>
                <p className="text-gray-600">A small presentation</p>
              </div>
            </div>
          </Link>

          <Link href="/quiz" className="transform transition-all duration-300 hover:scale-105">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-6">
                <h2 className={`text-xl font-semibold ${isValentinesTheme ? "text-rose-700" : "text-purple-700"} mb-2`}>
                  {isValentinesTheme ? "Love Compatibility Quiz" : "Compatibility Quiz 2.0"} &rarr;
                </h2>
                <p className="text-gray-600">
                  {isValentinesTheme 
                    ? "Spoiler: We're 100% perfect valentines" 
                    : "Spoiler: We're 100% perfect for another prom"}
                </p>
              </div>
            </div>
          </Link>

          <Link href="/proposal" className="transform transition-all duration-300 hover:scale-105">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-6">
                <h2 className={`text-xl font-semibold ${isValentinesTheme ? "text-rose-700" : "text-purple-700"} mb-2`}>
                  The Epic {isValentinesTheme ? "Valentine's" : "Prom"} Proposal &rarr;
                </h2>
                <p className="text-gray-600">
                  {isValentinesTheme 
                    ? "Because saying 'I love you' once is never enough..." 
                    : "Because saying yes once wasn't enough..."}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>
      )}
    </div>
  )
}