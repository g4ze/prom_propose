"use client"
import ImageSlidePresentation from '@/components/ImageSlidePresentation';

export default function PresentationPage() {
  const slides = [
    '/slides/1.png',
    '/slides/2.png',
    '/slides/3.png',
    '/slides/4.png',
    '/slides/5.png',
    '/slides/6.png',
    '/slides/7.png',
  ];

  return <ImageSlidePresentation slides={slides} />;
}