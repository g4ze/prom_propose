
// src/pages/memories.js
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Memories() {
  const memories = [
    {
      id: 1,
      title: "First Prom Prep",
      description: "Remember the nervous tie adjustments and corsage mishaps?",
      imageUrl: "/images/placeholder/400/300"
    },
    {
      id: 2,
      title: "The Grand Entrance",
      description: "When we showed up looking like movie stars (if movie stars tripped on the carpet)",
      imageUrl: "/images/placeholder/400/300"
    },
    {
      id: 3,
      title: "First Slow Dance",
      description: "When we tried to look cool while counting steps in our heads",
      imageUrl: "/images/placeholder/400/300"
    },
    {
      id: 4,
      title: "Photo Booth Chaos",
      description: "Four attempts to get one decent picture - worth it!",
      imageUrl: "/images/placeholder/400/300"
    },
    {
      id: 5,
      title: "After-Party Milkshakes",
      description: "Formal wear and fast food - an iconic combo",
      imageUrl: "/images/placeholder/400/300"
    }
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8">
      <Head>
        <title>Our Prom Memories | Prom Proposal 2.0</title>
        <meta name="description" content="Reliving our best prom moments" />
      </Head>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 mb-8">
          Our Greatest Hits: Prom Edition
        </h1>
        
        <p className="text-xl text-center text-indigo-700 mb-12">
          They say sequels need a good recap - here's our highlight reel!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {memories.map((memory) => (
            <div key={memory.id} className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="relative h-48 w-full">
                <Image 
                  src={memory.imageUrl}
                  alt={memory.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-purple-700 mb-2">{memory.title}</h3>
                <p className="text-gray-600">{memory.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/proposal" className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Ready to create new memories? &rarr;
          </Link>
        </div>
      </main>
      
      <footer className="mt-12 text-center">
        <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
          &larr; Back to Home
        </Link>
      </footer>
    </div>
  )
}