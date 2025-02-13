import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head'
 

const ImageSlidePresentation = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8">
     <Head>
        <title>Our Prom Memories | Prom Proposal 2.0</title>
        <meta name="description" content="Reliving our best prom moments" />
      </Head>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 mb-8">
          Proposal Pitch Deck
        </h1>
        
        <p className="text-xl text-center text-indigo-700 mb-12">
          Make sure to evaluate this deal
        </p>
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <div className="relative w-full max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Slide content */}
        <div className="aspect-[16/9] relative bg-black">
          <div className="relative w-full h-full">
            <Image
              src={slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              priority={currentSlide === 0}
            />
          </div>
        </div>
        
        {/* Navigation controls */}
        <div className="flex items-center justify-between p-4 bg-gray-50">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <div className="text-gray-700">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </main>


    </div>
  );
};

export default ImageSlidePresentation;